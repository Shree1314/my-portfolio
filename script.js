// Wait for page load
document.addEventListener("DOMContentLoaded", () => {

  // 🔥 Smooth scrolling
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // ✨ Fade-in sections on scroll (SAFE VERSION)
  const sections = document.querySelectorAll("section");

  function reveal() {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        sec.style.opacity = "1";
        sec.style.transform = "translateY(0)";
      }
    });
  }

  // Initial state (SAFE)
  sections.forEach(sec => {
    sec.style.opacity = "0.9";   // NOT fully hidden (important)
    sec.style.transform = "translateY(20px)";
    sec.style.transition = "all 0.6s ease";
  });