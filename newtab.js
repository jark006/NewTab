'use strict';

/* ── Search Engine Config ─────────────────────────────── */
const ENGINES = [
  {
    name: 'Baidu',
    icon: 'NewTab_img/baidu.png',
    home: 'https://www.baidu.com/',
    action: 'https://www.baidu.com/s?',
    param: 'wd',
    placeholder: '众里寻她千百度',
  },
  {
    name: 'Bing',
    icon: 'NewTab_img/bing.png',
    home: 'https://www.bing.com/',
    action: 'https://www.bing.com/search?',
    param: 'q',
    placeholder: 'Bingo...',
  },
  {
    name: 'DuckDuckGo',
    icon: 'NewTab_img/duckduckgo.png',
    home: 'https://start.duckduckgo.com/',
    action: 'https://duckduckgo.com/?',
    param: 'q',
    placeholder: 'Duck go go go',
  },
  {
    name: 'BaiduDev',
    icon: 'NewTab_img/baiduDev.png',
    home: 'https://kaifa.baidu.com/',
    action: 'https://kaifa.baidu.com/searchPage?',
    param: 'wd',
    placeholder: 'Dev du du du',
  },
  {
    name: 'Google',
    icon: 'NewTab_img/google.png',
    home: 'https://www.google.com/',
    action: 'https://www.google.com/search?',
    param: 'q',
    placeholder: 'Gulu gulu',
  },
  {
    name: 'Yandex',
    icon: 'NewTab_img/yandex.png',
    home: 'https://yandex.com/',
    action: 'https://yandex.com/search/?',
    param: 'text',
    placeholder: 'Yandex',
  },
];

let activeIdx = 1; // default: Bing

/* ── DOM References ───────────────────────────────────── */
const logo      = document.getElementById('engine-logo');
const homeLink  = document.getElementById('engine-home-link');
const input     = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const tabs      = document.querySelectorAll('.tab-btn');

/* ── Switch Engine ────────────────────────────────────── */
function switchEngine(idx) {
  activeIdx = idx;
  const e = ENGINES[idx];

  // Logo swap with animation
  logo.classList.remove('logo-anim');
  void logo.offsetWidth; // force reflow to restart animation
  logo.classList.add('logo-anim');
  logo.src = e.icon;
  logo.alt = e.name;
  homeLink.href = e.home;

  // Update placeholder
  input.placeholder = e.placeholder;

  // Update active tab
  tabs.forEach((t, i) => t.classList.toggle('active', i === idx));

  input.focus();
}

/* ── Do Search ────────────────────────────────────────── */
function doSearch() {
  const q = input.value.trim();
  if (!q) { input.focus(); return; }
  const e = ENGINES[activeIdx];
  window.open(
    e.action + encodeURIComponent(e.param) + '=' + encodeURIComponent(q),
    '_blank'
  );
}

/* ── Event Binding ────────────────────────────────────── */
tabs.forEach((btn, i) => btn.addEventListener('click', () => switchEngine(i)));

input.addEventListener('keydown', ev => {
  if (ev.key === 'Enter') doSearch();
});

searchBtn.addEventListener('click', doSearch);

/* ── Clock ────────────────────────────────────────────── */
const DAY_NAMES = ['日', '一', '二', '三', '四', '五', '六'];
const pad2 = n => String(n).padStart(2, '0');

function tickClock() {
  const now = new Date();
  const dateStr =
    `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}` +
    ` 周${DAY_NAMES[now.getDay()]}`;
  const timeStr =
    `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`;
  document.getElementById('clock-date').textContent = dateStr;
  document.getElementById('clock-time').textContent = timeStr;
}

tickClock();
setInterval(tickClock, 1000);

/* ── Auto-focus on load ───────────────────────────────── */
input.focus();