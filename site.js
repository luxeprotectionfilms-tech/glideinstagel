/* GLIDE v2 — scroll reveal (progressive enhancement) */
(function () {
  var root = document.documentElement;
  if (!('IntersectionObserver' in window)) return;
  var groups = [
    '.g-grid > *', '.g-products > *', '.g-steps > li', '.g-facts > li',
    '.g-chips > li', '.g-faq details'
  ];
  var singles = [
    '.g-sechead', '.g-kit', '.g-table-wrap', '.g-split > *', '.g-section .g-h2',
    '.g-box', '.g-note'
  ];
  var els = [];
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.style.setProperty('--d', (Math.min(i, 6) * 0.08) + 's');
      els.push(el);
    });
  });
  singles.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { if (els.indexOf(el) === -1) els.push(el); });
  });
  els.forEach(function (el) {
    if (el.closest('.g-hero')) return;
    el.classList.add('g-reveal');
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('g-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  document.querySelectorAll('.g-reveal').forEach(function (el) { io.observe(el); });
  root.classList.add('g-js');
})();
