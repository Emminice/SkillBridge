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
          mainContent.classList.add('visible');
        }, 100); // appear while preloader fades
      }

      // --- AUTO hide after 3.5 seconds (like a simulated loading) ---
      // you can change the duration, but icons keep moving until hidden
      setTimeout(hidePreloader, 3500);  // 3.5 secs

      // --- ADDITIONAL: click anywhere on preloader to skip to content ---
      preloader.addEventListener('click', function(e) {
        // prevent any accidental inner clicks from toggling multiple times
        // but we want to hide even if clicked inside
        hidePreloader();
      });

      // --- ALSO if user prefers reduced motion? we respect but keep functional ---
      const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (motionMedia.matches) {
        // remove animations? but we keep them minimal: we just set infinite to paused? 
        // better to keep them gentle but we can override style if needed.
        // for simplicity, we just leave animations, they might be subtle.
        // but we respect by not forcing heavy animation. it's fine.
        // (you could add class but not necessary)
      }

      // ---- fallback: if something goes wrong, hide after 6 sec anyway ---
      setTimeout(() => {
        if (preloader && !preloader.classList.contains('hidden')) {
          hidePreloader();
        }
      }, 6000);

      // ---- extra: when preloader hidden, we could stop animations (but they fade out anyway)
      // ---- and we preserve initial movement while preloader visible.

      // ---- manually expose function for console if needed, but not required.
    })();