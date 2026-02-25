// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check if theme toggle exists on page
    if (!themeToggle) {
        console.error('Theme toggle button not found!');
        return;
    }
    
    const themeIcon = themeToggle.querySelector('i');
    const root = document.documentElement;
    
    // Check for saved theme preference (default to light)
    let currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme and set icon
    applyTheme(currentTheme);
    updateIcon(currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        // Toggle between light and dark
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Apply the new theme
        applyTheme(newTheme);
        
        // Update icon
        updateIcon(newTheme);
        
        // Save to localStorage
        localStorage.setItem('theme', newTheme);
        
        // Update current theme
        currentTheme = newTheme;
        
        // Add rotation animation
        themeIcon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeIcon.style.transform = '';
        }, 300);
    });
    
    // Function to apply theme
    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        
        // Also update the theme stylesheet if you're using separate files
        const themeStyle = document.getElementById('theme-style');
        if (themeStyle) {
            themeStyle.href = `css/${theme}-theme.css`;
        }
        
        // Add smooth transition
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    // Function to update icon based on theme
    function updateIcon(theme) {
        if (theme === 'light') {
            themeIcon.className = 'fas fa-sun';
            themeToggle.title = 'Light mode - Click for dark mode';
        } else {
            themeIcon.className = 'fas fa-moon';
            themeToggle.title = 'Dark mode - Click for light mode';
        }
    }
    
    // Check system preference on first visit if no saved theme
    if (!localStorage.getItem('theme')) {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme = systemPrefersDark ? 'dark' : 'light';
        applyTheme(systemTheme);
        updateIcon(systemTheme);
        currentTheme = systemTheme;
    }
});