import sys
from pathlib import Path

app_js_path = Path("web_app/static/app.js")
text = app_js_path.read_text(encoding="utf-8")

# 1. Add setupVideoDiagnostics() to setupEventListeners
target_schematic = "setupSchematicInspector();"
if "setupVideoDiagnostics();" not in text:
    replacement = "setupSchematicInspector();\n\n  // Setup Video Diagnostics Lab & Malfunction Simulator\n  setupVideoDiagnostics();"
    text = text.replace(target_schematic, replacement, 1)

# 2. Update handleChatSubmit to pass data.sources to appendMessage
target_chat_call = 'appendMessage("assistant", data.reply, data.backend_used);'
replacement_chat_call = 'appendMessage("assistant", data.reply, data.backend_used, data.sources);'
text = text.replace(target_chat_call, replacement_chat_call, 1)

# 3. Update appendMessage to accept sources and render them
target_append_msg = """function appendMessage(role, text, backend = null) {
  const msg = document.createElement("div");
  msg.className = `chat-msg ${role}`;

  const avatar = role === "user" ? "YOU" : "AI";
  const htmlContent = formatMarkdown(text);
  const badgeHtml = backend ? `<div class="msg-badge">Answered by: ${escapeHtml(backend)}</div>` : "";

  msg.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-content">
      ${htmlContent}
      ${badgeHtml}
    </div>
  `;

  chatHistory.appendChild(msg);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}"""

replacement_append_msg = """function appendMessage(role, text, backend = null, sources = []) {
  const msg = document.createElement("div");
  msg.className = `chat-msg ${role}`;

  const avatar = role === "user" ? "YOU" : "AI";
  const htmlContent = formatMarkdown(text);
  const badgeHtml = backend ? `<div class="msg-badge">Answered by: ${escapeHtml(backend)}</div>` : "";

  let sourcesHtml = "";
  if (sources && sources.length > 0) {
    sourcesHtml = `<div class="msg-sources-list"><span class="msg-sources-label">📚 Grounded Manual Citations (RAG):</span>`;
    sources.forEach(s => {
      const title = s.title || "Manual Reference";
      if (s.url && s.url.startsWith("/api/manuals/")) {
        sourcesHtml += `<button class="msg-source-chip" onclick="openManualFromCitation('${escapeHtml(s.url)}', '${escapeHtml(title)}')">📄 ${escapeHtml(title)}</button>`;
      } else if (s.url && s.url !== "#") {
        sourcesHtml += `<a class="msg-source-chip" href="${escapeHtml(s.url)}" target="_blank" rel="noopener">🔗 ${escapeHtml(title)}</a>`;
      } else {
        sourcesHtml += `<span class="msg-source-chip">📑 ${escapeHtml(title)}</span>`;
      }
    });
    sourcesHtml += `</div>`;
  }

  msg.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-content">
      ${htmlContent}
      ${sourcesHtml}
      ${badgeHtml}
    </div>
  `;

  chatHistory.appendChild(msg);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}"""

# Normalizing newlines before replacing if needed
text = text.replace(target_append_msg.replace("\r\n", "\n"), replacement_append_msg.replace("\r\n", "\n"))
text = text.replace(target_append_msg, replacement_append_msg)

# 4. Append video diagnostics and citation handler functions if not already present
video_functions = """

// =========================================================================
// AI VIDEO MALFUNCTION DIAGNOSTICS LAB & RAG CITATION INTEGRATION
// =========================================================================

window.openManualFromCitation = function(url, title) {
  if (!url) return;
  const hashIdx = url.indexOf("#page=");
  let pageNum = 1;
  let cleanUrl = url;
  if (hashIdx !== -1) {
    pageNum = parseInt(url.substring(hashIdx + 6)) || 1;
    cleanUrl = url.substring(0, hashIdx);
  }

  const parts = cleanUrl.split("/api/manuals/");
  if (parts.length > 1) {
    const subParts = parts[1].split("/");
    const firearmId = subParts[0];
    const filename = subParts.slice(1).join("/");

    if (firearmId && firearmId !== currentFirearm) {
      switchFirearm(firearmId);
    }

    switchPreviewMode("pdf");
    selectManual(filename, title || filename.replace(/_/g, " "), true, pageNum);
  }
};

function setupVideoDiagnostics() {
  const btnSubnavCurated = document.getElementById("btnSubnavCurated");
  const btnSubnavDiagnostics = document.getElementById("btnSubnavDiagnostics");
  const videoCuratedView = document.getElementById("videoCuratedView");
  const videoDiagnosticsView = document.getElementById("videoDiagnosticsView");

  if (btnSubnavCurated && btnSubnavDiagnostics && videoCuratedView && videoDiagnosticsView) {
    btnSubnavCurated.addEventListener("click", () => {
      btnSubnavCurated.classList.add("active");
      btnSubnavDiagnostics.classList.remove("active");
      videoCuratedView.classList.remove("hidden");
      videoDiagnosticsView.classList.add("hidden");
    });

    btnSubnavDiagnostics.addEventListener("click", () => {
      btnSubnavDiagnostics.classList.add("active");
      btnSubnavCurated.classList.remove("active");
      videoDiagnosticsView.classList.remove("hidden");
      videoCuratedView.classList.add("hidden");
    });
  }

  // Pre-loaded Simulation Chips
  const simChips = document.querySelectorAll(".diag-chip-btn");
  simChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const sampleId = chip.getAttribute("data-sample");
      if (sampleId) {
        runVideoAnalysis(null, sampleId);
      }
    });
  });

  // Dropzone & File Input
  const dropzone = document.getElementById("diagDropzone");
  const fileInput = document.getElementById("diagFileInput");
  const analyzeBtn = document.getElementById("btnRunVideoAnalysis");

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        const fname = fileInput.files[0].name;
        const primaryText = dropzone.querySelector(".primary-text");
        if (primaryText) primaryText.textContent = `Selected Clip: ${fname}`;
      }
    });

    fileInput.addEventListener("change", () => {
      if (fileInput.files && fileInput.files.length > 0) {
        const fname = fileInput.files[0].name;
        const primaryText = dropzone.querySelector(".primary-text");
        if (primaryText) primaryText.textContent = `Selected Clip: ${fname}`;
      }
    });
  }

  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      const file = fileInput && fileInput.files && fileInput.files.length > 0 ? fileInput.files[0] : null;
      runVideoAnalysis(file, null);
    });
  }

  // Consult Master Armorer on Diagnostic Report
  const consultBtn = document.getElementById("btnConsultAssistantOnVideo");
  if (consultBtn) {
    consultBtn.addEventListener("click", () => {
      const titleElem = document.getElementById("reportTitle");
      const symptomElem = document.getElementById("reportSymptom");
      const phaseElem = document.getElementById("reportPhase");
      const title = titleElem ? titleElem.textContent : "Firearm Malfunction";
      const symptom = symptomElem ? symptomElem.textContent : "";
      const phase = phaseElem ? phaseElem.textContent : "";

      const promptText = `I have diagnosed a stoppage on the ${currentFirearm.replace(/_/g, " ")}:\n**${title}**\n${phase}\n*Optical Observation:* ${symptom}\n\nAs Master Gunsmith, what are the exact factory clearances, torque specs, gauge tolerances, and armorer servicing steps to resolve this permanently?`;

      if (chatInput) {
        chatInput.value = promptText;
        const mobileAssistantBtn = document.querySelector('.mobile-nav-btn[data-panel="assistant"]');
        if (mobileAssistantBtn) mobileAssistantBtn.click();
        handleChatSubmit();
      }
    });
  }
}

async function runVideoAnalysis(file = null, sampleId = null) {
  const loadingBox = document.getElementById("diagLoadingSpinner");
  const resultsBox = document.getElementById("diagResultsContainer");
  const userNotesInput = document.getElementById("diagUserNotes");
  const notes = userNotesInput ? userNotesInput.value.trim() : "";

  if (loadingBox) loadingBox.classList.remove("hidden");
  if (resultsBox) resultsBox.classList.add("hidden");

  try {
    let reportData = null;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("firearm_id", currentFirearm);
      formData.append("user_notes", notes);

      const res = await fetch("/api/video/analyze", {
        method: "POST",
        body: formData
      });
      const json = await res.json();
      if (!res.ok || json.status !== "ok") throw new Error(json.detail || "Analysis failed");
      reportData = json.report;
    } else {
      const targetSample = sampleId || "ar15_double_feed";
      const res = await fetch("/api/video/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firearm_id: currentFirearm,
          sample_id: targetSample,
          user_notes: notes
        })
      });
      const json = await res.json();
      if (!res.ok || json.status !== "ok") throw new Error(json.detail || "Simulation failed");
      reportData = json.report;
    }

    renderVideoDiagnosticReport(reportData);
  } catch (err) {
    console.error("Video analysis error:", err);
    alert(`Video Diagnostics: ${err.message || err}`);
  } finally {
    if (loadingBox) loadingBox.classList.add("hidden");
  }
}

function renderVideoDiagnosticReport(report) {
  const resultsBox = document.getElementById("diagResultsContainer");
  if (!resultsBox || !report) return;

  // 1. Populate Frames Strip
  const framesStrip = document.getElementById("diagFramesStrip");
  if (framesStrip) {
    framesStrip.innerHTML = "";
    const frames = report.frames || [];
    frames.forEach(f => {
      const card = document.createElement("div");
      card.className = "diag-frame-card";
      card.innerHTML = `
        <img src="${f.image_b64}" class="diag-frame-thumb" alt="${escapeHtml(f.phase)}">
        <div class="diag-frame-meta">
          <span class="diag-frame-time">${escapeHtml(f.timestamp)}</span>
          <span class="diag-frame-phase" title="${escapeHtml(f.phase)}">${escapeHtml(f.phase)}</span>
        </div>
      `;
      framesStrip.appendChild(card);
    });
  }

  // 2. Report Header
  const badgeElem = document.getElementById("reportStoppageBadge");
  const engineElem = document.getElementById("reportEngineBadge");
  const titleElem = document.getElementById("reportTitle");
  const phaseElem = document.getElementById("reportPhase");

  if (badgeElem) badgeElem.textContent = report.title ? report.title.split(":")[0].toUpperCase() : "MALFUNCTION DETECTED";
  if (engineElem) engineElem.textContent = report.analysis_engine || "Multimodal Vision AI";
  if (titleElem) titleElem.textContent = report.title || "Diagnostic Summary";
  if (phaseElem) phaseElem.textContent = `Mechanical Cycle of Operations: ${report.cycle_phase || 'General Cycling'}`;

  // 3. Symptom
  const symptomElem = document.getElementById("reportSymptom");
  if (symptomElem) symptomElem.textContent = report.primary_symptom || report.description || "Visual stoppage observed in battery travel.";

  // 4. Causes
  const causesList = document.getElementById("reportCausesList");
  if (causesList) {
    causesList.innerHTML = "";
    (report.root_causes || []).forEach(c => {
      const li = document.createElement("li");
      li.textContent = c;
      causesList.appendChild(li);
    });
  }

  // 5. Immediate Action
  const actionElem = document.getElementById("reportImmediateAction");
  if (actionElem) actionElem.textContent = report.immediate_action || "TAP, RACK, BANG or LOCK, DROP, CLEAR, RESUME.";

  // 6. Checklist
  const checklist = document.getElementById("reportChecklist");
  if (checklist) {
    checklist.innerHTML = "";
    (report.armorer_checklist || []).forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      checklist.appendChild(li);
    });
  }

  // 7. Parts to Inspect
  const partsGrid = document.getElementById("reportPartsGrid");
  if (partsGrid) {
    partsGrid.innerHTML = "";
    (report.parts_to_inspect || []).forEach(p => {
      const card = document.createElement("div");
      card.className = "report-part-card";
      card.innerHTML = `
        <span class="report-part-name">${escapeHtml(p.name)}</span>
        <span class="report-part-oem">${escapeHtml(p.oem || 'OEM Spec')}</span>
        <span class="report-part-spec">${escapeHtml(p.spec || '')}</span>
      `;
      partsGrid.appendChild(card);
    });
  }

  // 8. Citations
  const citationsList = document.getElementById("reportCitationsList");
  if (citationsList) {
    citationsList.innerHTML = "";
    const citations = report.rag_manual_citations || [];
    if (citations.length > 0) {
      citations.forEach(c => {
        const btn = document.createElement("button");
        btn.className = "report-citation-pill";
        btn.innerHTML = `📄 ${escapeHtml(c.manual_title)} (p. ${c.page})`;
        btn.addEventListener("click", () => {
          if (c.url) {
            openManualFromCitation(c.url, c.manual_title);
          }
        });
        citationsList.appendChild(btn);
      });
    } else {
      citationsList.innerHTML = `<span style="color:#64748b; font-size:11px;">Cross-referenced against platform technical dossier.</span>`;
    }
  }

  resultsBox.classList.remove("hidden");
}
"""

if "setupVideoDiagnostics" not in text:
    text += video_functions

app_js_path.write_text(text, encoding="utf-8")
print("Successfully updated web_app/static/app.js!")
