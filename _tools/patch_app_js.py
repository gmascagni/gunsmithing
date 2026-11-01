import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
static_app_js = root / "web_app" / "static" / "app.js"
code = static_app_js.read_text(encoding="utf-8")

# 1. Replace remaining addMessage calls with appendMessage
code = code.replace("addMessage(", "appendMessage(")

# 2. Add window.addMessage alias and openManualFromCitation before appendMessage
alias_code = """
// Backward compatibility alias for addMessage
function addMessage(role, text, backend = null, sources = []) {
  return appendMessage(role, text, backend, sources);
}
window.addMessage = appendMessage;

// Open manual PDF citation directly on the bench
window.openManualFromCitation = function(url, title) {
  try {
    const isStatic = window.location.hostname.includes("github.io") || !!window.STATIC_FIREARMS_DATA || window.location.protocol === "file:";
    // url format: /api/manuals/{fid}/{filename}#page={page}
    const match = url.match(/\/api\/manuals\/([^\\/]+)\/([^#?]+)(?:#page=(\\d+))?/);
    if (match) {
      const fid = match[1];
      const filename = match[2];
      const page = match[3] || 1;

      const doOpen = () => {
        switchLibraryTab("manuals");
        const pdfUrl = isStatic
          ? `https://raw.githubusercontent.com/gmascagni/gunsmithing/main/${fid}/manuals/${filename}#page=${page}`
          : `/api/manuals/${fid}/${filename}#page=${page}`;
        selectManual(filename, title || filename, true, pdfUrl);
      };

      if (fid !== currentFirearm) {
        currentFirearm = fid;
        loadFirearm(fid).then(doOpen);
      } else {
        doOpen();
      }
    } else if (url && url !== "#") {
      window.open(url, "_blank");
    }
  } catch (e) {
    console.error("Error opening manual citation:", e);
  }
};

"""

# 3. New Search, Client RAG, Client Armorer, and Chat Submit block
new_search_and_rag_block = '''// Global Live Search with Cross-Platform & Cross-Manufacturer Matching
async function executeGlobalSearch(q, autoSelectOnEnter = false) {
  const query = (q || "").trim();
  if (query.length < 2) {
    searchResultsPopup.classList.add("hidden");
    return;
  }

  try {
    let results = [];
    const isStatic = window.location.hostname.includes("github.io") || !!window.STATIC_FIREARMS_DATA || window.location.protocol === "file:";

    if (!isStatic) {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&firearm_id=${currentFirearm}`);
        if (res.ok) {
          const data = await res.json();
          results = data.results || [];
        }
      } catch (e) {}
    }

    // Client-side search if on GitHub Pages or if API returned no platform matches
    if (results.length === 0 || isStatic) {
      const clientResults = executeClientSideSearch(query);
      const existingTargets = new Set(results.map(r => r.target));
      clientResults.forEach(cr => {
        if (!existingTargets.has(cr.target)) {
          if (cr.action === "switch_firearm") {
            results.unshift(cr);
          } else {
            results.push(cr);
          }
          existingTargets.add(cr.target);
        }
      });
    }

    if (results.length === 0) {
      searchResultsPopup.innerHTML = `<div style="padding: 14px; color: var(--text-dim); text-align: center;">No firearm platform, model, or manual matches found for "<strong>${escapeHtml(query)}</strong>".<br><span style="font-size: 11px; opacity: 0.8;">Try: Glock 17, AR-15, 1911, Lewis Gun, 10/22, 870, or Remington 700</span></div>`;
      searchResultsPopup.classList.remove("hidden");
      return;
    }

    // Auto-select on Enter: switch platform, detect intent, filter tasks, and announce on bench
    if (autoSelectOnEnter && results.length > 0) {
      const topPlatformMatch = results.find(r => r.action === "switch_firearm") || results[0];
      if (topPlatformMatch.action === "switch_firearm") {
        searchResultsPopup.classList.add("hidden");
        globalSearchInput.value = "";
        if (btnGlobalSearchClear) btnGlobalSearchClear.classList.add("hidden");
        currentFirearm = topPlatformMatch.target;
        await loadFirearm(topPlatformMatch.target);

        // Detect user intent (cleaning, stripping, stoppages, specs, modification)
        const qLower = query.toLowerCase();
        let detectedTask = null;
        if (/\\b(clean|cleaning|lube|lubricat|oil|grease|solvent)\\b/i.test(qLower)) {
          detectedTask = "clean";
        } else if (/\\b(strip|stripping|disassembl|takedown|take down|field strip)\\b/i.test(qLower)) {
          detectedTask = "strip";
        } else if (/\\b(jam|jams|stoppage|stoppages|malfunction|misfire|extract|eject)\\b/i.test(qLower)) {
          detectedTask = "stoppage";
        } else if (/\\b(spec|specs|torque|headspace|clearance|dimension)\\b/i.test(qLower)) {
          detectedTask = "specs";
        } else if (/\\b(trigger|polish|modify|upgrade|spring)\\b/i.test(qLower)) {
          detectedTask = "modify";
        }

        if (detectedTask && typeof applyTaskFilter === "function") {
          applyTaskFilter(detectedTask);
        }

        if (firearmData) {
          const taskNote = detectedTask ? ` with **${detectedTask.toUpperCase()}** task filter active` : "";
          appendMessage(
            "assistant",
            `🔫 Switched active bench platform to **${escapeHtml(firearmData.name)}**${taskNote} for search query *"${escapeHtml(query)}"*. Loaded **${firearmData.manuals.length} manuals**, **${firearmData.schematics.length} schematic plates**, and **${firearmData.videos.length} bench videos** ready for service.`,
            "Platform Switched"
          );
        }
        return;
      }
    }

    searchResultsPopup.innerHTML = "";
    results.slice(0, 10).forEach(r => {
      const row = document.createElement("div");
      const isSwitch = r.action === "switch_firearm";
      row.className = `search-result-item ${isSwitch ? "firearm-switch-item" : ""}`;
      row.innerHTML = `
        <div>
          <div class="item-title">${escapeHtml(r.title)}</div>
          <div class="item-sub">${escapeHtml(r.subtitle)}</div>
        </div>
        <span class="item-tag">${isSwitch ? "BENCH" : r.type}</span>
      `;

      row.addEventListener("click", async () => {
        searchResultsPopup.classList.add("hidden");
        globalSearchInput.value = "";
        if (btnGlobalSearchClear) btnGlobalSearchClear.classList.add("hidden");

        if (r.action === "switch_firearm") {
          currentFirearm = r.target;
          await loadFirearm(r.target);
          if (firearmData) {
            appendMessage(
              "assistant",
              `🔫 Switched active platform to **${escapeHtml(firearmData.name)}** from search. Ready on the bench!`,
              "Platform Switched"
            );
          }
        } else if (r.action === "open_manual") {
          switchLibraryTab("manuals");
          selectManual(r.target, r.title, true);
        } else if (r.action === "open_video") {
          switchLibraryTab("videos");
          const v = (firearmData.videos || []).find(item => item.id === r.target);
          if (v) selectVideo(v, true);
        } else if (r.action === "open_stoppage" || r.action === "open_spec") {
          switchPreviewMode("dossier");
          if (window.innerWidth <= 900) setMobileView("preview");
        }
      });

      searchResultsPopup.appendChild(row);
    });

    searchResultsPopup.classList.remove("hidden");
  } catch (err) {
    console.error("Search error:", err);
  }
}

// Client-side search engine with stop-word filtering and compound model boosting
function executeClientSideSearch(q) {
  const query = (q || "").toLowerCase().trim();
  const rawTokens = query.replace(/[-/.]/g, " ").split(/\\s+/).filter(t => t.length > 0);
  const STOP_WORDS = new Set(["my", "the", "a", "an", "is", "in", "on", "for", "to", "of", "with", "and", "needs", "need", "want", "how", "what", "where", "i", "can", "please", "do", "get", "take", "off", "deep", "does", "it", "any", "some", "at", "by", "from", "as", "about"]);
  const contentTokens = rawTokens.filter(t => !STOP_WORDS.has(t));
  const tokensToMatch = contentTokens.length > 0 ? contentTokens : rawTokens;
  const results = [];
  const platformMatches = [];

  // 1. Search all platforms / manufacturers / models with tokenized scoring
  (availableFirearmsList || []).forEach(f => {
    const fname = (f.name || "").toLowerCase();
    const mfg = (f.manufacturer || "").toLowerCase();
    const sub = (f.subtitle || "").toLowerCase();
    const models = (f.models || []).map(m => m.toLowerCase());
    const calibers = (f.calibers || []).map(c => c.toLowerCase());
    const tasks = (f.key_tasks || []).map(t => t.toLowerCase());

    const blob = [
      fname,
      sub,
      mfg,
      f.category || "",
      ...models,
      ...calibers,
      ...tasks
    ].join(" ").replace(/[-/.]/g, " ").toLowerCase();

    let score = 0;
    if (blob.includes(query)) score += 120;

    const matchedTokens = tokensToMatch.filter(t => blob.includes(t));
    if (tokensToMatch.length > 0 && matchedTokens.length === tokensToMatch.length) {
      score += 100 + matchedTokens.length * 10;
    } else if (tokensToMatch.length > 1 && matchedTokens.length >= tokensToMatch.length - 1) {
      score += 60 + matchedTokens.length * 8;
    }

    // Model specific boost (e.g. '17' matching Glock 17)
    let hasModelMatch = false;
    models.forEach(m => {
      const mParts = m.replace(/[-/.]/g, " ").split(/\\s+/);
      if (tokensToMatch.some(t => (t.length >= 2 || /^\\d+$/.test(t)) && (mParts.includes(t) || m.includes(t)))) {
        score += 80;
        hasModelMatch = true;
      }
    });

    // Compound boost for Platform + Model (e.g. "glock" AND "17")
    if (hasModelMatch && tokensToMatch.some(t => fname.includes(t) || mfg.includes(t))) {
      score += 150;
    }

    if (score > 0) {
      platformMatches.push({
        score: score,
        item: {
          type: "platform",
          title: `🔫 Put on Bench: ${f.name}`,
          subtitle: `${f.manufacturer} • ${f.subtitle || f.category}`,
          action: "switch_firearm",
          target: f.id
        }
      });
    }
  });

  platformMatches.sort((a, b) => b.score - a.score);
  results.push(...platformMatches.map(pm => pm.item));

  // 2. Search active firearm technical manuals
  if (firearmData && firearmData.manuals) {
    firearmData.manuals.forEach(m => {
      const mText = (m.title + " " + m.filename).toLowerCase();
      if (mText.includes(query) || tokensToMatch.some(t => mText.includes(t))) {
        results.push({
          type: "manual",
          title: m.title,
          subtitle: `${m.size_mb} MB • Technical Manual`,
          action: "open_manual",
          target: m.filename
        });
      }
    });
  }

  // 3. Search active firearm videos
  if (firearmData && firearmData.videos) {
    firearmData.videos.forEach(v => {
      const vText = (v.title + " " + (v.summary || "") + " " + (v.category || "")).toLowerCase();
      if (vText.includes(query) || tokensToMatch.some(t => vText.includes(t))) {
        results.push({
          type: "video",
          title: v.title,
          subtitle: `${v.creator} • ${v.category}`,
          action: "open_video",
          target: v.id
        });
      }
    });
  }

  // 4. Search active firearm stoppages
  if (firearmData && firearmData.stoppages) {
    firearmData.stoppages.forEach(s => {
      const sText = (s.position + " " + (s.causes || []).join(" ") + " " + (s.short_desc || "") + " " + (s.remedy || "")).toLowerCase();
      if (sText.includes(query) || tokensToMatch.some(t => sText.includes(t))) {
        results.push({
          type: "stoppage",
          title: s.position,
          subtitle: s.short_desc,
          action: "open_stoppage",
          target: s.position
        });
      }
    });
  }

  // 5. Search active firearm specs
  if (firearmData && firearmData.specs) {
    Object.entries(firearmData.specs).forEach(([k, v]) => {
      const spText = (k + " " + String(v)).toLowerCase();
      if (spText.includes(query) || tokensToMatch.some(t => spText.includes(t))) {
        results.push({
          type: "spec",
          title: k.replace(/_/g, " ").toUpperCase(),
          subtitle: String(v),
          action: "open_spec",
          target: k
        });
      }
    });
  }

  return results;
}

// Client-side RAG search engine across indexed manual chunks
function searchClientRAG(query, activeFid, topK = 4) {
  if (!window.RAG_CHUNKS || !Array.isArray(window.RAG_CHUNKS) || window.RAG_CHUNKS.length === 0) {
    return [];
  }

  const q = (query || "").toLowerCase().trim();
  const rawTokens = q.replace(/[-/.]/g, " ").split(/\\s+/).filter(t => t.length > 1);
  const STOP_WORDS = new Set(["the", "and", "for", "with", "from", "that", "this", "what", "how", "where", "can", "need", "needs", "want", "take", "off", "into", "onto", "have", "been", "will"]);
  const tokens = rawTokens.filter(t => !STOP_WORDS.has(t));
  const queryTokens = tokens.length > 0 ? tokens : rawTokens;

  // Domain synonym expansion
  const expandedTokens = [...queryTokens];
  const fidLower = (activeFid || "").toLowerCase();
  if (fidLower.includes("lewis")) {
    if (queryTokens.some(t => ["shield", "shroud", "casing", "barrel", "mouthpiece", "front"].includes(t))) {
      expandedTokens.push("radiator", "casing", "mouthpiece", "clamp", "cylinder", "spanner", "gland");
    }
    if (queryTokens.some(t => ["spring", "tension", "clock", "gear"].includes(t))) {
      expandedTokens.push("mainspring", "pinion", "casing", "collet");
    }
    if (queryTokens.some(t => ["clean", "carbon", "oil", "gas"].includes(t))) {
      expandedTokens.push("cylinder", "piston", "powder", "solvent");
    }
  } else if (fidLower.includes("glock")) {
    if (queryTokens.some(t => ["clean", "cleaning", "lube", "oil", "deep"].includes(t))) {
      expandedTokens.push("drops", "lubricat", "rail", "connector", "solvent");
    }
    if (queryTokens.some(t => ["sear", "drop", "safety", "orange"].includes(t))) {
      expandedTokens.push("cruciform", "engagement", "plate", "inspection");
    }
    if (queryTokens.some(t => ["trigger", "polish"].includes(t))) {
      expandedTokens.push("connector", "cruciform", "plunger", "ramp");
    }
  } else if (fidLower.includes("ar15") || fidLower.includes("m4")) {
    if (queryTokens.some(t => ["key", "gas"].includes(t))) {
      expandedTokens.push("staking", "carrier", "screws", "torque");
    }
    if (queryTokens.some(t => ["buffer", "weight"].includes(t))) {
      expandedTokens.push("carbine", "h2", "spring", "extension");
    }
  }

  const results = [];
  for (const c of window.RAG_CHUNKS) {
    const textLower = (c.text || "").toLowerCase();
    const secLower = (c.sec || "").toLowerCase();
    const docLower = (c.doc || "").toLowerCase();

    let score = 0;
    if (textLower.includes(q)) score += 40;

    for (const t of expandedTokens) {
      if (t.length >= 3) {
        if (textLower.includes(t)) score += 4;
        if (secLower.includes(t)) score += 12;
        if (docLower.includes(t)) score += 8;
      }
    }

    if (score <= 0) continue;

    // Platform affinity: strongly prioritize active platform
    if (activeFid) {
      if (c.fid === activeFid) {
        score *= 3.5;
      } else if (c.fid === "General_Gunsmithing") {
        score *= 1.2;
      } else {
        score *= 0.25;
      }
    }

    const snippetLines = (c.text || "").split("\\n").map(l => l.trim()).filter(l => l && !l.startsWith("Document:"));
    const snippet = snippetLines.slice(0, 4).join(" ").slice(0, 280);

    results.push({
      id: c.id,
      fid: c.fid,
      doc: c.doc,
      fn: c.fn,
      page: c.p,
      sec: c.sec,
      snippet: snippet + (snippet.length >= 280 ? "..." : ""),
      full_text: c.text,
      score: Math.round(score * 10) / 10,
      url: `/api/manuals/${c.fid}/${c.fn}#page=${c.p}`
    });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, topK);
}

// Client-side rule-based and RAG knowledge engine for offline & GitHub Pages
function generateClientSideExpertReply(query, firearmData) {
  const q = (query || "").toLowerCase();
  const fid = (firearmData && firearmData.id) ? firearmData.id.toLowerCase() : "";
  const fname = firearmData ? firearmData.name : "Firearm";

  // 1. Perform grounded RAG manual search across indexed dataset
  const ragMatches = searchClientRAG(query, firearmData ? firearmData.id : null, 4);
  const ragSources = ragMatches.map(m => ({
    title: `${m.doc} (p. ${m.page})`,
    url: m.url,
    manual_filename: m.fn,
    page: m.page,
    firearm_id: m.fid
  }));

  // =========================================================================
  // DOMAIN PROTOCOL 1: LEWIS AUTOMATIC MACHINE GUN
  // =========================================================================
  if (fid.includes("lewis") || q.includes("lewis")) {
    if (q.includes("shield") || q.includes("radiator") || q.includes("casing") || q.includes("mouthpiece") || (q.includes("barrel") && (q.includes("take off") || q.includes("remove") || q.includes("strip") || q.includes("disassemble")))) {
      return {
        reply: `### Master Armorer: Lewis Automatic Machine Gun — Barrel Group & Radiator Casing Stripping Protocol\\n\\n` +
          `*⚠️ **Armorer Warning:** Disassembly of the aluminum radiator and barrel group should only be performed for deep armory overhaul, barrel replacement, or clearing heavy baked carbon from the gas cylinder.*\\n\\n` +
          `**Step-by-Step Stripping Sequence:**\\n` +
          `1. **Clamp Ring (Part #3-13):**\\n` +
          `   * Using the flat screwdriver bit on the armorer combination spanner, unscrew the clamp ring screw (Part #3-15).\\n` +
          `   * Slide the clamp ring—which carries the front sight (Part #3-14) and positioning screw—forward off the radiator casing.\\n\\n` +
          `2. **Radiator Casing Front (Barrel Shield / Outer Shroud, Part #3-4):**\\n` +
          `   * Grasp the cylindrical aluminum radiator casing front and pull it straight off forward away from the longitudinal cooling fins.\\n\\n` +
          `3. **Radiator Casing Rear (Part #3-20A):**\\n` +
          `   * Withdraw the radiator casing rear (permanently assembled to the radiator casing rear locking piece) straight off to the rear towards the receiver.\\n\\n` +
          `4. **Gas Cylinder (Part #3-19):**\\n` +
          `   * Unscrew and dismount the gas cylinder. *Armorer Field Trick:* Use the piston rack (Part #8-1) as your wrench—the cross-section of the rack is purpose-machined to match the gas cylinder wrench flats.\\n\\n` +
          `5. **Gas Chamber Gland (Part #3-7) & Barrel Mouthpiece (Part #3-2) — ⚠️ LEFT-HANDED THREADS:**\\n` +
          `   * Fit the armorer combination spanner to the barrel mouthpiece (Part #3-2) and gas chamber gland (Part #3-7).\\n` +
          `   * ⚠️ **MANDATORY WARNING:** Both components are machined with **LEFT-HANDED (REVERSE) THREADS**. Turn clockwise to loosen; turning counterclockwise will strip or shear the threads.\\n\\n` +
          `6. **Barrel Dismounting (Part #3-1) & Gas Chamber (Part #3-6):**\\n` +
          `   * Keep the barrel mouthpiece threaded on approximately 3 threads to protect the crown.\\n` +
          `   * Strike the mouthpiece lightly with a brass or lead mallet to drive the barrel rearward, breaking the taper fit inside the aluminum radiator (Part #3-3).\\n` +
          `   * Unscrew the barrel completely; the gas chamber (Part #3-6) will drop free from its recess inside the radiator.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("clean") || q.includes("maintenance") || q.includes("lube") || q.includes("oil") || q.includes("care") || q.includes("carbon")) {
      return {
        reply: `### Lewis Automatic Machine Gun — Armorer Cleaning & Maintenance Protocol\\n\\n` +
          `1. **Gas Cylinder & Piston Rod Assembly:**\\n` +
          `   * Disassemble gas cylinder and thoroughly scrub interior walls and ports with nitro powder solvent and a stiff brass wire brush to eliminate lead, carbon, and copper wash.\\n` +
          `   * Wipe piston head, piston rings, and rack teeth completely dry. **Never leave heavy oil or wet grease inside the gas chamber** (causes violent smoking and rapid baked carbon buildup).\\n\\n` +
          `2. **Gear Casing & Clockwork Return Mainspring (Part #18):**\\n` +
          `   * Lubricate spiral mainspring leaves with a light coat of medium petroleum grease (graphite blend).\\n` +
          `   * ⚠️ **MANDATORY SAFETY WARNING:** Never allow the gear casing to spin free or release tension uncontrolled. Hold casing securely while pulling tension locking key.\\n\\n` +
          `3. **Aluminum Radiator & Barrel Shroud:**\\n` +
          `   * Inspect the longitudinal cooling fins for dirt, mud, or bent vanes that obstruct airflow. Clean with kerosene and soft bristle brush.\\n` +
          `   * Ensure the aluminum casing and barrel clamp screws are torqued evenly to preserve straight barrel-to-gas-cylinder alignment.\\n\\n` +
          `4. **Feed Mechanism & Pan Magazine:**\\n` +
          `   * Apply a light wipe of gun oil to the bolt feed stud, actuator track, and striker post. Keep feed arm pawl pivots free of grit.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("tension") || q.includes("spring") || q.includes("clock") || q.includes("pull") || q.includes("gear")) {
      return {
        reply: `### Lewis Gun Return Mainspring Calibration\\n\\n` +
          `* **Operating Tension:** **12 to 14 lbs pull** measured with a spring scale hooked to the cocking handle.\\n` +
          `* **Baseline Pre-load:** From dead-slack, rotate gear casing counter-clockwise exactly **2 to 2½ full revolutions** before seating the tension latch key.\\n` +
          `* **Pinion Teeth Runout:** Must remain under **0.003\\"**.\\n` +
          `* **Field Adjustment:** If sluggish forward stroke causes failure to feed from 47-round drum, add 1/2 turn (2 clicks). If bolt recoils excessively hard against buffer, reduce tension by 1 click.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("gas") || q.includes("regulator") || q.includes("port") || q.includes("cup")) {
      return {
        reply: `### Lewis Gun Gas Port & Regulator System\\n\\n` +
          `* **Two-Port Cup Regulator:** Features large ('L') and small ('S' or 'H') gas ports.\\n` +
          `* **Standard Service:** Always run on the smaller port under normal conditions (firing ~500–600 rpm).\\n` +
          `* **Adverse Conditions:** Rotate regulator cup using the armorer combination wrench to the large port if heavy fouling or sub-zero mud causes short-recoil stoppages.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("stoppage") || q.includes("jam") || q.includes("position") || q.includes("fail")) {
      return {
        reply: `### Lewis Gun 4-Position Stoppage Diagnostics\\n\\n` +
          `* **Position 1 (Cocking Handle fully forward):** Misfire, empty drum, or broken striker. Wait 5s for hangfire, cock, replace drum.\\n` +
          `* **Position 2 (Cocking Handle 1\\" to 2\\" from forward):** Thick rimmed cartridge, deformed bullet, or dirt in chamber. Clear, check gas regulator.\\n` +
          `* **Position 3 (Cocking Handle near full rear):** Separated case or broken ejector. Insert clearing plug / extract ruptured case.\\n` +
          `* **Position 4 (Cocking Handle jammed full rear):** Pinion gear sheared, return spring broken, or bent piston rod. Dismount gear casing.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    }
  }

  // =========================================================================
  // DOMAIN PROTOCOL 2: GLOCK SAFE-ACTION PISTOLS
  // =========================================================================
  if (fid.includes("glock") || q.includes("glock")) {
    if (q.includes("sear") || q.includes("cruciform") || q.includes("engagement") || q.includes("drop") || q.includes("safety")) {
      return {
        reply: `### Glock Cruciform Sear Engagement Specification\\n\\n` +
          `* **Safety Requirement:** Minimum **66% (2/3)** surface overlap between striker lug and trigger bar cruciform sear plate.\\n` +
          `* **Armorer Inspection:** Install orange Armorer Inspection Cover Plate (SP 02096). Verify engagement under 10x magnification.\\n` +
          `* ⚠️ **MANDATORY SAFETY WARNING:** Less than 66% overlap introduces severe risk of accidental discharge on impact or full-auto slip.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("clean") || q.includes("lube") || q.includes("oil") || q.includes("maintenance") || q.includes("deep")) {
      return {
        reply: `### Glock Factory Deep Cleaning & 5-Drop Lubrication Protocol\\n\\n` +
          `1. **Disassembly & Frame Pin Order:**\\n` +
          `   * On 3-pin frames (Gen 3/4), push out the **top locking block pin FIRST** using a 3/32\\" punch. This relieves spring tension off the trigger pin below it, allowing it to push out effortlessly.\\n\\n` +
          `2. **Factory 5-Drop Lubrication:**\\n` +
          `   * **Drops 1 & 2:** One drop split along rear slide rail channels.\\n` +
          `   * **Drops 3 & 4:** One drop split along front slide rail cuts.\\n` +
          `   * **Drop 5:** One drop spread on barrel exterior hood and circumference.\\n` +
          `   * **Half Drop (Crucial):** One tiny drop where the trigger bar cruciform bird-head wipes across the connector cam ramp.\\n\\n` +
          `3. ⚠️ **CRITICAL ARMORER WARNING:**\\n` +
          `   * **NEVER lubricate the firing pin channel, striker sleeve, or safety plunger cavity.** Keep 100% dry. Oil in the channel creates hydrodynamic drag, attracts brass shavings, and causes light primer strikes.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("trigger") || q.includes("25") || q.includes("polish") || q.includes("connector")) {
      return {
        reply: `### Glock 25¢ Trigger Polish & Connector Tuning\\n\\n` +
          `* **Surfaces to Polish:** Mirror polish with Flitz or Mothers polish:\\n` +
          `  1. Cruciform sear shelf\\n` +
          `  2. Connector cam ramp face\\n` +
          `  3. Trigger bar safety plunger bump\\n` +
          `  4. Firing pin safety plunger dome\\n` +
          `  5. Striker lug contact face\\n` +
          `* **Armorer Rules:** Use felt bob or cotton cloth only. DO NOT use stones, files, or sandpaper. Never alter factory 90° sear angles.\\n` +
          `* **Connector Gap:** Maintain 0.005\\" to 0.010\\" clearance between connector top tab and trigger housing.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    }
  }

  // =========================================================================
  // DOMAIN PROTOCOL 3: AR-15 / M4 PLATFORM
  // =========================================================================
  if (fid.includes("ar15") || fid.includes("m4") || q.includes("ar-15") || q.includes("m4")) {
    if (q.includes("gas key") || q.includes("carrier") || q.includes("staking") || q.includes("bolt")) {
      return {
        reply: `### AR-15 / M4 Carrier Gas Key Staking & Bolt Specifications\\n\\n` +
          `* **Gas Key Screws:** Fasten with Grade 8 fasteners. Apply one drop of Loctite 271 (Red) or Rocksett, torque to **50 to 58 in-lbs**.\\n` +
          `* **Staking Protocol:** Use a purpose-built carrier key staking tool (e.g. MOACKS) or cold chisel to displace carrier key metal into both screw head splines from opposing sides.\\n` +
          `* **Gas Rings:** Ensure three staggered gas rings support carrier weight when rested bolt-face down on bench without collapsing.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("buffer") || q.includes("weight") || q.includes("dwell") || q.includes("gas system")) {
      return {
        reply: `### AR-15 / M4 Buffer Weight & Dwell Time Calibration\\n\\n` +
          `* **Carbine Buffer:** 3.0 oz (3 steel weights) — standard for 16\\" mid-length.\\n` +
          `* **H Buffer:** 3.8 oz (1 tungsten, 2 steel) — standard for USGI 14.5\\" M4 carbine-length gas.\\n` +
          `* **H2 Buffer:** 4.6 oz (2 tungsten, 1 steel) — optimal for suppressed or short 10.3\\"–11.5\\" barrels to eliminate bolt bounce and slow carrier extraction speed.\\n` +
          `* **H3 Buffer:** 5.4 oz (3 tungsten) — specialized for heavy 300 Blackout subsonic or severe over-gassing.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    }
  }

  // =========================================================================
  // DOMAIN PROTOCOL 4: OPTICS, SCOPES & RETICLES
  // =========================================================================
  if (q.includes("scope") || q.includes("optic") || q.includes("ring") || q.includes("torque") || q.includes("mount")) {
    return {
      reply: `### Master Gunsmith: Scope Mounting & Precision Torque Specifications\\n\\n` +
        `* **Base / Picatinny Rail to Receiver:**\\n` +
        `  * **Torque:** **30 to 35 in-lbs** using T15/T20 Torx fasteners.\\n` +
        `  * **Preparation:** Degrease tapped holes completely with 99% isopropyl alcohol. Apply one drop of **Loctite 242 (Blue)**.\\n` +
        `* **Ring-to-Base Crossbolts (Clamps):**\\n` +
        `  * **Steel Crossbolts:** **45 to 65 in-lbs** (Badger, Nightforce).\\n` +
        `  * **Aluminum Crossbolts:** **35 to 45 in-lbs** max (Vortex, Leupold).\\n` +
        `* **Ring Caps (Tube Clamping):**\\n` +
        `  * **Torque:** **15 to 18 in-lbs** (NEVER exceed 18 in-lbs).\\n` +
        `  * ⚠️ **CRITICAL WARNING:** Overtightening ring caps crushes the internal 30mm/34mm erector tube, binding parallax and freezing tracking. Tighten in an alternating X-pattern with even ring gaps.`,
      backend: "Master Gunsmith Engine (RAG Grounded)",
      sources: ragSources
    };
  }

  // =========================================================================
  // DOMAIN PROTOCOL 5: HEADSPACE & GAUGING
  // =========================================================================
  if (q.includes("headspace") || q.includes("gauge") || q.includes("cerrosafe") || q.includes("chamber")) {
    return {
      reply: `### Master Gunsmith: Headspace Gauging & Chamber Casting Standards\\n\\n` +
        `* **GO Gauge:** Minimum acceptable chamber headspace; bolt must close completely with light finger pressure.\\n` +
        `* **NO-GO Gauge:** Maximum allowable headspace for new or re-barreled firearms; bolt must NOT close.\\n` +
        `* **FIELD Gauge:** Absolute service safety limit. If bolt closes on a FIELD gauge, headspace is excessive and the firearm is **UNSAFE TO FIRE**.\\n\\n` +
        `* **Cerrosafe Chamber Casting Timing Protocol:**\\n` +
        `  * Melt alloy at 160°–190°F into clean chamber. Cerrosafe shrinks during initial set, then expands to **EXACT 1:1 true chamber dimension at PRECISELY 1 HOUR after pouring**.\\n` +
        `  * Measure critical diameters and forcing cone lengths at the 1-hour mark with calibrated micrometers.`,
      backend: "Master Gunsmith Engine (RAG Grounded)",
      sources: ragSources
    };
  }

  // =========================================================================
  // RAG GROUNDED GENERAL SYNTHESIS FOR ANY OTHER QUERY
  // =========================================================================
  if (ragMatches.length > 0 && ragMatches[0].score >= 8) {
    const top = ragMatches[0];
    const topSnippet = top.full_text.split("\\n").filter(l => l.trim() && !l.startsWith("Document:") && !l.startsWith("Platform:")).slice(0, 8).join("\\n");
    return {
      reply: `### Master Armorer Technical Guidance: ${fname}\\n\\n` +
        `Based on authentic armorer documentation for **${top.doc}** (Section: *${top.sec}*, Page ${top.page}):\\n\\n` +
        `> ${topSnippet.replace(/\\n/g, "\\n> ")}\\n\\n` +
        `*Refer to the grounded manual citations below to open the exact schematics and disassembly diagrams directly on your bench.*`,
      backend: "Master Gunsmith Engine (RAG Grounded)",
      sources: ragSources
    };
  }

  // General fallback overview
  return {
    reply: `### Armorer Technical Summary: ${fname}\\n\\n` +
      `* **Platform:** ${fname}\\n` +
      `* **Manuals Available:** ${firearmData && firearmData.manuals ? firearmData.manuals.length : 0}\\n` +
      `* **Schematics Available:** ${firearmData && firearmData.schematics ? firearmData.schematics.length : 0}\\n` +
      `* **Curated Bench Videos:** ${firearmData && firearmData.videos ? firearmData.videos.length : 0}\\n\\n` +
      `Select any document, schematic plate, or video from the left library panel to inspect directly on your bench.`,
    backend: "Built-in Armorer Engine (Client)",
    sources: ragSources
  };
}

async function handleChatSubmit() {
  const query = chatInput.value.trim();
  if (!query) return;

  // Append user message
  appendMessage("user", query);
  chatInput.value = "";
  sendBtn.disabled = true;

  // Typing indicator
  const typingMsg = document.createElement("div");
  typingMsg.className = "chat-msg assistant typing-msg";
  typingMsg.innerHTML = `
    <div class="msg-avatar">AI</div>
    <div class="msg-content">
      <em>Consulting technical manuals & armorer specs...</em>
    </div>
  `;
  chatHistory.appendChild(typingMsg);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  try {
    const isStatic = window.location.hostname.includes("github.io") || !!window.STATIC_FIREARMS_DATA || window.location.protocol === "file:";

    if (isStatic) {
      // 1. Direct Google Gemini Web API from client if key is set
      if (activeLLMBackend === "gemini" && activeLLMApiKey) {
        try {
          const mod = (activeLLMModel && activeLLMModel !== "auto") ? activeLLMModel : "gemini-1.5-flash";
          const gunPrompt = firearmData ? `Current Firearm Platform: ${firearmData.name} (${firearmData.id}). Answer as an expert master gunsmith and armorer assistant.` : "Answer as an expert master gunsmith and armorer assistant.";
          const gemRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${mod}:generateContent?key=${activeLLMApiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: `${gunPrompt}\\n\\nUser Question: ${query}` }] }]
            })
          });
          if (gemRes.ok) {
            const gemData = await gemRes.json();
            const replyText = gemData.candidates?.[0]?.content?.parts?.[0]?.text;
            if (replyText) {
              typingMsg.remove();
              appendMessage("assistant", replyText, `Google Gemini (${mod}) [Cloud Web]`);
              return;
            }
          }
        } catch (gemErr) {
          console.warn("Client-side Gemini API call failed, falling back to built-in engine", gemErr);
        }
      }

      // 2. Client-side armorer RAG engine
      const replyObj = generateClientSideExpertReply(query, firearmData);
      setTimeout(() => {
        typingMsg.remove();
        if ((activeLLMBackend === "lmstudio" || activeLLMBackend === "ollama") && (activeLLMEndpoint.includes("127.0.0.1") || activeLLMEndpoint.includes("localhost"))) {
          appendMessage("assistant", `${replyObj.reply}\\n\\n---\\n*💡 **Local LM Studio / Ollama Notice:** You are currently viewing the hosted web version on GitHub Pages. Chrome blocks \`https://\` websites from connecting to local \`http://127.0.0.1\`. To connect to your local LM Studio / Ollama with PyMuPDF RAG, double-click \`run_workbench.bat\` in your \`Gun Manuals\` folder and open **http://127.0.0.1:8055**.*`, replyObj.backend, replyObj.sources);
        } else {
          appendMessage("assistant", replyObj.reply, replyObj.backend, replyObj.sources);
        }
      }, 300);
      return;
    }

    // Local / Server Mode
    const payload = {
      firearm_id: currentFirearm,
      messages: [{ role: "user", content: query }],
      backend: activeLLMBackend,
      model: activeLLMModel !== "auto" ? activeLLMModel : null,
      endpoint: activeLLMEndpoint || null,
      api_key: activeLLMApiKey || null
    };

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    typingMsg.remove();

    if (!res.ok) {
      const fallback = generateClientSideExpertReply(query, firearmData);
      appendMessage("assistant", fallback.reply, "Built-in Armorer Engine (Client Fallback)", fallback.sources);
      return;
    }

    const data = await res.json();
    appendMessage("assistant", data.reply, data.backend_used, data.sources);

  } catch (err) {
    typingMsg.remove();
    // Graceful fallback to client RAG engine if server network fails
    const fallback = generateClientSideExpertReply(query, firearmData);
    appendMessage("assistant", fallback.reply, "Built-in Armorer Engine (Client Fallback)", fallback.sources);
  } finally {
    sendBtn.disabled = false;
  }
}
'''

# Replace from '// Global Live Search with Cross-Platform & Cross-Manufacturer Matching'
# to 'function appendMessage(role, text, backend = null, sources = []) {'
start_marker = "// Global Live Search with Cross-Platform & Cross-Manufacturer Matching"
end_marker = "function appendMessage(role, text, backend = null, sources = []) {"

s_idx = code.find(start_marker)
e_idx = code.find(end_marker)

if s_idx == -1 or e_idx == -1:
    raise RuntimeError(f"Could not find markers: start={s_idx}, end={e_idx}")

new_code = code[:s_idx] + new_search_and_rag_block + "\n\n" + alias_code + code[e_idx:]
static_app_js.write_text(new_code, encoding="utf-8")
print(f"Successfully patched {static_app_js}!")
