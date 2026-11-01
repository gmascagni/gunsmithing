from pathlib import Path

app_js_path = Path("web_app/static/app.js")
code = app_js_path.read_text(encoding="utf-8")

old_search_start = '// Global Live Search with Cross-Platform & Cross-Manufacturer Matching'
assert old_search_start in code, 'old_search_start not found'

part_before = code.split(old_search_start)[0]
part_after = code.split(old_search_start)[1]

next_func = 'async function handleChatSubmit() {'
assert next_func in part_after, 'next_func not found'
rest = part_after.split(next_func)[1]

new_search_block = '''// Global Live Search with Cross-Platform & Cross-Manufacturer Matching
async function executeGlobalSearch(q, autoSelectOnEnter = false) {
  const query = (q || "").trim();
  if (query.length < 2) {
    searchResultsPopup.classList.add("hidden");
    return;
  }

  try {
    let results = [];
    const isStatic = window.location.hostname.includes("github.io") || window.location.protocol === "file:";

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

    // Auto-select on Enter or Search click: if the top result is a firearm platform switch
    if (autoSelectOnEnter && results.length > 0 && results[0].action === "switch_firearm") {
      const topMatch = results[0];
      searchResultsPopup.classList.add("hidden");
      currentFirearm = topMatch.target;
      await loadFirearm(topMatch.target);
      if (firearmData) {
        addMessage(
          "assistant",
          `🔫 Switched active bench platform to **${escapeHtml(firearmData.name)}** for search query *"${escapeHtml(query)}"*. Loaded **${firearmData.manuals.length} manuals**, **${firearmData.schematics.length} schematic plates**, and **${firearmData.videos.length} bench videos** ready for service.`,
          "Platform Switched"
        );
      }
      return;
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
            addMessage(
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

// Client-side search engine for offline & GitHub Pages support with tokenized multi-word scoring
function executeClientSideSearch(q) {
  const query = (q || "").toLowerCase().trim();
  const rawTokens = query.replace(/[-/.]/g, " ").split(/\\s+/).filter(t => t.length > 0);
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
    if (blob.includes(query)) score += 100;

    const matchedTokens = rawTokens.filter(t => blob.includes(t));
    if (rawTokens.length > 0 && matchedTokens.length === rawTokens.length) {
      score += 80 + matchedTokens.length * 5;
    } else if (rawTokens.length > 1 && matchedTokens.length >= rawTokens.length - 1) {
      score += 40 + matchedTokens.length * 5;
    }

    // Model specific boost (e.g. '17' matching Glock 17)
    models.forEach(m => {
      if (rawTokens.some(t => t.length > 1 && m.includes(t))) score += 25;
    });

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
      if (mText.includes(query) || (rawTokens.length > 0 && rawTokens.every(t => mText.includes(t)))) {
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
      const vText = (v.title + " " + (v.summary || "")).toLowerCase();
      if (vText.includes(query) || (rawTokens.length > 0 && rawTokens.every(t => vText.includes(t)))) {
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
      const sText = (s.position + " " + (s.causes || []).join(" ") + " " + s.action).toLowerCase();
      if (sText.includes(query) || (rawTokens.length > 0 && rawTokens.every(t => sText.includes(t)))) {
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
      if (spText.includes(query) || (rawTokens.length > 0 && rawTokens.every(t => spText.includes(t)))) {
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

'''

updated_code = part_before + new_search_block + next_func + rest
app_js_path.write_text(updated_code, encoding="utf-8")
print("Search engine in app.js updated successfully!")
