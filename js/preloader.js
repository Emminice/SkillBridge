(function() {
  // get elements
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  // --- function to hide preloader and reveal main content ---
  function hidePreloader() {
    // already hidden? then ignore
    if (!preloader || preloader.classList.contains('hidden')) return;

    // add hidden class to preloader (fade out)
    preloader.classList.add('hidden');

    // make main content visible (with slight delay for smooth crossfade)
    setTimeout(() => {
      if (mainContent) {
        mainContent.classList.add('visible');
      }
    }, 100);
  }

  // --- AUTO hide after 2.5 seconds (reduced for better UX on mobile) ---
  setTimeout(hidePreloader, 2500); // Changed from 3500ms to 2500ms

  // --- ADDITIONAL: click anywhere on preloader to skip to content ---
  if (preloader) {
    preloader.addEventListener('click', function(e) {
      hidePreloader();
    });
  }

  // ---- fallback: hide after 5 sec max ---
  setTimeout(() => {
    if (preloader && !preloader.classList.contains('hidden')) {
      hidePreloader();
    }
  }, 5000); // Changed from 6000ms to 5000ms

  // ---- Respect reduced motion preference ----
  const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionMedia.matches && preloader) {
    // Disable animations for users who prefer reduced motion
    const icons = preloader.querySelectorAll('.icon');
    icons.forEach(icon => {
      icon.style.animation = 'none';
    });
  }
})();