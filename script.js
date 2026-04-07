document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(30px)";
});

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
      sec.style.transition = "0.8s";
    }
  });
});
