function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function openImage(img) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = img.src;
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}

function highlightCert(id) {
  document.getElementById(id).classList.add("highlight");
}

function removeHighlight(id) {
  document.getElementById(id).classList.remove("highlight");
}

// typing
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
