// faq.js - FAQ accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');
      
      // Close all other FAQs
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('active');
        }
      });
      
      // Toggle current FAQ
      question.classList.toggle('active');
      answer.classList.toggle('active');
    });
  });
}); 











