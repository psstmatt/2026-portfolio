const EMAIL_SUBJECT = "Hey Matt, I clicked the email link on your website to chat about...";

const projects = [
  {
    title: "AI Cast",
    year: "2026",
    company: "TikTok",
    platforms: ["iOS", "Android"],
    media: { type: "phone", width: 196, height: 371 },
    margin: { left: 0, right: 1.75 }
  },
  {
    title: "Ads Manager",
    year: "2025",
    company: "TikTok",
    platforms: ["Desktop Web"],
    media: { type: "desktop", width: 646, height: 410 },
    margin: { left: 1.75, right: 1.75 }
  },
  {
    title: "Symphony Creative Studio",
    year: "2024",
    company: "TikTok",
    platforms: ["Desktop Web"],
    media: { type: "desktop", width: 606, height: 410 },
    margin: { left: 1.75, right: 1.75 }
  },
  {
    title: "Ad-Free Subscriptions",
    year: "2024",
    company: "Meta",
    platforms: ["Web", "iOS", "Android"],
    media: { type: "phone", width: 196, height: 371 },
    margin: { left: 1.75, right: 1.75 }
  },
  {
    title: "Meta Accounts",
    year: "2024",
    company: "Meta",
    platforms: ["Web", "iOS", "Android"],
    media: { type: "desktop", width: 530, height: 410 },
    margin: { left: 1.75, right: 2.5 }
  },
  {
    title: "Group Rides",
    year: "2022",
    company: "Uber",
    platforms: ["Web", "iOS", "Android"],
    media: { type: "phone", width: 196, height: 371 },
    margin: { left: 2.5, right: 1.375 }
  },
  {
    title: "Reserve",
    year: "2021",
    company: "Uber",
    platforms: ["iOS", "Android", "Web"],
    media: { type: "phone", width: 196, height: 371 },
    margin: { left: 1.375, right: 1.375 }
  },
  {
    title: "Connect",
    year: "2020",
    company: "Uber",
    platforms: ["Web", "iOS", "Android"],
    media: { type: "phone", width: 196, height: 371 },
    margin: { left: 1.375, right: 1.375 }
  },
  {
    title: "Multi-driver Dispatch",
    year: "2019",
    company: "Uber",
    platforms: ["iOS", "Android"],
    media: { type: "desktop", width: 646, height: 420 },
    margin: { left: 1.375, right: 1.75 }
  },
  {
    title: "Recruiter",
    year: "2018",
    company: "Uber",
    platforms: ["Web", "iOS", "Android"],
    media: { type: "desktop", width: 500, height: 410 },
    margin: { left: 1.75, right: 1.75 }
  },
  {
    title: "Fleet Match",
    year: "2017",
    company: "Uber",
    platforms: ["Web"],
    media: { type: "web", width: 488, height: 336 },
    margin: { left: 1.75, right: 3.75 }
  },
  {
    title: "Accelerated Mobile Pages",
    year: "2017",
    company: "Expedia",
    platforms: ["Web"],
    media: { type: "phone", width: 196, height: 371 },
    margin: { left: 3.75, right: 1.75 }
  },
  {
    title: "Scratchpad",
    year: "2016",
    company: "Expedia",
    platforms: ["Web", "iOS", "Android"],
    media: { type: "phone", width: 196, height: 371 },
    margin: { left: 1.75, right: 4 }
  },
  {
    title: "Skywalker",
    year: "2015",
    company: "Boeing",
    platforms: ["Web", "Windows"],
    media: { type: "desktop", width: 646, height: 420 },
    margin: { left: 4, right: 1.75 }
  },
  {
    title: "Search",
    year: "2014",
    company: "Boeing",
    platforms: ["Web"],
    media: { type: "desktop", width: 500, height: 410 },
    margin: { left: 1.75, right: 0 }
  }
];

const timelineViewport = document.querySelector("#timeline-viewport");
const timelineTrack = document.querySelector("#timeline-track");
const aboutPanel = document.querySelector("#about-panel");
const backButton = document.querySelector("#back-button");
const cursorRoot = document.querySelector("#cursor");
const aboutButton = document.querySelector("[data-action='about']");

let activeIndex = 0;
let scrollTimer;
let isPointerDown = false;
let dragStartX = 0;
let dragStartScrollLeft = 0;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function playIcon() {
  return `
    <svg viewBox="0 0 68 68" aria-hidden="true">
      <g fill-rule="evenodd">
        <circle cx="34" cy="34" r="32.8"></circle>
        <g transform="translate(27 23)">
          <polygon transform="translate(8.5 11) rotate(-270) translate(-8.5 -11)" points="8.5 2.5 19.5 19.5 -2.5 19.5"></polygon>
        </g>
      </g>
    </svg>
  `;
}

function renderProject(project, index) {
  const platformMarkup = project.platforms
    .map((platform) => `<span>${escapeHtml(platform)}</span>`)
    .join("");

  return `
    <article
      class="project"
      data-index="${index}"
      style="
        --media-width: ${project.media.width}px;
        --media-height: ${project.media.height}px;
        --mobile-media-width: ${Math.round(project.media.width * 0.72)}px;
        --mobile-media-height: ${Math.round(Math.min(project.media.height, 340) * 0.72)}px;
        --margin-left: ${project.margin.left}em;
        --margin-right: ${project.margin.right}em;
        --z-index: ${projects.length - index};
      "
    >
      <div class="project-inner">
        <div class="gallery-content-container">
          <div class="gallery-content">
            <div class="gallery-columns">
              <div class="gallery-column">
                <h2 class="gallery-title">${escapeHtml(project.title)}</h2>
                <h3 class="gallery-subtitle">
                  <span>Software Design</span>
                  <span>${escapeHtml(project.company)}</span>
                  <span class="gallery-date">${escapeHtml(project.year)}</span>
                </h3>
                <span class="gallery-play">${playIcon()}</span>
              </div>
              <div class="gallery-column">
                <h4 class="gallery-team">0</h4>
                <div class="gallery-text">${platformMarkup}</div>
              </div>
            </div>
          </div>
        </div>
        <button class="project-media" type="button" aria-label="Show ${escapeHtml(project.title)}" data-index="${index}">
          <span class="media-placeholder ${escapeHtml(project.media.type)}" data-company="${escapeHtml(project.company)}"></span>
        </button>
      </div>
    </article>
  `;
}

function renderProjects() {
  // TODO: Replace neutral placeholders with approved project images/video in the media pass.
  timelineTrack.innerHTML = projects.map(renderProject).join("");
  updateActiveProject(0, false);
}

function projectElements() {
  return Array.from(timelineTrack.querySelectorAll(".project"));
}

function updateActiveProject(index, shouldScroll = true) {
  const nextIndex = Math.max(0, Math.min(projects.length - 1, index));
  activeIndex = nextIndex;

  projectElements().forEach((project, projectIndex) => {
    project.classList.toggle("is-active", projectIndex === activeIndex);
  });

  if (!shouldScroll) return;

  const media = timelineTrack.querySelector(`.project-media[data-index="${activeIndex}"]`);
  if (!media) return;

  const viewportRect = timelineViewport.getBoundingClientRect();
  const mediaRect = media.getBoundingClientRect();
  const centeredLeft = timelineViewport.scrollLeft + mediaRect.left - viewportRect.left - (viewportRect.width - mediaRect.width) / 2;

  timelineViewport.scrollTo({
    left: centeredLeft,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
}

function updateActiveFromScroll() {
  const viewportRect = timelineViewport.getBoundingClientRect();
  const viewportCenter = viewportRect.left + viewportRect.width / 2;
  let closestIndex = activeIndex;
  let closestDistance = Infinity;

  timelineTrack.querySelectorAll(".project-media").forEach((media) => {
    const rect = media.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const distance = Math.abs(center - viewportCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = Number(media.dataset.index);
    }
  });

  updateActiveProject(closestIndex, false);
}

function openAbout() {
  aboutPanel.classList.add("is-open");
  aboutPanel.setAttribute("aria-hidden", "false");
  backButton.hidden = false;
  requestAnimationFrame(() => backButton.classList.add("is-visible"));
}

function closeAbout() {
  aboutPanel.classList.remove("is-open");
  aboutPanel.setAttribute("aria-hidden", "true");
  backButton.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!aboutPanel.classList.contains("is-open")) backButton.hidden = true;
  }, 230);
}

function handleTimelineWheel(event) {
  if (aboutPanel.classList.contains("is-open")) return;

  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  if (!delta) return;

  timelineViewport.scrollLeft += delta;
  event.preventDefault();
}

function handlePointerDown(event) {
  isPointerDown = true;
  dragStartX = event.clientX;
  dragStartScrollLeft = timelineViewport.scrollLeft;
  timelineViewport.setPointerCapture?.(event.pointerId);
}

function handlePointerMove(event) {
  if (!isPointerDown) return;
  const delta = dragStartX - event.clientX;
  timelineViewport.scrollLeft = dragStartScrollLeft + delta;
}

function handlePointerUp(event) {
  if (!isPointerDown) return;
  isPointerDown = false;
  timelineViewport.releasePointerCapture?.(event.pointerId);
  updateActiveFromScroll();
}

function updateCursor(event) {
  if (!cursorRoot) return;
  cursorRoot.style.transform = `translate3d(${event.clientX - 25}px, ${event.clientY - 25}px, 0)`;
  cursorRoot.classList.add("is-visible");

  const target = event.target instanceof Element ? event.target.closest("a, button") : null;
  cursorRoot.classList.toggle("is-small", Boolean(target));
  document.body.classList.remove("cursor-visible");
}

document.querySelectorAll(".about-link").forEach((link) => {
  if (link.href.startsWith("mailto:")) {
    link.href = `mailto:mr@hey.com?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
  }
});

renderProjects();

timelineTrack.addEventListener("click", (event) => {
  const media = event.target instanceof Element ? event.target.closest(".project-media") : null;
  if (!media) return;
  updateActiveProject(Number(media.dataset.index), true);
});

timelineViewport.addEventListener("scroll", () => {
  window.clearTimeout(scrollTimer);
  scrollTimer = window.setTimeout(updateActiveFromScroll, 70);
}, { passive: true });

timelineViewport.addEventListener("wheel", handleTimelineWheel, { passive: false });
timelineViewport.addEventListener("pointerdown", handlePointerDown);
timelineViewport.addEventListener("pointermove", handlePointerMove);
timelineViewport.addEventListener("pointerup", handlePointerUp);
timelineViewport.addEventListener("pointercancel", handlePointerUp);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && aboutPanel.classList.contains("is-open")) {
    closeAbout();
    return;
  }

  if (aboutPanel.classList.contains("is-open")) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    updateActiveProject(activeIndex + 1);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    updateActiveProject(activeIndex - 1);
  }
});

aboutButton?.addEventListener("click", openAbout);
backButton?.addEventListener("click", closeAbout);

document.addEventListener("mousemove", updateCursor);
document.addEventListener("mousedown", () => cursorRoot?.classList.add("is-down"));
document.addEventListener("mouseup", () => cursorRoot?.classList.remove("is-down"));
document.addEventListener("mouseleave", () => document.body.classList.add("cursor-visible"));

window.addEventListener("resize", () => updateActiveProject(activeIndex, false));

window.setTimeout(() => updateActiveProject(0, true), 80);
