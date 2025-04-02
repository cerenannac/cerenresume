// main.js

// Dark Mode Toggle (Optional Feature)
const toggleButton = document.getElementById('toggle-theme');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  // Load saved theme
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  });
}

// Typewriter Effect for Hero Text
document.addEventListener("DOMContentLoaded", () => {
    const heroHeading = document.querySelector(".hero-text h2");
    if (heroHeading) {
      const text = heroHeading.textContent;
      heroHeading.textContent = "";
      let i = 0;
      function type() {
        if (i < text.length) {
          heroHeading.textContent += text.charAt(i);
          i++;
          setTimeout(type, 60);
        }
      }
      type();
    }
  
    // Scroll Reveal Animation
    const reveals = document.querySelectorAll(".reveal");
  
    function revealOnScroll() {
      for (const el of reveals) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      }
    }
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  });

  // Skills deneme

  const skillCards = document.querySelectorAll('.skill-card');
window.addEventListener('scroll', () => {
  skillCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add('reveal');
    }
  });
});


const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('scroll', () => {
  skillFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      const width = fill.getAttribute('style').match(/width:\s*(\d+)%/)[1];
      fill.style.width = width + '%';
    }
  });
});


const fills = document.querySelectorAll('.skill-fill');

function animateSkills() {
  fills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50 && fill.innerText === "0%") {
      const percent = fill.getAttribute('data-fill');
      fill.style.width = percent + '%';
      fill.innerText = percent + '%';
    }
  });
}

window.addEventListener('scroll', animateSkills);


// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent!');
  });
}
