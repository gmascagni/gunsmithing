// Armorer's Workbench — Frontend Logic

let currentFirearm = "Lewis_Automatic_Machine_Gun";
let firearmData = null;
let currentSchematicZoom = 1.0;
let activeLLMBackend = "auto";
let activeLLMModel = "auto";
let availableBackends = [];

// DOM Elements
const pdfFrame = document.getElementById("pdfFrame");
const schematicImg = document.getElementById("schematicImg");
const schematicCanvas = document.getElementById("schematicCanvas");
const videoFrame = document.getElementById("videoFrame");
const videoMetaTitle = document.getElementById("videoMetaTitle");
const videoMetaCreator = document.getElementById("videoMetaCreator");
const videoMetaSummary = document.getElementById("videoMetaSummary");
const previewTitle = document.getElementById("previewTitle");
const btnExternalLink = document.getElementById("btnExternalLink");
const zoomLevelText = document.getElementById("zoomLevel");

const pdfStage = document.getElementById("pdfStage");
const schematicStage = document.getElementById("schematicStage");
const videoStage = document.getElementById("videoStage");
const dossierStage = document.getElementById("dossierStage");

const manualsListView = document.getElementById("manualsListView");
const schematicsGridView = document.getElementById("schematicsGridView");
const videosListView = document.getElementById("videosListView");
const stoppagesListView = document.getElementById("stoppagesListView");

const globalSearchInput = document.getElementById("globalSearchInput");
const searchResultsPopup = document.getElementById("searchResultsPopup");
const tabFilterInput = document.getElementById("tabFilterInput");

const chatHistory = document.getElementById("chatHistory");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const clearChatBtn = document.getElementById("clearChatBtn");

const llmStatusPill = document.getElementById("llmStatusPill");
const llmStatusText = document.getElementById("llmStatusText");
const settingsDialog = document.getElementById("settingsDialog");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const llmBackendSelect = document.getElementById("llmBackendSelect");
const llmModelSelect = document.getElementById("llmModelSelect");
const testConnBtn = document.getElementById("testConnBtn");
const connTestResult = document.getElementById("connTestResult");

// Initialize Application
document.addEventListener("DOMContentLoaded", async () => {
  setupEventListeners();
  await checkLLMBackends();
  await loadFirearm(currentFirearm);
});

// Setup UI Events
function setupEventListeners() {
  // Mode switcher tabs (top of center preview)
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => switchPreviewMode(btn.dataset.mode));
  });

  // Library Navigation Tabs (left panel)
  document.querySelectorAll(".lib-tab").forEach(tab => {
    tab.addEventListener("click", () => switchLibraryTab(tab.dataset.tab));
  });

  // Filter inside active tab
  tabFilterInput.addEventListener("input", filterCurrentTab);

  // Global search input
  let searchTimeout = null;
  globalSearchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    const q = e.target.value.trim();
    if (q.length < 2) {
      searchResultsPopup.classList.add("hidden");
      return;
    }
    searchTimeout = setTimeout(() => executeGlobalSearch(q), 250);
  });

  // Close search popup when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search")) {
      searchResultsPopup.classList.add("hidden");
    }
  });

  // Schematic Zoom Controls
  document.getElementById("zoomInBtn").addEventListener("click", () => adjustZoom(0.2));
  document.getElementById("zoomOutBtn").addEventListener("click", () => adjustZoom(-0.2));
  document.getElementById("zoomResetBtn").addEventListener("click", () => resetZoom());

  // Mouse wheel zoom on schematic
  schematicCanvas.addEventListener("wheel", (e) => {
    if (schematicStage.classList.contains("active")) {
      e.preventDefault();
      adjustZoom(e.deltaY < 0 ? 0.15 : -0.15);
    }
  }, { passive: false });

  // Chat Form Submit
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleChatSubmit();
  });

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  });

  clearChatBtn.addEventListener("click", () => {
    chatHistory.innerHTML = `
      <div class="chat-msg system">
        <div class="msg-avatar">AI</div>
        <div class="msg-content">
          <p><strong>Master Armorer Assistant Ready.</strong></p>
          <p>Conversation cleared. Ready for your next gunsmith inquiry.</p>
        </div>
      </div>
    `;
  });

  // Quick Prompt Chips
  document.querySelectorAll(".prompt-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chatInput.value = chip.dataset.query;
      handleChatSubmit();
    });
  });

  // Settings Dialog (Native Popover/Dialog)
  llmStatusPill.addEventListener("click", () => {
    settingsDialog.showModal();
  });

  closeSettingsBtn.addEventListener("click", () => {
    settingsDialog.close();
  });

  settingsDialog.addEventListener("click", (e) => {
    const rect = settingsDialog.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      settingsDialog.close();
    }
  });

  llmBackendSelect.addEventListener("change", updateModelDropdown);

  document.getElementById("llmTempRange").addEventListener("input", (e) => {
    document.getElementById("tempVal").textContent = e.target.value;
  });

  document.getElementById("settingsForm").addEventListener("submit", (e) => {
    e.preventDefault();
    activeLLMBackend = llmBackendSelect.value;
    activeLLMModel = llmModelSelect.value;
    updateStatusPill();
    settingsDialog.close();
  });

  testConnBtn.addEventListener("click", testLLMConnection);
}

// Load Firearm Data
async function loadFirearm(firearmId) {
  try {
    const res = await fetch(`/api/firearms/${firearmId}`);
    if (!res.ok) throw new Error("Failed to load firearm data");
    firearmData = await res.json();

    document.getElementById("manualsCount").textContent = firearmData.manuals.length;
    document.getElementById("schematicsCount").textContent = firearmData.schematics.length;
    document.getElementById("videosCount").textContent = firearmData.videos.length;

    renderManualsList(firearmData.manuals);
    renderSchematicsGrid(firearmData.schematics);
    renderVideosList(firearmData.videos);
    renderStoppagesList(firearmData.stoppages);

    // Default: select the primary Savage manual
    if (firearmData.manuals.length > 0) {
      const primary = firearmData.manuals.find(m => m.filename.includes("Savage")) || firearmData.manuals[0];
      selectManual(primary.filename, primary.title);
    }
  } catch (err) {
    console.error("Error loading firearm:", err);
  }
}

// Render Manuals
function renderManualsList(manuals) {
  manualsListView.innerHTML = "";
  manuals.forEach(m => {
    const card = document.createElement("div");
    card.className = "doc-card";
    card.dataset.id = m.filename;
    card.dataset.search = (m.title + " " + m.filename).toLowerCase();
    
    let badgeText = "MANUAL";
    if (m.filename.includes("Savage")) badgeText = "FACTORY";
    else if (m.filename.includes("Armourer")) badgeText = "ARMORER";
    else if (m.filename.includes("Machinist")) badgeText = "MACHINING";
    else if (m.filename.includes("Stoppages")) badgeText = "DIAGNOSTICS";

    card.innerHTML = `
      <div class="doc-card-header">
        <span class="doc-card-title">${escapeHtml(m.title)}</span>
        <span class="tag-badge">${badgeText}</span>
      </div>
      <div class="doc-card-meta">
        <span>PDF Document</span>
        <span>•</span>
        <span>${m.size_mb} MB</span>
      </div>
    `;

    card.addEventListener("click", () => selectManual(m.filename, m.title));
    manualsListView.appendChild(card);
  });
}

function selectManual(filename, title) {
  document.querySelectorAll("#manualsListView .doc-card").forEach(c => {
    c.classList.toggle("active", c.dataset.id === filename);
  });

  const pdfUrl = `/api/manuals/${currentFirearm}/${filename}`;
  pdfFrame.src = pdfUrl;
  previewTitle.textContent = title;
  btnExternalLink.href = pdfUrl;
  switchPreviewMode("pdf");
}

// Render Schematics
function renderSchematicsGrid(schematics) {
  schematicsGridView.innerHTML = "";
  schematics.forEach(s => {
    const card = document.createElement("div");
    card.className = "schematic-card";
    card.dataset.id = s.filename;
    card.dataset.search = (s.title + " " + s.filename).toLowerCase();

    card.innerHTML = `
      <img src="${s.url}" alt="${s.title}" loading="lazy">
      <div class="schematic-card-title">${escapeHtml(s.title)}</div>
    `;

    card.addEventListener("click", () => selectSchematic(s.url, s.title));
    schematicsGridView.appendChild(card);
  });
}

function selectSchematic(url, title) {
  schematicImg.src = url;
  previewTitle.textContent = "Schematic: " + title;
  btnExternalLink.href = url;
  resetZoom();
  switchPreviewMode("schematic");
}

// Render Videos
function renderVideosList(videos) {
  videosListView.innerHTML = "";
  videos.forEach(v => {
    const card = document.createElement("div");
    card.className = "doc-card";
    card.dataset.id = v.id;
    card.dataset.search = (v.title + " " + v.creator + " " + v.category + " " + v.summary).toLowerCase();

    card.innerHTML = `
      <div class="doc-card-header">
        <span class="doc-card-title">${escapeHtml(v.title)}</span>
      </div>
      <div class="doc-card-meta">
        <span class="tag-badge">${v.category}</span>
        <span>•</span>
        <span>${escapeHtml(v.creator)}</span>
      </div>
    `;

    card.addEventListener("click", () => selectVideo(v));
    videosListView.appendChild(card);
  });
}

function selectVideo(video) {
  document.querySelectorAll("#videosListView .doc-card").forEach(c => {
    c.classList.toggle("active", c.dataset.id === video.id);
  });

  videoFrame.src = video.embed_url;
  videoMetaTitle.textContent = video.title;
  videoMetaCreator.textContent = `${video.creator} • ${video.category}`;
  videoMetaSummary.textContent = video.summary;
  previewTitle.textContent = "Video: " + video.title;
  btnExternalLink.href = video.url;
  switchPreviewMode("video");
}

// Render Stoppages
function renderStoppagesList(stoppages) {
  stoppagesListView.innerHTML = "";
  stoppages.forEach((s, idx) => {
    const card = document.createElement("div");
    card.className = "stoppage-card";
    card.dataset.id = "pos-" + (idx + 1);
    card.dataset.search = (s.position + " " + s.short_desc + " " + s.causes.join(" ") + " " + s.action).toLowerCase();

    card.innerHTML = `
      <div class="stoppage-card-title">${escapeHtml(s.position)}</div>
      <div class="stoppage-card-sub">${escapeHtml(s.short_desc)}</div>
    `;

    card.addEventListener("click", () => {
      document.querySelectorAll("#stoppagesListView .stoppage-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      previewTitle.textContent = s.position;
      switchPreviewMode("dossier");
    });

    stoppagesListView.appendChild(card);
  });
}

// Switch Left Library Tabs
function switchLibraryTab(tabName) {
  document.querySelectorAll(".lib-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  manualsListView.classList.toggle("hidden", tabName !== "manuals");
  schematicsGridView.classList.toggle("hidden", tabName !== "schematics");
  videosListView.classList.toggle("hidden", tabName !== "videos");
  stoppagesListView.classList.toggle("hidden", tabName !== "stoppages");

  manualsListView.classList.toggle("active", tabName === "manuals");
  schematicsGridView.classList.toggle("active", tabName === "schematics");
  videosListView.classList.toggle("active", tabName === "videos");
  stoppagesListView.classList.toggle("active", tabName === "stoppages");

  tabFilterInput.value = "";
  filterCurrentTab();
}

// Filter Cards Inside Active Tab
function filterCurrentTab() {
  const query = tabFilterInput.value.toLowerCase().trim();
  const activeContainer = document.querySelector(".library-content-area > :not(.hidden)");
  if (!activeContainer) return;

  const cards = activeContainer.children;
  for (let card of cards) {
    const text = card.dataset.search || "";
    card.style.display = text.includes(query) ? "" : "none";
  }
}

// Switch Center Preview Mode
function switchPreviewMode(mode) {
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  pdfStage.classList.toggle("hidden", mode !== "pdf");
  schematicStage.classList.toggle("hidden", mode !== "schematic");
  videoStage.classList.toggle("hidden", mode !== "video");
  dossierStage.classList.toggle("hidden", mode !== "dossier");

  pdfStage.classList.toggle("active", mode === "pdf");
  schematicStage.classList.toggle("active", mode === "schematic");
  videoStage.classList.toggle("active", mode === "video");
  dossierStage.classList.toggle("active", mode === "dossier");

  if (mode === "dossier") {
    previewTitle.textContent = "Workshop Specifications & Diagnostic Standards";
  }
}

// Schematic Zoom Handlers
function adjustZoom(delta) {
  currentSchematicZoom = Math.max(0.4, Math.min(4.0, currentSchematicZoom + delta));
  schematicImg.style.transform = `scale(${currentSchematicZoom})`;
  zoomLevelText.textContent = `${Math.round(currentSchematicZoom * 100)}%`;
}

function resetZoom() {
  currentSchematicZoom = 1.0;
  schematicImg.style.transform = "scale(1)";
  zoomLevelText.textContent = "100%";
}

// Global Live Search
async function executeGlobalSearch(q) {
  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}&firearm_id=${currentFirearm}`);
    if (!res.ok) return;
    const data = await res.json();
    const results = data.results;

    if (results.length === 0) {
      searchResultsPopup.innerHTML = `<div style="padding: 12px; color: var(--text-dim); text-align: center;">No matches found for "${escapeHtml(q)}".</div>`;
      searchResultsPopup.classList.remove("hidden");
      return;
    }

    searchResultsPopup.innerHTML = "";
    results.slice(0, 8).forEach(r => {
      const row = document.createElement("div");
      row.className = "search-result-item";
      row.innerHTML = `
        <div>
          <div class="item-title">${escapeHtml(r.title)}</div>
          <div class="item-sub">${escapeHtml(r.subtitle)}</div>
        </div>
        <span class="item-tag">${r.type}</span>
      `;

      row.addEventListener("click", () => {
        searchResultsPopup.classList.add("hidden");
        globalSearchInput.value = "";
        
        if (r.action === "open_manual") {
          switchLibraryTab("manuals");
          selectManual(r.target, r.title);
        } else if (r.action === "open_video") {
          switchLibraryTab("videos");
          const v = firearmData.videos.find(item => item.id === r.target);
          if (v) selectVideo(v);
        } else if (r.action === "open_stoppage" || r.action === "open_spec") {
          switchPreviewMode("dossier");
        }
      });

      searchResultsPopup.appendChild(row);
    });

    searchResultsPopup.classList.remove("hidden");
  } catch (err) {
    console.error("Search error:", err);
  }
}

// AI Assistant Chat Handler
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
    const payload = {
      firearm_id: currentFirearm,
      messages: [{ role: "user", content: query }],
      backend: activeLLMBackend,
      model: activeLLMModel !== "auto" ? activeLLMModel : null
    };

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    typingMsg.remove();

    if (!res.ok) {
      appendMessage("assistant", "⚠️ Error: Unable to query AI assistant. Ensure local backend is accessible.");
      return;
    }

    const data = await res.json();
    appendMessage("assistant", data.reply, data.backend_used);

  } catch (err) {
    typingMsg.remove();
    appendMessage("assistant", "⚠️ Network error connecting to armorer server.");
  } finally {
    sendBtn.disabled = false;
  }
}

function appendMessage(role, text, backend = null) {
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
}

// Markdown Formatter
function formatMarkdown(text) {
  let out = escapeHtml(text);
  
  // Headers
  out = out.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  out = out.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  
  // Bold & Italic
  out = out.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*(.*?)\*/g, "<em>$1</em>");
  
  // Inline Code
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  
  // Bullet lists
  out = out.replace(/^\* (.*$)/gim, "<li>$1</li>");
  out = out.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

  // Numbered lists
  out = out.replace(/^\d+\. (.*$)/gim, "<li>$1</li>");

  // Line breaks
  out = out.replace(/\n\n/g, "<p></p>");
  out = out.replace(/\n/g, "<br>");

  return out;
}

// LLM Backends & Health Check
async function checkLLMBackends() {
  try {
    const res = await fetch("/api/llm/backends");
    if (!res.ok) throw new Error();
    const data = await res.json();
    availableBackends = data.backends;
    updateStatusPill();
    populateSettingsDropdowns();
  } catch (e) {
    llmStatusText.textContent = "Offline Mode";
    document.querySelector(".status-dot").className = "status-dot offline";
  }
}

function updateStatusPill() {
  const dot = document.querySelector(".status-dot");
  
  const ollama = availableBackends.find(b => b.id === "ollama");
  const lmstudio = availableBackends.find(b => b.id === "lmstudio");

  if (activeLLMBackend === "builtin") {
    llmStatusText.textContent = "Built-in Expert";
    dot.className = "status-dot pulsing";
  } else if (activeLLMBackend === "ollama" && ollama?.status === "online") {
    llmStatusText.textContent = `Ollama (${ollama.default_model})`;
    dot.className = "status-dot pulsing";
  } else if (activeLLMBackend === "lmstudio" && lmstudio?.status === "online") {
    llmStatusText.textContent = `LM Studio (${lmstudio.default_model})`;
    dot.className = "status-dot pulsing";
  } else {
    // Auto Mode: check what's online
    if (ollama && ollama.status === "online") {
      llmStatusText.textContent = `Ollama (${ollama.default_model})`;
      dot.className = "status-dot pulsing";
    } else if (lmstudio && lmstudio.status === "online") {
      llmStatusText.textContent = `LM Studio (${lmstudio.default_model})`;
      dot.className = "status-dot pulsing";
    } else {
      llmStatusText.textContent = "Built-in Expert Engine";
      dot.className = "status-dot pulsing";
    }
  }
}

function populateSettingsDropdowns() {
  updateModelDropdown();
}

function updateModelDropdown() {
  const selectedBackend = llmBackendSelect.value;
  llmModelSelect.innerHTML = '<option value="auto">Auto / Default Loaded</option>';

  let backendObj = null;
  if (selectedBackend === "auto") {
    backendObj = availableBackends.find(b => b.status === "online" && b.id !== "builtin");
  } else {
    backendObj = availableBackends.find(b => b.id === selectedBackend);
  }

  if (backendObj && backendObj.models && backendObj.models.length > 0) {
    backendObj.models.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m;
      opt.textContent = m;
      llmModelSelect.appendChild(opt);
    });
  }
}

async function testLLMConnection() {
  connTestResult.style.display = "block";
  connTestResult.style.color = "var(--brass-accent)";
  connTestResult.textContent = "Testing connection...";

  try {
    const res = await fetch("/api/llm/backends");
    const data = await res.json();
    availableBackends = data.backends;
    const selected = llmBackendSelect.value;
    
    if (selected === "builtin") {
      connTestResult.style.color = "var(--accent-green)";
      connTestResult.textContent = "✓ Built-in Armorer Knowledge Engine active.";
      return;
    }

    const b = availableBackends.find(item => item.id === selected);
    if (b && b.status === "online") {
      connTestResult.style.color = "var(--accent-green)";
      connTestResult.textContent = `✓ ${b.name} reachable! Found ${b.models.length} model(s).`;
    } else {
      connTestResult.style.color = "var(--accent-amber)";
      connTestResult.textContent = `⚠️ Provider ${selected} appears offline. Assistant will automatically use the built-in knowledge engine.`;
    }
  } catch (err) {
    connTestResult.style.color = "var(--accent-red)";
    connTestResult.textContent = "Connection test failed.";
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
