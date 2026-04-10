const elements = document.querySelectorAll(".reveal");

function show() {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", show);
show();