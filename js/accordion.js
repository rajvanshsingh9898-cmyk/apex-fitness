/* ═══════════════════════════════════════════════════════
   APEX — Accordion / FAQ
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  document.querySelectorAll('.accordion').forEach(function (accordion) {
    var items = accordion.querySelectorAll('.accordion__item');

    items.forEach(function (item) {
      var trigger = item.querySelector('.accordion__trigger');
      var content = item.querySelector('.accordion__content');

      if (!trigger || !content) return;

      trigger.setAttribute('aria-expanded', 'false');
      content.setAttribute('role', 'region');

      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        /* Close all siblings */
        items.forEach(function (sibling) {
          if (sibling !== item) {
            sibling.classList.remove('open');
            var sibContent = sibling.querySelector('.accordion__content');
            var sibTrigger = sibling.querySelector('.accordion__trigger');
            if (sibContent) sibContent.style.maxHeight = null;
            if (sibTrigger) sibTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        /* Toggle current */
        if (isOpen) {
          item.classList.remove('open');
          content.style.maxHeight = null;
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
})();
