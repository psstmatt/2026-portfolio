'use strict';

const sequence = [
  { key: 'ArrowUp', label: '↑' },
  { key: 'ArrowUp', label: '↑' },
  { key: 'ArrowDown', label: '↓' },
  { key: 'ArrowDown', label: '↓' },
  { key: 'ArrowLeft', label: '←' },
  { key: 'ArrowRight', label: '→' },
  { key: 'ArrowLeft', label: '←' },
  { key: 'ArrowRight', label: '→' },
  { key: 'b', label: 'B' },
  { key: 'a', label: 'A' }
];

const overlay = document.getElementById('konami-overlay');
const closeButton = document.getElementById('konami-close');
const keyRail = document.getElementById('konami-keys');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let index = 0;
let missTimer = 0;
let hideTimer = 0;

function normalizeKey(event) {
  if (event.key.length === 1) {
    return event.key.toLowerCase();
  }

  return event.key;
}

function renderKeys() {
  keyRail.innerHTML = '';

  sequence.forEach(function (item, position) {
    const key = document.createElement('span');
    key.className = 'konami-key';
    key.textContent = item.label;
    key.setAttribute('aria-hidden', 'true');

    if (position < index) {
      key.classList.add('is-hit');
    } else if (position === index) {
      key.classList.add('is-next');
    }

    keyRail.appendChild(key);
  });
}

function showRail() {
  window.clearTimeout(hideTimer);
  keyRail.classList.add('is-visible');
  keyRail.setAttribute('aria-hidden', 'false');
  renderKeys();
}

function hideRailSoon() {
  window.clearTimeout(hideTimer);
  hideTimer = window.setTimeout(function () {
    keyRail.classList.remove('is-visible');
    keyRail.setAttribute('aria-hidden', 'true');
  }, 1400);
}

function spark(position) {
  const keys = keyRail.querySelectorAll('.konami-key');
  const current = keys[position];

  if (!current || reducedMotion.matches) {
    return;
  }

  for (let i = 0; i < 9; i += 1) {
    const sparkEl = document.createElement('span');
    const angle = (Math.PI * 2 * i) / 9;
    const distance = 28 + Math.random() * 18;

    sparkEl.className = 'konami-spark';
    sparkEl.style.setProperty('--spark-x', Math.cos(angle) * distance + 'px');
    sparkEl.style.setProperty('--spark-y', Math.sin(angle) * distance + 'px');
    current.appendChild(sparkEl);
    sparkEl.addEventListener('animationend', function () {
      sparkEl.remove();
    });
  }
}

function flashMiss() {
  window.clearTimeout(missTimer);
  showRail();
  keyRail.querySelectorAll('.konami-key').forEach(function (key) {
    key.classList.add('is-miss');
  });
  missTimer = window.setTimeout(function () {
    keyRail.querySelectorAll('.konami-key').forEach(function (key) {
      key.classList.remove('is-miss', 'is-hit');
    });
    renderKeys();
    hideRailSoon();
  }, 360);
}

function openOverlay() {
  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeButton.focus();
}

function closeOverlay() {
  overlay.hidden = true;
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  index = 0;
  renderKeys();
  hideRailSoon();
}

document.addEventListener('keydown', function (event) {
  if (!overlay.hidden && event.key === 'Escape') {
    closeOverlay();
    return;
  }

  const currentKey = normalizeKey(event);
  const expectedKey = sequence[index].key;

  if (currentKey === expectedKey) {
    showRail();
    index += 1;
    renderKeys();
    spark(index - 1);

    if (index === sequence.length) {
      window.setTimeout(function () {
        openOverlay();
      }, reducedMotion.matches ? 0 : 180);
      index = 0;
    }

    return;
  }

  if (index > 0) {
    index = currentKey === sequence[0].key ? 1 : 0;
    flashMiss();
    return;
  }

  if (currentKey === sequence[0].key) {
    index = 1;
    showRail();
    renderKeys();
    spark(0);
  }
});

closeButton.addEventListener('click', closeOverlay);
renderKeys();
