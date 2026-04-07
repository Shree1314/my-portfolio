function openModal(card) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = card.querySelector("img").src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
