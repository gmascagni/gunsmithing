// Armorer's Workbench — Frontend Logic & Hybrid AI Controller (Local + Web Cloud)

let currentFirearm = "Lewis_Automatic_Machine_Gun";
let firearmData = null;
let currentSchematicZoom = 1.0;
let activeLLMBackend = "auto";
let activeLLMModel = "auto";
let activeLLMEndpoint = "";
let activeLLMApiKey = "";
let availableBackends = [];
let currentMobileView = "library"; // "library", "preview", "assistant"

// Armory & Catalog State
let availableFirearmsList = [];
let activeGunsmithTask = "all";
let catalogSelectedMfg = "all";
let catalogSelectedCat = "all";

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

const panelLibrary = document.getElementById("panelLibrary");
const panelPreview = document.getElementById("panelPreview");
const panelAssistant = document.getElementById("panelAssistant");

const manualsListView = document.getElementById("manualsListView");
const schematicsGridView = document.getElementById("schematicsGridView");
const videosListView = document.getElementById("videosListView");
const stoppagesListView = document.getElementById("stoppagesListView");

const globalSearchInput = document.getElementById("globalSearchInput");
const searchResultsPopup = document.getElementById("searchResultsPopup");
const tabFilterInput = document.getElementById("tabFilterInput");
const firearmSelect = document.getElementById("firearmSelect");

// Armory & Bench Switcher Elements
const openGunCatalogBtn = document.getElementById("openGunCatalogBtn");
const sidebarSwitchGunBtn = document.getElementById("sidebarSwitchGunBtn");
const gunCatalogModal = document.getElementById("gunCatalogModal");
const closeCatalogBtn = document.getElementById("closeCatalogBtn");
const catalogSearchInput = document.getElementById("catalogSearchInput");
const clearCatalogSearchBtn = document.getElementById("clearCatalogSearchBtn");
const mfgFilterChips = document.getElementById("mfgFilterChips");
const catFilterChips = document.getElementById("catFilterChips");
const catalogGrid = document.getElementById("catalogGrid");

const headerGunTitle = document.getElementById("headerGunTitle");
const headerGunMfg = document.getElementById("headerGunMfg");
const benchCardMfg = document.getElementById("benchCardMfg");
const benchCardCategory = document.getElementById("benchCardCategory");
const benchCardTitle = document.getElementById("benchCardTitle");
const benchCardSub = document.getElementById("benchCardSub");
const benchCardCalibers = document.getElementById("benchCardCalibers");

const activeTaskLabel = document.getElementById("activeTaskLabel");
const pdfDocName = document.getElementById("pdfDocName");
const btnPdfFullscreen = document.getElementById("btnPdfFullscreen");
const btnPdfDownload = document.getElementById("btnPdfDownload");
const pdfMobileDocName = document.getElementById("pdfMobileDocName");

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
const llmEndpointInput = document.getElementById("llmEndpointInput");
const llmApiKeyInput = document.getElementById("llmApiKeyInput");
const toggleKeyVisibilityBtn = document.getElementById("toggleKeyVisibilityBtn");
const endpointGroup = document.getElementById("endpointGroup");
const apiKeyGroup = document.getElementById("apiKeyGroup");
const endpointLabel = document.getElementById("endpointLabel");
const endpointHint = document.getElementById("endpointHint");
const apiKeyHint = document.getElementById("apiKeyHint");
const testConnBtn = document.getElementById("testConnBtn");
const connTestResult = document.getElementById("connTestResult");

// Mobile Elements
const mobileConnectBtn = document.getElementById("mobileConnectBtn");
const mobileDialog = document.getElementById("mobileDialog");
const closeMobileDialogBtn = document.getElementById("closeMobileDialogBtn");
const closeMobileDialogBtn2 = document.getElementById("closeMobileDialogBtn2");
const networkUrlInput = document.getElementById("networkUrlInput");
const copyUrlBtn = document.getElementById("copyUrlBtn");
const qrCanvas = document.getElementById("qrCanvas");

// Initialize Application
document.addEventListener("DOMContentLoaded", async () => {
  setupEventListeners();
  initMobileView();
  loadSavedSettings();
  
  // 1. Load Armory Catalog metadata for instant switching and filtering
  try {
    await loadAllFirearmsList();
  } catch (err) {
    console.warn("Could not load firearms catalog list:", err);
  }

  // 2. ALWAYS load active firearm platform FIRST so UI renders immediately
  try {
    await loadFirearm(currentFirearm);
  } catch (err) {
    console.error("Failed to load initial firearm:", err);
  }

  // 3. Probe local backend / LLM endpoints if running with Python backend
  const isStatic = window.location.hostname.includes("github.io") || window.location.protocol === "file:";
  if (!isStatic) {
    try {
      await checkLLMBackends();
    } catch (e) {}
    try {
      await loadNetworkInfo();
    } catch (e) {}
  } else {
    // GitHub Pages static mode status
    if (llmStatusText && llmStatusPill) {
      llmStatusText.textContent = "Offline Knowledge Engine";
      const dot = llmStatusPill.querySelector(".status-dot");
      if (dot) dot.className = "status-dot online";
    }
  }
});

// Setup UI Events
function setupEventListeners() {
  // Firearm Catalog & Bench Switcher Modal Controls
  if (openGunCatalogBtn) {
    openGunCatalogBtn.addEventListener("click", openCatalogModal);
  }
  if (sidebarSwitchGunBtn) {
    sidebarSwitchGunBtn.addEventListener("click", openCatalogModal);
  }
  if (closeCatalogBtn) {
    closeCatalogBtn.addEventListener("click", closeCatalogModal);
  }
  if (gunCatalogModal) {
    gunCatalogModal.addEventListener("click", (e) => {
      if (e.target === gunCatalogModal) closeCatalogModal();
    });
  }

  // Catalog Instant Search & Clear Button
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (clearCatalogSearchBtn) {
        clearCatalogSearchBtn.classList.toggle("hidden", val.length === 0);
      }
      renderCatalogGrid(val, catalogSelectedMfg, catalogSelectedCat);
    });
  }
  if (clearCatalogSearchBtn) {
    clearCatalogSearchBtn.addEventListener("click", () => {
      catalogSearchInput.value = "";
      clearCatalogSearchBtn.classList.add("hidden");
      renderCatalogGrid("", catalogSelectedMfg, catalogSelectedCat);
      catalogSearchInput.focus();
    });
  }

  // Manufacturer Category Chips in Modal
  document.querySelectorAll("#mfgFilterChips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#mfgFilterChips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      catalogSelectedMfg = chip.dataset.mfg || "all";
      renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat);
    });
  });

  // Weapon Type Category Chips in Modal
  document.querySelectorAll("#catFilterChips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#catFilterChips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      catalogSelectedCat = chip.dataset.cat || "all";
      renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat);
    });
  });

  // Gunsmith Operation / Task Quick Filter Pills
  document.querySelectorAll(".task-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      applyTaskFilter(pill.dataset.task);
    });
  });

  // Firearm Platform Selector (hidden fallback)
  if (firearmSelect) {
    firearmSelect.addEventListener("change", async (e) => {
      const selected = e.target.value;
      if (selected && selected !== currentFirearm) {
        currentFirearm = selected;
        await loadFirearm(currentFirearm);
        if (firearmData) {
          addMessage(
            "assistant",
            `Switched active platform to **${escapeHtml(firearmData.name)}** (${escapeHtml(firearmData.subtitle)}).\n\nLoaded **${firearmData.manuals.length} manuals**, **${firearmData.schematics.length} schematic plates**, and **${firearmData.videos.length} bench video guides**. How can I assist you on the bench?`,
            "Platform Switched"
          );
        }
      }
    });
  }
        currentFirearm = selected;
        await loadFirearm(currentFirearm);
        if (firearmData) {
          addMessage(
            "assistant",
            `Switched active platform to **${escapeHtml(firearmData.name)}** (${escapeHtml(firearmData.subtitle)}).\n\nLoaded **${firearmData.manuals.length} manuals**, **${firearmData.schematics.length} schematic plates**, and **${firearmData.videos.length} bench video guides**. How can I assist you on the bench?`,
            "Platform Switched"
          );
        }
      }
    });
  }

  // Mode switcher tabs (top of center preview)
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => switchPreviewMode(btn.dataset.mode));
  });

  // Library Navigation Tabs (left panel)
  document.querySelectorAll(".lib-tab").forEach(tab => {
    tab.addEventListener("click", () => switchLibraryTab(tab.dataset.tab));
  });

  // Mobile Bottom Navigation Bar View Switcher
  document.querySelectorAll(".mobile-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => setMobileView(btn.dataset.view));
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

  // Touch Support for Schematic Canvas (Pinch-to-zoom & single-finger pan)
  setupTouchSchematic();

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

  // Settings Dialog (Native Accessible <dialog>)
  llmStatusPill.addEventListener("click", () => {
    settingsDialog.showModal();
    updateSettingsFields();
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

  llmBackendSelect.addEventListener("change", updateSettingsFields);

  document.getElementById("llmTempRange").addEventListener("input", (e) => {
    document.getElementById("tempVal").textContent = e.target.value;
  });

  toggleKeyVisibilityBtn.addEventListener("click", () => {
    if (llmApiKeyInput.type === "password") {
      llmApiKeyInput.type = "text";
      toggleKeyVisibilityBtn.textContent = "Hide";
    } else {
      llmApiKeyInput.type = "password";
      toggleKeyVisibilityBtn.textContent = "Show";
    }
  });

  document.getElementById("settingsForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    activeLLMBackend = llmBackendSelect.value;
    activeLLMModel = llmModelSelect.value;
    activeLLMEndpoint = llmEndpointInput.value.trim();
    activeLLMApiKey = llmApiKeyInput.value.trim();

    saveSettings();
    updateStatusPill();
    settingsDialog.close();

    // Persist to server config
    try {
      await fetch("/api/llm/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          backend: activeLLMBackend,
          model: activeLLMModel,
          endpoint: activeLLMEndpoint,
          api_key: activeLLMApiKey,
          temperature: parseFloat(document.getElementById("llmTempRange").value)
        })
      });
    } catch (err) {
      console.warn("Could not sync config to server:", err);
    }
  });

  testConnBtn.addEventListener("click", testLLMConnection);

  // Mobile Connect Modal
  mobileConnectBtn.addEventListener("click", () => {
    mobileDialog.showModal();
    renderQRCode();
  });

  closeMobileDialogBtn.addEventListener("click", () => mobileDialog.close());
  closeMobileDialogBtn2.addEventListener("click", () => mobileDialog.close());

  copyUrlBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(networkUrlInput.value);
    const origText = copyUrlBtn.textContent;
    copyUrlBtn.textContent = "Copied!";
    setTimeout(() => { copyUrlBtn.textContent = origText; }, 2000);
  });
}

// LocalStorage Settings Persistence
function loadSavedSettings() {
  activeLLMBackend = localStorage.getItem("armorer_llm_backend") || "auto";
  activeLLMModel = localStorage.getItem("armorer_llm_model") || "auto";
  activeLLMEndpoint = localStorage.getItem("armorer_llm_endpoint") || "";
  activeLLMApiKey = localStorage.getItem("armorer_llm_api_key") || "";

  llmBackendSelect.value = activeLLMBackend;
  if (activeLLMEndpoint) llmEndpointInput.value = activeLLMEndpoint;
  if (activeLLMApiKey) llmApiKeyInput.value = activeLLMApiKey;
}

function saveSettings() {
  localStorage.setItem("armorer_llm_backend", activeLLMBackend);
  localStorage.setItem("armorer_llm_model", activeLLMModel);
  localStorage.setItem("armorer_llm_endpoint", activeLLMEndpoint);
  localStorage.setItem("armorer_llm_api_key", activeLLMApiKey);
}

// Update Settings Fields based on selected Provider (Local Machine vs Web Cloud)
function updateSettingsFields() {
  const backend = llmBackendSelect.value;
  llmModelSelect.innerHTML = '<option value="auto">Auto / Recommended Default</option>';

  if (backend === "gemini") {
    endpointGroup.style.display = "none";
    apiKeyGroup.style.display = "block";
    apiKeyHint.innerHTML = 'Saved securely in your browser. Get a free API key at <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color: var(--brass-accent);">aistudio.google.com</a>.';
    const geminiModels = [
      { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash (Fast, High Quality - Recommended)" },
      { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash (Next-Gen Fast Inference)" },
      { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro (Deep Reasoning & Analysis)" }
    ];
    geminiModels.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.name;
      if (m.id === activeLLMModel) opt.selected = true;
      llmModelSelect.appendChild(opt);
    });
  } else if (backend === "openai") {
    endpointGroup.style.display = "none";
    apiKeyGroup.style.display = "block";
    apiKeyHint.innerHTML = 'Enter your OpenAI API key from <a href="https://platform.openai.com/api-keys" target="_blank" style="color: var(--brass-accent);">platform.openai.com</a>.';
    const openaiModels = [
      { id: "gpt-4o-mini", name: "GPT-4o Mini (Fast & Cost Efficient - Recommended)" },
      { id: "gpt-4o", name: "GPT-4o (Omni Flagship Model)" }
    ];
    openaiModels.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.name;
      if (m.id === activeLLMModel) opt.selected = true;
      llmModelSelect.appendChild(opt);
    });
  } else if (backend === "custom_web") {
    endpointGroup.style.display = "block";
    apiKeyGroup.style.display = "block";
    endpointLabel.textContent = "Web Cloud API Base URL:";
    llmEndpointInput.placeholder = "https://openrouter.ai/api/v1/chat/completions";
    endpointHint.textContent = "Compatible with OpenRouter, Groq, DeepSeek, Together, or any cloud OpenAI-compliant API.";
    apiKeyHint.textContent = "Enter your cloud API token / Bearer key.";
    const customModels = [
      { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B (Groq / OpenRouter)" },
      { id: "deepseek-chat", name: "DeepSeek-V3" },
      { id: "custom", name: "Custom / As Configured on Endpoint" }
    ];
    customModels.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.name;
      if (m.id === activeLLMModel) opt.selected = true;
      llmModelSelect.appendChild(opt);
    });
  } else if (backend === "ollama") {
    endpointGroup.style.display = "block";
    apiKeyGroup.style.display = "none";
    endpointLabel.textContent = "Ollama Machine Host / LAN IP:";
    llmEndpointInput.placeholder = "http://127.0.0.1:11434";
    endpointHint.textContent = "Default is localhost, or enter your dedicated LAN AI machine IP (e.g. http://192.168.1.150:11434).";

    const ollamaBackend = availableBackends.find(b => b.id === "ollama");
    if (ollamaBackend && ollamaBackend.models) {
      ollamaBackend.models.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        if (m === activeLLMModel) opt.selected = true;
        llmModelSelect.appendChild(opt);
      });
    }
  } else if (backend === "lmstudio") {
    endpointGroup.style.display = "block";
    apiKeyGroup.style.display = "none";
    endpointLabel.textContent = "LM Studio Machine Host / LAN IP:";
    llmEndpointInput.placeholder = "http://127.0.0.1:1234/v1";
    endpointHint.textContent = "Default is localhost, or enter your dedicated LAN AI machine IP (e.g. http://192.168.1.150:1234/v1).";

    const lmBackend = availableBackends.find(b => b.id === "lmstudio");
    if (lmBackend && lmBackend.models) {
      lmBackend.models.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        if (m === activeLLMModel) opt.selected = true;
        llmModelSelect.appendChild(opt);
      });
    }
  } else {
    // Auto or Builtin
    endpointGroup.style.display = "none";
    apiKeyGroup.style.display = "none";
  }
}

// Test Connection for Any Provider (Local Machine or Web Cloud)
async function testLLMConnection() {
  connTestResult.style.display = "block";
  connTestResult.style.color = "var(--brass-accent)";
  connTestResult.textContent = "Testing connection to selected AI provider...";

  const backend = llmBackendSelect.value;
  const endpoint = llmEndpointInput.value.trim();
  const apiKey = llmApiKeyInput.value.trim();
  const model = llmModelSelect.value;

  try {
    const res = await fetch("/api/llm/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        backend: backend,
        endpoint: endpoint,
        api_key: apiKey,
        model: model
      })
    });
    const data = await res.json();
    if (data.success) {
      connTestResult.style.color = "var(--accent-green)";
      connTestResult.textContent = `✓ ${data.message}`;
    } else {
      connTestResult.style.color = "var(--accent-red)";
      connTestResult.textContent = `⚠️ ${data.error}`;
    }
  } catch (err) {
    connTestResult.style.color = "var(--accent-red)";
    connTestResult.textContent = "⚠️ Network connection test failed. Please verify endpoint URL.";
  }
}

// Mobile View Controller
function initMobileView() {
  if (window.innerWidth <= 900) {
    setMobileView("library");
  } else {
    panelLibrary.classList.remove("mobile-active");
    panelPreview.classList.remove("mobile-active");
    panelAssistant.classList.remove("mobile-active");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 900) {
      setMobileView(currentMobileView);
    } else {
      panelLibrary.classList.remove("mobile-active");
      panelPreview.classList.remove("mobile-active");
      panelAssistant.classList.remove("mobile-active");
    }
  });
}

function setMobileView(viewName) {
  currentMobileView = viewName;
  document.querySelectorAll(".mobile-nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });

  panelLibrary.classList.toggle("mobile-active", viewName === "library");
  panelPreview.classList.toggle("mobile-active", viewName === "preview");
  panelAssistant.classList.toggle("mobile-active", viewName === "assistant");
}

// Touch Gestures for Schematics
function setupTouchSchematic() {
  let touchStartDist = 0;
  let initialZoom = 1.0;

  schematicCanvas.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      touchStartDist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      initialZoom = currentSchematicZoom;
    }
  }, { passive: true });

  schematicCanvas.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2 && touchStartDist > 0) {
      const currentDist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      const factor = currentDist / touchStartDist;
      currentSchematicZoom = Math.max(0.4, Math.min(4.0, initialZoom * factor));
      schematicImg.style.transform = `scale(${currentSchematicZoom})`;
      zoomLevelText.textContent = `${Math.round(currentSchematicZoom * 100)}%`;
    }
  }, { passive: true });

  schematicCanvas.addEventListener("touchend", () => {
    touchStartDist = 0;
  });
}

// Network Info & QR Code
async function loadNetworkInfo() {
  try {
    const res = await fetch("/api/network-info");
    if (!res.ok) return;
    const info = await res.json();
    if (info.network_url) {
      networkUrlInput.value = info.network_url;
    }
  } catch (err) {
    console.error("Network info error:", err);
  }
}

function renderQRCode() {
  const qrImg = new Image();
  qrImg.src = "/api/network-qr?t=" + Date.now();
  qrImg.onload = () => {
    const ctx = qrCanvas.getContext("2d");
    ctx.clearRect(0, 0, qrCanvas.width, qrCanvas.height);
    ctx.drawImage(qrImg, 0, 0, qrCanvas.width, qrCanvas.height);
  };
}

// Load Firearm Data
async function loadFirearm(firearmId) {
  try {
    if (window.STATIC_FIREARMS_DATA && window.STATIC_FIREARMS_DATA[firearmId]) {
      firearmData = window.STATIC_FIREARMS_DATA[firearmId];
    } else {
      const res = await fetch(`/api/firearms/${firearmId}`);
      if (!res.ok) throw new Error("Failed to load firearm data");
      firearmData = await res.json();
    }

    currentFirearm = firearmId;
    if (firearmSelect) firearmSelect.value = firearmId;

    // Update Header Displays
    if (headerGunTitle) headerGunTitle.textContent = firearmData.name;
    if (headerGunMfg) headerGunMfg.textContent = firearmData.manufacturer || "Workshop";

    // Update Sidebar Active Bench Card
    if (benchCardMfg) benchCardMfg.textContent = firearmData.manufacturer || "Workshop";
    if (benchCardCategory) benchCardCategory.textContent = firearmData.category || "Firearms";
    if (benchCardTitle) benchCardTitle.textContent = firearmData.name;
    if (benchCardSub) benchCardSub.textContent = firearmData.subtitle || "";
    if (benchCardCalibers) {
      benchCardCalibers.textContent = (firearmData.calibers && firearmData.calibers.length > 0)
        ? "Calibers: " + firearmData.calibers.join(" • ")
        : (firearmData.models && firearmData.models.length > 0 ? "Models: " + firearmData.models.slice(0, 4).join(" • ") : "");
    }

    document.getElementById("manualsCount").textContent = firearmData.manuals.length;
    document.getElementById("schematicsCount").textContent = firearmData.schematics.length;
    document.getElementById("videosCount").textContent = firearmData.videos.length;

    renderManualsList(firearmData.manuals);
    renderSchematicsGrid(firearmData.schematics);
    renderVideosList(firearmData.videos);
    renderStoppagesList(firearmData.stoppages);
    renderDossier(firearmData);

    // Default: select the primary manual
    if (firearmData.manuals.length > 0) {
      const primary = firearmData.manuals.find(m => {
        const fn = m.filename.toLowerCase();
        return fn.includes("savage") || fn.includes("armorer") || fn.includes("92fs") || fn.includes("1022") || fn.includes("practical");
      }) || firearmData.manuals[0];
      selectManual(primary.filename, primary.title, false);
    }

    if (firearmData.schematics.length > 0) {
      schematicImg.src = firearmData.schematics[0].url;
      btnExternalLink.href = firearmData.schematics[0].url;
    }

    // Refresh catalog grid if open to show active state
    renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat);
  } catch (err) {
    console.error("Error loading firearm:", err);
  }
}

// Armory & Firearm Catalog Controller
async function loadAllFirearmsList() {
  if (window.STATIC_FIREARMS_DATA) {
    availableFirearmsList = Object.values(window.STATIC_FIREARMS_DATA).map(f => ({
      id: f.id,
      name: f.name,
      subtitle: f.subtitle,
      manufacturer: f.manufacturer || "General Workshop",
      category: f.category || "Firearms",
      models: f.models || [],
      calibers: f.calibers || [],
      key_tasks: f.key_tasks || [],
      manuals_count: (f.manuals || []).length,
      schematics_count: (f.schematics || []).length,
      videos_count: (f.videos || []).length,
      stoppages_count: (f.stoppages || []).length
    }));
    return;
  }
  try {
    const res = await fetch("/api/firearms");
    if (res.ok) {
      const data = await res.json();
      availableFirearmsList = data.firearms || [];
    }
  } catch (err) {
    console.warn("Could not load firearms from API:", err);
  }
}

function openCatalogModal() {
  if (!gunCatalogModal) return;
  gunCatalogModal.showModal();
  renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat);
  if (catalogSearchInput) {
    setTimeout(() => catalogSearchInput.focus(), 100);
  }
}

function closeCatalogModal() {
  if (!gunCatalogModal) return;
  gunCatalogModal.close();
}

function resetCatalogFilters() {
  catalogSelectedMfg = "all";
  catalogSelectedCat = "all";
  if (catalogSearchInput) catalogSearchInput.value = "";
  if (clearCatalogSearchBtn) clearCatalogSearchBtn.classList.add("hidden");
  document.querySelectorAll("#mfgFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.mfg === "all"));
  document.querySelectorAll("#catFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.cat === "all"));
  renderCatalogGrid("", "all", "all");
}

function selectFirearmFromCatalog(firearmId) {
  if (firearmId !== currentFirearm) {
    currentFirearm = firearmId;
    loadFirearm(currentFirearm);
    if (firearmData) {
      addMessage(
        "assistant",
        `Switched active platform to **${escapeHtml(firearmData.name)}** (${escapeHtml(firearmData.subtitle)}).\n\nLoaded **${firearmData.manuals.length} manuals**, **${firearmData.schematics.length} schematic plates**, and **${firearmData.videos.length} bench video guides**. Ready for bench work!`,
        "Platform Switched"
      );
    }
  }
  closeCatalogModal();
}

function renderCatalogGrid(query = "", filterMfg = "all", filterCat = "all") {
  if (!catalogGrid) return;
  catalogGrid.innerHTML = "";
  const q = (query || "").toLowerCase().trim();

  // If list not populated yet, build comprehensive fallback list
  if (availableFirearmsList.length === 0) {
    availableFirearmsList = [
      {
        id: "Lewis_Automatic_Machine_Gun",
        name: "Lewis Automatic Machine Gun",
        subtitle: "Model 1914 / 1917 / 1918 (.303 British & .30-06 Springfield)",
        manufacturer: "Savage Arms / BSA",
        category: "Machine Guns",
        models: ["Model 1914", "Model 1917", "Model 1918 Aircraft"],
        calibers: [".303 British", ".30-06 Springfield"],
        key_tasks: ["Spring Tension (12-14 lbs)", "Striker Protrusion", "Gas Regulator (S/L)", "Field Strip", "Pan Feed Clearing"],
        manuals_count: 8,
        schematics_count: 59,
        videos_count: 9
      },
      {
        id: "Glock_Pistols",
        name: "Glock Safe-Action Pistols",
        subtitle: "Generations 1–5 (9x19mm, .40 S&W, .45 ACP, 10mm Auto)",
        manufacturer: "Glock",
        category: "Pistols",
        models: ["Glock 17", "Glock 19", "Glock 21", "Glock 22", "Glock 26", "Glock 34", "Glock 43"],
        calibers: ["9x19mm", ".40 S&W", ".45 ACP", "10mm Auto"],
        key_tasks: ["Cruciform Sear Check (66%)", "5-Drop Lube Protocol", "25¢ Trigger Polish", "30274 Ejector Bar Upgrade", "Detail Strip"],
        manuals_count: 4,
        schematics_count: 197,
        videos_count: 8
      },
      {
        id: "Ruger_Firearms",
        name: "Ruger Firearms Technical Collection",
        subtitle: "10/22 Carbine, Mark I–IV Target Pistols & GP100 Revolvers",
        manufacturer: "Ruger",
        category: "Rifles / Pistols / Revolvers",
        models: ["10/22 Carbine", "Mark I", "Mark II", "Mark III", "Mark IV", "GP100 Revolver"],
        calibers: [".22 LR", ".357 Magnum", ".38 Special"],
        key_tasks: ["10/22 V-Block Torque (25-30 in-lbs)", "Rotary Mag Tension (1-1/4 turns)", "Mark Series Hammer Strut Alignment", "GP100 Cylinder Gap (0.004\"-0.007\")", "Trigger Shimming"],
        manuals_count: 5,
        schematics_count: 51,
        videos_count: 9
      },
      {
        id: "Beretta_Pistols",
        name: "Beretta 92 / M9 Series Pistols",
        subtitle: "92FS, M9, 96, Brigadier & Inox (9x19mm NATO & .40 S&W)",
        manufacturer: "Beretta",
        category: "Pistols",
        models: ["Beretta 92FS", "Beretta M9", "Beretta 92F", "Beretta 96", "Beretta 92D", "Beretta Brigadier", "Beretta Inox"],
        calibers: ["9x19mm NATO", ".40 S&W"],
        key_tasks: ["Dead Trigger Spring Fix", "Locking Block Inspection (15k rds)", "Factory 92D Hammer Spring (8 lbs)", "Slide Detail Strip", "Extractor Carbon Cleaning"],
        manuals_count: 3,
        schematics_count: 75,
        videos_count: 8
      },
      {
        id: "General_Gunsmithing",
        name: "General Gunsmithing & Workshop Disciplines",
        subtitle: "Headspace, Chamber Casting, Machining, Bluing & Diagnostics",
        manufacturer: "General Workshop",
        category: "Workshop Disciplines",
        models: ["All Firearms", "Bolt Actions", "Lever Actions", "Semi-Autos", "Revolvers"],
        calibers: ["Rimmed", "Rimless", "Belted Magnums", "Straight Wall"],
        key_tasks: ["Headspace (Go / No-Go / Field)", "Cerrosafe Chamber Casting", "Slow Rust & Hot Caustic Bluing", "11° Target Crowning", "Glass Bedding", "Sear Stoning"],
        manuals_count: 5,
        schematics_count: 267,
        videos_count: 8
      }
    ];
  }

  const filtered = availableFirearmsList.filter(f => {
    if (filterMfg !== "all") {
      const mfgLower = (f.manufacturer || "").toLowerCase();
      if (!mfgLower.includes(filterMfg.toLowerCase())) return false;
    }
    if (filterCat !== "all") {
      const catLower = (f.category || "").toLowerCase();
      if (!catLower.includes(filterCat.toLowerCase())) return false;
    }
    if (q) {
      const blob = [
        f.name,
        f.subtitle,
        f.manufacturer,
        f.category,
        ...(f.models || []),
        ...(f.calibers || []),
        ...(f.key_tasks || [])
      ].join(" ").toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-dim);">
        <p style="font-size: 15px; margin-bottom: 8px;">No firearms or shop platforms match your filter.</p>
        <button class="btn-secondary" onclick="resetCatalogFilters()" style="margin-top: 10px;">Reset Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(f => {
    const isActive = f.id === currentFirearm;
    const card = document.createElement("div");
    card.className = `catalog-card ${isActive ? "active-on-bench" : ""}`;
    card.dataset.id = f.id;

    const modelsHtml = (f.models || []).slice(0, 6).map(m => `<span class="model-tag">${escapeHtml(m)}</span>`).join("");
    const tasksHtml = (f.key_tasks || []).slice(0, 4).map(t => `<span class="task-tag">${escapeHtml(t)}</span>`).join("");

    card.innerHTML = `
      <div class="catalog-card-header">
        <div class="catalog-card-header-left">
          <div class="catalog-card-badges">
            <span class="badge-mfg">${escapeHtml(f.manufacturer || "WORKSHOP")}</span>
            <span class="badge-cat">${escapeHtml(f.category || "FIREARMS")}</span>
          </div>
          <h3 class="catalog-card-title">${escapeHtml(f.name)}</h3>
          <p class="catalog-card-subtitle">${escapeHtml(f.subtitle || "")}</p>
        </div>
        ${isActive ? '<span class="bench-status-badge">ON BENCH</span>' : ''}
      </div>

      ${f.models && f.models.length > 0 ? `
        <div class="catalog-models-box">
          <span class="catalog-models-label">MODELS &amp; CALIBERS:</span>
          <div class="catalog-models-tags">${modelsHtml}</div>
        </div>
      ` : ''}

      ${f.key_tasks && f.key_tasks.length > 0 ? `
        <div class="catalog-tasks-box">${tasksHtml}</div>
      ` : ''}

      <div class="catalog-card-footer">
        <div class="catalog-card-stats">
          <span><strong>${f.manuals_count || 0}</strong> Manuals</span>
          <span>•</span>
          <span><strong>${f.schematics_count || 0}</strong> Schematics</span>
          <span>•</span>
          <span><strong>${f.videos_count || 0}</strong> Guides</span>
        </div>
        <button class="btn-put-on-bench">
          ${isActive ? '✓ Active on Bench' : '🔧 Put on Bench'}
        </button>
      </div>
    `;

    card.addEventListener("click", () => {
      selectFirearmFromCatalog(f.id);
    });

    catalogGrid.appendChild(card);
  });
}

// Render Dynamic Dossier Specifications
function renderDossier(data) {
  const container = document.querySelector("#dossierStage .dossier-inner");
  if (!container) return;

  let html = `
    <div class="dossier-header-box" style="margin-bottom: 1.25rem;">
      <h2 style="color: var(--accent); margin: 0 0 0.25rem 0; font-family: var(--font-mono); font-size: 1.3rem;">${escapeHtml(data.name)}</h2>
      <div style="color: var(--text-muted); font-size: 0.9rem;">${escapeHtml(data.subtitle)}</div>
    </div>
  `;

  // Specs grid
  if (data.specs && Object.keys(data.specs).length > 0) {
    html += `<div class="dossier-grid">`;
    for (const [key, val] of Object.entries(data.specs)) {
      const label = key.replace(/_/g, " ").toUpperCase();
      html += `
        <div class="dossier-card">
          <h3>${escapeHtml(label)}</h3>
          <div class="spec-highlight" style="font-size: 0.95rem; line-height: 1.4;">${escapeHtml(val)}</div>
        </div>
      `;
    }
    html += `</div>`;
  }

  // Stoppage / Diagnostic Matrix table
  if (data.stoppages && data.stoppages.length > 0) {
    html += `
      <div class="dossier-card" style="margin-top: 1.25rem;">
        <h3>Immediate Action &amp; Malfunction Diagnostic Matrix</h3>
        <div class="table-responsive">
          <table class="stoppage-table">
            <thead>
              <tr>
                <th style="min-width: 140px;">Condition / Position</th>
                <th>Probable Causes</th>
                <th>Armorer &amp; Bench Remedy</th>
              </tr>
            </thead>
            <tbody>
    `;
    data.stoppages.forEach(s => {
      html += `
        <tr>
          <td><strong>${escapeHtml(s.position)}</strong><br><small style="color:var(--text-muted);">${escapeHtml(s.short_desc || "")}</small></td>
          <td><ul style="margin: 0; padding-left: 1.2rem;">${(s.causes || []).map(c => `<li>${escapeHtml(c)}</li>`).join("")}</ul></td>
          <td style="color: var(--accent); font-weight: 500;">${escapeHtml(s.action)}</td>
        </tr>
      `;
    });
    html += `
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
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
    const fn = m.filename.toLowerCase();
    if (fn.includes("savage")) badgeText = "FACTORY";
    else if (fn.includes("armorer") || fn.includes("armourer")) badgeText = "ARMORER";
    else if (fn.includes("machinist")) badgeText = "MACHINING";
    else if (fn.includes("stoppages")) badgeText = "DIAGNOSTICS";
    else if (fn.includes("practical") || fn.includes("gunsmithing")) badgeText = "WORKSHOP";
    else if (fn.includes("maintenance") || fn.includes("technical")) badgeText = "TECHNICAL";

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

    card.addEventListener("click", () => selectManual(m.filename, m.title, true));
    manualsListView.appendChild(card);
  });
}

function selectManual(filename, title, switchToPreview = true) {
  document.querySelectorAll("#manualsListView .doc-card").forEach(c => {
    c.classList.toggle("active", c.dataset.id === filename);
  });

  const manualObj = (firearmData.manuals || []).find(m => m.filename === filename);
  const isStatic = window.location.hostname.includes("github.io") || window.location.protocol === "file:";
  let pdfUrl = `/api/manuals/${currentFirearm}/${filename}`;
  if (isStatic && manualObj && manualObj.url) {
    pdfUrl = manualObj.url;
  }

  if (isStatic && manualObj) {
    // On GitHub Pages: use Google Docs viewer or direct link
    pdfFrame.src = `https://docs.google.com/viewer?url=${encodeURIComponent(manualObj.url)}&embedded=true`;
    if (btnPdfFullscreen) btnPdfFullscreen.href = manualObj.github_url || manualObj.url;
    if (btnExternalLink) btnExternalLink.href = manualObj.github_url || manualObj.url;
    if (btnPdfDownload) btnPdfDownload.href = manualObj.raw_url || manualObj.url;
  } else {
    pdfFrame.src = pdfUrl;
    if (btnPdfFullscreen) btnPdfFullscreen.href = pdfUrl;
    if (btnExternalLink) btnExternalLink.href = pdfUrl;
    if (btnPdfDownload) btnPdfDownload.href = pdfUrl;
  }

  previewTitle.textContent = title;
  if (pdfDocName) pdfDocName.textContent = title;
  if (pdfMobileDocName) pdfMobileDocName.textContent = title;
  switchPreviewMode("pdf");

  if (switchToPreview && window.innerWidth <= 900) {
    setMobileView("preview");
  }
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

    card.addEventListener("click", () => selectSchematic(s.url, s.title, true));
    schematicsGridView.appendChild(card);
  });
}

function selectSchematic(url, title, switchToPreview = true) {
  schematicImg.src = url;
  previewTitle.textContent = "Schematic: " + title;
  btnExternalLink.href = url;
  resetZoom();
  switchPreviewMode("schematic");

  if (switchToPreview && window.innerWidth <= 900) {
    setMobileView("preview");
  }
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

    card.addEventListener("click", () => selectVideo(v, true));
    videosListView.appendChild(card);
  });
}

function selectVideo(video, switchToPreview = true) {
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

  if (switchToPreview && window.innerWidth <= 900) {
    setMobileView("preview");
  }
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
      if (window.innerWidth <= 900) setMobileView("preview");
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

// Gunsmith Operation / Task Quick Filters
function applyTaskFilter(task) {
  activeGunsmithTask = task;
  if (activeTaskLabel) activeTaskLabel.textContent = task.toUpperCase();

  // Highlight active pill
  document.querySelectorAll(".task-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.task === task);
  });

  if (task === "stoppage") {
    switchLibraryTab("stoppages");
    switchPreviewMode("dossier");
    return;
  }
  if (task === "specs") {
    switchPreviewMode("dossier");
    return;
  }

  // Filter current tab items
  filterCurrentTab();
}

// Filter Cards Inside Active Tab
function filterCurrentTab() {
  const query = (tabFilterInput ? tabFilterInput.value : "").toLowerCase().trim();
  const activeContainer = document.querySelector(".library-content-area > :not(.hidden)");
  if (!activeContainer) return;

  const taskKeywords = {
    all: [],
    strip: ["strip", "disassembly", "assembly", "takedown", "field", "detail", "pinion", "bolt", "slide", "frame", "stock", "barrel", "trigger", "action", "strut"],
    clean: ["lube", "oil", "clean", "fouling", "maintenance", "solvent", "lubricat", "grease", "carbon", "drops", "rust"],
    stoppage: ["stoppage", "jam", "malfunction", "misfire", "feed", "extract", "eject", "remedy", "spring"],
    modify: ["polish", "trigger", "upgrade", "tune", "stoning", "bedding", "remedy", "spring", "mod", "custom", "machin", "chamber", "crown", "shim"],
    specs: ["torque", "headspace", "spec", "clearance", "gap", "tension", "tolerance", "gauge", "lbs", "in-lbs", "inch"]
  };

  const activeWords = taskKeywords[activeGunsmithTask] || [];

  const cards = activeContainer.children;
  for (let card of cards) {
    const text = (card.dataset.search || card.textContent || "").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesTask = activeGunsmithTask === "all" || activeWords.some(w => text.includes(w));
    card.style.display = (matchesQuery && matchesTask) ? "" : "none";
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

// Global Live Search with Cross-Platform & Cross-Manufacturer Matching
async function executeGlobalSearch(q) {
  const query = q.trim();
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
      // Merge or prioritize platform switcher items
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
      searchResultsPopup.innerHTML = `<div style="padding: 12px; color: var(--text-dim); text-align: center;">No matches found for "${escapeHtml(query)}".</div>`;
      searchResultsPopup.classList.remove("hidden");
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

      row.addEventListener("click", () => {
        searchResultsPopup.classList.add("hidden");
        globalSearchInput.value = "";
        
        if (r.action === "switch_firearm") {
          currentFirearm = r.target;
          loadFirearm(r.target);
          if (firearmData) {
            addMessage(
              "assistant",
              `Switched active platform to **${escapeHtml(firearmData.name)}** from global search. Ready on the bench!`,
              "Platform Switched"
            );
          }
        } else if (r.action === "open_manual") {
          switchLibraryTab("manuals");
          selectManual(r.target, r.title, true);
        } else if (r.action === "open_video") {
          switchLibraryTab("videos");
          const v = firearmData.videos.find(item => item.id === r.target);
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

// Client-side search engine for offline & GitHub Pages support
function executeClientSideSearch(q) {
  const query = q.toLowerCase();
  const results = [];

  // 1. Search all platforms / manufacturers / models
  (availableFirearmsList || []).forEach(f => {
    const blob = [
      f.name,
      f.subtitle,
      f.manufacturer,
      f.category,
      ...(f.models || []),
      ...(f.calibers || []),
      ...(f.key_tasks || [])
    ].join(" ").toLowerCase();

    if (blob.includes(query)) {
      results.push({
        type: "platform",
        title: `🔫 Put on Bench: ${f.name}`,
        subtitle: `${f.manufacturer} • ${f.category}`,
        action: "switch_firearm",
        target: f.id
      });
    }
  });

  // 2. Search active firearm technical manuals
  if (firearmData && firearmData.manuals) {
    firearmData.manuals.forEach(m => {
      if ((m.title + " " + m.filename).toLowerCase().includes(query)) {
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
      if ((v.title + " " + (v.summary || "")).toLowerCase().includes(query)) {
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
      if ((s.position + " " + (s.causes || []).join(" ") + " " + s.action).toLowerCase().includes(query)) {
        results.push({
          type: "stoppage",
          title: s.position,
          subtitle: s.short_desc || "Malfunction Diagnostics",
          action: "open_stoppage",
          target: s.position
        });
      }
    });
  }

  return results;
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
      model: activeLLMModel !== "auto" ? activeLLMModel : null,
      endpoint: activeLLMEndpoint || null,
      api_key: activeLLMApiKey || null
    };

    // If running statically on GitHub Pages without Python backend, run client-side expert engine
    const isStaticMode = window.location.hostname.includes("github.io") || window.STATIC_FIREARMS_DATA;
    if (isStaticMode) {
      const reply = generateClientSideExpertReply(text, firearmData);
      setTimeout(() => {
        typingIndicator.remove();
        addMessage("assistant", reply, "Built-in Armorer Engine (Client)");
      }, 500);
      return;
    }
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    typingMsg.remove();

    if (!res.ok) {
      appendMessage("assistant", "⚠️ Error: Unable to query AI assistant. Ensure local backend or web model is accessible.");
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
  } catch (e) {
    llmStatusText.textContent = "Offline Mode";
    document.querySelector(".status-dot").className = "status-dot offline";
  }
}

function updateStatusPill() {
  const dot = document.querySelector(".status-dot");
  
  const ollama = availableBackends.find(b => b.id === "ollama");
  const lmstudio = availableBackends.find(b => b.id === "lmstudio");

  if (activeLLMBackend === "gemini") {
    llmStatusText.textContent = `☁️ Gemini (${activeLLMModel !== 'auto' ? activeLLMModel : '1.5-flash'})`;
    dot.className = "status-dot pulsing";
  } else if (activeLLMBackend === "openai") {
    llmStatusText.textContent = `☁️ OpenAI (${activeLLMModel !== 'auto' ? activeLLMModel : 'gpt-4o-mini'})`;
    dot.className = "status-dot pulsing";
  } else if (activeLLMBackend === "custom_web") {
    llmStatusText.textContent = `☁️ Web LLM (${activeLLMModel !== 'auto' ? activeLLMModel : 'custom'})`;
    dot.className = "status-dot pulsing";
  } else if (activeLLMBackend === "ollama") {
    const host = activeLLMEndpoint && !activeLLMEndpoint.includes("127.0.0.1") ? "LAN AI" : "Ollama";
    llmStatusText.textContent = `🖥️ ${host} (${activeLLMModel !== 'auto' ? activeLLMModel : (ollama?.default_model || 'local')})`;
    dot.className = ollama?.status === "online" ? "status-dot pulsing" : "status-dot";
  } else if (activeLLMBackend === "lmstudio") {
    const host = activeLLMEndpoint && !activeLLMEndpoint.includes("127.0.0.1") ? "LAN AI" : "LM Studio";
    llmStatusText.textContent = `🖥️ ${host} (${activeLLMModel !== 'auto' ? activeLLMModel : (lmstudio?.default_model || 'local')})`;
    dot.className = lmstudio?.status === "online" ? "status-dot pulsing" : "status-dot";
  } else if (activeLLMBackend === "builtin") {
    llmStatusText.textContent = "⚡ Built-in Expert";
    dot.className = "status-dot pulsing";
  } else {
    // Auto Mode: check what's online or configured
    if (activeLLMApiKey && activeLLMModel && activeLLMModel.includes("gemini")) {
      llmStatusText.textContent = "☁️ Gemini Auto";
      dot.className = "status-dot pulsing";
    } else if (ollama && ollama.status === "online") {
      llmStatusText.textContent = `🖥️ Ollama (${ollama.default_model})`;
      dot.className = "status-dot pulsing";
    } else if (lmstudio && lmstudio.status === "online") {
      llmStatusText.textContent = `🖥️ LM Studio (${lmstudio.default_model})`;
      dot.className = "status-dot pulsing";
    } else {
      llmStatusText.textContent = "⚡ Built-in Engine";
      dot.className = "status-dot pulsing";
    }
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

// Client-side rule-based knowledge engine for GitHub Pages
function generateClientSideExpertReply(query, firearmData) {
  const q = query.toLowerCase();
  const fid = (firearmData && firearmData.id) ? firearmData.id.toLowerCase() : "";
  const fname = firearmData ? firearmData.name : "Firearm";

  if (fid.includes("glock")) {
    if (q.includes("sear") || q.includes("cruciform") || q.includes("engagement") || q.includes("drop")) {
      return "### Glock Cruciform Sear Engagement Specification\n\n* **Safety Requirement:** Minimum **66% (2/3)** surface overlap between striker lug and trigger bar cruciform sear plate.\n* **Armorer Inspection:** Install orange Armorer Inspection Cover Plate (SP 02096). Verify engagement under 10x magnification.\n* ⚠️ **Warning:** Less than 66% overlap introduces risk of accidental discharge or full-auto slip.";
    } else if (q.includes("lube") || q.includes("oil") || q.includes("clean") || q.includes("drop")) {
      return "### Glock Factory 5-Drop Lubrication Protocol\n\n1. **Drops 1 & 2:** Rear slide rail channels.\n2. **Drops 3 & 4:** Front slide rail cuts.\n3. **Drop 5:** Barrel hood and circumference.\n4. **Half Drop:** Trigger bar cruciform wipe across connector ramp.\n\n⚠️ **MANDATORY WARNING:** NEVER lubricate the firing pin channel or safety plunger cavity. Keep 100% dry.";
    } else if (q.includes("trigger") || q.includes("25") || q.includes("polish")) {
      return "### Glock 25¢ Trigger Polish Job\n\n* Mirror polish with Flitz/Mothers on cruciform sear shelf, connector ramp, safety plunger dome, and trigger bar tab.\n* Never alter factory 90° sear angles or remove metal.";
    }
  } else if (fid.includes("ruger")) {
    if (q.includes("10/22") || q.includes("torque") || q.includes("v-block")) {
      return "### Ruger 10/22 Factory Torque Specifications\n\n* **Takedown Action Screw:** **15 to 20 in-lbs** (wood/synthetic) / 25 in-lbs (pillar bedded).\n* **Barrel V-Block Clamp Screws:** **25 to 30 in-lbs** in alternating 5 in-lb increments.\n* **Rim Recess Headspace:** 0.0425\" to 0.0435\".";
    } else if (q.includes("magazine") || q.includes("rotary")) {
      return "### Ruger 10/22 Rotary Magazine Pre-Tensioning\n\n* Pre-load the rotor clock spring exactly **1-1/4 full turns (450°)** counter-clockwise before seating into feed lips.";
    } else if (q.includes("mark") || q.includes("strut") || q.includes("reassembly")) {
      return "### Ruger Mark Series Hammer Strut Alignment\n\n* Point muzzle 45° upward, pull trigger to drop hammer forward, point muzzle up so hammer strut dangles into mainspring housing cup before closing.";
    }
  } else if (fid.includes("beretta")) {
    if (q.includes("dead trigger") || q.includes("spring") || q.includes("grip")) {
      return "### Beretta 92FS / M9 Dead Trigger Remedy\n\n* **Root Cause:** Forward leg of trigger bar spring unseated from underside groove (common after removing right grip panel).\n* **Remedy:** Reseat spring leg into slot and verify grip bushing does not pinch spring.";
    } else if (q.includes("locking block") || q.includes("block")) {
      return "### Beretta 92 Locking Block Tolerances\n\n* Inspect every 5,000 rounds; replace every 15,000 to 20,000 rounds with Gen 3 radiused kit. Replace recoil spring every 3,000–5,000 rounds.";
    }
  } else if (fid.includes("general") || fid.includes("smithing")) {
    if (q.includes("headspace") || q.includes("gauge") || q.includes("go")) {
      return "### Headspace Gauging Rules\n\n* **GO:** Minimum chamber; bolt MUST close.\n* **NO-GO:** Max new chamber; bolt must NOT close with light finger pressure.\n* **FIELD:** Absolute service limit. If bolt closes on FIELD, the firearm is **UNSAFE TO FIRE**.";
    } else if (q.includes("cerrosafe") || q.includes("cast")) {
      return "### Cerrosafe Chamber Casting Timing\n\n* Pour at 160°–190°F. Measure cast at **PRECISELY 1 HOUR after pouring** for 1:1 true chamber dimension.";
    }
  } else {
    if (q.includes("tension") || q.includes("spring") || q.includes("clock")) {
      return "### Lewis Gun Return Mainspring Calibration\n\n* Normal operating tension is **12 to 14 lbs pull** at cocking handle.\n* Baseline from slack is **2 to 2½ full revolutions** of gear casing.";
    }
  }

  // General summary
  return `### Armorer Technical Summary: ${fname}\n\n* **Platform:** ${fname}\n* **Manuals Available:** ${firearmData.manuals ? firearmData.manuals.length : 0}\n* **Schematics Available:** ${firearmData.schematics ? firearmData.schematics.length : 0}\n* **Curated Bench Videos:** ${firearmData.videos ? firearmData.videos.length : 0}\n\nSelect any document, schematic plate, or video from the left library panel to inspect directly on your bench.`;
}
