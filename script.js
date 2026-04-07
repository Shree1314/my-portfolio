function openModal(img) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function scrollToSection() {
  document.getElementById("projects").scrollIntoView({behavior: "smooth"});
}