/* ═══════════════════════════════════════════════════════
   APEX — Main JavaScript
   Navigation, mobile menu, scroll behaviour, nav theme
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Preloader ─── */
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 1800);
    });
    document.body.style.overflow = 'hidden';
  }

  /* ─── Navbar visibility on scroll ─── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScroll = 0;
    const heroEl = document.getElementById('hero');
    const heroBottom = heroEl ? heroEl.offsetHeight : 600;

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      if (scrollY > heroBottom * 0.8) {
        navbar.classList.add('visible');
      } else {
        navbar.classList.remove('visible');
      }
      lastScroll = scrollY;
    }, { passive: true });

    /* ─── Nav light/dark swap based on section ─── */
    const lightSections = document.querySelectorAll('[data-nav-theme="light"]');
    if (lightSections.length) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navbar.classList.add('nav-light');
          }
        });
      }, { threshold: 0, rootMargin: '-40px 0px -90% 0px' });

      const observerDark = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navbar.classList.remove('nav-light');
          }
        });
      }, { threshold: 0, rootMargin: '-40px 0px -90% 0px' });

      lightSections.forEach(function (s) { observer.observe(s); });
      document.querySelectorAll('[data-nav-theme="dark"]').forEach(function (s) {
        observerDark.observe(s);
      });
    }
  }

  /* ─── Mobile menu ─── */
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    hamburger.setAttribute('aria-expanded', 'false');

    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── Smooth scroll for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─── External links ─── */
  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (!link.getAttribute('target')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  /* ─── Current year in footer ─── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

})();
