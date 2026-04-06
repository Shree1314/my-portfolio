// Dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Scroll animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Typing effect
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

// Image popup
function openImage(img) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = img.src;
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}
