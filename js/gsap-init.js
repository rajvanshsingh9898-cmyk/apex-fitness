/* ═══════════════════════════════════════════════════════
   APEX — GSAP ScrollTrigger Animations
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* Guard: skip all animations if user prefers reduced motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* Wait for GSAP */
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* ─── Hero text reveal ─── */
  var heroLines = document.querySelectorAll('.hero-line');
  if (heroLines.length) {
    gsap.from(heroLines, {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1.2,
      ease: 'power4.out',
      delay: 1.8
    });
  }

  var heroSub = document.querySelectorAll('.hero-sub, .hero-cta, .hero-availability');
  if (heroSub.length) {
    gsap.from(heroSub, {
      opacity: 0,
      y: 24,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 2.4
    });
  }

  /* ─── About teaser ─── */
  var aboutImg = document.getElementById('about-img');
  if (aboutImg) {
    gsap.from(aboutImg, {
      opacity: 0,
      scale: 0.96,
      duration: 1,
      scrollTrigger: { trigger: '#about-teaser', start: 'top 65%' }
    });
  }

  var aboutText = document.querySelector('#about-text');
  if (aboutText) {
    gsap.from(aboutText.children, {
      opacity: 0,
      x: 32,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: { trigger: '#about-teaser', start: 'top 60%' }
    });
  }

  /* ─── Program cards ─── */
  var programCards = document.querySelectorAll('.program-card');
  if (programCards.length) {
    gsap.from(programCards, {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.7,
      scrollTrigger: { trigger: '#programs-preview', start: 'top 70%' }
    });
  }

  /* ─── Philosophy pillars ─── */
  var pillars = document.querySelectorAll('.pillar');
  if (pillars.length) {
    gsap.from(pillars, {
      opacity: 0,
      y: 32,
      stagger: 0.18,
      duration: 0.7,
      scrollTrigger: { trigger: '#philosophy', start: 'top 68%' }
    });
  }

  /* ─── Transformation ─── */
  var transformImg = document.getElementById('transformation-img');
  if (transformImg) {
    gsap.from(transformImg, {
      opacity: 0,
      x: -40,
      duration: 1,
      scrollTrigger: { trigger: '#results', start: 'top 65%' }
    });
  }

  var transformQuote = document.getElementById('transformation-quote');
  if (transformQuote) {
    gsap.from(transformQuote.children, {
      opacity: 0,
      y: 24,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: { trigger: '#results', start: 'top 60%' }
    });
  }

  /* ─── Testimonial cards ─── */
  var testimonialCards = document.querySelectorAll('.testimonial-card');
  if (testimonialCards.length) {
    gsap.from(testimonialCards, {
      opacity: 0,
      y: 36,
      stagger: 0.12,
      duration: 0.65,
      scrollTrigger: { trigger: '#testimonials', start: 'top 70%' }
    });
  }

  /* ─── Pricing cards ─── */
  var pricingCards = document.querySelectorAll('.pricing-card');
  if (pricingCards.length) {
    gsap.from(pricingCards, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.7,
      scrollTrigger: { trigger: '#pricing-preview', start: 'top 70%' }
    });
  }

  /* ─── Process steps + line ─── */
  var processSteps = document.querySelectorAll('.process-step');
  if (processSteps.length) {
    gsap.from(processSteps, {
      opacity: 0,
      y: 32,
      stagger: 0.18,
      duration: 0.7,
      scrollTrigger: { trigger: '#process', start: 'top 65%' }
    });
  }

  var processLine = document.querySelector('.process-line');
  if (processLine) {
    gsap.from(processLine, {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#process', start: 'top 60%' }
    });
  }

  /* ─── Final CTA ─── */
  var finalCta = document.getElementById('final-cta');
  if (finalCta) {
    var ctaContent = finalCta.querySelector('.final-cta__content');
    if (ctaContent) {
      gsap.from(ctaContent.children, {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: { trigger: '#final-cta', start: 'top 60%' }
      });
    }
  }

  /* ─── Generic fade-up for inner pages ─── */
  var fadeUps = document.querySelectorAll('[data-animate="fade-up"]');
  fadeUps.forEach(function (el) {
    gsap.from(el, {
      opacity: 0,
      y: 36,
      duration: 0.7,
      scrollTrigger: { trigger: el, start: 'top 75%' }
    });
  });

  var staggerGroups = document.querySelectorAll('[data-animate="stagger"]');
  staggerGroups.forEach(function (group) {
    gsap.from(group.children, {
      opacity: 0,
      y: 32,
      stagger: 0.12,
      duration: 0.65,
      scrollTrigger: { trigger: group, start: 'top 72%' }
    });
  });

})();
