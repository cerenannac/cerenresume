//  Dark Mode Toggle

const toggleButton = document.getElementById('toggle-theme');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  });
}


//  Typewriter Effect

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

  //  Scroll Reveal
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


// Skills Animations

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


//  Contact Form

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent!');
  });
}


//  Guestbook 

const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

if (commentForm && commentList) {
  const API_URL = "https://cerenannac.com/comments"; // ✅ güncel API URL

  async function loadComments() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      commentList.innerHTML = data.map(c => `
        <div class="comment">
          <strong>${c.name}</strong>: ${c.message}
        </div>
      `).join('');
    } catch (err) {
      commentList.innerHTML = "<p style='color:red;'>Unable to load comments.</p>";
    }
  }

  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(commentForm);
    await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        message: formData.get('message')
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    commentForm.reset();
    loadComments();
  });

  loadComments();
}
