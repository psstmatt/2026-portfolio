const projects = [
  {
    id: "boeing-social-web",
    title: "Social web",
    company: "Boeing",
    companyLogo: "assets/favicons/boeing.ico",
    year: "June 2010-January 2016",
    deviceType: "laptop",
    previewAsset: "social",
    accent: "#1f65b7",
    deviceScale: 0.94,
    confidential: false
  },
  {
    id: "boeing-search-web",
    title: "Search web",
    company: "Boeing",
    companyLogo: "assets/favicons/boeing.ico",
    year: "June 2010-January 2016",
    deviceType: "laptop",
    previewAsset: "search",
    accent: "#235b98",
    deviceScale: 0.92,
    confidential: false
  },
  {
    id: "boeing-skywalker-app",
    title: "Skywalker app",
    company: "Boeing",
    companyLogo: "assets/favicons/boeing.ico",
    year: "June 2010-January 2016",
    deviceType: "phone",
    previewAsset: "skywalker",
    accent: "#2a70c8",
    deviceScale: 0.94,
    confidential: false
  },
  {
    id: "expedia-list-making",
    title: "List making web + app",
    company: "Expedia Group",
    companyLogo: "assets/favicons/expedia.ico",
    year: "January 2016-July 2017",
    deviceType: "phone",
    previewAsset: "lists",
    accent: "#b87800",
    deviceScale: 0.98,
    confidential: false
  },
  {
    id: "expedia-city-mobile-web",
    title: "City accelerated mobile web",
    company: "Expedia Group",
    companyLogo: "assets/favicons/expedia.ico",
    year: "January 2016-July 2017",
    deviceType: "phone",
    previewAsset: "city",
    accent: "#9f6a00",
    deviceScale: 0.94,
    confidential: false
  },
  {
    id: "expedia-voice-skills",
    title: "Google Home & Amazon Alexa voice skills",
    company: "Expedia Group",
    companyLogo: "assets/favicons/expedia.ico",
    year: "January 2016-July 2017",
    deviceType: "phone",
    previewAsset: "voice",
    accent: "#8e6000",
    deviceScale: 0.9,
    confidential: false
  },
  {
    id: "uber-driver-marketplace",
    title: "Driver marketplace web",
    company: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    year: "August 2017-July 2022",
    deviceType: "laptop",
    previewAsset: "marketplace",
    accent: "#171717",
    deviceScale: 0.92,
    confidential: false
  },
  {
    id: "uber-multi-driver-dispatch",
    title: "Multi-driver dispatch app",
    company: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    year: "August 2017-July 2022",
    deviceType: "laptop",
    previewAsset: "dispatch",
    accent: "#202020",
    deviceScale: 0.94,
    confidential: false
  },
  {
    id: "uber-recruiting-app",
    title: "Uber recruiting app",
    company: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    year: "August 2017-July 2022",
    deviceType: "laptop",
    previewAsset: "recruiting",
    accent: "#3b3b3b",
    deviceScale: 0.9,
    confidential: false
  },
  {
    id: "uber-pool-app",
    title: "Uber Pool app",
    company: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    year: "August 2017-July 2022",
    deviceType: "phone",
    previewAsset: "pool",
    accent: "#111111",
    deviceScale: 0.98,
    confidential: false
  },
  {
    id: "uber-shared-app",
    title: "Uber Shared app",
    company: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    year: "August 2017-July 2022",
    deviceType: "phone",
    previewAsset: "shared",
    accent: "#2b2b2b",
    deviceScale: 0.96,
    confidential: false
  },
  {
    id: "uber-connect-app",
    title: "Uber Connect app",
    company: "Uber",
    companyLogo: "assets/favicons/uber.ico",
    year: "August 2017-July 2022",
    deviceType: "phone",
    previewAsset: "connect",
    accent: "#111111",
    deviceScale: 0.98,
    confidential: false
  },
  {
    id: "meta-privacy-account-center",
    title: "Privacy Account Center app/web",
    company: "Meta",
    companyLogo: "assets/favicons/meta.ico",
    year: "May 2022-April 2024",
    deviceType: "laptop",
    previewAsset: "privacy",
    accent: "#0668e1",
    deviceScale: 0.94,
    confidential: false
  },
  {
    id: "meta-premium-subscription",
    title: "Meta Premium subscription",
    company: "Meta",
    companyLogo: "assets/favicons/meta.ico",
    year: "May 2022-April 2024",
    deviceType: "phone",
    previewAsset: "subscription",
    accent: "#0a6fd6",
    deviceScale: 0.96,
    confidential: false
  },
  {
    id: "meta-ai-app",
    title: "Meta AI app",
    company: "Meta",
    companyLogo: "assets/favicons/meta.ico",
    year: "May 2022-April 2024",
    deviceType: "phone",
    previewAsset: "ai",
    accent: "#4169e1",
    deviceScale: 1,
    confidential: false
  },
  {
    id: "tiktok-confidential-genai",
    title: "Confidential GenAI work",
    company: "TikTok",
    companyLogo: "assets/favicons/tiktok.ico",
    year: "May 2024-Present",
    deviceType: "phone",
    previewAsset: "confidential",
    accent: "#d7194a",
    deviceScale: 0.98,
    confidential: true
  }
];

const KONAMI_SEQUENCE = [
  { key: "ArrowUp", label: "↑" },
  { key: "ArrowUp", label: "↑" },
  { key: "ArrowDown", label: "↓" },
  { key: "ArrowDown", label: "↓" },
  { key: "ArrowLeft", label: "←" },
  { key: "ArrowRight", label: "→" },
  { key: "ArrowLeft", label: "←" },
  { key: "ArrowRight", label: "→" },
  { key: "b", label: "B" },
  { key: "a", label: "A" }
];

const KONAMI_INPUT_RESET_DELAY = 4200;
const KONAMI_UNLOCK_RESET_DELAY = 5000;

const state = {
  activeIndex: 0,
  konamiIndex: 0,
  konamiUnlocked: false,
  konamiViewportLocked: false,
  points: [],
  trackWidth: 0,
  worldHeight: 0
};

const railViewport = document.querySelector("#rail-viewport");
const railTrack = document.querySelector("#rail-track");
const railSvg = document.querySelector("#rail-svg");
const projectNodes = document.querySelector("#project-nodes");
const downloadPromptGroup = document.querySelector("#download-prompt-group");
const downloadPromptButton = document.querySelector("#download-prompt-button");
const projectSheet = document.querySelector("#project-sheet");
const sheetKicker = document.querySelector("#sheet-kicker");
const sheetTitle = document.querySelector("#sheet-title");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let scrollTimer;
let suppressScrollUntil = 0;
let konamiInputResetTimer;
let konamiUnlockResetTimer;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getRailMetrics() {
  const viewportWidth = railViewport.clientWidth || window.innerWidth;
  const viewportHeight = railViewport.clientHeight || Math.round(window.innerHeight * 0.62);
  const spacing = clamp(viewportWidth * 0.72, 258, 382);
  const sidePad = viewportWidth / 2;
  const baseline = clamp(viewportHeight * 0.66, 306, 440);
  const lift = clamp(viewportHeight * 0.24, 110, 136);
  const trackWidth = sidePad * 2 + spacing * (projects.length - 1);

  return { viewportWidth, viewportHeight, spacing, sidePad, baseline, lift, trackWidth };
}

function renderPreview(project) {
  const line = (size = "medium") => `<span class="mock-line ${size}"></span>`;
  const rows = (count = 3) => Array.from({ length: count }, () => "<span class=\"mock-row\"></span>").join("");
  const cards = (count = 4) => `<span class="mock-grid">${Array.from({ length: count }, () => "<span></span>").join("")}</span>`;

  switch (project.previewAsset) {
    case "social":
      return `
        <span class="mock-panel primary">${line("long")}${line("medium")}</span>
        <span class="mock-list">${rows(4)}</span>
      `;
    case "search":
      return `
        <span class="mock-search"></span>
        <span class="mock-list">${rows(4)}</span>
      `;
    case "skywalker":
      return `
        <span class="mock-map"></span>
        <span class="mock-control">${line("long")}${line("short")}</span>
        <span class="mock-control">${line("medium")}</span>
      `;
    case "lists":
      return `
        <span class="mock-card primary">${line("medium")}${line("short")}</span>
        ${cards(4)}
        <span class="mock-list">${rows(2)}</span>
      `;
    case "city":
      return `
        <span class="mock-map"></span>
        <span class="mock-list">${rows(3)}</span>
      `;
    case "voice":
      return `
        <span class="mock-chat">${line("long")}${line("short")}</span>
        <span class="mock-chat answer">${line("medium")}</span>
        <span class="mock-chat">${line("long")}${line("medium")}</span>
      `;
    case "marketplace":
      return `
        <span class="mock-map"></span>
        <span class="mock-list">${rows(4)}</span>
      `;
    case "dispatch":
      return `
        <span class="mock-map"></span>
        <span class="mock-list">${rows(5)}</span>
      `;
    case "recruiting":
      return `
        <span class="mock-list">${rows(4)}</span>
        <span class="mock-panel primary">${line("long")}${line("medium")}${line("short")}</span>
      `;
    case "pool":
    case "shared":
    case "connect":
      return `
        <span class="mock-map"></span>
        <span class="mock-card primary">${line("long")}${line("short")}</span>
        <span class="mock-list">${rows(2)}</span>
      `;
    case "privacy":
      return `
        <span class="mock-control">${line("medium")}</span>
        <span class="mock-control">${line("long")}</span>
        <span class="mock-control">${line("short")}</span>
        <span class="mock-list">${rows(2)}</span>
      `;
    case "subscription":
      return `
        <span class="mock-card primary">${line("medium")}${line("short")}</span>
        <span class="mock-control">${line("long")}</span>
        <span class="mock-control">${line("medium")}</span>
      `;
    case "ai":
      return `
        <span class="mock-chat">${line("medium")}</span>
        <span class="mock-chat answer">${line("long")}${line("medium")}</span>
        ${cards(4)}
      `;
    case "confidential":
      return `
        <span class="mock-lock-card" aria-hidden="true"></span>
      `;
    default:
      return `
        <span class="mock-panel primary">${line("long")}${line("medium")}</span>
        <span class="mock-list">${rows(3)}</span>
      `;
  }
}

function renderMock(project) {
  const confidentialClass = project.confidential ? " is-confidential" : "";
  const unlockedClass = project.confidential && state.konamiUnlocked ? " is-konami-unlocked" : "";
  const lockOverlay = project.confidential ? "<span class=\"confidential-overlay\" aria-hidden=\"true\"><span class=\"confidential-status\">Locked</span></span>" : "";

  return `
    <span class="logo-chip" aria-hidden="true">
      <img src="${escapeHtml(project.companyLogo)}" alt="" decoding="async">
    </span>
    <span class="device-shell ${escapeHtml(project.deviceType)}${confidentialClass}${unlockedClass}">
      <span class="device-screen">
        <span class="mock-ui mock-${escapeHtml(project.previewAsset)}">
          ${renderPreview(project)}
        </span>
      </span>
      ${lockOverlay}
    </span>
  `;
}

function renderNodes() {
  projectNodes.innerHTML = projects.map((project, index) => {
    const point = state.points[index];
    return `
      <button
        class="project-node${project.confidential ? " is-confidential-project" : ""}"
        type="button"
        data-index="${index}"
        data-project-id="${escapeHtml(project.id)}"
        aria-label="Show ${escapeHtml(project.title)}"
        style="
          left: ${point.x}px;
          top: ${point.artifactY}px;
          --node-scale: ${project.deviceScale};
          --project-color: ${project.accent};
        "
      >
        ${renderMock(project)}
      </button>
    `;
  }).join("");

  projectNodes.querySelectorAll(".project-node").forEach((node) => {
    node.addEventListener("click", () => {
      setActiveProject(Number(node.dataset.index), true);
    });
  });

  updateKonamiOverlay();
}

function konamiProgressMarkup() {
  const keys = KONAMI_SEQUENCE.map((step, index) => {
    const className = [
      "konami-key",
      index < state.konamiIndex ? "is-entered" : "",
      index === state.konamiIndex ? "is-current" : ""
    ].filter(Boolean).join(" ");

    return `<span class="${className}">${escapeHtml(step.label)}</span>`;
  }).join("");

  return `<span class="konami-code">${keys}</span>`;
}

function updateKonamiOverlay() {
  const confidentialNodes = Array.from(document.querySelectorAll(".project-node.is-confidential-project"));

  confidentialNodes.forEach((node) => {
    const overlay = node.querySelector(".confidential-overlay");
    const shell = node.querySelector(".device-shell");
    if (!overlay || !shell) return;

    const isProgress = state.konamiIndex > 0 && !state.konamiUnlocked;
    overlay.classList.toggle("is-progress", isProgress);
    overlay.classList.toggle("is-unlocked", state.konamiUnlocked);
    shell.classList.toggle("is-konami-unlocked", state.konamiUnlocked);
    node.classList.toggle("is-konami-locked", state.konamiViewportLocked);

    if (state.konamiUnlocked) {
      overlay.innerHTML = "<span class=\"confidential-status\">Unlocked</span>";
      return;
    }

    overlay.innerHTML = isProgress
      ? konamiProgressMarkup()
      : "<span class=\"confidential-status\">Locked</span>";
  });
}

function setKonamiViewportLock(isLocked) {
  state.konamiViewportLocked = isLocked;
  railViewport.classList.toggle("is-konami-locked", isLocked);
  updateKonamiOverlay();

  if (!isLocked) return;

  suppressScrollUntil = performance.now() + KONAMI_INPUT_RESET_DELAY;
  const activeNode = document.querySelector(".project-node.is-active.is-confidential-project");
  activeNode?.focus({ preventScroll: true });
}

function resetKonamiProgress() {
  window.clearTimeout(konamiInputResetTimer);
  state.konamiIndex = 0;
  setKonamiViewportLock(false);
  updateKonamiOverlay();
}

function resetKonamiLock() {
  window.clearTimeout(konamiInputResetTimer);
  window.clearTimeout(konamiUnlockResetTimer);
  state.konamiUnlocked = false;
  state.konamiIndex = 0;
  setKonamiViewportLock(false);
  updateKonamiOverlay();
}

function scheduleKonamiInputReset() {
  window.clearTimeout(konamiInputResetTimer);
  if (state.konamiUnlocked) return;
  konamiInputResetTimer = window.setTimeout(resetKonamiProgress, KONAMI_INPUT_RESET_DELAY);
}

function scheduleKonamiLockReset() {
  window.clearTimeout(konamiInputResetTimer);
  window.clearTimeout(konamiUnlockResetTimer);
  konamiUnlockResetTimer = window.setTimeout(resetKonamiLock, KONAMI_UNLOCK_RESET_DELAY);
}

function normalizeKonamiKey(event) {
  if (event.key.startsWith("Arrow")) return event.key;
  const key = event.key.toLowerCase();
  return key === "a" || key === "b" ? key : "";
}

function handleKonamiKeydown(event) {
  const target = event.target;
  const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable;
  if (isTyping) return false;

  const activeProject = projects[state.activeIndex];
  const firstKey = KONAMI_SEQUENCE[0].key;
  const key = normalizeKonamiKey(event);

  if (state.konamiUnlocked) {
    if (key === firstKey && activeProject?.confidential) {
      window.clearTimeout(konamiUnlockResetTimer);
      state.konamiUnlocked = false;
      state.konamiIndex = 0;
    } else {
      return false;
    }
  }

  if (!key) {
    if (state.konamiIndex > 0) resetKonamiProgress();
    return false;
  }

  const sequenceActive = state.konamiIndex > 0;
  const canStart = activeProject?.confidential && key === firstKey;

  if (!sequenceActive && !canStart) return false;

  event.preventDefault();
  event.stopImmediatePropagation();

  if (!sequenceActive) {
    setKonamiViewportLock(true);
  }

  const expectedKey = KONAMI_SEQUENCE[state.konamiIndex].key;
  if (key === expectedKey) {
    state.konamiIndex += 1;

    if (state.konamiIndex >= KONAMI_SEQUENCE.length) {
      window.clearTimeout(konamiInputResetTimer);
      state.konamiUnlocked = true;
      state.konamiIndex = KONAMI_SEQUENCE.length;
      setKonamiViewportLock(false);
      updateKonamiOverlay();
      scheduleKonamiLockReset();
      return true;
    }

    setKonamiViewportLock(true);
    updateKonamiOverlay();
    scheduleKonamiInputReset();
    return true;
  }

  if (key === firstKey) {
    state.konamiIndex = 1;
    setKonamiViewportLock(true);
    updateKonamiOverlay();
    scheduleKonamiInputReset();
    return true;
  }

  resetKonamiProgress();
  return true;
}

function renderRail() {
  const first = state.points[0];
  const last = state.points[state.points.length - 1];
  const active = state.points[state.activeIndex] || first;
  if (!first || !last || !active) return;

  const railPath = `M ${first.x} ${first.y} L ${last.x} ${last.y}`;
  const markerPulse = prefersReducedMotion ? "" : `
    <circle class="rail-position-halo" cx="${active.x}" cy="${active.y}" r="9">
      <animate attributeName="r" values="9;18;9" dur="1.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.28;0;0.28" dur="1.8s" repeatCount="indefinite" />
    </circle>
  `;

  railSvg.setAttribute("viewBox", `0 0 ${state.trackWidth} ${state.worldHeight}`);
  railSvg.innerHTML = `
    <path class="rail-path" d="${railPath}" />
    ${markerPulse}
    <circle class="rail-position-dot" cx="${active.x}" cy="${active.y}" r="5.5" />
  `;
}

function buildGeometry() {
  const metrics = getRailMetrics();
  state.trackWidth = metrics.trackWidth;
  state.worldHeight = metrics.viewportHeight;
  railTrack.style.width = `${metrics.trackWidth}px`;

  state.points = projects.map((project, index) => {
    const x = metrics.sidePad + metrics.spacing * index;
    const y = metrics.baseline;
    const artifactY = y - metrics.lift;
    return { x, y, artifactY };
  });

  renderRail();
  renderNodes();
  syncActiveClasses();
  updateProjectLabelPosition();
}

function updateProjectLabelPosition() {
  const point = state.points[state.activeIndex];
  if (!point || !projectSheet) return;

  const viewportRect = railViewport.getBoundingClientRect();
  const x = viewportRect.left + point.x - railViewport.scrollLeft;
  const y = viewportRect.top + point.y + 36;

  projectSheet.style.setProperty("--label-x", `${x}px`);
  projectSheet.style.setProperty("--label-y", `${y}px`);
}

function syncActiveClasses() {
  const nodes = Array.from(document.querySelectorAll(".project-node"));

  nodes.forEach((node, index) => {
    const distance = Math.abs(index - state.activeIndex);
    node.classList.toggle("is-active", distance === 0);
    node.classList.toggle("is-near", distance === 1);
    node.classList.toggle("is-far", distance > 1);
    node.setAttribute("aria-current", distance === 0 ? "true" : "false");
  });
}

function setDownloadLinksOpen(isOpen) {
  downloadPromptGroup?.classList.toggle("is-open", isOpen);
  downloadPromptButton?.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function setActiveProject(index, shouldScroll = false) {
  state.activeIndex = (index + projects.length) % projects.length;
  const project = projects[state.activeIndex];
  const point = state.points[state.activeIndex];

  document.documentElement.style.setProperty("--active-accent", project.accent);
  sheetKicker.textContent = `${project.company} / ${project.year}`;
  sheetTitle.textContent = project.title;

  if (!project.confidential && state.konamiIndex > 0 && !state.konamiUnlocked) {
    resetKonamiProgress();
  }

  renderRail();
  syncActiveClasses();
  updateProjectLabelPosition();
  updateKonamiOverlay();

  if (shouldScroll && point) {
    const scrollLeft = point.x - railViewport.clientWidth / 2;
    suppressScrollUntil = performance.now() + 700;
    railViewport.scrollTo({
      left: scrollLeft,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  }
}

function getCenteredIndex() {
  const viewportCenter = railViewport.scrollLeft + railViewport.clientWidth / 2;
  let closestIndex = state.activeIndex;
  let closestDistance = Infinity;

  state.points.forEach((point, index) => {
    const distance = Math.abs(point.x - viewportCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

railViewport.addEventListener("scroll", () => {
  updateProjectLabelPosition();

  if (state.konamiViewportLocked) {
    suppressScrollUntil = performance.now() + 220;
    return;
  }

  if (performance.now() < suppressScrollUntil) {
    return;
  }

  window.clearTimeout(scrollTimer);
  scrollTimer = window.setTimeout(() => {
    const centeredIndex = getCenteredIndex();
    if (centeredIndex !== state.activeIndex) {
      setActiveProject(centeredIndex, false);
    }
  }, 80);
}, { passive: true });

document.addEventListener("keydown", handleKonamiKeydown, { capture: true });

railViewport.addEventListener("keydown", (event) => {
  if (state.konamiViewportLocked) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    event.stopPropagation();
    setActiveProject(state.activeIndex + 1, true);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    event.stopPropagation();
    setActiveProject(state.activeIndex - 1, true);
  }
});

document.addEventListener("keydown", (event) => {
  if (state.konamiViewportLocked) return;

  const target = event.target;
  const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable;
  if (isTyping) return;

  if (event.key === "ArrowRight") {
    setActiveProject(state.activeIndex + 1, true);
  }

  if (event.key === "ArrowLeft") {
    setActiveProject(state.activeIndex - 1, true);
  }
});

downloadPromptButton?.addEventListener("click", () => {
  const shouldOpen = !downloadPromptGroup?.classList.contains("is-open");
  setDownloadLinksOpen(shouldOpen);
});

document.addEventListener("click", (event) => {
  const targetElement = event.target instanceof Element ? event.target : null;

  if (downloadPromptGroup?.classList.contains("is-open") && !targetElement?.closest("#download-prompt-group")) {
    setDownloadLinksOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && downloadPromptGroup?.classList.contains("is-open")) {
    setDownloadLinksOpen(false);
  }
});

window.addEventListener("resize", () => {
  const activeIndex = state.activeIndex;
  buildGeometry();
  setActiveProject(activeIndex, true);
});

buildGeometry();
const initialProjectIndex = projects.findIndex((project) => project.id === "tiktok-confidential-genai");
setActiveProject(initialProjectIndex >= 0 ? initialProjectIndex : 0, false);

const initialPoint = state.points[state.activeIndex];
if (initialPoint) {
  railViewport.scrollLeft = initialPoint.x - railViewport.clientWidth / 2;
  updateProjectLabelPosition();
}
