document.addEventListener('DOMContentLoaded', function() {
  const languageSelect = document.getElementById('language-select');
  
  // Check for saved language preference
  const savedLanguage = localStorage.getItem('language') || 'en';
  
  // Set the selected language
  languageSelect.value = savedLanguage;
  
  // Event listener for language change
  languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    localStorage.setItem('language', selectedLanguage);
    // In a real implementation, you would reload the page with the new language
    // or fetch translations via AJAX
    alert(`Language changed to ${this.options[this.selectedIndex].text}. In a real implementation, the page would reload with the selected language.`);
  });
});







// language-switcher.js
document.addEventListener('DOMContentLoaded', function() {
  // Language switcher functionality
  const languageSelect = document.getElementById('language-select');
  
  // Check for saved language preference
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    languageSelect.value = savedLanguage;
  }
  
  // Language select event listener
  languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    localStorage.setItem('language', selectedLanguage);
    // In a real implementation, you would reload the page with the new language
    // window.location.reload();
    console.log(`Language changed to ${selectedLanguage}`);
  });
});
