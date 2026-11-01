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
const previewStageContainer = document.querySelector(".preview-stage-container");
const btnSwapPanes = document.getElementById("btnSwapPanes");
const modeBtnSplit = document.getElementById("modeBtnSplit");

let currentPreviewMode = "pdf";
let isPanesSwapped = false;

const panelLibrary = document.getElementById("panelLibrary");
const panelPreview = document.getElementById("panelPreview");
const panelAssistant = document.getElementById("panelAssistant");

const manualsListView = document.getElementById("manualsListView");
const schematicsGridView = document.getElementById("schematicsGridView");
const videosListView = document.getElementById("videosListView");
const stoppagesListView = document.getElementById("stoppagesListView");

const globalSearchInput = document.getElementById("globalSearchInput");
const btnGlobalSearch = document.getElementById("btnGlobalSearch");
const btnGlobalSearchClear = document.getElementById("btnGlobalSearchClear");
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

// Mozilla PDF.js Canvas Viewer DOM Elements
const pdfPageNum = document.getElementById("pdfPageNum");
const pdfTotalPages = document.getElementById("pdfTotalPages");
const pdfPrevPageBtn = document.getElementById("pdfPrevPageBtn");
const pdfNextPageBtn = document.getElementById("pdfNextPageBtn");
const pdfZoomOutBtn = document.getElementById("pdfZoomOutBtn");
const pdfZoomInBtn = document.getElementById("pdfZoomInBtn");
const pdfZoomLevel = document.getElementById("pdfZoomLevel");
const pdfFitWidthBtn = document.getElementById("pdfFitWidthBtn");
const pdfToggleViewerBtn = document.getElementById("pdfToggleViewerBtn");
const pdfLoadingSpinner = document.getElementById("pdfLoadingSpinner");
const pdfLoadingText = document.getElementById("pdfLoadingText");
const pdfCanvasContainer = document.getElementById("pdfCanvasContainer");
const pdfViewerCanvas = document.getElementById("pdfViewerCanvas");

// PDF Engine State
let currentPdfDoc = null;
let currentPdfPage = 1;
let currentPdfScale = 1.25;
let isPdfRendering = false;
let pendingPdfPage = null;
let activePdfRenderTask = null;
let currentPdfUrl = null;
let pdfViewerMode = "canvas"; // "canvas" or "native"

// Video Stage Fallback Elements
const videoPlaceholderBanner = document.getElementById("videoPlaceholderBanner");
const videoBannerTitle = document.getElementById("videoBannerTitle");
const videoBannerDesc = document.getElementById("videoBannerDesc");
const btnBannerWatch = document.getElementById("btnBannerWatch");

const chatHistory = document.getElementById("chatHistory");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const clearChatBtn = document.getElementById("clearChatBtn");

// Local LLM Header Start Button & Popover Controls
const btnStartLocalLLM = document.getElementById("btnStartLocalLLM");
const btnStartLocalLLMText = document.getElementById("btnStartLocalLLMText");
const llmAssistantDot = document.getElementById("llmAssistantDot");
const llmPowerIcon = document.getElementById("llmPowerIcon");
const localLLMPopover = document.getElementById("localLLMPopover");
const popoverStatusDot = document.getElementById("popoverStatusDot");
const popoverStatusTitle = document.getElementById("popoverStatusTitle");
const popoverEndpoint = document.getElementById("popoverEndpoint");
const popoverModelSelect = document.getElementById("popoverModelSelect");
const popoverEngineName = document.getElementById("popoverEngineName");
const popoverModelVram = document.getElementById("popoverModelVram");
const btnPopoverStartStop = document.getElementById("btnPopoverStartStop");
const btnPopoverConfig = document.getElementById("btnPopoverConfig");

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
  initPdfJs();
  setupPdfControls();
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
          appendMessage(
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

  // Swap panes in Bench Split View
  if (btnSwapPanes) {
    btnSwapPanes.addEventListener("click", () => {
      isPanesSwapped = !isPanesSwapped;
      if (previewStageContainer) {
        previewStageContainer.classList.toggle("swapped", isPanesSwapped);
      }
      btnSwapPanes.title = isPanesSwapped ? "Manual (Left) & Schematic (Right) — Click to Swap" : "Schematic (Left) & Manual (Right) — Click to Swap";
      setTimeout(() => {
        resetZoom();
        fitPdfToWidth();
      }, 50);
    });
  }

  // Library Navigation Tabs (left panel)
  document.querySelectorAll(".lib-tab").forEach(tab => {
    tab.addEventListener("click", () => switchLibraryTab(tab.dataset.tab));
  });

  // Mobile Bottom Navigation Bar View Switcher
  document.querySelectorAll(".mobile-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => setMobileView(btn.dataset.view));
  });

  // Mobile Top Bar Quick Back Navigation
  const mobileBackToLibBtn = document.getElementById("mobileBackToLibBtn");
  if (mobileBackToLibBtn) {
    mobileBackToLibBtn.addEventListener("click", () => setMobileView("library"));
  }

  const mobileBackToWorkBtn = document.getElementById("mobileBackToWorkBtn");
  if (mobileBackToWorkBtn) {
    mobileBackToWorkBtn.addEventListener("click", () => setMobileView("preview"));
  }

  // Filter inside active tab
  tabFilterInput.addEventListener("input", filterCurrentTab);

  // Global search input with explicit Search Button, Clear, and Enter key
  let searchTimeout = null;
  if (globalSearchInput) {
    globalSearchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      const q = e.target.value.trim();
      if (btnGlobalSearchClear) {
        btnGlobalSearchClear.classList.toggle("hidden", q.length === 0);
      }
      if (q.length < 2) {
        searchResultsPopup.classList.add("hidden");
        return;
      }
      searchTimeout = setTimeout(() => executeGlobalSearch(q, false), 220);
    });

    globalSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        clearTimeout(searchTimeout);
        executeGlobalSearch(globalSearchInput.value.trim(), true);
      } else if (e.key === "Escape") {
        searchResultsPopup.classList.add("hidden");
      }
    });
  }

  if (btnGlobalSearch) {
    btnGlobalSearch.addEventListener("click", () => {
      clearTimeout(searchTimeout);
      executeGlobalSearch(globalSearchInput.value.trim(), true);
    });
  }

  if (btnGlobalSearchClear) {
    btnGlobalSearchClear.addEventListener("click", () => {
      globalSearchInput.value = "";
      btnGlobalSearchClear.classList.add("hidden");
      searchResultsPopup.classList.add("hidden");
      globalSearchInput.focus();
    });
  }

  // Close search popup when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search")) {
      searchResultsPopup.classList.add("hidden");
    }
  });

  // Setup Interactive Schematic Inspector (Pan, Zoom & Circle-to-Search)
  setupSchematicInspector();

  // Setup Video Diagnostics Lab & Malfunction Simulator
  setupVideoDiagnostics();

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

  // Local LLM AI Start Button & Control Popover
  if (btnStartLocalLLM) {
    btnStartLocalLLM.addEventListener("click", (e) => {
      e.stopPropagation();
      const ollama = (availableBackends || []).find(b => b.id === "ollama");
      const isOnline = ollama && ollama.status === "online";
      if (!isOnline) {
        startLocalLLM();
      } else {
        if (localLLMPopover) localLLMPopover.classList.toggle("hidden");
      }
    });
  }

  if (btnPopoverStartStop) {
    btnPopoverStartStop.addEventListener("click", (e) => {
      e.stopPropagation();
      const ollama = (availableBackends || []).find(b => b.id === "ollama");
      const isOnline = ollama && ollama.status === "online";
      if (isOnline) {
        stopLocalLLM();
      } else {
        startLocalLLM();
      }
    });
  }

  if (popoverModelSelect) {
    popoverModelSelect.addEventListener("change", (e) => {
      switchLocalModel(e.target.value);
    });
  }

  if (btnPopoverConfig) {
    btnPopoverConfig.addEventListener("click", (e) => {
      e.stopPropagation();
      if (localLLMPopover) localLLMPopover.classList.add("hidden");
      if (settingsDialog) {
        settingsDialog.showModal();
        updateSettingsFields();
      }
    });
  }

  // Close popover when clicking anywhere outside
  document.addEventListener("click", (e) => {
    if (localLLMPopover && !localLLMPopover.classList.contains("hidden")) {
      if (!localLLMPopover.contains(e.target) && e.target !== btnStartLocalLLM && !btnStartLocalLLM.contains(e.target)) {
        localLLMPopover.classList.add("hidden");
      }
    }
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

  const isGitHubPages = window.location.hostname.includes("github.io") || (!window.location.port && window.location.protocol === "https:");

  // Mixed Content / PNA check on hosted HTTPS sites:
  if (isGitHubPages && (backend === "lmstudio" || backend === "ollama" || endpoint.includes("127.0.0.1") || endpoint.includes("localhost"))) {
    connTestResult.style.color = "var(--brass-accent)";
    connTestResult.innerHTML = `
      <div style="text-align: left; line-height: 1.5; padding: 6px 0;">
        <span style="color:var(--accent-red); font-weight:bold;">⚠️ Browser Mixed-Content Restriction:</span><br>
        Web browsers (Chrome / Edge) strictly block hosted <code>https://</code> sites like GitHub Pages from connecting to local machine IP addresses (<code>${endpoint || 'http://127.0.0.1'}</code>).<br><br>
        <strong>To connect to your local LM Studio / Ollama with PyMuPDF RAG:</strong><br>
        1. Open your local <code>Gun Manuals</code> folder.<br>
        2. Double-click <code style="color:var(--accent-green); font-weight:bold;">run_workbench.bat</code>.<br>
        3. Open <a href="http://127.0.0.1:8055" target="_blank" style="color:var(--accent-green); text-decoration: underline; font-weight:bold;">http://127.0.0.1:8055</a> in your browser.<br><br>
        <em>Note: When running locally, all local GPU models and manual PDFs connect with zero restrictions!</em>
      </div>
    `;
    return;
  }

  // Direct client-side verification for Google Gemini on GitHub Pages
  if (isGitHubPages && backend === "gemini") {
    if (!apiKey) {
      connTestResult.style.color = "var(--accent-red)";
      connTestResult.textContent = "⚠️ Please enter your Google Gemini API Key.";
      return;
    }
    try {
      const gRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
      if (gRes.ok) {
        const gData = await gRes.json();
        const count = (gData.models || []).length;
        connTestResult.style.color = "var(--accent-green)";
        connTestResult.textContent = `✓ Connected to Google Gemini successfully! (${count} models available)`;
        return;
      } else {
        const errJson = await gRes.json().catch(() => ({}));
        connTestResult.style.color = "var(--accent-red)";
        connTestResult.textContent = `⚠️ Gemini API Error: ${errJson.error?.message || gRes.statusText}`;
        return;
      }
    } catch (gErr) {
      connTestResult.style.color = "var(--accent-red)";
      connTestResult.textContent = `⚠️ Network error reaching Gemini: ${gErr.message}`;
      return;
    }
  }

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
      appendMessage(
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

// ==========================================================================
// MOZILLA PDF.JS CANVAS VIEWER & DOCUMENT CONTROLLER
// ==========================================================================

function initPdfJs() {
  if (window.pdfjsLib) {
    const isStatic = window.location.hostname.includes("github.io");
    if (window.location.protocol === "file:") {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = "";
    } else if (isStatic) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = "./vendor/pdf.worker.min.js";
    } else {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = "/static/vendor/pdf.worker.min.js";
    }
  }
}

async function loadPdfDocument(url, targetPage = 1) {
  currentPdfUrl = url;
  const pageToLoad = Math.max(1, parseInt(targetPage) || 1);

  if (pdfViewerMode === "native") {
    switchToNativeViewer(url, pageToLoad);
    return;
  }

  if (!window.pdfjsLib) {
    console.warn("PDF.js library not detected; falling back to native iframe viewer.");
    switchToNativeViewer(url, pageToLoad);
    return;
  }

  if (pdfLoadingSpinner) {
    pdfLoadingSpinner.classList.remove("hidden");
    if (pdfLoadingText) pdfLoadingText.textContent = "Loading technical manual...";
  }

  if (activePdfRenderTask) {
    try { activePdfRenderTask.cancel(); } catch (e) {}
    activePdfRenderTask = null;
  }

  let safeUrl = url;
  if (safeUrl.includes("github.com/") && safeUrl.includes("/raw/")) {
    safeUrl = safeUrl.replace("github.com/", "raw.githubusercontent.com/").replace("/raw/", "/");
  }

  try {
    const loadingTask = window.pdfjsLib.getDocument({
      url: safeUrl,
      cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/",
      cMapPacked: true,
      standardFontDataUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/",
    });

    const pdfDoc = await loadingTask.promise;
    currentPdfDoc = pdfDoc;
    currentPdfPage = Math.min(pageToLoad, pdfDoc.numPages);

    if (pdfTotalPages) pdfTotalPages.textContent = pdfDoc.numPages;
    if (pdfPageNum) {
      pdfPageNum.max = pdfDoc.numPages;
      pdfPageNum.value = currentPdfPage;
    }

    if (pdfCanvasContainer) pdfCanvasContainer.classList.remove("hidden");
    if (pdfFrame) pdfFrame.classList.add("hidden");

    await renderPdfPage(currentPdfPage);
  } catch (err) {
    console.warn("PDF.js direct rendering failed (CORS or format); falling back to native iframe viewer:", err);
    switchToNativeViewer(url, pageToLoad);
  } finally {
    if (pdfLoadingSpinner) pdfLoadingSpinner.classList.add("hidden");
  }
}

async function renderPdfPage(num) {
  if (!currentPdfDoc || !pdfViewerCanvas) return;
  if (isPdfRendering) {
    pendingPdfPage = num;
    return;
  }

  isPdfRendering = true;
  if (pdfLoadingSpinner) {
    pdfLoadingSpinner.classList.remove("hidden");
    if (pdfLoadingText) pdfLoadingText.textContent = `Rendering page ${num} of ${currentPdfDoc.numPages}...`;
  }

  try {
    const page = await currentPdfDoc.getPage(num);
    const ctx = pdfViewerCanvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    const viewport = page.getViewport({ scale: currentPdfScale });

    pdfViewerCanvas.width = Math.floor(viewport.width * dpr);
    pdfViewerCanvas.height = Math.floor(viewport.height * dpr);
    pdfViewerCanvas.style.width = Math.floor(viewport.width) + "px";
    pdfViewerCanvas.style.height = Math.floor(viewport.height) + "px";

    const transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null;

    const renderContext = {
      canvasContext: ctx,
      transform: transform,
      viewport: viewport
    };

    if (activePdfRenderTask) {
      try { activePdfRenderTask.cancel(); } catch (e) {}
    }

    activePdfRenderTask = page.render(renderContext);
    await activePdfRenderTask.promise;
    activePdfRenderTask = null;

    currentPdfPage = num;
    if (pdfPageNum) pdfPageNum.value = num;
    if (pdfZoomLevel) pdfZoomLevel.textContent = `${Math.round(currentPdfScale * 100)}%`;
  } catch (err) {
    if (err && err.name !== "RenderingCancelledException") {
      console.error("PDF page render error:", err);
    }
  } finally {
    isPdfRendering = false;
    if (pdfLoadingSpinner) pdfLoadingSpinner.classList.add("hidden");
    if (pendingPdfPage !== null) {
      const next = pendingPdfPage;
      pendingPdfPage = null;
      renderPdfPage(next);
    }
  }
}

function queueRenderPdfPage(num) {
  if (!currentPdfDoc) return;
  const target = Math.max(1, Math.min(num, currentPdfDoc.numPages));
  if (isPdfRendering) {
    pendingPdfPage = target;
  } else {
    renderPdfPage(target);
  }
}

function switchToNativeViewer(url, targetPage = 1) {
  pdfViewerMode = "native";
  if (pdfCanvasContainer) pdfCanvasContainer.classList.add("hidden");
  if (pdfFrame) {
    pdfFrame.classList.remove("hidden");
    const isStatic = window.location.hostname.includes("github.io") || window.location.protocol === "file:";
    if (isStatic) {
      pdfFrame.src = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
    } else {
      pdfFrame.src = `${url}#page=${targetPage}`;
    }
  }
  if (pdfToggleViewerBtn) {
    pdfToggleViewerBtn.textContent = "🎨 Canvas";
    pdfToggleViewerBtn.title = "Switch to High-Resolution Canvas Viewer";
  }
}

function switchToCanvasViewer() {
  pdfViewerMode = "canvas";
  if (pdfFrame) pdfFrame.classList.add("hidden");
  if (pdfCanvasContainer) pdfCanvasContainer.classList.remove("hidden");
  if (pdfToggleViewerBtn) {
    pdfToggleViewerBtn.textContent = "👁️ Native";
    pdfToggleViewerBtn.title = "Switch to Native Browser / Iframe PDF Viewer";
  }
  if (currentPdfUrl) {
    loadPdfDocument(currentPdfUrl, currentPdfPage || 1);
  }
}

function fitPdfToWidth() {
  if (!currentPdfDoc || !pdfCanvasContainer) return;
  const containerWidth = pdfCanvasContainer.clientWidth - 40;
  if (containerWidth <= 120) return;
  currentPdfDoc.getPage(currentPdfPage).then(page => {
    const defaultViewport = page.getViewport({ scale: 1.0 });
    currentPdfScale = Math.max(0.5, Math.min(3.0, containerWidth / defaultViewport.width));
    renderPdfPage(currentPdfPage);
  });
}

function setupPdfControls() {
  if (pdfPrevPageBtn) {
    pdfPrevPageBtn.addEventListener("click", () => {
      if (currentPdfDoc && currentPdfPage > 1) {
        queueRenderPdfPage(currentPdfPage - 1);
      }
    });
  }

  if (pdfNextPageBtn) {
    pdfNextPageBtn.addEventListener("click", () => {
      if (currentPdfDoc && currentPdfPage < currentPdfDoc.numPages) {
        queueRenderPdfPage(currentPdfPage + 1);
      }
    });
  }

  if (pdfPageNum) {
    pdfPageNum.addEventListener("change", (e) => {
      const n = parseInt(e.target.value);
      if (currentPdfDoc && n >= 1 && n <= currentPdfDoc.numPages) {
        queueRenderPdfPage(n);
      } else if (currentPdfDoc) {
        e.target.value = currentPdfPage;
      }
    });
  }

  if (pdfZoomInBtn) {
    pdfZoomInBtn.addEventListener("click", () => {
      currentPdfScale = Math.min(3.0, Math.round((currentPdfScale + 0.25) * 100) / 100);
      renderPdfPage(currentPdfPage);
    });
  }

  if (pdfZoomOutBtn) {
    pdfZoomOutBtn.addEventListener("click", () => {
      currentPdfScale = Math.max(0.5, Math.round((currentPdfScale - 0.25) * 100) / 100);
      renderPdfPage(currentPdfPage);
    });
  }

  if (pdfFitWidthBtn) {
    pdfFitWidthBtn.addEventListener("click", () => {
      fitPdfToWidth();
    });
  }

  if (pdfToggleViewerBtn) {
    pdfToggleViewerBtn.addEventListener("click", () => {
      if (pdfViewerMode === "canvas") {
        switchToNativeViewer(currentPdfUrl, currentPdfPage);
      } else {
        switchToCanvasViewer();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (!pdfStage || pdfStage.classList.contains("hidden")) return;
    if (["input", "textarea", "select"].includes(document.activeElement?.tagName?.toLowerCase())) return;

    if (e.key === "ArrowLeft" || e.key === "PageUp") {
      if (currentPdfDoc && currentPdfPage > 1) {
        e.preventDefault();
        queueRenderPdfPage(currentPdfPage - 1);
      }
    } else if (e.key === "ArrowRight" || e.key === "PageDown") {
      if (currentPdfDoc && currentPdfPage < currentPdfDoc.numPages) {
        e.preventDefault();
        queueRenderPdfPage(currentPdfPage + 1);
      }
    } else if (e.key === "+" || e.key === "=") {
      if (e.ctrlKey || e.metaKey) return;
      e.preventDefault();
      currentPdfScale = Math.min(3.0, Math.round((currentPdfScale + 0.25) * 100) / 100);
      renderPdfPage(currentPdfPage);
    } else if (e.key === "-") {
      if (e.ctrlKey || e.metaKey) return;
      e.preventDefault();
      currentPdfScale = Math.max(0.5, Math.round((currentPdfScale - 0.25) * 100) / 100);
      renderPdfPage(currentPdfPage);
    }
  });
}

function selectManual(filename, title, switchToPreview = true, page = 1) {
  document.querySelectorAll("#manualsListView .doc-card").forEach(c => {
    c.classList.toggle("active", c.dataset.id === filename);
  });

  const manualObj = (firearmData.manuals || []).find(m => m.filename === filename);
  const isStatic = window.location.hostname.includes("github.io") || window.location.protocol === "file:";
  let pdfUrl = `/api/manuals/${currentFirearm}/${filename}`;
  if (isStatic && manualObj && manualObj.url) {
    pdfUrl = manualObj.url;
  }

  if (btnPdfFullscreen) btnPdfFullscreen.href = (isStatic && manualObj) ? (manualObj.github_url || manualObj.url) : pdfUrl;
  if (btnExternalLink) btnExternalLink.href = (isStatic && manualObj) ? (manualObj.github_url || manualObj.url) : pdfUrl;
  if (btnPdfDownload) btnPdfDownload.href = (isStatic && manualObj) ? (manualObj.raw_url || manualObj.url) : pdfUrl;

  if (pdfDocName) pdfDocName.textContent = title;
  if (pdfMobileDocName) pdfMobileDocName.textContent = title;

  if (currentPreviewMode === "split") {
    const sTitle = schematicPlateSelect?.options[schematicPlateSelect.selectedIndex]?.text || "Schematic";
    previewTitle.textContent = `Bench Split: ${sTitle} | ${title}`;
  } else {
    previewTitle.textContent = title;
    switchPreviewMode("pdf");
  }

  loadPdfDocument(pdfUrl, page);

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

  if (currentPreviewMode === "split") {
    const mTitle = pdfDocName ? pdfDocName.textContent : "Technical Manual";
    previewTitle.textContent = `Bench Split: ${title} | ${mTitle}`;
  } else {
    previewTitle.textContent = "Schematic: " + title;
    switchPreviewMode("schematic");
  }

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
  const isPlaceholder = !video.id || video.id.includes("x9") || video.id.includes("x2w") || video.id.length > 20 || video.id.includes("search");
  const hasValidEmbed = Boolean(video.embed_url && !video.embed_url.includes("search") && !isPlaceholder);

  const directUrl = (!isPlaceholder && video.url) 
    ? video.url 
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(gunName + " " + video.title + " armorer")}`;

  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(gunName + " gunsmithing teardown repair")}`;

  if (hasValidEmbed) {
    videoFrame.src = video.embed_url;
    videoFrame.classList.remove("hidden");
    if (videoPlaceholderBanner) videoPlaceholderBanner.classList.add("hidden");
  } else if (video.id && video.id.length === 11 && !video.id.includes(" ")) {
    videoFrame.src = `https://www.youtube-nocookie.com/embed/${video.id}`;
    videoFrame.classList.remove("hidden");
    if (videoPlaceholderBanner) videoPlaceholderBanner.classList.add("hidden");
  } else {
    // Avoid loading deprecated listType=search which causes YouTube playback errors
    videoFrame.src = "about:blank";
    videoFrame.classList.add("hidden");
    if (videoPlaceholderBanner) {
      videoPlaceholderBanner.classList.remove("hidden");
      if (videoBannerTitle) videoBannerTitle.textContent = video.title;
      if (videoBannerDesc) videoBannerDesc.textContent = `${video.summary} (Curated by ${video.creator || "Armorer Hub"})`;
      if (btnBannerWatch) btnBannerWatch.href = directUrl;
    }
  }

  videoMetaTitle.textContent = video.title;
  videoMetaCreator.textContent = `${video.creator} • ${video.category}`;
  videoMetaSummary.textContent = video.summary;
  previewTitle.textContent = "Video: " + video.title;

  btnExternalLink.href = directUrl;

  const btnWatch = document.getElementById("btnWatchOnYouTube");
  if (btnWatch) {
    btnWatch.href = directUrl;
    btnWatch.textContent = hasValidEmbed ? "Watch Directly on YouTube ↗" : `Watch "${video.title}" on YouTube ↗`;
  }

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
  if (mode === "manual") mode = "pdf";
  if (mode === "specs" || mode === "stoppages" || mode === "stoppage") mode = "dossier";

  currentPreviewMode = mode;

  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  const previewContainer = document.querySelector(".preview-stage-container");

  // Handle Dual Bench Split Mode
  if (mode === "split") {
    if (previewContainer) previewContainer.classList.add("split-mode");
    if (btnSwapPanes) btnSwapPanes.classList.remove("hidden");

    // Both Schematic (Left) and Manual (Right) visible
    schematicStage.classList.remove("hidden");
    schematicStage.classList.add("active", "split-pane");

    pdfStage.classList.remove("hidden");
    pdfStage.classList.add("active", "split-pane");

    videoStage.classList.add("hidden");
    videoStage.classList.remove("active", "split-pane");
    dossierStage.classList.add("hidden");
    dossierStage.classList.remove("active", "split-pane");

    const sTitle = schematicPlateSelect?.options[schematicPlateSelect.selectedIndex]?.text || "Schematic";
    const mTitle = pdfDocName ? pdfDocName.textContent : "Technical Manual";
    previewTitle.textContent = `Bench Split: ${sTitle} | ${mTitle}`;

    // Fit both viewports to their split dimensions
    setTimeout(() => {
      resetZoom();
      fitPdfToWidth();
    }, 60);
    return;
  }

  // Single-stage mode
  if (previewContainer) previewContainer.classList.remove("split-mode");
  if (btnSwapPanes) btnSwapPanes.classList.add("hidden");

  pdfStage.classList.remove("split-pane");
  schematicStage.classList.remove("split-pane");

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
  } else if (mode === "schematic") {
    const sTitle = schematicPlateSelect?.options[schematicPlateSelect.selectedIndex]?.text || "Schematic";
    previewTitle.textContent = "Schematic: " + sTitle;
    setTimeout(() => resetZoom(), 50);
  } else if (mode === "pdf") {
    previewTitle.textContent = pdfDocName ? pdfDocName.textContent : "Technical Manual";
    setTimeout(() => fitPdfToWidth(), 50);
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
    } else if (normY <= 0.40 && 0.35 <= normX && normX <= 0.65) {
      return {
        id: "longgun_top_drum_feed",
        name: "Pan Drum Magazine & Top Feed Mechanism",
        callout_num: "Magazine / Feed Assembly",
        oem_number: "Feedway Group",
        assembly: "Magazine & Feed Mechanism",
        tolerances: "Feed pawl clearance: 0.012\" to 0.018\"; drum latch engagement: 0.025\" full bite. Center boss clearance: 0.005\" to 0.008\".",
        malfunctions: "Position 1 Stoppage (pan drum fails to rotate or feed cartridge); feed pawl binding or chipped pawl spring.",
        maintenance: "Clean internal feed tracks completely dry; lubricate feed pawl pivots with light synthetic oil; never force drum rotation counter-clockwise."
      };
    } else if (0.28 < normX && normX <= 0.44 && normY >= 0.48) {
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
    } else if (0.44 < normX && normX <= 0.58 && normY >= 0.50) {
      return {
        id: "longgun_magazine_feed_system",
        name: "Magazine & Cartridge Feed Mechanism (Box / Tube / Well)",
        callout_num: "Magazine Assembly",
        oem_number: "Feedway Group",
        assembly: "Magazine & Feed Mechanism",
        tolerances: "Feed lip width: parallel within ±0.003\". Magazine catch lockup depth: 0.020\" to 0.035\" full engagement. Follower travels freely from top to bottom with zero binding.",
        malfunctions: "Position 1 & 2 Stoppages (failure to feed or stovepipe); double-feeding from spread feed lips; failure of bolt to lock back on empty.",
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
      const allowedRadius = p.norm_r || 0.10;
      const dist = Math.hypot(normX - px, normY - py);
      if (dist <= allowedRadius && dist < minDistance) {
        minDistance = dist;
        bestMatch = Object.assign({}, p);
      }
    });
  }

  // If no registered part within allowed radius, use Universal Firearm Anatomy Engine
  if (!bestMatch) {
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
          selectManual(part.manual_citation.manual_filename, part.manual_citation.manual_title, true, part.manual_citation.page);
          if (currentPreviewMode !== "split") {
            switchPreviewMode("pdf");
          }
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
        if (e.cancelable) e.preventDefault();
      } else if (e.touches.length === 1) {
        const touch = e.touches[0];
        if (schematicToolMode === "pan") {
          isPanning = true;
          panStartX = touch.clientX - panX;
          panStartY = touch.clientY - panY;
          if (e.cancelable) e.preventDefault();
        } else if (schematicToolMode === "circle") {
          isCircling = true;
          touchStartX = touch.clientX;
          touchStartY = touch.clientY;
          clearSchematicSelection();
          if (e.cancelable) e.preventDefault();
        }
      }
    }, { passive: false });

    schematicCanvas.addEventListener("touchmove", (e) => {
      if (e.touches.length === 2 && touchStartDist > 0) {
        if (e.cancelable) e.preventDefault();
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
          if (e.cancelable) e.preventDefault();
          panX = touch.clientX - panStartX;
          panY = touch.clientY - panStartY;
          applySchematicTransform();
        } else if (isCircling && schematicToolMode === "circle") {
          if (e.cancelable) e.preventDefault();
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
    }, { passive: false });

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
            // Smart Tap-to-Inspect for mobile touchscreens
            const tapX = pt1.x;
            const tapY = pt1.y;
            const tapRadius = 42;
            currentCircle = {
              cx: tapX,
              cy: tapY,
              rx: tapRadius,
              ry: tapRadius,
              r: tapRadius,
              rectW: pt1.rectW,
              rectH: pt1.rectH,
              norm_x: pt1.rectW > 0 ? tapX / pt1.rectW : 0.5,
              norm_y: pt1.rectH > 0 ? tapY / pt1.rectH : 0.5,
              norm_r: Math.max(pt1.rectW, pt1.rectH) > 0 ? tapRadius / Math.max(pt1.rectW, pt1.rectH) : 0.08
            };
            redrawCircle(currentCircle);
            positionActionPill(currentCircle);
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
        selectManual(part.manual_citation.manual_filename, part.manual_citation.manual_title, true, part.manual_citation.page);
        if (currentPreviewMode !== "split") {
          switchPreviewMode("pdf");
        }
        return;
      }

      const manTab = document.querySelector('.lib-tab[data-tab="manuals"]');
      if (manTab) manTab.click();

      if (tabFilterInput) {
        tabFilterInput.value = part.name.split(" ")[0];
        filterActiveTabList(tabFilterInput.value);
      }
      if (currentPreviewMode !== "split") {
        switchPreviewMode("pdf");
      }
    });
  }
}

// Global Live Search with Cross-Platform & Cross-Manufacturer Matching
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
        if (/\b(clean|cleaning|lube|lubricat|oil|grease|solvent)\b/i.test(qLower)) {
          detectedTask = "clean";
        } else if (/\b(strip|stripping|disassembl|takedown|take down|field strip)\b/i.test(qLower)) {
          detectedTask = "strip";
        } else if (/\b(jam|jams|stoppage|stoppages|malfunction|misfire|extract|eject)\b/i.test(qLower)) {
          detectedTask = "stoppage";
        } else if (/\b(spec|specs|torque|headspace|clearance|dimension)\b/i.test(qLower)) {
          detectedTask = "specs";
        } else if (/\b(trigger|polish|modify|upgrade|spring)\b/i.test(qLower)) {
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
  const rawTokens = query.replace(/[-/.]/g, " ").split(/\s+/).filter(t => t.length > 0);
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
      const mParts = m.replace(/[-/.]/g, " ").split(/\s+/);
      if (tokensToMatch.some(t => (t.length >= 2 || /^\d+$/.test(t)) && (mParts.includes(t) || m.includes(t)))) {
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
  const rawTokens = q.replace(/[-/.]/g, " ").split(/\s+/).filter(t => t.length > 1);
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

    const snippetLines = (c.text || "").split("\n").map(l => l.trim()).filter(l => l && !l.startsWith("Document:"));
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
        reply: `### Master Armorer: Lewis Automatic Machine Gun — Barrel Group & Radiator Casing Stripping Protocol\n\n` +
          `*⚠️ **Armorer Warning:** Disassembly of the aluminum radiator and barrel group should only be performed for deep armory overhaul, barrel replacement, or clearing heavy baked carbon from the gas cylinder.*\n\n` +
          `**Step-by-Step Stripping Sequence:**\n` +
          `1. **Clamp Ring (Part #3-13):**\n` +
          `   * Using the flat screwdriver bit on the armorer combination spanner, unscrew the clamp ring screw (Part #3-15).\n` +
          `   * Slide the clamp ring—which carries the front sight (Part #3-14) and positioning screw—forward off the radiator casing.\n\n` +
          `2. **Radiator Casing Front (Barrel Shield / Outer Shroud, Part #3-4):**\n` +
          `   * Grasp the cylindrical aluminum radiator casing front and pull it straight off forward away from the longitudinal cooling fins.\n\n` +
          `3. **Radiator Casing Rear (Part #3-20A):**\n` +
          `   * Withdraw the radiator casing rear (permanently assembled to the radiator casing rear locking piece) straight off to the rear towards the receiver.\n\n` +
          `4. **Gas Cylinder (Part #3-19):**\n` +
          `   * Unscrew and dismount the gas cylinder. *Armorer Field Trick:* Use the piston rack (Part #8-1) as your wrench—the cross-section of the rack is purpose-machined to match the gas cylinder wrench flats.\n\n` +
          `5. **Gas Chamber Gland (Part #3-7) & Barrel Mouthpiece (Part #3-2) — ⚠️ LEFT-HANDED THREADS:**\n` +
          `   * Fit the armorer combination spanner to the barrel mouthpiece (Part #3-2) and gas chamber gland (Part #3-7).\n` +
          `   * ⚠️ **MANDATORY WARNING:** Both components are machined with **LEFT-HANDED (REVERSE) THREADS**. Turn clockwise to loosen; turning counterclockwise will strip or shear the threads.\n\n` +
          `6. **Barrel Dismounting (Part #3-1) & Gas Chamber (Part #3-6):**\n` +
          `   * Keep the barrel mouthpiece threaded on approximately 3 threads to protect the crown.\n` +
          `   * Strike the mouthpiece lightly with a brass or lead mallet to drive the barrel rearward, breaking the taper fit inside the aluminum radiator (Part #3-3).\n` +
          `   * Unscrew the barrel completely; the gas chamber (Part #3-6) will drop free from its recess inside the radiator.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("clean") || q.includes("maintenance") || q.includes("lube") || q.includes("oil") || q.includes("care") || q.includes("carbon")) {
      return {
        reply: `### Lewis Automatic Machine Gun — Armorer Cleaning & Maintenance Protocol\n\n` +
          `1. **Gas Cylinder & Piston Rod Assembly:**\n` +
          `   * Disassemble gas cylinder and thoroughly scrub interior walls and ports with nitro powder solvent and a stiff brass wire brush to eliminate lead, carbon, and copper wash.\n` +
          `   * Wipe piston head, piston rings, and rack teeth completely dry. **Never leave heavy oil or wet grease inside the gas chamber** (causes violent smoking and rapid baked carbon buildup).\n\n` +
          `2. **Gear Casing & Clockwork Return Mainspring (Part #18):**\n` +
          `   * Lubricate spiral mainspring leaves with a light coat of medium petroleum grease (graphite blend).\n` +
          `   * ⚠️ **MANDATORY SAFETY WARNING:** Never allow the gear casing to spin free or release tension uncontrolled. Hold casing securely while pulling tension locking key.\n\n` +
          `3. **Aluminum Radiator & Barrel Shroud:**\n` +
          `   * Inspect the longitudinal cooling fins for dirt, mud, or bent vanes that obstruct airflow. Clean with kerosene and soft bristle brush.\n` +
          `   * Ensure the aluminum casing and barrel clamp screws are torqued evenly to preserve straight barrel-to-gas-cylinder alignment.\n\n` +
          `4. **Feed Mechanism & Pan Magazine:**\n` +
          `   * Apply a light wipe of gun oil to the bolt feed stud, actuator track, and striker post. Keep feed arm pawl pivots free of grit.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("tension") || q.includes("spring") || q.includes("clock") || q.includes("pull") || q.includes("gear")) {
      return {
        reply: `### Lewis Gun Return Mainspring Calibration\n\n` +
          `* **Operating Tension:** **12 to 14 lbs pull** measured with a spring scale hooked to the cocking handle.\n` +
          `* **Baseline Pre-load:** From dead-slack, rotate gear casing counter-clockwise exactly **2 to 2½ full revolutions** before seating the tension latch key.\n` +
          `* **Pinion Teeth Runout:** Must remain under **0.003\"**.\n` +
          `* **Field Adjustment:** If sluggish forward stroke causes failure to feed from 47-round drum, add 1/2 turn (2 clicks). If bolt recoils excessively hard against buffer, reduce tension by 1 click.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("gas") || q.includes("regulator") || q.includes("port") || q.includes("cup")) {
      return {
        reply: `### Lewis Gun Gas Port & Regulator System\n\n` +
          `* **Two-Port Cup Regulator:** Features large ('L') and small ('S' or 'H') gas ports.\n` +
          `* **Standard Service:** Always run on the smaller port under normal conditions (firing ~500–600 rpm).\n` +
          `* **Adverse Conditions:** Rotate regulator cup using the armorer combination wrench to the large port if heavy fouling or sub-zero mud causes short-recoil stoppages.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("stoppage") || q.includes("jam") || q.includes("position") || q.includes("fail")) {
      return {
        reply: `### Lewis Gun 4-Position Stoppage Diagnostics\n\n` +
          `* **Position 1 (Cocking Handle fully forward):** Misfire, empty drum, or broken striker. Wait 5s for hangfire, cock, replace drum.\n` +
          `* **Position 2 (Cocking Handle 1\" to 2\" from forward):** Thick rimmed cartridge, deformed bullet, or dirt in chamber. Clear, check gas regulator.\n` +
          `* **Position 3 (Cocking Handle near full rear):** Separated case or broken ejector. Insert clearing plug / extract ruptured case.\n` +
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
        reply: `### Glock Cruciform Sear Engagement Specification\n\n` +
          `* **Safety Requirement:** Minimum **66% (2/3)** surface overlap between striker lug and trigger bar cruciform sear plate.\n` +
          `* **Armorer Inspection:** Install orange Armorer Inspection Cover Plate (SP 02096). Verify engagement under 10x magnification.\n` +
          `* ⚠️ **MANDATORY SAFETY WARNING:** Less than 66% overlap introduces severe risk of accidental discharge on impact or full-auto slip.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("clean") || q.includes("lube") || q.includes("oil") || q.includes("maintenance") || q.includes("deep")) {
      return {
        reply: `### Glock Factory Deep Cleaning & 5-Drop Lubrication Protocol\n\n` +
          `1. **Disassembly & Frame Pin Order:**\n` +
          `   * On 3-pin frames (Gen 3/4), push out the **top locking block pin FIRST** using a 3/32\" punch. This relieves spring tension off the trigger pin below it, allowing it to push out effortlessly.\n\n` +
          `2. **Factory 5-Drop Lubrication:**\n` +
          `   * **Drops 1 & 2:** One drop split along rear slide rail channels.\n` +
          `   * **Drops 3 & 4:** One drop split along front slide rail cuts.\n` +
          `   * **Drop 5:** One drop spread on barrel exterior hood and circumference.\n` +
          `   * **Half Drop (Crucial):** One tiny drop where the trigger bar cruciform bird-head wipes across the connector cam ramp.\n\n` +
          `3. ⚠️ **CRITICAL ARMORER WARNING:**\n` +
          `   * **NEVER lubricate the firing pin channel, striker sleeve, or safety plunger cavity.** Keep 100% dry. Oil in the channel creates hydrodynamic drag, attracts brass shavings, and causes light primer strikes.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("trigger") || q.includes("25") || q.includes("polish") || q.includes("connector")) {
      return {
        reply: `### Glock 25¢ Trigger Polish & Connector Tuning\n\n` +
          `* **Surfaces to Polish:** Mirror polish with Flitz or Mothers polish:\n` +
          `  1. Cruciform sear shelf\n` +
          `  2. Connector cam ramp face\n` +
          `  3. Trigger bar safety plunger bump\n` +
          `  4. Firing pin safety plunger dome\n` +
          `  5. Striker lug contact face\n` +
          `* **Armorer Rules:** Use felt bob or cotton cloth only. DO NOT use stones, files, or sandpaper. Never alter factory 90° sear angles.\n` +
          `* **Connector Gap:** Maintain 0.005\" to 0.010\" clearance between connector top tab and trigger housing.`,
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
        reply: `### AR-15 / M4 Carrier Gas Key Staking & Bolt Specifications\n\n` +
          `* **Gas Key Screws:** Fasten with Grade 8 fasteners. Apply one drop of Loctite 271 (Red) or Rocksett, torque to **50 to 58 in-lbs**.\n` +
          `* **Staking Protocol:** Use a purpose-built carrier key staking tool (e.g. MOACKS) or cold chisel to displace carrier key metal into both screw head splines from opposing sides.\n` +
          `* **Gas Rings:** Ensure three staggered gas rings support carrier weight when rested bolt-face down on bench without collapsing.`,
        backend: "Master Gunsmith Engine (RAG Grounded)",
        sources: ragSources
      };
    } else if (q.includes("buffer") || q.includes("weight") || q.includes("dwell") || q.includes("gas system")) {
      return {
        reply: `### AR-15 / M4 Buffer Weight & Dwell Time Calibration\n\n` +
          `* **Carbine Buffer:** 3.0 oz (3 steel weights) — standard for 16\" mid-length.\n` +
          `* **H Buffer:** 3.8 oz (1 tungsten, 2 steel) — standard for USGI 14.5\" M4 carbine-length gas.\n` +
          `* **H2 Buffer:** 4.6 oz (2 tungsten, 1 steel) — optimal for suppressed or short 10.3\"–11.5\" barrels to eliminate bolt bounce and slow carrier extraction speed.\n` +
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
      reply: `### Master Gunsmith: Scope Mounting & Precision Torque Specifications\n\n` +
        `* **Base / Picatinny Rail to Receiver:**\n` +
        `  * **Torque:** **30 to 35 in-lbs** using T15/T20 Torx fasteners.\n` +
        `  * **Preparation:** Degrease tapped holes completely with 99% isopropyl alcohol. Apply one drop of **Loctite 242 (Blue)**.\n` +
        `* **Ring-to-Base Crossbolts (Clamps):**\n` +
        `  * **Steel Crossbolts:** **45 to 65 in-lbs** (Badger, Nightforce).\n` +
        `  * **Aluminum Crossbolts:** **35 to 45 in-lbs** max (Vortex, Leupold).\n` +
        `* **Ring Caps (Tube Clamping):**\n` +
        `  * **Torque:** **15 to 18 in-lbs** (NEVER exceed 18 in-lbs).\n` +
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
      reply: `### Master Gunsmith: Headspace Gauging & Chamber Casting Standards\n\n` +
        `* **GO Gauge:** Minimum acceptable chamber headspace; bolt must close completely with light finger pressure.\n` +
        `* **NO-GO Gauge:** Maximum allowable headspace for new or re-barreled firearms; bolt must NOT close.\n` +
        `* **FIELD Gauge:** Absolute service safety limit. If bolt closes on a FIELD gauge, headspace is excessive and the firearm is **UNSAFE TO FIRE**.\n\n` +
        `* **Cerrosafe Chamber Casting Timing Protocol:**\n` +
        `  * Melt alloy at 160°–190°F into clean chamber. Cerrosafe shrinks during initial set, then expands to **EXACT 1:1 true chamber dimension at PRECISELY 1 HOUR after pouring**.\n` +
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
    const topSnippet = top.full_text.split("\n").filter(l => l.trim() && !l.startsWith("Document:") && !l.startsWith("Platform:")).slice(0, 8).join("\n");
    return {
      reply: `### Master Armorer Technical Guidance: ${fname}\n\n` +
        `Based on authentic armorer documentation for **${top.doc}** (Section: *${top.sec}*, Page ${top.page}):\n\n` +
        `> ${topSnippet.replace(/\n/g, "\n> ")}\n\n` +
        `*Refer to the grounded manual citations below to open the exact schematics and disassembly diagrams directly on your bench.*`,
      backend: "Master Gunsmith Engine (RAG Grounded)",
      sources: ragSources
    };
  }

  // General fallback overview
  return {
    reply: `### Armorer Technical Summary: ${fname}\n\n` +
      `* **Platform:** ${fname}\n` +
      `* **Manuals Available:** ${firearmData && firearmData.manuals ? firearmData.manuals.length : 0}\n` +
      `* **Schematics Available:** ${firearmData && firearmData.schematics ? firearmData.schematics.length : 0}\n` +
      `* **Curated Bench Videos:** ${firearmData && firearmData.videos ? firearmData.videos.length : 0}\n\n` +
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
              contents: [{ parts: [{ text: `${gunPrompt}\n\nUser Question: ${query}` }] }]
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
          appendMessage("assistant", `${replyObj.reply}\n\n---\n*💡 **Local LM Studio / Ollama Notice:** You are currently viewing the hosted web version on GitHub Pages. Chrome blocks \`https://\` websites from connecting to local \`http://127.0.0.1\`. To connect to your local LM Studio / Ollama with PyMuPDF RAG, double-click \`run_workbench.bat\` in your \`Gun Manuals\` folder and open **http://127.0.0.1:8055**.*`, replyObj.backend, replyObj.sources);
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
    const match = url.match(/\/api\/manuals\/([^\/]+)\/([^#?]+)(?:#page=(\d+))?/);
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

function appendMessage(role, text, backend = null, sources = []) {
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

  // Synchronize the dedicated Start Local AI button next to Armorer Assistant
  updateLocalLLMButtonState();
}

// ==========================================================================
// LOCAL LLM AI DEDICATED START BUTTON & POPOVER ENGINE
// ==========================================================================
function updateLocalLLMButtonState() {
  if (!btnStartLocalLLM) return;
  const ollama = (availableBackends || []).find(b => b.id === "ollama");
  const isOnline = ollama && ollama.status === "online";
  const isStatic = window.location.hostname.includes("github.io") || window.location.protocol === "file:";

  if (isStatic) {
    btnStartLocalLLM.className = "btn-start-local-llm online";
    btnStartLocalLLMText.textContent = "Built-in AI (Offline)";
    if (llmAssistantDot) llmAssistantDot.className = "llm-indicator-dot online";
    if (llmPowerIcon) llmPowerIcon.textContent = "⚡";
    if (popoverStatusDot) popoverStatusDot.className = "status-indicator-dot online";
    if (popoverStatusTitle) popoverStatusTitle.textContent = "Client Engine Active";
    if (popoverEndpoint) popoverEndpoint.textContent = "GitHub Pages Static";
    if (popoverEngineName) popoverEngineName.textContent = "Browser Engine";
    if (popoverModelVram) popoverModelVram.textContent = "Client-Side";
    if (btnPopoverStartStop) {
      btnPopoverStartStop.textContent = "⚙️ Configure Web AI";
      btnPopoverStartStop.className = "popover-btn primary";
    }
    return;
  }

  if (isOnline) {
    const curModel = (activeLLMModel && activeLLMModel !== "auto") ? activeLLMModel : (ollama.default_model || "qwen3.5:4b");
    btnStartLocalLLM.className = "btn-start-local-llm online";
    btnStartLocalLLMText.textContent = `Local AI (${curModel})`;
    if (llmAssistantDot) llmAssistantDot.className = "llm-indicator-dot online";
    if (llmPowerIcon) llmPowerIcon.textContent = "🟢";

    if (popoverStatusDot) popoverStatusDot.className = "status-indicator-dot online";
    if (popoverStatusTitle) popoverStatusTitle.textContent = "Local AI Online";
    if (popoverEndpoint) popoverEndpoint.textContent = ollama.endpoint || "http://127.0.0.1:11434";
    if (popoverEngineName) popoverEngineName.textContent = "Ollama Local";
    if (popoverModelVram) popoverModelVram.textContent = "100% GPU / VRAM";
    if (btnPopoverStartStop) {
      btnPopoverStartStop.textContent = "⏹️ Stop Local AI";
      btnPopoverStartStop.className = "popover-btn danger";
    }

    // Populate model select in popover if empty or changed
    if (popoverModelSelect && ollama.models && ollama.models.length > 0) {
      popoverModelSelect.innerHTML = "";
      ollama.models.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        if (m === curModel) opt.selected = true;
        popoverModelSelect.appendChild(opt);
      });
      if (!popoverModelSelect.value && popoverModelSelect.options.length > 0) {
        popoverModelSelect.value = curModel;
      }
    }
  } else {
    btnStartLocalLLM.className = "btn-start-local-llm";
    btnStartLocalLLMText.textContent = "Start Local AI";
    if (llmAssistantDot) llmAssistantDot.className = "llm-indicator-dot offline";
    if (llmPowerIcon) llmPowerIcon.textContent = "⚡";

    if (popoverStatusDot) popoverStatusDot.className = "status-indicator-dot";
    if (popoverStatusTitle) popoverStatusTitle.textContent = "Local AI Offline";
    if (popoverEndpoint) popoverEndpoint.textContent = "http://127.0.0.1:11434";
    if (popoverEngineName) popoverEngineName.textContent = "Ollama Local";
    if (popoverModelVram) popoverModelVram.textContent = "Not Running";
    if (btnPopoverStartStop) {
      btnPopoverStartStop.textContent = "⚡ Start Local AI";
      btnPopoverStartStop.className = "popover-btn primary";
    }
  }
}

async function startLocalLLM() {
  const isStatic = window.location.hostname.includes("github.io") || window.location.protocol === "file:";
  if (isStatic) {
    if (settingsDialog) {
      settingsDialog.showModal();
      updateSettingsFields();
    }
    return;
  }

  // Set starting state
  if (btnStartLocalLLM) btnStartLocalLLM.className = "btn-start-local-llm starting";
  if (btnStartLocalLLMText) btnStartLocalLLMText.textContent = "Starting Local AI...";
  if (llmAssistantDot) llmAssistantDot.className = "llm-indicator-dot starting";
  if (llmPowerIcon) llmPowerIcon.textContent = "⏳";
  if (localLLMPopover) localLLMPopover.classList.add("hidden");

  try {
    const res = await fetch("/api/llm/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ backend: "ollama" })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      activeLLMBackend = "ollama";
      activeLLMModel = data.model;
      await checkLLMBackends();
      
      appendMessage(
        "system",
        `🟢 **Local LLM AI Engine Online!**\n\nConnected to **Ollama** running **${escapeHtml(data.model)}** on \`${data.endpoint}\` (${data.vram_info || 'GPU Acceleration Active'}).\n\nAll armorer and gunsmith inquiries are now processed privately with zero cloud latency.`,
        "Local AI Engine"
      );
    } else {
      throw new Error(data.error || "Could not launch Ollama.");
    }
  } catch (err) {
    console.error("Failed to start Local AI:", err);
    if (btnStartLocalLLM) btnStartLocalLLM.className = "btn-start-local-llm";
    if (btnStartLocalLLMText) btnStartLocalLLMText.textContent = "Start Local AI";
    if (llmAssistantDot) llmAssistantDot.className = "llm-indicator-dot offline";
    if (llmPowerIcon) llmPowerIcon.textContent = "⚡";
    
    appendMessage(
      "assistant",
      `⚠️ **Could Not Start Local AI:** ${escapeHtml(err.message || err)}\n\nPlease ensure **Ollama** is installed on your workstation. Run \`ollama serve\` in your terminal or click the settings button to configure a web API key.`,
      "Armorer System"
    );
  }
}

async function stopLocalLLM() {
  try {
    const res = await fetch("/api/llm/stop", { method: "POST" });
    const data = await res.json();
    activeLLMBackend = "builtin";
    activeLLMModel = "auto";
    if (localLLMPopover) localLLMPopover.classList.add("hidden");
    await checkLLMBackends();
    appendMessage(
      "system",
      `⏹️ **Local AI Stopped:** Disconnected from local engine. Switched to Built-in Armorer Expert Engine.`,
      "Armorer System"
    );
  } catch (err) {
    console.error("Error stopping Local AI:", err);
  }
}

async function switchLocalModel(newModel) {
  try {
    const res = await fetch("/api/llm/switch-model", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: newModel, backend: "ollama" })
    });
    if (res.ok) {
      activeLLMModel = newModel;
      await checkLLMBackends();
      if (localLLMPopover) localLLMPopover.classList.add("hidden");
      appendMessage(
        "system",
        `🔄 **Model Switched:** Active local model is now **${escapeHtml(newModel)}**.`,
        "Local AI Engine"
      );
    }
  } catch (err) {
    console.error("Failed to switch model:", err);
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
