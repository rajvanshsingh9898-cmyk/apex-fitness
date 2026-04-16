/* ═══════════════════════════════════════════════════════
   APEX — Animated Counters (ScrollTrigger)
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    /* Just show final values */
    document.querySelectorAll('[data-counter]').forEach(function (el) {
      el.textContent = el.getAttribute('data-target') + (el.getAttribute('data-suffix') || '');
    });
    return;
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = (String(target).split('.')[1] || '').length;
    var duration = 1400;
    var start = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var easedProgress = easeOutCubic(progress);
      var current = easedProgress * target;

      el.textContent = current.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /* Use ScrollTrigger if available, else IntersectionObserver */
  if (typeof ScrollTrigger !== 'undefined') {
    document.querySelectorAll('[data-counter]').forEach(function (el) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        once: true,
        onEnter: function () { animateCounter(el); }
      });
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('[data-counter]').forEach(function (el) {
      observer.observe(el);
    });
  }
})();
