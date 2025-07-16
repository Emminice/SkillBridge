document.addEventListener('DOMContentLoaded', function() {
  const themeStyle = document.getElementById('theme-style');
  const themeLightBtn = document.getElementById('theme-light');
  const themeDarkBtn = document.getElementById('theme-dark');
  const themeSystemBtn = document.getElementById('theme-system');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme') || 'system';
  
  // Apply the saved theme
  applyTheme(savedTheme);
  
  // Set active button
  setActiveButton(savedTheme);
  
  // Event listeners for theme buttons
  themeLightBtn.addEventListener('click', () => switchTheme('light'));
  themeDarkBtn.addEventListener('click', () => switchTheme('dark'));
  themeSystemBtn.addEventListener('click', () => switchTheme('system'));
  
  // Function to switch themes
  function switchTheme(theme) {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
    setActiveButton(theme);
  }
  
  // Function to apply the selected theme
  function applyTheme(theme) {
    let themeFile;
    
    if (theme === 'dark') {
      themeFile = 'css/dark-theme.css';
    } else if (theme === 'light') {
      themeFile = 'css/light-theme.css';
    } else {
      // System preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeFile = 'css/dark-theme.css';
      } else {
        themeFile = 'css/light-theme.css';
      }
    }
    
    themeStyle.setAttribute('href', themeFile);
  }
  
  // Function to set active button
  function setActiveButton(theme) {
    // Remove active class from all buttons
    themeLightBtn.classList.remove('active');
    themeDarkBtn.classList.remove('active');
    themeSystemBtn.classList.remove('active');
    
    // Add active class to the current theme button
    if (theme === 'light') {
      themeLightBtn.classList.add('active');
    } else if (theme === 'dark') {
      themeDarkBtn.classList.add('active');
    } else {
      themeSystemBtn.classList.add('active');
    }
  }
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === 'system') {
      applyTheme('system');
    }
  });
});






















// theme-switcher.js
document.addEventListener('DOMContentLoaded', function() {
  // Theme switcher functionality
  const themeLightBtn = document.getElementById('theme-light');
  const themeDarkBtn = document.getElementById('theme-dark');
  const themeSystemBtn = document.getElementById('theme-system');
  const themeStyle = document.getElementById('theme-style');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // Theme button event listeners
  themeLightBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  });
  
  themeDarkBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  });
  
  themeSystemBtn.addEventListener('click', () => {
    localStorage.removeItem('theme');
    if (systemPrefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
});



























document.addEventListener('DOMContentLoaded', function() {
  const themeStyle = document.getElementById('theme-style');
  const themeLightBtn = document.getElementById('theme-light');
  const themeDarkBtn = document.getElementById('theme-dark');
  const themeSystemBtn = document.getElementById('theme-system');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme') || 'system';
  setTheme(savedTheme);
  
  // Button event listeners
  themeLightBtn.addEventListener('click', () => setTheme('light'));
  themeDarkBtn.addEventListener('click', () => setTheme('dark'));
  themeSystemBtn.addEventListener('click', () => setTheme('system'));
  
  function setTheme(theme) {
    // Update active button
    themeLightBtn.classList.remove('active');
    themeDarkBtn.classList.remove('active');
    themeSystemBtn.classList.remove('active');
    
    if (theme === 'light') {
      themeLightBtn.classList.add('active');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else if (theme === 'dark') {
      themeDarkBtn.classList.add('active');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      themeSystemBtn.classList.add('active');
      // Use system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
      localStorage.setItem('theme', 'system');
    }
  }
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === 'system') {
      setTheme('system');
    }
  });
  
  // Initialize active button
  if (savedTheme === 'light') themeLightBtn.classList.add('active');
  else if (savedTheme === 'dark') themeDarkBtn.classList.add('active');
  else themeSystemBtn.classList.add('active');
}); 













// theme-switcher.js - Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeLightBtn = document.getElementById('theme-light');
  const themeDarkBtn = document.getElementById('theme-dark');
  const themeSystemBtn = document.getElementById('theme-system');
  const themeStyle = document.getElementById('theme-style');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // Button event listeners
  themeLightBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  });
  
  themeDarkBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  });
  
  themeSystemBtn.addEventListener('click', () => {
    localStorage.removeItem('theme');
    if (systemPrefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
  
  // Watch for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  });
});