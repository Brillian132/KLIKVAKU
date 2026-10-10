/* =====================================================================
   KLIKVA — Orbit (lingkaran teks + siluet anjing berjalan)
   Menggantikan gambar di bagian "Made for kamu" dengan teks melingkar
   yang berputar, dan siluet anjing berjalan di tengahnya (gaya video pin).
   Kursor bergerak = putaran teks makin cepat.
   Hitam polos di mode terang, abu-abu di mode gelap. Tanpa container.
   Pasang: <script src="komodo-orbit.js" defer></script> sebelum </head>
===================================================================== */
(function () {
  'use strict';
  const box = document.querySelector('.brand-story-reverse .visual');
  if (!box) return;

  const R = 150, C = 2 * Math.PI * R;
  const TEXT = 'PREMIUM REPTILES ✦ EXCEPTIONAL GENETICS ✦ RAISED WITH CARE ✦ ';

  // ---------- Anjing: tiap bagian berayun di sekitar engselnya (animasi SVG bawaan) ----------
  const ease = 'calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1"';
  const rot = (v, dur, begin) =>
    '<animateTransform attributeName="transform" type="rotate" values="' + v + '" dur="' + dur + '" begin="' + (begin || '0s') +
    '" repeatCount="indefinite" ' + ease + '/>';
  const at = (x, y, inner) => '<g transform="translate(' + x + ' ' + y + ')">' + inner + '</g>';
  const swing = (x, y, v, dur, inner, begin) => at(x, y, '<g>' + rot(v, dur, begin) + inner + '</g>');

  // Kaki dua ruas: paha berayun dari bahu/pinggul, betis berayun dari lutut dengan jeda
  const foreLeg = (x, up, lo) => swing(x, 180, up, '0.9s',
    '<path d="M-10 -8L10 -8L8 40L-7 40Z"/><circle cx="0" cy="40" r="8"/>' +
    swing(0, 40, lo, '0.9s', '<path d="M-8 -4L9 -4L6 36L9 50L-15 50C-15 45 -7 44 -6 36Z"/>', '-0.2s'));
  const hindLeg = (x, up, lo) => swing(x, 170, up, '0.9s',
    '<path d="M-15 -8L15 -8L10 42L-9 42Z"/><circle cx="0" cy="42" r="9"/>' +
    swing(0, 42, lo, '0.9s', '<path d="M-9 -4L10 -4L5 38L8 58L-15 58C-15 53 -6 52 -5 38Z"/>', '-0.2s'));
  const UA = '-15 0 0;15 0 0;-15 0 0', UB = '15 0 0;-15 0 0;15 0 0';
  const LA = '-2 0 0;20 0 0;-2 0 0', LB = '20 0 0;-2 0 0;20 0 0';

  const HEAD =
    '<path d="M154 78C154 58 138 48 122 52C112 54 106 60 104 66L76 68C66 69 62 78 70 82L100 92C106 100 116 104 128 102C144 100 154 92 154 78Z"/>' +   // kepala + moncong
    '<path d="M140 56C160 56 172 76 164 98C158 108 150 106 148 98C150 84 146 68 140 56Z"/><circle cx="70" cy="74" r="8"/>';                                                           // telinga terkulai

  const DOG =
    '<g class="kmd-dog">' +
      '<g><animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="0.45s" repeatCount="indefinite" ' + ease + '/>' +
        foreLeg(172, UA, LA) + hindLeg(292, UA, LA) +                 // kaki yang berada di belakang badan
        '<path d="M126 136C124 116 146 104 176 104C210 102 250 104 282 110C304 114 314 134 308 156C305 172 296 184 284 190C268 196 252 190 236 188C214 186 196 200 176 204C150 206 130 184 126 156Z"/>' +
        '<path d="M112 94L152 90L186 112L178 156L128 150Z"/>' +      // leher
        foreLeg(198, UB, LB) + hindLeg(266, UB, LB) +                 // kaki yang berada di depan badan
        swing(302, 126, '-12 0 0;12 0 0;-12 0 0', '0.35s',
          '<path d="M0 6C24 4 40 -20 36 -52C34 -62 40 -70 46 -72C48 -60 56 -50 52 -36C46 -10 26 14 -2 20Z"/>') +  // ekor mengibas
        swing(150, 110, '-3 0 0;3 0 0;-3 0 0', '1.8s', '<g transform="translate(-150 -110)">' + HEAD + '</g>') +  // kepala
      '</g>' +
      '<path class="ln" d="M60 270H340"/>' +                          // garis tanah
      '<path class="ln" d="M148 98C220 96 300 84 324 20"/>' +         // tali
    '</g>';

  const css = document.createElement('style');
  css.textContent = `
  .brand-story-reverse .visual{display:grid;place-items:center;cursor:default;touch-action:pan-y;
    background:transparent;border:0}
  .kmd{width:100%;height:100%;display:block;color:var(--text)}
  .kmd text{font:600 17px var(--font);letter-spacing:.14em;fill:currentColor}
  .kmd-line{fill:none;stroke:currentColor;stroke-width:3}
  .kmd-dog{fill:#000;transition:fill .3s ease}
  .kmd-dog .ln{fill:none;stroke:#000;stroke-width:3;stroke-linecap:round;transition:stroke .3s ease}
  [data-theme="dark"] .kmd-dog{fill:#8A8A8E}
  [data-theme="dark"] .kmd-dog .ln{stroke:#8A8A8E}`;
  document.head.appendChild(css);

  box.innerHTML =
    '<svg class="kmd" viewBox="0 0 400 400" role="img" aria-label="Anjing berjalan di dalam lingkaran teks">' +
      '<defs><path id="kmdRing" d="M200 ' + (200 - R) + 'A' + R + ' ' + R + ' 0 0 1 200 ' + (200 + R) + 'A' + R + ' ' + R + ' 0 0 1 200 ' + (200 - R) + '"/></defs>' +
      '<g class="kmd-ring"><text><textPath href="#kmdRing" textLength="' + (C - 4) + '" lengthAdjust="spacing">' + TEXT + '</textPath></text></g>' +
      '<circle class="kmd-line" cx="200" cy="200" r="' + (R - 12) + '"/>' +
      '<g transform="translate(200 200)"><g transform="scale(.68) translate(-205 -158)">' + DOG + '</g></g>' +
    '</svg>';

  const ring = box.querySelector('.kmd-ring');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {      // tampil statis
    box.querySelectorAll('animateTransform').forEach(a => a.remove());
    return;
  }

  // ---------- Putaran teks: dihitung manual supaya titik putarnya pasti di tengah ----------
  const s = { ang: 0, boost: 1 };
  let last = performance.now(), raf = 0;

  function frame(t) {
    const dt = Math.min(0.05, (t - last) / 1000); last = t;
    s.boost += (1 - s.boost) * Math.min(1, dt * 2.5);                       // kembali ke kecepatan normal
    s.ang = (s.ang + 8 * s.boost * dt) % 360;                               // 8°/detik = 1 putaran per 45 detik
    ring.setAttribute('transform', 'translate(200 200) rotate(' + s.ang.toFixed(2) + ') translate(-200 -200)');
    raf = requestAnimationFrame(frame);
  }

  new IntersectionObserver(([e]) => {                                       // berhenti saat tidak terlihat
    cancelAnimationFrame(raf);
    if (e.isIntersecting) { last = performance.now(); raf = requestAnimationFrame(frame); }
  }).observe(box);

  // Kursor bergerak = putaran teks makin cepat (tanpa zoom)
  box.addEventListener('pointermove', e => {
    s.boost = Math.max(s.boost, 1 + Math.min(Math.hypot(e.movementX, e.movementY), 60) / 6);
  });
})();