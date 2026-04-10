const cards = document.querySelectorAll(".about-card");

function reveal() {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      card.style.transform = "translateX(0)";
      card.style.opacity = "1";
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();