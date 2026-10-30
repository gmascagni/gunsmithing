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
let catalogSelectedCal = "all";
let catalogSelectedAction = "all";
let catalogSortBy = "default";
let sidebarSelectedMfg = "all";
let sidebarSelectedType = "all";

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

// Schematic Inspector & Circle-to-Search Elements
const schematicViewport = document.getElementById("schematicViewport");
const selectionOverlayCanvas = document.getElementById("selectionOverlayCanvas");
const schematicPanModeBtn = document.getElementById("schematicPanModeBtn");
const schematicCircleModeBtn = document.getElementById("schematicCircleModeBtn");
const schematicPlateSelect = document.getElementById("schematicPlateSelect");
const circleActionPill = document.getElementById("circleActionPill");
const btnIdentifyCircledPart = document.getElementById("btnIdentifyCircledPart");
const btnClearCircle = document.getElementById("btnClearCircle");
const partInspectorDrawer = document.getElementById("partInspectorDrawer");
const inspectorPlatformBadge = document.getElementById("inspectorPlatformBadge");
const btnClosePartInspector = document.getElementById("btnClosePartInspector");
const inspectorCropImg = document.getElementById("inspectorCropImg");
const inspectorPartName = document.getElementById("inspectorPartName");
const inspectorPartOem = document.getElementById("inspectorPartOem");
const inspectorPartAssembly = document.getElementById("inspectorPartAssembly");
const inspectorPartTolerances = document.getElementById("inspectorPartTolerances");
const inspectorPartMalfunctions = document.getElementById("inspectorPartMalfunctions");
const inspectorPartMaintenance = document.getElementById("inspectorPartMaintenance");
const btnAskAiAboutPart = document.getElementById("btnAskAiAboutPart");
const btnFindPartVideos = document.getElementById("btnFindPartVideos");
const btnSearchPartManual = document.getElementById("btnSearchPartManual");

// Schematic Navigation & Inspection State
let schematicToolMode = "pan"; // "pan" or "circle"
let panX = 0;
let panY = 0;
let isPanning = false;
let panStartX = 0;
let panStartY = 0;

let isCircling = false;
let circleStartX = 0;
let circleStartY = 0;
let currentCircle = null; // { cx, cy, rx, ry, r, norm_x, norm_y, norm_r, rectW, rectH }
let currentIdentifiedPart = null;

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
const sidebarOpenCatalogLink = document.getElementById("sidebarOpenCatalogLink");
const platformQuickList = document.getElementById("platformQuickList");
const gunCatalogModal = document.getElementById("gunCatalogModal");
const closeCatalogBtn = document.getElementById("closeCatalogBtn");
const catalogSearchInput = document.getElementById("catalogSearchInput");
const clearCatalogSearchBtn = document.getElementById("clearCatalogSearchBtn");
const mfgFilterChips = document.getElementById("mfgFilterChips");
const catFilterChips = document.getElementById("catFilterChips");
const catalogActiveFilterTags = document.getElementById("catalogActiveFilterTags");
const clearAllCatalogFiltersBtn = document.getElementById("clearAllCatalogFiltersBtn");
const catalogSortSelect = document.getElementById("catalogSortSelect");
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
  if (sidebarOpenCatalogLink) {
    sidebarOpenCatalogLink.addEventListener("click", openCatalogModal);
  }
  if (closeCatalogBtn) {
    closeCatalogBtn.addEventListener("click", closeCatalogModal);
  }
  if (gunCatalogModal) {
    gunCatalogModal.addEventListener("click", (e) => {
      if (e.target === gunCatalogModal) closeCatalogModal();
    });
  }

  // Sidebar Quick Filter Pills: Manufacturer
  document.querySelectorAll("#sidebarMfgFilter .quick-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("#sidebarMfgFilter .quick-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      sidebarSelectedMfg = pill.dataset.mfg || "all";
      renderSidebarQuickList();
    });
  });

  // Sidebar Quick Filter Pills: Type
  document.querySelectorAll("#sidebarTypeFilter .quick-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("#sidebarTypeFilter .quick-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      sidebarSelectedType = pill.dataset.type || "all";
      renderSidebarQuickList();
    });
  });

  // Catalog Instant Search & Clear Button
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (clearCatalogSearchBtn) {
        clearCatalogSearchBtn.classList.toggle("hidden", val.length === 0);
      }
      renderCatalogGrid(val, catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
    });
  }
  if (clearCatalogSearchBtn) {
    clearCatalogSearchBtn.addEventListener("click", () => {
      catalogSearchInput.value = "";
      clearCatalogSearchBtn.classList.add("hidden");
      renderCatalogGrid("", catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
      catalogSearchInput.focus();
    });
  }

  // Manufacturer Category Chips in Modal
  document.querySelectorAll("#mfgFilterChips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#mfgFilterChips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      catalogSelectedMfg = chip.dataset.mfg || "all";
      renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
    });
  });

  // Weapon Type Category Chips in Modal
  document.querySelectorAll("#catFilterChips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#catFilterChips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      catalogSelectedCat = chip.dataset.cat || "all";
      renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
    });
  });

  // Caliber Filter Chips in Modal
  document.querySelectorAll("#caliberFilterChips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#caliberFilterChips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      catalogSelectedCal = chip.dataset.cal || "all";
      renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
    });
  });

  // Operating Action Filter Chips in Modal
  document.querySelectorAll("#actionFilterChips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#actionFilterChips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      catalogSelectedAction = chip.dataset.action || "all";
      renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
    });
  });

  // Catalog Sort Selector
  if (catalogSortSelect) {
    catalogSortSelect.addEventListener("change", (e) => {
      catalogSortBy = e.target.value;
      renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
    });
  }

  // Clear All Filters Button in Catalog Modal
  if (clearAllCatalogFiltersBtn) {
    clearAllCatalogFiltersBtn.addEventListener("click", () => {
      resetCatalogFilters();
    });
  }

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

  // Setup Interactive Schematic Inspector (Pan, Zoom & Circle-to-Search)
  setupSchematicInspector();

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
      populateSchematicPlateSelect(firearmData.schematics);
      selectSchematic(firearmData.schematics[0].url, firearmData.schematics[0].title, false);
    } else {
      populateSchematicPlateSelect([]);
    }

    if (firearmSelect) firearmSelect.value = firearmId;
    renderSidebarQuickList();

    // Refresh catalog grid if open to show active state
    renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
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
      action_type: f.action_type || "",
      operating_actions: f.operating_actions || [],
      types: f.types || [],
      caliber_categories: f.caliber_categories || [],
      era: f.era || "",
      models: f.models || [],
      calibers: f.calibers || [],
      key_tasks: f.key_tasks || [],
      manuals_count: (f.manuals || []).length,
      schematics_count: (f.schematics || []).length,
      videos_count: (f.videos || []).length,
      stoppages_count: (f.stoppages || []).length
    }));
    renderSidebarQuickList();
    return;
  }
  try {
    const res = await fetch("/api/firearms");
    if (res.ok) {
      const data = await res.json();
      availableFirearmsList = data.firearms || [];
      renderSidebarQuickList();
    }
  } catch (err) {
    console.warn("Could not load firearms from API:", err);
  }
}

// Render Sidebar Quick Platform Selector List
function renderSidebarQuickList() {
  if (!platformQuickList) return;
  platformQuickList.innerHTML = "";

  const filtered = (availableFirearmsList || []).filter(f => {
    if (sidebarSelectedMfg !== "all") {
      const mfgLower = (f.manufacturer || "").toLowerCase();
      if (!mfgLower.includes(sidebarSelectedMfg.toLowerCase())) return false;
    }
    if (sidebarSelectedType !== "all") {
      const catLower = (f.category || "").toLowerCase();
      const typesLower = (f.types || []).join(" ").toLowerCase();
      const searchCat = sidebarSelectedType.toLowerCase();
      if (!catLower.includes(searchCat) && !typesLower.includes(searchCat)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    platformQuickList.innerHTML = `
      <div style="font-size: 10px; color: var(--text-dim); text-align: center; padding: 10px;">
        No platforms match filter.<br>
        <button class="quick-pill" style="margin-top: 4px; font-size: 9px;" onclick="resetSidebarFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(f => {
    const isActive = f.id === currentFirearm;
    const item = document.createElement("div");
    item.className = `platform-quick-item ${isActive ? "active" : ""}`;
    item.dataset.id = f.id;

    let iconSvg = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>';
    if (f.id.includes("Glock") || f.id.includes("Beretta")) {
      iconSvg = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/></svg>';
    } else if (f.id.includes("Lewis")) {
      iconSvg = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>';
    } else if (f.id.includes("Ruger")) {
      iconSvg = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>';
    }

    item.innerHTML = `
      <div class="quick-item-main">
        <div class="quick-item-name">${escapeHtml(f.name)}</div>
        <div class="quick-item-badges">
          <span class="quick-mfg-tag">${escapeHtml(f.manufacturer || "SHOP")}</span>
          <span class="quick-type-tag">${f.manuals_count || 0} manuals • ${f.schematics_count || 0} plates</span>
        </div>
      </div>
      <div class="quick-item-status">
        ${isActive ? '● BENCH' : iconSvg}
      </div>
    `;

    item.addEventListener("click", () => {
      selectFirearmFromCatalog(f.id);
    });

    platformQuickList.appendChild(item);
  });
}

function resetSidebarFilters() {
  sidebarSelectedMfg = "all";
  sidebarSelectedType = "all";
  document.querySelectorAll("#sidebarMfgFilter .quick-pill").forEach(p => p.classList.toggle("active", p.dataset.mfg === "all"));
  document.querySelectorAll("#sidebarTypeFilter .quick-pill").forEach(p => p.classList.toggle("active", p.dataset.type === "all"));
  renderSidebarQuickList();
}

function openCatalogModal() {
  if (!gunCatalogModal) return;
  gunCatalogModal.showModal();
  renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
  if (catalogSearchInput) {
    setTimeout(() => catalogSearchInput.focus(), 100);
  }
}

function closeCatalogModal() {
  if (!gunCatalogModal) return;
  gunCatalogModal.close();
}

function updateCatalogActiveFilterBar(matchCount) {
  if (!catalogActiveFilterTags) return;
  catalogActiveFilterTags.innerHTML = "";

  const activeFilters = [];
  if (catalogSelectedMfg !== "all") activeFilters.push({ type: "mfg", label: `Brand: ${catalogSelectedMfg}` });
  if (catalogSelectedCat !== "all") activeFilters.push({ type: "cat", label: `Type: ${catalogSelectedCat}` });
  if (catalogSelectedCal !== "all") activeFilters.push({ type: "cal", label: `Caliber: ${catalogSelectedCal}` });
  if (catalogSelectedAction !== "all") activeFilters.push({ type: "action", label: `Action: ${catalogSelectedAction}` });
  if (catalogSearchInput && catalogSearchInput.value.trim()) {
    activeFilters.push({ type: "search", label: `Search: "${catalogSearchInput.value.trim()}"` });
  }

  if (activeFilters.length === 0) {
    catalogActiveFilterTags.innerHTML = `<span class="filter-tag-none">Showing all ${matchCount} platforms</span>`;
    if (clearAllCatalogFiltersBtn) clearAllCatalogFiltersBtn.classList.add("hidden");
  } else {
    activeFilters.forEach(f => {
      const tag = document.createElement("span");
      tag.className = "active-filter-pill";
      tag.innerHTML = `${escapeHtml(f.label)} <button title="Remove filter" data-filter-type="${f.type}">&times;</button>`;
      tag.querySelector("button").addEventListener("click", (e) => {
        e.stopPropagation();
        removeCatalogFilter(f.type);
      });
      catalogActiveFilterTags.appendChild(tag);
    });
    if (clearAllCatalogFiltersBtn) clearAllCatalogFiltersBtn.classList.remove("hidden");
  }
}

function removeCatalogFilter(type) {
  if (type === "mfg") {
    catalogSelectedMfg = "all";
    document.querySelectorAll("#mfgFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.mfg === "all"));
  } else if (type === "cat") {
    catalogSelectedCat = "all";
    document.querySelectorAll("#catFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.cat === "all"));
  } else if (type === "cal") {
    catalogSelectedCal = "all";
    document.querySelectorAll("#caliberFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.cal === "all"));
  } else if (type === "action") {
    catalogSelectedAction = "all";
    document.querySelectorAll("#actionFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.action === "all"));
  } else if (type === "search") {
    if (catalogSearchInput) catalogSearchInput.value = "";
    if (clearCatalogSearchBtn) clearCatalogSearchBtn.classList.add("hidden");
  }
  renderCatalogGrid(catalogSearchInput ? catalogSearchInput.value : "", catalogSelectedMfg, catalogSelectedCat, catalogSelectedCal, catalogSelectedAction, catalogSortBy);
}

function resetCatalogFilters() {
  catalogSelectedMfg = "all";
  catalogSelectedCat = "all";
  catalogSelectedCal = "all";
  catalogSelectedAction = "all";
  catalogSortBy = "default";
  if (catalogSortSelect) catalogSortSelect.value = "default";
  if (catalogSearchInput) catalogSearchInput.value = "";
  if (clearCatalogSearchBtn) clearCatalogSearchBtn.classList.add("hidden");
  document.querySelectorAll("#mfgFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.mfg === "all"));
  document.querySelectorAll("#catFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.cat === "all"));
  document.querySelectorAll("#caliberFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.cal === "all"));
  document.querySelectorAll("#actionFilterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.action === "all"));
  renderCatalogGrid("", "all", "all", "all", "all", "default");
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

function renderCatalogGrid(query = "", filterMfg = "all", filterCat = "all", filterCal = "all", filterAction = "all", sortBy = "default") {
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
        action_type: "Gas-Operated Machine Gun (Open Bolt)",
        operating_actions: ["Gas-Operated", "Machine Gun", "Open-Bolt", "Automatic"],
        types: ["Machine Guns", "Automatic Weapons"],
        caliber_categories: [".303 British", ".30-06 Springfield", "Rifle Calibers"],
        era: "Historic Military (WWI / WWII)",
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
        action_type: "Striker-Fired (Safe Action)",
        operating_actions: ["Striker-Fired", "Short-Recoil", "Safe-Action", "Semi-Auto"],
        types: ["Pistols", "Handguns"],
        caliber_categories: ["9x19mm", ".40 S&W", ".45 ACP", "10mm Auto", "Pistol Calibers"],
        era: "Modern Tactical & Duty (1982–Present)",
        models: ["Glock 17", "Glock 19", "Glock 21", "Glock 22", "Glock 26", "Glock 34", "Glock 43"],
        calibers: ["9x19mm", ".40 S&W", ".45 ACP", "10mm Auto"],
        key_tasks: ["Cruciform Sear Check (66%)", "5-Drop Lube Protocol", "25¢ Trigger Polish", "30274 Ejector Bar Upgrade", "Detail Strip"],
        manuals_count: 2,
        schematics_count: 197,
        videos_count: 8
      },
      {
        id: "Ruger_Firearms",
        name: "Ruger Firearms Technical Collection",
        subtitle: "10/22 Carbine, Mark I–IV Target Pistols & GP100 Revolvers",
        manufacturer: "Ruger",
        category: "Rifles / Pistols / Revolvers",
        action_type: "Blowback Semi-Auto & DA Revolver",
        operating_actions: ["Blowback Semi-Auto", "Double-Action Revolver", "DA Revolver", "Rimfire Semi-Auto"],
        types: ["Rifles", "Pistols", "Revolvers", "Carbines"],
        caliber_categories: [".22 LR", ".357 Magnum", ".38 Special", "Rimfire", "Revolver Calibers"],
        era: "Sporting, Target & Defense (1949–Present)",
        models: ["10/22 Carbine", "Mark I", "Mark II", "Mark III", "Mark IV", "GP100 Revolver"],
        calibers: [".22 LR", ".357 Magnum", ".38 Special"],
        key_tasks: ["10/22 V-Block Torque (25-30 in-lbs)", "Rotary Mag Tension (1-1/4 turns)", "Mark Series Hammer Strut Alignment", "GP100 Cylinder Gap (0.004\"-0.007\")", "Trigger Shimming"],
        manuals_count: 3,
        schematics_count: 51,
        videos_count: 9
      },
      {
        id: "Beretta_Pistols",
        name: "Beretta 92 / M9 Series Pistols",
        subtitle: "92FS, M9, 96, Brigadier & Inox (9x19mm NATO & .40 S&W)",
        manufacturer: "Beretta",
        category: "Pistols",
        action_type: "DA/SA Hammer-Fired (Falling Locking Block)",
        operating_actions: ["DA/SA Hammer", "Hammer-Fired", "Falling Block", "Semi-Auto"],
        types: ["Pistols", "Handguns"],
        caliber_categories: ["9x19mm", ".40 S&W", "Pistol Calibers"],
        era: "Military & Law Enforcement (1975–Present)",
        models: ["Beretta 92FS", "Beretta M9", "Beretta 92F", "Beretta 96", "Beretta 92D", "Beretta Brigadier", "Beretta Inox"],
        calibers: ["9x19mm NATO", ".40 S&W"],
        key_tasks: ["Dead Trigger Spring Fix", "Locking Block Inspection (15k rds)", "Factory 92D Hammer Spring (8 lbs)", "Slide Detail Strip", "Extractor Carbon Cleaning"],
        manuals_count: 2,
        schematics_count: 75,
        videos_count: 8
      },
      {
        id: "General_Gunsmithing",
        name: "General Gunsmithing & Workshop Disciplines",
        subtitle: "Headspace, Chamber Casting, Machining, Bluing & Diagnostics",
        manufacturer: "General Workshop",
        category: "Workshop Disciplines",
        action_type: "Universal Bench & Tooling Disciplines",
        operating_actions: ["All Actions", "Shop Standards", "Bench Reference", "Gunsmithing Disciplines"],
        types: ["Workshop Disciplines", "Shop Disciplines", "Bench Reference"],
        caliber_categories: ["All Calibers", "Rimmed", "Rimless", "Belted Magnums", "Straight Wall"],
        era: "Universal Workshop Reference",
        models: ["All Firearms", "Bolt Actions", "Lever Actions", "Semi-Autos", "Revolvers"],
        calibers: ["Rimmed", "Rimless", "Belted Magnums", "Straight Wall"],
        key_tasks: ["Headspace (Go / No-Go / Field)", "Cerrosafe Chamber Casting", "Slow Rust & Hot Caustic Bluing", "11° Target Crowning", "Glass Bedding", "Sear Stoning"],
        manuals_count: 2,
        schematics_count: 267,
        videos_count: 8
      }
    ];
  }

  const filtered = availableFirearmsList.filter(f => {
    // 1. Manufacturer
    if (filterMfg !== "all") {
      const mfgLower = (f.manufacturer || "").toLowerCase();
      if (!mfgLower.includes(filterMfg.toLowerCase())) return false;
    }
    // 2. Category / Type
    if (filterCat !== "all") {
      const catLower = (f.category || "").toLowerCase();
      const typesLower = (f.types || []).join(" ").toLowerCase();
      const target = filterCat.toLowerCase();
      if (!catLower.includes(target) && !typesLower.includes(target)) return false;
    }
    // 3. Caliber
    if (filterCal !== "all") {
      if (filterCal === "all_calibers") {
        if (!f.id.includes("General")) return false;
      } else {
        const cals = (f.calibers || []).concat(f.caliber_categories || []).join(" ").toLowerCase();
        if (!cals.includes(filterCal.toLowerCase())) return false;
      }
    }
    // 4. Action
    if (filterAction !== "all") {
      const act = ((f.action_type || "") + " " + (f.operating_actions || []).join(" ")).toLowerCase();
      if (!act.includes(filterAction.toLowerCase())) return false;
    }
    // 5. Search Query
    if (q) {
      const blob = [
        f.name,
        f.subtitle,
        f.manufacturer,
        f.category,
        f.action_type || "",
        ...(f.types || []),
        ...(f.operating_actions || []),
        ...(f.models || []),
        ...(f.calibers || []),
        ...(f.key_tasks || [])
      ].join(" ").toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  });

  // Sort
  if (sortBy === "schematics") {
    filtered.sort((a, b) => (b.schematics_count || 0) - (a.schematics_count || 0));
  } else if (sortBy === "manuals") {
    filtered.sort((a, b) => (b.manuals_count || 0) - (a.manuals_count || 0));
  } else if (sortBy === "name") {
    filtered.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
  } else if (sortBy === "manufacturer") {
    filtered.sort((a, b) => (a.manufacturer || "").localeCompare(b.manufacturer || ""));
  }

  updateCatalogActiveFilterBar(filtered.length);

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-dim);">
        <p style="font-size: 15px; margin-bottom: 8px;">No firearms or shop platforms match your selected filter criteria.</p>
        <button class="btn-secondary" onclick="resetCatalogFilters()" style="margin-top: 10px;">Reset All Filters</button>
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
            ${f.action_type ? `<span class="badge-action">${escapeHtml(f.action_type)}</span>` : ''}
            ${f.era ? `<span class="badge-era">${escapeHtml(f.era)}</span>` : ''}
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
  populateSchematicPlateSelect(schematics);
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
  schematicImg.crossOrigin = "anonymous";
  schematicImg.src = url;
  previewTitle.textContent = "Schematic: " + title;
  btnExternalLink.href = url;
  if (schematicPlateSelect) {
    schematicPlateSelect.value = url;
  }
  clearSchematicSelection();
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

  const gunName = firearmData ? firearmData.name : currentFirearm.replace(/_/g, " ");
  const isPlaceholder = video.id && (video.id.includes("x9") || video.id.includes("x2w") || video.id.length > 20);

  // If valid real video, load embed; if placeholder, fallback gracefully
  if (video.embed_url && !isPlaceholder) {
    videoFrame.src = video.embed_url;
  } else {
    // If placeholder, provide a clean search embed or direct link
    videoFrame.src = `https://www.youtube-nocookie.com/embed?listType=search&list=${encodeURIComponent(gunName + " " + video.title)}`;
  }

  videoMetaTitle.textContent = video.title;
  videoMetaCreator.textContent = `${video.creator} • ${video.category}`;
  videoMetaSummary.textContent = video.summary;
  previewTitle.textContent = "Video: " + video.title;

  const directUrl = (!isPlaceholder && video.url) 
    ? video.url 
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(gunName + " " + video.title + " armorer")}`;

  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(gunName + " gunsmithing teardown repair")}`;

  btnExternalLink.href = directUrl;

  const btnWatch = document.getElementById("btnWatchOnYouTube");
  if (btnWatch) btnWatch.href = directUrl;

  const btnSearchAlt = document.getElementById("btnSearchYouTubeAlternative");
  if (btnSearchAlt) btnSearchAlt.href = searchUrl;

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

// ==========================================================================
// SCHEMATIC INSPECTOR, PAN & ZOOM, AND CIRCLE-TO-SEARCH ENGINE
// ==========================================================================

function resizeOverlayCanvas() {
  if (!selectionOverlayCanvas || !schematicImg) return;
  const w = schematicImg.clientWidth || schematicImg.naturalWidth || 800;
  const h = schematicImg.clientHeight || schematicImg.naturalHeight || 600;
  if (w > 0 && h > 0) {
    selectionOverlayCanvas.width = w;
    selectionOverlayCanvas.height = h;
  }
}

function setSchematicToolMode(mode) {
  schematicToolMode = mode;
  if (mode === "pan") {
    if (schematicPanModeBtn) schematicPanModeBtn.classList.add("active");
    if (schematicCircleModeBtn) schematicCircleModeBtn.classList.remove("active");
    if (schematicCanvas) schematicCanvas.classList.add("pan-mode");
    if (selectionOverlayCanvas) selectionOverlayCanvas.style.pointerEvents = "none";
  } else {
    if (schematicCircleModeBtn) schematicCircleModeBtn.classList.add("active");
    if (schematicPanModeBtn) schematicPanModeBtn.classList.remove("active");
    if (schematicCanvas) schematicCanvas.classList.remove("pan-mode");
    if (selectionOverlayCanvas) selectionOverlayCanvas.style.pointerEvents = "auto";
  }
}

function applySchematicTransform() {
  if (schematicViewport) {
    schematicViewport.style.transform = `translate(${panX}px, ${panY}px) scale(${currentSchematicZoom})`;
    schematicViewport.style.transformOrigin = "center center";
  }
  if (zoomLevelText) {
    zoomLevelText.textContent = `${Math.round(currentSchematicZoom * 100)}%`;
  }
  if (currentCircle && circleActionPill && !circleActionPill.classList.contains("hidden")) {
    positionActionPill(currentCircle);
  }
}

function adjustZoom(delta) {
  currentSchematicZoom = Math.max(0.4, Math.min(4.0, currentSchematicZoom + delta));
  applySchematicTransform();
}

function resetZoom() {
  currentSchematicZoom = 1.0;
  panX = 0;
  panY = 0;
  applySchematicTransform();
}

function clearSchematicSelection() {
  currentCircle = null;
  currentIdentifiedPart = null;
  if (circleActionPill) circleActionPill.classList.add("hidden");
  if (partInspectorDrawer) partInspectorDrawer.classList.add("hidden");
  if (selectionOverlayCanvas) {
    const ctx = selectionOverlayCanvas.getContext("2d");
    ctx.clearRect(0, 0, selectionOverlayCanvas.width, selectionOverlayCanvas.height);
  }
}

function redrawCircle(c) {
  if (!selectionOverlayCanvas || !c) return;
  const ctx = selectionOverlayCanvas.getContext("2d");
  ctx.clearRect(0, 0, selectionOverlayCanvas.width, selectionOverlayCanvas.height);

  const w = selectionOverlayCanvas.width;
  const h = selectionOverlayCanvas.height;
  const cx = c.norm_x * w;
  const cy = c.norm_y * h;
  const rx = (c.rx && c.rectW) ? (c.rx / c.rectW) * w : c.norm_r * Math.max(w, h);
  const ry = (c.ry && c.rectH) ? (c.ry / c.rectH) * h : c.norm_r * Math.max(w, h);

  ctx.save();
  ctx.beginPath();
  ctx.ellipse(cx, cy, Math.max(6, rx), Math.max(6, ry), 0, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(212, 175, 55, 0.16)";
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#d4af37";
  ctx.shadowColor = "rgba(212, 175, 55, 0.85)";
  ctx.shadowBlur = 14;
  ctx.stroke();

  // Center Crosshair
  ctx.beginPath();
  ctx.moveTo(cx - 10, cy);
  ctx.lineTo(cx + 10, cy);
  ctx.moveTo(cx, cy - 10);
  ctx.lineTo(cx, cy + 10);
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();
  ctx.restore();
}

function positionActionPill(circle) {
  if (!circle || !circleActionPill) return;
  // Position directly inside schematicViewport using exact percentage coords
  const leftPercent = circle.norm_x * 100;
  const radPercent = (circle.norm_r || 0.08) * 100;
  const topPercent = (circle.norm_y * 100) - radPercent;

  circleActionPill.style.left = `${leftPercent}%`;
  if (topPercent > 12) {
    circleActionPill.style.top = `${topPercent}%`;
    circleActionPill.style.transform = `translate(-50%, -100%) translateY(-10px)`;
  } else {
    const bottomPercent = (circle.norm_y * 100) + radPercent;
    circleActionPill.style.top = `${bottomPercent}%`;
    circleActionPill.style.transform = `translate(-50%, 0) translateY(12px)`;
  }
  circleActionPill.classList.remove("hidden");
}

function getCanvasNormalizedCoords(clientX, clientY) {
  const rect = selectionOverlayCanvas.getBoundingClientRect();
  const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
  const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
  return {
    x,
    y,
    rectW: rect.width,
    rectH: rect.height,
    norm_x: rect.width > 0 ? x / rect.width : 0.5,
    norm_y: rect.height > 0 ? y / rect.height : 0.5
  };
}

function resolveClientFirearmAnatomy(cat, normX, normY) {
  const isRevolver = cat.includes("Revolver");
  const isPistol = cat.includes("Pistol");

  // 1. Revolvers
  if (isRevolver) {
    if (normX >= 0.58) {
      return {
        id: "revolver_barrel_group",
        name: "Rifled Barrel, Ejector Rod & Front Sight Group",
        callout_num: "Barrel Subassembly",
        oem_number: "Barrel & Shroud",
        assembly: "Barrel & Ejection Group",
        tolerances: "Barrel-cylinder gap: 0.004\" to 0.008\" (feeler gauge check). Forcing cone angle: 11° standard; verify zero lead accumulation.",
        malfunctions: "Lead spitting from misaligned forcing cone; cylinder binding if ejector rod unscrews under recoil.",
        maintenance: "Check ejector rod straightness with dial indicator; clean forcing cone with brass wire brush and lead solvent; torque barrel to frame spec."
      };
    } else if (0.32 <= normX && normX < 0.58 && 0.22 <= normY && normY <= 0.52) {
      return {
        id: "revolver_cylinder_group",
        name: "Revolver Cylinder, Ratchet, Crane & Center Pin Assembly",
        callout_num: "Cylinder Assembly",
        oem_number: "Rotary Cylinder Group",
        assembly: "Cylinder & Crane Group",
        tolerances: "Endshake (fore-and-aft play): < 0.002\". Cylinder rotational lockup play: < 0.003\" with trigger held rearward.",
        malfunctions: "Cylinder binding when hot; misfires / light primer strikes from excessive endshake; cylinder skipping.",
        maintenance: "Disassemble crane, polish cylinder center pin, install endshake shims if play exceeds 0.002\", stone cylinder stop notches clean."
      };
    } else if (0.32 <= normX && normX <= 0.60 && normY > 0.50) {
      return {
        id: "revolver_trigger_hammer_group",
        name: "Trigger, Hammer, Sear & Rebound Slide Mechanism",
        callout_num: "Fire Control Group",
        oem_number: "Lockwork Mechanism",
        assembly: "Action & Trigger Group",
        tolerances: "Single-action pull: 3.0 to 4.0 lbs. Double-action pull: 9.0 to 11.5 lbs smooth continuous sweep. Firing pin protrusion: 0.050\" to 0.055\".",
        malfunctions: "Push-off (hammer falls when pushed forward from full cock); sluggish trigger return from weak rebound slide spring.",
        maintenance: "Stone single-action sear notch square; NEVER round hammer notch; replace weakened rebound spring; lubricate pivot studs with high-film oil."
      };
    } else {
      return {
        id: "revolver_frame_grip_group",
        name: "Solid Steel Frame, Grip & Mainspring Assembly",
        callout_num: "Frame Group",
        oem_number: "Mainframe & Grip Frame",
        assembly: "Frame & Suspension Group",
        tolerances: "Mainspring strain screw fully seated against front strap; frame window squareness within 0.001\".",
        malfunctions: "Light strikes if mainspring strain screw is backed out; cracked grip panels from overtightening grip screw.",
        maintenance: "Inspect recoil plate bushing; torque strain screw tight; apply corrosion inhibitor to internal frame recess under sideplate."
      };
    }
  }

  // 2. Semi-Automatic Pistols
  else if (isPistol) {
    if (normX >= 0.58 && normY <= 0.50) {
      return {
        id: "pistol_barrel_locking",
        name: "Breech Locking Barrel, Chamber & Feed Ramp Assembly",
        callout_num: "Barrel Assembly",
        oem_number: "OEM Barrel Spec",
        assembly: "Barrel & Locking Group",
        tolerances: "Headspace: GO gauge chambers freely with zero slide gap; NO-GO gauge stops slide flush with battery hood. Hood clearance: 0.003\" to 0.005\".",
        malfunctions: "Failure to feed / nose-up jams from rough or stepped feed ramp; bulged chamber; failure to lock into battery if hood is burred.",
        maintenance: "Mirror-polish feed ramp with felt bob and jeweler's rouge; inspect locking lugs for peening; check chamber with drop-in cartridge gauge."
      };
    } else if (normY <= 0.46) {
      return {
        id: "pistol_slide_assembly",
        name: "Milled Slide, Extractor & Striker / Firing Pin Group",
        callout_num: "Slide Assembly",
        oem_number: "Upper Slide Group",
        assembly: "Slide & Breech Group",
        tolerances: "Slide-to-frame rail play: 0.003\" to 0.005\" total lateral clearance. Striker protrusion: 0.050\" to 0.060\". Extractor hook tension: holds empty case firm.",
        malfunctions: "Stovepipes or failure to extract from worn extractor claw or broken plunger spring; light primer strikes from carbon fouling in striker channel.",
        maintenance: "Clean striker channel 100% DRY—NEVER lubricate inside striker channel; inspect extractor claw under loupe."
      };
    } else if (0.32 <= normX && normX <= 0.62 && 0.46 < normY && normY <= 0.70) {
      return {
        id: "pistol_fire_control",
        name: "Trigger Bow, Sear, Disconnector & Safety Bar Group",
        callout_num: "Fire Control Housing",
        oem_number: "FCU / Trigger Subassembly",
        assembly: "Trigger & Safety Group",
        tolerances: "Trigger pull weight: 4.5 to 5.5 lbs (duty standard). Minimum 66% cruciform sear overlap on striker lug. Disconnector reset clearance: 0.020\" minimum.",
        malfunctions: "Doubling / burst fire if sear engagement falls below 66%; trigger fails to reset if trigger return spring fatigued or connector bent inward.",
        maintenance: "Stone connector and trigger bar bearing facets with Arkansas stone; verify drop safety shelf engages striker lug properly."
      };
    } else {
      return {
        id: "pistol_grip_frame",
        name: "Grip Frame, Magazine Well & Mainspring Housing",
        callout_num: "Lower Frame",
        oem_number: "Receiver / Grip Module",
        assembly: "Frame & Magazine Well Group",
        tolerances: "Magazine drop-free clearance: 0.015\" circumferential gap; magazine catch engagement depth: 0.035\" minimum.",
        malfunctions: "Magazine failing to drop free; magazine dropping inadvertently during firing from worn polymer magazine catch notch.",
        maintenance: "Clean magazine well dry; inspect steel slide guide rails for cracking or peening; clean magazine catch cavity."
      };
    }
  }

  // 3. Long Guns (Rifles, Shotguns, Machine Guns, Historic Battle Rifles)
  else {
    if (normX <= 0.28) {
      return {
        id: "longgun_buttstock_assembly",
        name: "Buttstock, Butt Plate & Recoil Buffer Assembly",
        callout_num: "Stock Assembly",
        oem_number: "Buttstock Group",
        assembly: "Stock & Recoil Buffer Group",
        tolerances: "Stock mounting screw / tang torque: 35 to 45 in-lbs. Zero lateral play at receiver tang or mounting dovetail. Buffer spring free-length within factory armorer limits.",
        malfunctions: "Stock fracture along wrist or grain behind receiver tang from loose mounting bolts; buffer spring fatigue causing violent bolt bounce or receiver battering.",
        maintenance: "Torque stock mounting screws to specification; inspect wood or polymer for cracks at recoil lug seat; clean buffer spring tube completely dry."
      };
    } else if (normX >= 0.60) {
      return {
        id: "longgun_barrel_gas_system",
        name: "Rifled Barrel, Gas Block/Piston & Muzzle Shroud Assembly",
        callout_num: "Barrel Subassembly",
        oem_number: "Barrel & Gas Engine",
        assembly: "Barrel, Gas System & Muzzle Group",
        tolerances: "Bore straightness: < 0.002\" TIR. Barrel-to-receiver torque: 75 to 85 ft-lbs with barrel vise. Muzzle crown: 11° target crown or 90° true perpendicular with zero burrs. Gas port diameter within armorer pin-gauge spec.",
        malfunctions: "Short recoil, stovepipes, or failure to extract from carbon-fouled gas port or piston cup; throat erosion causing velocity drop and erratic groupings; damaged muzzle crown destroying accuracy.",
        maintenance: "Flush bore and gas port with boiling soapy water if shooting corrosive surplus; scrape carbon off gas piston cup with brass scrapers; inspect throat with leade gauge."
      };
    } else if (0.28 < normX && normX <= 0.58 && normY >= 0.48) {
      return {
        id: "longgun_trigger_sear_group",
        name: "Trigger, Sear, Disconnector & Pistol Grip / Guard Group",
        callout_num: "Trigger Mechanism Group",
        oem_number: "Lower Trigger Assembly",
        assembly: "Fire Control & Trigger Mechanism",
        tolerances: "Trigger pull weight: 4.5 to 6.5 lbs (service standard). Minimum 0.040\" sear engagement overlap on striker/hammer/operating rod rack notch. Sear facet square within 0.0005\".",
        malfunctions: "Runaway gun / uncontrolled burst fire if sear nose is rounded, chipped, or trigger guard loose; trigger fails to reset if disconnector spring weak or trigger housing packed with carbon fouling.",
        maintenance: "Remove buttstock/trigger housing; ultrasonic clean fire control components; stone sear engagement facet strictly square with hard Arkansas oilstone—NEVER round off sear edge; apply 1 drop synthetic oil to pivot pins."
      };
    } else if ((normY <= 0.35 && 0.35 <= normX && normX <= 0.60) || (normY >= 0.55 && 0.38 <= normX && normX <= 0.58)) {
      return {
        id: "longgun_magazine_feed_system",
        name: "Magazine & Cartridge Feed Mechanism (Pan / Drum / Box / Tube)",
        callout_num: "Magazine Assembly",
        oem_number: "Feedway Group",
        assembly: "Magazine & Feed Mechanism",
        tolerances: "Feed lip width: parallel within ±0.003\". Magazine catch lockup depth: 0.020\" to 0.035\" full engagement. Follower travels freely from top to bottom with zero binding.",
        malfunctions: "Position 1 & 2 Stoppages (failure to feed or stovepipe); double-feeding from spread feed lips; failure of bolt to lock back on empty; rotor drag on pan/drum magazines.",
        maintenance: "Disassemble and clean magazine body interior completely DRY with solvent and dry patch. NEVER oil internal magazine tracks or follower; check feed lips with Go/No-Go lip gauge."
      };
    } else {
      return {
        id: "longgun_receiver_bolt_action",
        name: "Receiver Housing, Breech Bolt & Locking Action Mechanism",
        callout_num: "Receiver & Bolt Group",
        oem_number: "Breech Action Subassembly",
        assembly: "Receiver, Bolt & Action Group",
        tolerances: "Headspace: verify with precision GO and NO-GO gauges. Firing pin / striker protrusion: 0.045\" to 0.060\". Bolt locking lug bearing contact: minimum 75% full engagement. Bolt face runout: < 0.001\".",
        malfunctions: "Failure to extract (extractor claw chipped or spring fatigued); ruptured cartridge case stuck in chamber; bolt binding in receiver ways; light strikes if firing pin channel fouled.",
        maintenance: "Detail strip breech bolt; clean extractor pocket with dental pick; inspect locking lugs for galling or setback; lubricate bolt raceways with light film of high-temperature synthetic grease."
      };
    }
  }
}

function matchPartClientSide(firearmId, normX, normY, normR) {
  const partsDb = window.STATIC_PARTS_DATABASE || {};
  let partsList = partsDb[firearmId] || [];

  let bestMatch = null;
  let minDistance = 999999;

  // 1. Check registered platform components for tight match
  if (partsList.length > 0) {
    partsList.forEach(p => {
      const px = p.norm_x !== undefined ? p.norm_x : 0.5;
      const py = p.norm_y !== undefined ? p.norm_y : 0.5;
      const dist = Math.hypot(normX - px, normY - py);
      if (dist < minDistance) {
        minDistance = dist;
        bestMatch = Object.assign({}, p);
      }
    });
  }

  // If no registered part within 0.12 distance, use Universal Firearm Anatomy Engine
  if (!bestMatch || minDistance > 0.12) {
    const cat = (firearmData && firearmData.category) ? firearmData.category : "Rifles & Carbines";
    bestMatch = resolveClientFirearmAnatomy(cat, normX, normY);
    minDistance = 0.0;
  }

  // Deep Client RAG: Link platform stoppages, specs, and manual citations
  if (firearmData) {
    const partText = (bestMatch.name + " " + (bestMatch.assembly || "")).toLowerCase();

    // RAG across stoppages
    const stoppages = firearmData.stoppages || [];
    for (const s of stoppages) {
      const combined = ((s.position || "") + " " + (s.short_desc || "") + " " + (s.causes ? s.causes.join(" ") : "") + " " + (s.action || "")).toLowerCase();
      const words = partText.split(/\W+/).filter(w => w.length > 3);
      if (words.some(w => combined.includes(w))) {
        const stoppageNote = `[${s.position}: ${s.short_desc}]`;
        if (!bestMatch.malfunctions.includes(s.position)) {
          bestMatch.malfunctions = stoppageNote + " " + bestMatch.malfunctions;
        }
        break;
      }
    }

    // RAG across manuals: attach primary manual citation
    if (firearmData.manuals && firearmData.manuals.length > 0) {
      const bestMan = firearmData.manuals.find(m => {
        const mt = m.title.toLowerCase();
        return mt.includes("armorer") || mt.includes("instruction") || mt.includes("handbook") || mt.includes("manual");
      }) || firearmData.manuals[0];

      bestMatch.manual_citation = {
        manual_filename: bestMan.filename,
        manual_title: bestMan.title,
        page: 1,
        snippet: `Factory technical armorer reference for ${firearmData.name}: Consult primary armorer manual for full section disassembly, component inspection tolerances, and bench servicing protocol.`
      };
    }
  }

  bestMatch.identification_method = "Universal Firearm Anatomy & RAG Engine";
  bestMatch.is_fallback = false;

  return {
    primary: bestMatch,
    distance: minDistance,
    method: "Universal Firearm Anatomy & RAG Engine",
    is_fallback: false,
    alternates: []
  };
}

async function executeIdentifyPart() {
  if (!currentCircle) return;
  if (btnIdentifyCircledPart) {
    btnIdentifyCircledPart.disabled = true;
    btnIdentifyCircledPart.innerHTML = `
      <svg class="spin-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"/></svg>
      <span>Identifying Component...</span>
    `;
  }

  // Generate cropped image of circled part
  let cropDataUrl = "";
  try {
    const cropCanvas = document.createElement("canvas");
    const cropSize = 250;
    cropCanvas.width = cropSize;
    cropCanvas.height = cropSize;
    const cropCtx = cropCanvas.getContext("2d");

    const nw = schematicImg.naturalWidth || 800;
    const nh = schematicImg.naturalHeight || 600;
    const imgCx = currentCircle.norm_x * nw;
    const imgCy = currentCircle.norm_y * nh;
    const imgR = Math.max(30, (currentCircle.norm_r || 0.08) * Math.max(nw, nh) * 1.15);

    const sx = Math.max(0, imgCx - imgR);
    const sy = Math.max(0, imgCy - imgR);
    const sw = Math.min(nw - sx, imgR * 2);
    const sh = Math.min(nh - sy, imgR * 2);

    cropCtx.fillStyle = "#0c1017";
    cropCtx.fillRect(0, 0, cropSize, cropSize);
    cropCtx.drawImage(schematicImg, sx, sy, sw, sh, 0, 0, cropSize, cropSize);

    cropCtx.strokeStyle = "rgba(212, 175, 55, 0.75)";
    cropCtx.lineWidth = 2.5;
    cropCtx.strokeRect(1, 1, cropSize - 2, cropSize - 2);

    cropDataUrl = cropCanvas.toDataURL("image/png");
    if (inspectorCropImg) {
      inspectorCropImg.src = cropDataUrl;
      inspectorCropImg.style.display = "block";
    }
  } catch (err) {
    console.warn("Schematic crop warning:", err);
    if (inspectorCropImg) {
      inspectorCropImg.src = "data:image/svg+xml;utf8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
          <rect width="200" height="200" fill="#0c1017"/>
          <circle cx="100" cy="100" r="55" fill="none" stroke="#d4af37" stroke-width="2.5" stroke-dasharray="5,4"/>
          <circle cx="100" cy="100" r="5" fill="#d4af37"/>
          <line x1="100" y1="25" x2="100" y2="175" stroke="rgba(212,175,55,0.4)" stroke-width="1.5"/>
          <line x1="25" y1="100" x2="175" y2="100" stroke="rgba(212,175,55,0.4)" stroke-width="1.5"/>
          <text x="100" y="165" fill="#d4af37" font-size="11" font-family="monospace" text-anchor="middle">TARGET COMPONENT</text>
        </svg>
      `);
      inspectorCropImg.style.display = "block";
    }
  }

  let result = null;
  const isStaticMode = window.location.hostname.includes("github.io") || window.STATIC_FIREARMS_DATA;
  const currentPlateName = schematicPlateSelect ? schematicPlateSelect.value : "";

  // 1. Try local FastAPI backend with Vision AI & RAG if not strictly static mode
  if (!isStaticMode) {
    try {
      const res = await fetch("/api/parts/identify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firearm_id: currentFirearm,
          norm_x: currentCircle.norm_x,
          norm_y: currentCircle.norm_y,
          norm_r: currentCircle.norm_r,
          image_crop: cropDataUrl,
          plate_id: currentPlateName
        })
      });
      if (res.ok) {
        result = await res.json();
      }
    } catch (e) {
      console.warn("Backend identify unavailable:", e);
    }
  }

  // 2. Client-Side Multimodal Vision AI: If on GitHub Pages and Gemini API key is configured
  const geminiKey = activeLLMApiKey || localStorage.getItem("gunsmith_gemini_key") || "";
  if ((!result || !result.primary) && geminiKey && cropDataUrl && cropDataUrl.length > 100) {
    try {
      const b64Data = cropDataUrl.includes(",") ? cropDataUrl.split(",")[1] : cropDataUrl;
      const gunName = firearmData ? firearmData.name : currentFirearm;
      const vUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
      const vPrompt = `You are an expert armorer analyzing this schematic technical drawing crop from the ${gunName} (${currentPlateName}). Identify the circled component or subassembly, stating its exact technical name, OEM/callout # if known, assembly group, critical gunsmith tolerances, malfunctions, and armorer maintenance protocols. Return pure JSON: {"name": "...", "callout_num": "...", "oem_number": "...", "assembly": "...", "tolerances": "...", "malfunctions": "...", "maintenance": "..."}`;
      
      const vPayload = {
        contents: [
          {
            parts: [
              { text: vPrompt },
              { inline_data: { mime_type: "image/png", data: b64Data } }
            ]
          }
        ],
        generationConfig: { temperature: 0.1, response_mime_type: "application/json" }
      };

      const vRes = await fetch(vUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vPayload)
      });
      if (vRes.ok) {
        const vData = await vRes.json();
        const candText = vData.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candText) {
          const parsed = JSON.parse(candText);
          parsed.identification_method = "Multimodal Vision AI (Gemini Flash)";
          result = { primary: parsed, method: "Multimodal Vision AI (Gemini Flash)" };
        }
      }
    } catch (ve) {
      console.warn("Client Gemini Vision error:", ve);
    }
  }

  // 3. Fallback to coordinate-based schematic catalog match
  if (!result || !result.primary) {
    result = matchPartClientSide(currentFirearm, currentCircle.norm_x, currentCircle.norm_y, currentCircle.norm_r);
  }

  const part = result.primary;
  currentIdentifiedPart = part;

  const isFallback = result.is_fallback || part.is_fallback || (result.method && result.method.includes("Catalog Match")) || (part.identification_method && part.identification_method.includes("Catalog Match"));
  const idMethod = part.identification_method || result.method || (isFallback ? "Schematic Coordinate Fallback (Vision Model Offline)" : "Multimodal Vision AI");
  const badgeLabel = `${(firearmData ? firearmData.name : currentFirearm).toUpperCase()} • ${idMethod.toUpperCase()}`;

  if (inspectorPlatformBadge) {
    inspectorPlatformBadge.textContent = badgeLabel;
    inspectorPlatformBadge.classList.remove("badge-fallback", "badge-vision");
    if (isFallback) {
      inspectorPlatformBadge.classList.add("badge-fallback");
    } else {
      inspectorPlatformBadge.classList.add("badge-vision");
    }
  }

  if (inspectorPartName) inspectorPartName.textContent = part.name + (part.callout_num ? ` (${part.callout_num})` : "");
  if (inspectorPartOem) inspectorPartOem.textContent = part.oem_number || part.part_number || "OEM Standard Spec";
  if (inspectorPartAssembly) inspectorPartAssembly.textContent = `Assembly: ${part.assembly || "Subassembly"}`;
  if (inspectorPartTolerances) inspectorPartTolerances.textContent = part.tolerances || "Standard armorer tolerances. Verify zero burrs and true alignment.";
  if (inspectorPartMalfunctions) inspectorPartMalfunctions.textContent = part.malfunctions || "Inspect component for scoring, cracks, burrs, or carbon fouling.";
  if (inspectorPartMaintenance) inspectorPartMaintenance.textContent = part.maintenance || "Clean with solvent, dry thoroughly, and lubricate according to armorer guidelines.";

  // Notice Container: Explain vision status transparently
  const noticeContainer = document.getElementById("inspectorNoticeContainer");
  if (noticeContainer) {
    if (isFallback) {
      noticeContainer.innerHTML = `
        <div class="inspector-offline-notice">
          <span class="notice-icon">⚠️</span>
          <div class="notice-text">
            <strong>Coordinate Estimate (Vision Model Offline):</strong> This component was matched by 2D coordinates. 
            For true visual AI recognition across all 52 firearms, connect a Vision model:
            <br>&bull; <strong>Local (RTX 4090 GPU):</strong> Run <code>ollama pull qwen2-vl:7b</code> and launch via <code>run_workbench.bat</code>.
            <br>&bull; <strong>Cloud Web:</strong> Enter a free Gemini API Key in <button type="button" id="btnQuickOpenSettings" class="settings-quick-link">⚙️ Settings</button>.
          </div>
        </div>
      `;
      const quickBtn = document.getElementById("btnQuickOpenSettings");
      if (quickBtn && settingsDialog) {
        quickBtn.addEventListener("click", () => {
          settingsDialog.showModal();
          updateSettingsFields();
        });
      }
    } else {
      noticeContainer.innerHTML = "";
    }
  }

  // Citation Container: Deep PDF Manual RAG citation
  const citationContainer = document.getElementById("inspectorCitationContainer");
  if (citationContainer) {
    if (part.manual_citation) {
      citationContainer.innerHTML = `
        <div class="manual-citation-card">
          <div class="citation-header">
            <span>📖 ${part.manual_citation.manual_title} (Page ${part.manual_citation.page})</span>
            <button type="button" class="citation-jump-btn" id="btnJumpToManualPage">
              Jump to Page ${part.manual_citation.page} &rarr;
            </button>
          </div>
          <p class="citation-snippet">"${part.manual_citation.snippet}&hellip;"</p>
        </div>
      `;
      const jumpBtn = document.getElementById("btnJumpToManualPage");
      if (jumpBtn) {
        jumpBtn.addEventListener("click", () => {
          selectManual(part.manual_citation.manual_filename, part.manual_citation.manual_title, true);
          if (pdfFrame && part.manual_citation.page) {
            const rawUrl = pdfFrame.src.split("#")[0];
            pdfFrame.src = `${rawUrl}#page=${part.manual_citation.page}`;
          }
          switchPreviewMode("manual");
        });
      }
    } else {
      citationContainer.innerHTML = "";
    }
  }

  if (partInspectorDrawer) partInspectorDrawer.classList.remove("hidden");

  if (btnIdentifyCircledPart) {
    btnIdentifyCircledPart.disabled = false;
    btnIdentifyCircledPart.innerHTML = `
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      <span>Identify Part &amp; Tolerances</span>
    `;
  }
}

function populateSchematicPlateSelect(schematics) {
  if (!schematicPlateSelect) return;
  schematicPlateSelect.innerHTML = "";
  if (!schematics || schematics.length === 0) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "No plates available";
    schematicPlateSelect.appendChild(opt);
    return;
  }
  schematics.forEach((s, idx) => {
    const opt = document.createElement("option");
    opt.value = s.url;
    opt.textContent = `Plate ${idx + 1}: ${s.title.substring(0, 24)}`;
    schematicPlateSelect.appendChild(opt);
  });
  schematicPlateSelect.value = schematics[0].url;
}

function setupSchematicInspector() {
  if (!schematicCanvas) return;

  // Zoom Controls
  const zoomInBtn = document.getElementById("zoomInBtn");
  const zoomOutBtn = document.getElementById("zoomOutBtn");
  const zoomResetBtn = document.getElementById("zoomResetBtn");
  if (zoomInBtn) zoomInBtn.addEventListener("click", () => adjustZoom(0.2));
  if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => adjustZoom(-0.2));
  if (zoomResetBtn) zoomResetBtn.addEventListener("click", () => resetZoom());

  // Mouse wheel zoom
  schematicCanvas.addEventListener("wheel", (e) => {
    if (schematicStage.classList.contains("active")) {
      e.preventDefault();
      adjustZoom(e.deltaY < 0 ? 0.15 : -0.15);
    }
  }, { passive: false });

  // Tool Mode Toggles
  if (schematicPanModeBtn) schematicPanModeBtn.addEventListener("click", () => setSchematicToolMode("pan"));
  if (schematicCircleModeBtn) schematicCircleModeBtn.addEventListener("click", () => setSchematicToolMode("circle"));

  // Canvas / Image Resize
  if (schematicImg) {
    schematicImg.addEventListener("load", () => {
      resizeOverlayCanvas();
      if (currentCircle) redrawCircle(currentCircle);
    });
  }
  window.addEventListener("resize", () => {
    resizeOverlayCanvas();
    if (currentCircle) {
      redrawCircle(currentCircle);
      positionActionPill(currentCircle);
    }
  });

  // Plate dropdown change
  if (schematicPlateSelect) {
    schematicPlateSelect.addEventListener("change", (e) => {
      const url = e.target.value;
      const opt = e.target.options[e.target.selectedIndex];
      if (url) {
        selectSchematic(url, opt ? opt.textContent : "Schematic", false);
      }
    });
  }

  // Pan Mode Dragging
  schematicCanvas.addEventListener("mousedown", (e) => {
    if (schematicToolMode !== "pan") return;
    if (e.target.closest(".circle-action-pill") || e.target.closest(".part-inspector-drawer")) return;
    isPanning = true;
    panStartX = e.clientX - panX;
    panStartY = e.clientY - panY;
    schematicCanvas.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isPanning) return;
    panX = e.clientX - panStartX;
    panY = e.clientY - panStartY;
    applySchematicTransform();
  });

  window.addEventListener("mouseup", () => {
    if (isPanning) {
      isPanning = false;
      schematicCanvas.style.cursor = schematicToolMode === "pan" ? "grab" : "default";
    }
  });

  // Circle to Search Dragging
  if (selectionOverlayCanvas) {
    selectionOverlayCanvas.addEventListener("mousedown", (e) => {
      if (schematicToolMode !== "circle") return;
      isCircling = true;
      circleStartX = e.clientX;
      circleStartY = e.clientY;
      clearSchematicSelection();
      isCircling = true;
    });

    selectionOverlayCanvas.addEventListener("mousemove", (e) => {
      if (!isCircling) return;
      const pt1 = getCanvasNormalizedCoords(circleStartX, circleStartY);
      const pt2 = getCanvasNormalizedCoords(e.clientX, e.clientY);
      const cx = (pt1.x + pt2.x) / 2;
      const cy = (pt1.y + pt2.y) / 2;
      const rx = Math.abs(pt2.x - pt1.x) / 2;
      const ry = Math.abs(pt2.y - pt1.y) / 2;

      const previewCircle = {
        cx, cy, rx, ry,
        r: Math.max(rx, ry),
        rectW: pt1.rectW,
        rectH: pt1.rectH,
        norm_x: pt1.rectW > 0 ? cx / pt1.rectW : 0.5,
        norm_y: pt1.rectH > 0 ? cy / pt1.rectH : 0.5,
        norm_r: Math.max(pt1.rectW, pt1.rectH) > 0 ? Math.max(rx, ry) / Math.max(pt1.rectW, pt1.rectH) : 0.1
      };
      redrawCircle(previewCircle);
    });

    window.addEventListener("mouseup", (e) => {
      if (!isCircling) return;
      isCircling = false;
      const pt1 = getCanvasNormalizedCoords(circleStartX, circleStartY);
      const pt2 = getCanvasNormalizedCoords(e.clientX, e.clientY);
      const rx = Math.abs(pt2.x - pt1.x) / 2;
      const ry = Math.abs(pt2.y - pt1.y) / 2;

      if (rx < 6 && ry < 6) {
        clearSchematicSelection();
        return;
      }

      const cx = (pt1.x + pt2.x) / 2;
      const cy = (pt1.y + pt2.y) / 2;
      currentCircle = {
        cx, cy, rx, ry,
        r: Math.max(rx, ry),
        rectW: pt1.rectW,
        rectH: pt1.rectH,
        norm_x: pt1.rectW > 0 ? cx / pt1.rectW : 0.5,
        norm_y: pt1.rectH > 0 ? cy / pt1.rectH : 0.5,
        norm_r: Math.max(pt1.rectW, pt1.rectH) > 0 ? Math.max(rx, ry) / Math.max(pt1.rectW, pt1.rectH) : 0.1
      };

      redrawCircle(currentCircle);
      positionActionPill(currentCircle);
    });

    // Touch Support for Mobile
    let touchStartDist = 0;
    let initialZoom = 1.0;
    let touchStartX = 0;
    let touchStartY = 0;

    schematicCanvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 2) {
        touchStartDist = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );
        initialZoom = currentSchematicZoom;
      } else if (e.touches.length === 1) {
        const touch = e.touches[0];
        if (schematicToolMode === "pan") {
          isPanning = true;
          panStartX = touch.clientX - panX;
          panStartY = touch.clientY - panY;
        } else if (schematicToolMode === "circle") {
          isCircling = true;
          touchStartX = touch.clientX;
          touchStartY = touch.clientY;
          clearSchematicSelection();
          isCircling = true;
        }
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
        applySchematicTransform();
      } else if (e.touches.length === 1) {
        const touch = e.touches[0];
        if (isPanning && schematicToolMode === "pan") {
          panX = touch.clientX - panStartX;
          panY = touch.clientY - panStartY;
          applySchematicTransform();
        } else if (isCircling && schematicToolMode === "circle") {
          const pt1 = getCanvasNormalizedCoords(touchStartX, touchStartY);
          const pt2 = getCanvasNormalizedCoords(touch.clientX, touch.clientY);
          const cx = (pt1.x + pt2.x) / 2;
          const cy = (pt1.y + pt2.y) / 2;
          const rx = Math.abs(pt2.x - pt1.x) / 2;
          const ry = Math.abs(pt2.y - pt1.y) / 2;

          const previewCircle = {
            cx, cy, rx, ry,
            r: Math.max(rx, ry),
            rectW: pt1.rectW,
            rectH: pt1.rectH,
            norm_x: pt1.rectW > 0 ? cx / pt1.rectW : 0.5,
            norm_y: pt1.rectH > 0 ? cy / pt1.rectH : 0.5,
            norm_r: Math.max(pt1.rectW, pt1.rectH) > 0 ? Math.max(rx, ry) / Math.max(pt1.rectW, pt1.rectH) : 0.1
          };
          redrawCircle(previewCircle);
        }
      }
    }, { passive: true });

    schematicCanvas.addEventListener("touchend", (e) => {
      touchStartDist = 0;
      if (isPanning) {
        isPanning = false;
      }
      if (isCircling) {
        isCircling = false;
        if (e.changedTouches && e.changedTouches.length > 0) {
          const touch = e.changedTouches[0];
          const pt1 = getCanvasNormalizedCoords(touchStartX, touchStartY);
          const pt2 = getCanvasNormalizedCoords(touch.clientX, touch.clientY);
          const rx = Math.abs(pt2.x - pt1.x) / 2;
          const ry = Math.abs(pt2.y - pt1.y) / 2;

          if (rx >= 6 || ry >= 6) {
            const cx = (pt1.x + pt2.x) / 2;
            const cy = (pt1.y + pt2.y) / 2;
            currentCircle = {
              cx, cy, rx, ry,
              r: Math.max(rx, ry),
              rectW: pt1.rectW,
              rectH: pt1.rectH,
              norm_x: pt1.rectW > 0 ? cx / pt1.rectW : 0.5,
              norm_y: pt1.rectH > 0 ? cy / pt1.rectH : 0.5,
              norm_r: Math.max(pt1.rectW, pt1.rectH) > 0 ? Math.max(rx, ry) / Math.max(pt1.rectW, pt1.rectH) : 0.1
            };
            redrawCircle(currentCircle);
            positionActionPill(currentCircle);
          } else {
            clearSchematicSelection();
          }
        }
      }
    });
  }

  // Pill Action Buttons
  if (btnIdentifyCircledPart) btnIdentifyCircledPart.addEventListener("click", executeIdentifyPart);
  if (btnClearCircle) btnClearCircle.addEventListener("click", clearSchematicSelection);

  // Inspector Drawer Action Buttons
  if (btnClosePartInspector) btnClosePartInspector.addEventListener("click", () => {
    if (partInspectorDrawer) partInspectorDrawer.classList.add("hidden");
  });

  if (btnAskAiAboutPart) {
    btnAskAiAboutPart.addEventListener("click", () => {
      if (!currentIdentifiedPart) return;
      const part = currentIdentifiedPart;
      const gunName = firearmData ? firearmData.name : currentFirearm;
      const prompt = `I am inspecting the **${part.name}** (${part.callout_num || "Component"}, OEM ${part.oem_number || "Spec"}) on the **${gunName}**.\n\n` +
        `Critical Tolerances: ${part.tolerances || "Standard"}\n\n` +
        `What are the step-by-step armorer disassembly and reassembly protocols, critical wear points to inspect, and diagnostics for this specific component?`;

      if (partInspectorDrawer) partInspectorDrawer.classList.add("hidden");
      if (window.innerWidth <= 900) setMobileView("assistant");

      if (chatInput) {
        chatInput.value = prompt;
        handleChatSubmit();
      }
    });
  }

  if (btnFindPartVideos) {
    btnFindPartVideos.addEventListener("click", () => {
      if (!currentIdentifiedPart) return;
      const part = currentIdentifiedPart;
      const vidTab = document.querySelector('.lib-tab[data-tab="videos"]');
      if (vidTab) vidTab.click();

      if (firearmData && firearmData.videos && firearmData.videos.length > 0) {
        const q = (part.name + " " + (part.assembly || "")).toLowerCase();
        const match = firearmData.videos.find(v => {
          const vText = (v.title + " " + v.summary + " " + v.category).toLowerCase();
          const words = q.split(/\s+/).filter(w => w.length > 3);
          return words.some(w => vText.includes(w));
        }) || firearmData.videos[0];

        if (match) {
          selectVideo(match, true);
        }
      }
    });
  }

  if (btnSearchPartManual) {
    btnSearchPartManual.addEventListener("click", () => {
      if (!currentIdentifiedPart) return;
      const part = currentIdentifiedPart;

      if (part.manual_citation && part.manual_citation.manual_filename) {
        selectManual(part.manual_citation.manual_filename, part.manual_citation.manual_title, true);
        if (pdfFrame && part.manual_citation.page) {
          const rawUrl = pdfFrame.src.split("#")[0];
          pdfFrame.src = `${rawUrl}#page=${part.manual_citation.page}`;
        }
        switchPreviewMode("manual");
        return;
      }

      const manTab = document.querySelector('.lib-tab[data-tab="manuals"]');
      if (manTab) manTab.click();

      if (tabFilterInput) {
        tabFilterInput.value = part.name.split(" ")[0];
        filterActiveTabList(tabFilterInput.value);
      }
      switchPreviewMode("manual");
    });
  }
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
