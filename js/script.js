document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
<!--  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        mobileMenuBtn.classList.remove('active');
        navbar.classList.remove('active');
      }
    });
  }); -->
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.section, .category-card, .step, .freelancer-card, .testimonial');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial styles for animation
  document.querySelectorAll('.section, .category-card, .step, .freelancer-card, .testimonial').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run once on load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Pulse animation for CTA buttons
  setInterval(function() {
    const ctaButtons = document.querySelectorAll('.cta .btn');
    ctaButtons.forEach(button => {
      button.style.animation = 'pulse 2s infinite';
    });
  }, 5000);
});


















// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('active');
  });
  
  // Category tabs functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const serviceCategories = document.querySelectorAll('.service-category');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const category = this.dataset.category;
      
      // Show/hide categories based on selection
      serviceCategories.forEach(cat => {
        if (category === 'all' || cat.dataset.category === category) {
          cat.style.display = 'block';
        } else {
          cat.style.display = 'none';
        }
      });
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Initialize with all categories visible
  document.querySelector('.tab-btn.active').click();
});










































// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Initialize scroll position for header
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }
  
  // Freelancer card hover effect for touch devices
  const freelancerCards = document.querySelectorAll('.freelancer-card');
  freelancerCards.forEach(card => {
    card.addEventListener('touchstart', function() {
      this.classList.add('hover-effect');
    });
    
    card.addEventListener('touchend', function() {
      this.classList.remove('hover-effect');
    });
  });
  
  // Testimonial slider functionality
  const testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? 'block' : 'none';
    });
  }
  
  // Initialize first testimonial
  if (testimonials.length > 0) {
    showTestimonial(0);
    
    // Auto-rotate testimonials
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  }
  
  // Filter functionality
  const filterForm = document.querySelector('.filter-options');
  if (filterForm) {
    filterForm.addEventListener('change', function() {
      // In a real implementation, this would filter the freelancers
      console.log('Filters changed:', {
        skills: document.getElementById('skills').value,
        rate: document.getElementById('rate').value,
        availability: document.getElementById('availability').value,
        language: document.getElementById('language').value,
        rating: document.getElementById('rating').value
      });
    });
    
    // Reset filters
    const resetBtn = filterForm.querySelector('.btn-outline');
    resetBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const inputs = filterForm.querySelectorAll('input, select');
      inputs.forEach(input => {
        if (input.type === 'text') {
          input.value = '';
        } else {
          input.selectedIndex = 0;
        }
      });
    });
  }
  
  // Search functionality
  const searchForm = document.querySelector('.search-bar');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = this.querySelector('input');
      const categorySelect = this.querySelectorAll('select')[0];
      const locationSelect = this.querySelectorAll('select')[1];
      
      console.log('Search submitted:', {
        query: searchInput.value,
        category: categorySelect.value,
        location: locationSelect.value
      });
    });
  }
});



















// script.js - Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    });
  });

  // Add scroll effect to header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});































// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbar.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    });
  });
  
  // Add scrolled class to header on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.values-grid, .team-grid, .timeline-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animated elements
  const animatedElements = document.querySelectorAll('.values-grid, .team-grid, .timeline-item');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run once on load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
});

































document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  
  if (mobileMenuBtn && navbar) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      navbar.classList.toggle('active');
    });
  }
  
  // Header scroll effect
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize all components
  initThemeSwitcher();
  initLanguageSwitcher();
  initFAQ();
  initContactForm();
});

function initThemeSwitcher() {
  // Theme switcher is handled in theme-switcher.js
}

function initLanguageSwitcher() {
  // Language switcher is handled in language-switcher.js
}

function initFAQ() {
  // FAQ is handled in faq.js
}

function initContactForm() {
  // Contact form is handled in contact-form.js
}