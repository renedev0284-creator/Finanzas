/**
 * Blog de Finanzas - Main JavaScript
 */

(function() {
  'use strict';

  // Smooth scroll behavior
  document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu handling
    const navToggle = document.getElementById('nav-toggle');

    if (navToggle) {
      navToggle.addEventListener('change', function() {
        document.body.style.overflow = this.checked ? 'hidden' : 'auto';
      });
    }

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (navToggle) {
          navToggle.checked = false;
          document.body.style.overflow = 'auto';
        }
      });
    });

    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }

    // Dark mode toggle (optional)
    const darkModeButton = document.querySelector('.dark-mode-toggle');
    if (darkModeButton) {
      darkModeButton.addEventListener('click', toggleDarkMode);

      // Check for saved preference
      const prefersDark = localStorage.getItem('darkMode');
      if (prefersDark === 'true') {
        document.documentElement.style.colorScheme = 'dark';
      }
    }

    // Syntax highlighting for code blocks
    document.querySelectorAll('pre code').forEach(block => {
      block.classList.add('hljs');
    });
  });

  function toggleDarkMode() {
    const isDark = document.documentElement.style.colorScheme === 'dark';
    document.documentElement.style.colorScheme = isDark ? 'light' : 'dark';
    localStorage.setItem('darkMode', !isDark);
  }

  // Track page views with analytics if available
  window.trackPageView = function() {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        'page_path': window.location.pathname
      });
    }
  };

  // Performance monitoring
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log('Page load time: ' + pageLoadTime + 'ms');
    });
  }
})();
