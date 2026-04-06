// Run after page loads
document.addEventListener("DOMContentLoaded", function () {

  // DARK MODE
  window.toggleDarkMode = function () {
    document.body.classList.toggle("dark-mode");
  };

  // IMAGE POPUP
  window.openImage = function (img) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = img.src;
  };

  window.closeImage = function () {
    document.getElementById("popup").style.display = "none";
  };

  // SCROLL ANIMATION
  const faders = document.querySelectorAll(".fade");

  function showOnScroll() {
    faders.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll(); // run once

  // TYPING EFFECT
  const text = "Aspiring Engineer | AI Enthusiast | Python Learner";
  let i = 0;

  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }

  type();

});
