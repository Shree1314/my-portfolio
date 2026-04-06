// Smooth scroll animation on load
document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section");

  const reveal = () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.style.opacity = "1";
        sec.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();

});
