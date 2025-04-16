const API_URL = "https://cerenannac.com/comments";

// === DARK MODE (İsteğe bağlı) ===
const toggleButton = document.getElementById("toggle-theme");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  });
}

// === TYPEWRITER EFFECT ===
document.addEventListener("DOMContentLoaded", () => {
  const heroHeading = document.querySelector(".typewriter");
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

  // === REVEAL ANIMATION ===
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

// === SKILLS ANIMATION ===
const skillCards = document.querySelectorAll(".skill-card");
const skillFills = document.querySelectorAll(".skill-fill");

window.addEventListener("scroll", () => {
  skillCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add("reveal");
    }
  });

  skillFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      const width = fill.style.width;
      fill.style.width = width;
    }
  });
});

// === CONTACT FORM (fake handler) ===
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent!");
  });
}

// === GUESTBOOK / COMMENT SECTION ===
const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

if (commentForm && commentList) {
  // Load existing comments
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
      console.error("Error loading comments:", err);
      commentList.innerHTML = "<p style='color:red;'>Unable to load comments.</p>";
    }
  }

  // Submit comment
  commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(commentForm);
    const name = formData.get("name");
    const message = formData.get("message");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message })
      });

      const result = await res.json();
      if (result.status === "success") {
        commentForm.reset();
        loadComments();
      } else {
        alert("Failed to send comment.");
      }
    } catch (err) {
      console.error("Error submitting comment:", err);
      alert("Something went wrong.");
    }
  });

  // Initial load
  loadComments();
}
