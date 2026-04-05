/* =====================================================
   MATT R. PORTFOLIO  ::  SCRIPT.JS
   Konami Code + Matrix Rain Easter Egg
   ===================================================== */

'use strict';

/* ── VISITOR COUNTER ────────────────────────────────
   Fake but delightfully retro                        */

(function initVisitorCounter() {
  const el = document.getElementById('visitor-num');
  if (!el) return;
  const base = 1200 + Math.floor(Math.random() * 600);
  el.textContent = String(base).padStart(6, '0');
})();

/* ── KONAMI CODE SEQUENCE ───────────────────────────
   ↑ ↑ ↓ ↓ ← → ← → B A                             */

const KONAMI_SEQ = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

let konamiIdx = 0;
let konamiActive = false;

document.addEventListener('keydown', function onKeyDown(e) {
  if (konamiActive) {
    if (e.key === 'Escape') closeOverlay();
    return;
  }

  if (e.key === KONAMI_SEQ[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === KONAMI_SEQ.length) {
      konamiIdx = 0;
      activateKonami();
    }
  } else {
    // Reset — but handle the case where this key starts a new sequence
    konamiIdx = (e.key === KONAMI_SEQ[0]) ? 1 : 0;
  }
});

/* ── DOM REFS ───────────────────────────────────────  */

const overlay    = document.getElementById('konami-overlay');
const phase1El   = document.getElementById('phase-1');
const phase2El   = document.getElementById('phase-2');
const phase3El   = document.getElementById('phase-3');
const accessMsg  = document.getElementById('access-msg');
const downloadBtn = document.getElementById('download-btn');
const closeBtn   = document.getElementById('close-btn');
const canvas     = document.getElementById('matrix-canvas');
const ctx        = canvas.getContext('2d');

/* ── KONAMI ACTIVATION ──────────────────────────────  */

function activateKonami() {
  if (konamiActive) return;
  konamiActive = true;

  // Show overlay, lock scroll
  overlay.classList.remove('hidden');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Reset all phases
  phase1El.classList.remove('hidden');
  phase2El.classList.add('hidden');
  phase3El.classList.add('hidden');
  accessMsg.classList.add('hidden');
  closeBtn.classList.add('hidden');

  // Start matrix rain
  startMatrix();

  // 1.6s → show "ACCESS GRANTED" message
  setTimeout(function() {
    accessMsg.classList.remove('hidden');
  }, 1600);

  // 3.8s → transition to phase 2 (download offer)
  setTimeout(function() {
    phase1El.classList.add('hidden');
    phase2El.classList.remove('hidden');
  }, 3800);
}

/* ── DOWNLOAD HANDLER ───────────────────────────────
   Triggers a file download then shows phase 3        */

downloadBtn.addEventListener('click', function() {
  // Fire the download
  const a = document.createElement('a');
  a.href = 'portfolio.pdf';
  a.download = 'Matt-R-Portfolio.pdf';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Transition to confirmation + contact
  phase2El.classList.add('hidden');
  phase3El.classList.remove('hidden');
  closeBtn.classList.remove('hidden');

  // Auto-focus close btn for keyboard users
  closeBtn.focus();
});

/* ── CLOSE / ESC ────────────────────────────────────  */

closeBtn.addEventListener('click', closeOverlay);

function closeOverlay() {
  overlay.classList.add('hidden');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  konamiActive = false;
  konamiIdx = 0;

  // Reset state for potential re-activation
  phase1El.classList.add('hidden');
  phase2El.classList.add('hidden');
  phase3El.classList.add('hidden');
  accessMsg.classList.add('hidden');
  closeBtn.classList.add('hidden');

  stopMatrix();
}

/* ── MATRIX RAIN ────────────────────────────────────
   Canvas-based falling character effect              */

const MATRIX_CHARS =
  '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ' +
  'ヤユヨラリルレロワヲン#@$%&*+=<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const FONT_PX = 14;
let columns = [];
let matrixRafId = null;
let lastFrameTime = 0;
const FRAME_INTERVAL = 50; // ~20fps for the matrix — intentionally jittery

function initMatrix() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const numCols = Math.floor(canvas.width / FONT_PX);
  // Start columns at random negative rows so they stagger on entry
  columns = Array.from({ length: numCols }, function() {
    return Math.floor(Math.random() * -(canvas.height / FONT_PX));
  });
}

function drawMatrix(timestamp) {
  if (timestamp - lastFrameTime < FRAME_INTERVAL) {
    matrixRafId = requestAnimationFrame(drawMatrix);
    return;
  }
  lastFrameTime = timestamp;

  // Fade trails
  ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = FONT_PX + 'px Courier New';

  for (let i = 0; i < columns.length; i++) {
    const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
    const x = i * FONT_PX;
    const y = columns[i] * FONT_PX;

    // Head of each stream is brighter
    ctx.fillStyle = (columns[i] >= 0 && columns[i] < 2) ? '#ffffff' : '#00ff41';
    if (y >= 0) ctx.fillText(char, x, y);

    // Reset column when it falls off-screen
    if (y > canvas.height && Math.random() > 0.975) {
      columns[i] = 0;
    }
    columns[i]++;
  }

  matrixRafId = requestAnimationFrame(drawMatrix);
}

function startMatrix() {
  initMatrix();
  matrixRafId = requestAnimationFrame(drawMatrix);
}

function stopMatrix() {
  if (matrixRafId) {
    cancelAnimationFrame(matrixRafId);
    matrixRafId = null;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', function() {
  if (konamiActive) initMatrix();
});
