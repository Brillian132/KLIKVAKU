/* =====================================================================
   KLIKVA — Navbar Shooter Tab Bar (v2)
   - Tab bar memanjang sampai sebelum tombol "Belanja"
   - User avatar + nama, lang switcher, dan toggle tema pindah KE DALAM bar
   - Tombol Belanja tetap di luar (container sendiri di kanan)
   Hanya tampil di layar > 768px. Di HP tetap memakai menu hamburger.
===================================================================== */
(function () {
  'use strict';
  if (!window.gsap) return;
  const nav = document.getElementById('navbar');
  const src = nav && nav.querySelector('.nav-links');
  const links = src ? Array.from(src.querySelectorAll('a[href^="#"]')) : [];
  if (!links.length) return;

  // Ikon per tujuan
  const ICON = {
    '#collection': {
      fill: 'M12 3.2 4.2 7.4v9.2L12 20.8l7.8-4.2V7.4z',
      line: 'M12 3.2 4.2 7.4v9.2L12 20.8l7.8-4.2V7.4z',
      detail: 'M4.4 7.5 12 11.7l7.6-4.2M12 11.7v9' },
    '#brand': {
      fill: 'M12 3.4 5 6v5.6c0 4.1 2.8 7.1 7 9 4.2-1.9 7-4.9 7-9V6z',
      line: 'M12 3.4 5 6v5.6c0 4.1 2.8 7.1 7 9 4.2-1.9 7-4.9 7-9V6z',
      detail: 'M8.9 12.1l2.2 2.2 4.1-4.3' },
    '#services': {
      fill: 'M4.2 13.4h2.6v5H4.2zM17.2 13.4h2.6v5h-2.6z',
      line: 'M4.6 14v-2a7.4 7.4 0 0 1 14.8 0v2M4.2 13.4h2.6v5H4.2zM17.2 13.4h2.6v5h-2.6zM18.8 18.4c0 1.8-2 2.6-4.6 2.6H12.6' },
    '#gallery': {
      fill: 'M12 3.6l2.5 5.3 5.8.8-4.2 4 1 5.8L12 16.7 6.9 19.5l1-5.8-4.2-4 5.8-.8z',
      line: 'M12 3.6l2.5 5.3 5.8.8-4.2 4 1 5.8L12 16.7 6.9 19.5l1-5.8-4.2-4 5.8-.8z' }
  };
  const COLOR = { '#collection': '#7EE0A1', '#brand': '#FFD66B', '#services': '#85E5E3', '#gallery': '#F398B4' };
  const EXTRA = { '#collection': ['#bestsellers'] };
  const SPARE = ['#7EE0A1', '#FFD66B', '#85E5E3', '#F398B4'];

  // ---------- CSS ----------
  const css = document.createElement('style');
  css.textContent = `
  #navbar .nav-links{display:none}
  #navbar .nav-inner{gap:16px}

  /* Bar memanjang: flex:1 supaya mengisi ruang antara logo dan tombol Belanja */
  .tabbar{--tb-h:52px;--tb-bar:#1A1A1A;--tb-idle:#6F6F73;--tb-icon:24px;
    position:relative;flex:1 1 auto;min-width:0;height:var(--tb-h);
    -webkit-tap-highlight-color:transparent}
  [data-theme="dark"] .tabbar{--tb-bar:#2A2A2D;--tb-idle:#8C8C93}

  #navbar{will-change:transform}

  .tabbar-shape{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}
  .tabbar-shape path{fill:var(--tb-bar)}

  /* Area tab ikon: di tengah-tengah bar (bukan full width) */
  .tabbar-tabs{position:absolute;top:0;bottom:3%;left:50%;transform:translateX(-50%);
    display:grid;justify-content:center;align-items:center}
  .tabbar .tab{display:grid;place-items:center;width:100%;height:100%;cursor:pointer;text-decoration:none;outline:0}
  .tabbar .tab:focus-visible{outline:2px solid var(--tab-accent,#fff);outline-offset:-5px;border-radius:14px}
  .tabbar .tab svg{width:var(--tb-icon);height:auto;overflow:visible;pointer-events:none}
  .tabbar .ic-line,.tabbar .ic-detail{fill:none;stroke:var(--tb-idle);stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}

  .tabbar-dot{position:absolute;left:0;top:0;width:7px;height:7px;border-radius:50%;opacity:0;pointer-events:none}

  /* Slot kanan dalam bar: user → lang → theme */
  .tabbar-right{position:absolute;right:14px;top:0;bottom:0;display:flex;align-items:center;gap:10px;z-index:2}

  /* Gaya komponen yang dipindah ke dalam bar (di atas latar gelap) */
  .tabbar-right .avatar-nav{padding:3px 10px 3px 3px;border-radius:50px;background:rgba(255,255,255,.06);
    transition:background .2s}
  .tabbar-right .avatar-nav:hover{background:rgba(255,255,255,.14)}
  .tabbar-right .avatar-nav-image{width:30px;height:30px;border-color:rgba(255,255,255,.15);background:rgba(255,255,255,.1);font-size:1rem}
  .tabbar-right .avatar-nav-name{color:rgba(255,255,255,.88);font-size:.78rem;max-width:70px}
  .tabbar-right .avatar-nav-image span{color:#fff}

  .tabbar-right .lang-switcher{display:flex;gap:4px}
  .tabbar-right .lang-btn{background:transparent;color:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.18);padding:3px 9px;font-size:.68rem}
  .tabbar-right .lang-btn:hover:not(.active){color:#fff;border-color:rgba(255,255,255,.55)}
  .tabbar-right .lang-btn.active{background:#fff;color:#1A1A1A;border-color:#fff}

  .tabbar-right .theme-toggle{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.18);
    padding:5px 10px;font-size:.9rem;border-radius:50px;display:flex;align-items:center;gap:0}
  .tabbar-right .theme-toggle:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.5)}

  @media (max-width:768px){.tabbar{display:none}}`;
  document.head.appendChild(css);

  // ---------- DOM ----------
  const root = document.createElement('div');
  root.className = 'tabbar'; root.id = 'navTabbar';
  root.innerHTML =
    '<svg class="tabbar-shape" aria-hidden="true"><path d=""/></svg>' +
    '<div class="tabbar-tabs"></div>' +
    '<div class="tabbar-right"></div>' +
    '<span class="tabbar-dot" aria-hidden="true"></span>';
  const wrap = root.querySelector('.tabbar-tabs');
  const rightSlot = root.querySelector('.tabbar-right');

  const tabs = links.map((a, i) => {
    const href = a.getAttribute('href'), ic = ICON[href] || ICON['#collection'];
    const el = document.createElement('a');
    el.className = 'tab'; el.href = href; el.dataset.color = COLOR[href] || SPARE[i % 4];
    el.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><clipPath id="nt-clip-' + i + '"><path class="wave" d=""/></clipPath></defs>' +
      '<path class="ic-fill" clip-path="url(#nt-clip-' + i + ')" d="' + ic.fill + '"/><path class="ic-line" d="' + ic.line + '"/>' +
      (ic.detail ? '<path class="ic-detail" d="' + ic.detail + '"/>' : '') + '</svg>';
    const label = () => { const t = a.textContent.trim(); el.title = t; el.setAttribute('aria-label', t); };
    label(); el.addEventListener('pointerenter', label); el.addEventListener('focus', label);
    wrap.appendChild(el); return el;
  });
  src.parentNode.insertBefore(root, src);

  // ---------- Pindahkan user avatar, lang switcher, theme toggle ke dalam bar ----------
  const langSwitcher = document.querySelector('#navbar .lang-switcher');
  const avatarBox    = document.getElementById('navAvatarContainer');
  const themeToggle  = document.getElementById('themeToggle');

  // Simpan tempat asal untuk di-restore di mobile
  const restore = [];
  function stash(el) {
    if (!el) return;
    restore.push({ el: el, home: el.parentNode, next: el.nextSibling });
  }
  stash(langSwitcher); stash(avatarBox); stash(themeToggle);

  // Urutan di dalam bar: user → lang → theme (opsi B + paling kanan)
  if (avatarBox)   rightSlot.appendChild(avatarBox);
  if (langSwitcher) rightSlot.appendChild(langSwitcher);
  if (themeToggle) rightSlot.appendChild(themeToggle);

  // Di HP (≤768px), kembalikan ke posisi asal supaya hamburger tetap bekerja normal
  const mq = window.matchMedia('(max-width:768px)');
  function place() {
    if (mq.matches) {
      restore.forEach(({ el, home, next }) => { if (home && !home.contains(el)) home.insertBefore(el, next || null); });
    } else {
      if (avatarBox)   rightSlot.appendChild(avatarBox);
      if (langSwitcher) rightSlot.appendChild(langSwitcher);
      if (themeToggle) rightSlot.appendChild(themeToggle);
    }
  }
  place(); mq.addEventListener('change', place);

  const svg = root.querySelector('.tabbar-shape'), shape = svg.querySelector('path'), dot = root.querySelector('.tabbar-dot');
  const colors = tabs.map(t => t.dataset.color);
  const lines = tabs.map(t => t.querySelector('.ic-line')), details = tabs.map(t => t.querySelector('.ic-detail'));
  const fills = tabs.map(t => t.querySelector('.ic-fill')), waves = tabs.map(t => t.querySelector('.wave'));
  const water = tabs.map(() => ({ level: 27, amp: 0, phase: 0 }));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const G = { W: 0, H: 0, R: 0, hw: 0, bh: 0, cx: 0, k: 0, pulse: 0, colW: 0, iconCy: 0, iconH: 0 };
  let active = -1, tl = null;

  const idleC = () => getComputedStyle(root).getPropertyValue('--tb-idle').trim() || '#777';
  const barC  = () => getComputedStyle(root).getPropertyValue('--tb-bar').trim() || '#1A1A1A';

  // ---------- Bentuk bar + takik ----------
  function barPath(W, H, R, cx, hw, bh) {
    const sx = hw / 40, sy = Math.max(bh, 0.01) / 19.5;
    const P = (x, y) => (cx + (x - 40) * sx).toFixed(2) + ' ' + (H - (22 - y) * sy).toFixed(2);
    return 'M' + R + ' 0H' + (W - R) + 'A' + R + ' ' + R + ' 0 0 1 ' + W + ' ' + R + 'V' + (H - R) + 'A' + R + ' ' + R + ' 0 0 1 ' + (W - R) + ' ' + H +
      'H' + (cx + hw).toFixed(2) + 'C' + P(60, 22) + ' ' + P(52, 18) + ' ' + P(48, 12) + 'C' + P(45, 7.5) + ' ' + P(43.5, 2.5) + ' ' + P(40, 2.5) +
      'C' + P(36.5, 2.5) + ' ' + P(35, 7.5) + ' ' + P(32, 12) + 'C' + P(28, 18) + ' ' + P(20, 22) + ' ' + P(0, 22) +
      'H' + R + 'A' + R + ' ' + R + ' 0 0 1 0 ' + (H - R) + 'V' + R + 'A' + R + ' ' + R + ' 0 0 1 ' + R + ' 0Z';
  }
  const centerX = i => G.W / 2 + (i - (tabs.length - 1) / 2) * G.colW;
  function draw() {
    const cx = Math.min(G.W - G.R - G.hw, Math.max(G.R + G.hw, G.cx));
    shape.setAttribute('d', barPath(G.W, G.H, G.R, cx, G.hw, (G.bh + G.pulse) * G.k));
  }

  // ---------- Isi ikon seperti cairan ----------
  function drawWater(i) {
    const w = water[i], x0 = -9 + (w.phase % 7);
    let d = 'M' + x0 + ' ' + w.level + 'Q' + (x0 + 3.5) + ' ' + (w.level - w.amp) + ' ' + (x0 + 7) + ' ' + w.level;
    for (let k = 2; k <= 6; k++) d += 'T' + (x0 + 7 * k) + ' ' + w.level;
    waves[i].setAttribute('d', d + 'V32H' + x0 + 'Z');
  }
  function addWater(t, i, from, to, dur, ease, at, ampMax) {
    const o = { v: 0 };
    t.to(o, { v: 1, duration: dur, ease: ease, onUpdate: function () {
      water[i].level = from + (to - from) * o.v; water[i].amp = ampMax * Math.sin(Math.PI * this.progress());
      water[i].phase = this.progress() * 9; drawWater(i);
    } }, at);
  }
  function paintTab(i, on) {
    gsap.set(fills[i], { fill: colors[i] });
    if (on) { gsap.set(lines[i], { stroke: colors[i] }); if (details[i]) gsap.set(details[i], { stroke: barC() }); }
    else { gsap.set(lines[i], { clearProps: 'stroke' }); if (details[i]) gsap.set(details[i], { clearProps: 'stroke' }); }
    water[i].level = on ? -4 : 27; water[i].amp = 0; water[i].phase = 0; drawWater(i);
  }
  function settle() {
    G.k = active >= 0 ? 1 : 0; G.cx = active >= 0 ? centerX(active) : G.W / 2; G.pulse = 0; draw();
    tabs.forEach((_, i) => paintTab(i, i === active));
    gsap.set(dot, { opacity: 0 });
    root.style.setProperty('--tab-accent', active >= 0 ? colors[active] : '#fff');
  }
  function measure() {
    G.W = root.clientWidth; G.H = root.clientHeight;
    G.R = G.H * 0.34; G.hw = Math.min(G.W * 0.105, G.H * 0.42); G.bh = Math.max(10, G.H * 0.14);
    G.colW = 56;
    wrap.style.gridTemplateColumns = 'repeat(' + tabs.length + ',' + G.colW + 'px)';
    G.iconH = tabs[0].querySelector('svg').getBoundingClientRect().height || 24; G.iconCy = G.H * 0.49;
    svg.setAttribute('viewBox', '0 0 ' + G.W + ' ' + G.H);
  }
  function finishNow() { if (!tl) return; const p = tl; tl = null; p.progress(1); p.kill(); }

  // ---------- Pindah tab ----------
  function select(to, o) {
    o = o || {};
    if (to === active) return;
    const from = active;
    finishNow(); active = to;
    tabs.forEach((t, i) => i === to ? t.setAttribute('aria-current', 'true') : t.removeAttribute('aria-current'));
    root.style.setProperty('--tab-accent', to >= 0 ? colors[to] : '#fff');
    if (o.instant || reduce.matches || !G.W) { settle(); return; }

    tl = gsap.timeline({ onComplete: () => { tl = null; } });
    if (from >= 0) {
      tl.to(lines[from], { stroke: idleC(), duration: 0.3, onComplete: () => gsap.set(lines[from], { clearProps: 'stroke' }) }, 0);
      if (details[from]) tl.to(details[from], { stroke: idleC(), duration: 0.3, onComplete: () => gsap.set(details[from], { clearProps: 'stroke' }) }, 0);
      addWater(tl, from, -4, 27, 0.34, 'power1.in', 0.2, 1.4);
    }
    if (to < 0) { tl.to(G, { k: 0, duration: 0.35, ease: 'power2.inOut', onUpdate: draw }, 0.1); return; }

    const color = colors[to], x = centerX(to), tipY = G.H - G.bh - 1, endY = G.iconCy + G.iconH * 0.36;
    if (from < 0) { G.cx = x; tl.to(G, { k: 1, duration: 0.3, ease: 'power2.out', onUpdate: draw }, 0); }
    else tl.to(G, { cx: x, duration: 0.45, ease: 'power3.inOut', onUpdate: draw }, 0);
    tl.to(lines[to], { stroke: color, duration: 0.4 }, 0);
    if (details[to]) tl.to(details[to], { stroke: barC(), duration: 0.4 }, 0);

    tl.set(dot, { x: x, y: tipY, xPercent: -50, yPercent: -50, backgroundColor: color, opacity: 1, scaleX: 0.2, scaleY: 0.2 }, 0.42)
      .to(dot, { scaleX: 1, scaleY: 1, duration: 0.1, ease: 'back.out(2.5)' }, 0.42)
      .to(G, { pulse: 3, duration: 0.1, ease: 'power2.out', onUpdate: draw }, 0.42)
      .to(G, { pulse: 0, duration: 0.3, ease: 'power2.out', onUpdate: draw }, 0.52)
      .to(dot, { y: endY, duration: 0.28, ease: 'power2.in' }, 0.5)
      .to(dot, { scaleX: 0.92, scaleY: 1.25, duration: 0.2, ease: 'power1.in' }, 0.5)
      .to(dot, { scaleX: 0, scaleY: 0, duration: 0.08, ease: 'power1.in' }, 0.76)
      .set(dot, { opacity: 0 }, 0.85);
    addWater(tl, to, 27, -4, 0.34, 'power2.out', 0.74, 1.6);
  }

  // ---------- Klik tab ----------
  let lockUntil = 0;
  new MutationObserver(() => {
    if (performance.now() < lockUntil && nav.classList.contains('nav-hidden')) nav.classList.remove('nav-hidden');
  }).observe(nav, { attributes: true, attributeFilter: ['class'] });

  tabs.forEach((el, i) => el.addEventListener('click', e => {
    const target = document.querySelector(el.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    lockUntil = performance.now() + 1500;
    select(i);
    if (typeof lenisInstance !== 'undefined' && lenisInstance) lenisInstance.scrollTo(target, { offset: 0, duration: 0.6 });
    else target.scrollIntoView({ behavior: 'smooth' });
    setTimeout(spy, 1550);
  }));

  // ---------- Scroll-spy ----------
  const zones = tabs.map(t => [t.getAttribute('href')].concat(EXTRA[t.getAttribute('href')] || [])
    .map(s => document.querySelector(s)).filter(Boolean));
  function spy() {
    if (performance.now() < lockUntil || !G.W) return;
    const line = window.innerHeight * 0.4; let idx = -1;
    zones.forEach((els, i) => els.forEach(el => { const r = el.getBoundingClientRect(); if (r.top <= line && r.bottom > line) idx = i; }));
    select(idx, { instant: nav.classList.contains('nav-hidden') });
  }
  let ticking = false, idle = 0;
  window.addEventListener('scroll', () => {
    if (nav.classList.contains('nav-hidden')) { clearTimeout(idle); idle = setTimeout(spy, 140); return; }
    if (ticking) return; ticking = true; requestAnimationFrame(() => { ticking = false; spy(); });
  }, { passive: true });
  window.addEventListener('load', spy);

  // ---------- Mulai ----------
  measure(); settle();
  if ('ResizeObserver' in window) new ResizeObserver(() => { if (!root.clientWidth) return; finishNow(); measure(); settle(); spy(); }).observe(root);
})();