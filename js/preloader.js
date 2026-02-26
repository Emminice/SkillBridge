(function() {
  // Save current theme and ensure it's applied
  const currentTheme = localStorage.getItem('theme') || 'light';
  const root = document.documentElement;
  root.setAttribute('data-theme', currentTheme);
  
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  function hidePreloader() {
    if (!preloader || preloader.classList.contains('hidden')) return;

    preloader.classList.add('hidden');

    setTimeout(() => {
      if (mainContent) {
        mainContent.classList.add('visible');
      }
      // Re-apply theme
      const savedTheme = localStorage.getItem('theme') || 'light';
      root.setAttribute('data-theme', savedTheme);
    }, 100);
  }

  setTimeout(hidePreloader, 2500);

  if (preloader) {
    preloader.addEventListener('click', function(e) {
      hidePreloader();
    });
  }

  setTimeout(() => {
    if (preloader && !preloader.classList.contains('hidden')) {
      hidePreloader();
    }
  }, 5000);

  // Listen for theme changes while preloader is active
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      // Theme will update automatically via CSS variables
      console.log('Theme changed, preloader colors updated');
    });
  }

  // Respect reduced motion
  const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionMedia.matches && preloader) {
    const icons = preloader.querySelectorAll('.icon');
    icons.forEach(icon => {
      icon.style.animation = 'none';
    });
  }
})();