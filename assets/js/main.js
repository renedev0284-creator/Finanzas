/* ============================================================
   FINANZAS REALES — main.js
   ============================================================ */
(function () {
  'use strict';

  /* ----------------------------------------------------------
     DARK / LIGHT MODE
  ---------------------------------------------------------- */
  var STORAGE_KEY = 'fr-theme';
  var html = document.documentElement;

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function getPreferredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Aplica tema antes del DOMContentLoaded para evitar parpadeo
  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {

    /* Toggle */
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = html.getAttribute('data-theme') || 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    /* ----------------------------------------------------------
       MENÚ MÓVIL
    ---------------------------------------------------------- */
    var navToggle = document.getElementById('nav-toggle');
    var navLinks  = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navToggle) navToggle.checked = false;
      });
    });

    /* ----------------------------------------------------------
       LAZY LOADING
    ---------------------------------------------------------- */
    if ('IntersectionObserver' in window) {
      var imgObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imgObserver.unobserve(img);
          }
        });
      }, { rootMargin: '200px' });

      document.querySelectorAll('img[data-src]').forEach(function (img) {
        imgObserver.observe(img);
      });
    }

    /* ----------------------------------------------------------
       COPIAR ENLACE
    ---------------------------------------------------------- */
    var copyBtn = document.getElementById('copy-url');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var url = copyBtn.getAttribute('data-url');
        navigator.clipboard.writeText(url).then(function () {
          var span = copyBtn.querySelector('span');
          var original = span.textContent;
          span.textContent = '¡Copiado!';
          copyBtn.style.borderColor = '#16a34a';
          copyBtn.style.color = '#16a34a';
          setTimeout(function () {
            span.textContent = original;
            copyBtn.style.borderColor = '';
            copyBtn.style.color = '';
          }, 2000);
        });
      });
    }

    /* ----------------------------------------------------------
       BARRA DE PROGRESO DE LECTURA (solo en posts)
    ---------------------------------------------------------- */
    var progressBar = document.getElementById('reading-progress');
    if (progressBar) {
      window.addEventListener('scroll', function () {
        var article = document.querySelector('.post-content');
        if (!article) return;
        var total   = article.offsetTop + article.offsetHeight - window.innerHeight;
        var current = window.scrollY - article.offsetTop;
        var pct     = Math.min(Math.max((current / total) * 100, 0), 100);
        progressBar.style.width = pct + '%';
      }, { passive: true });
    }

  });

}());
