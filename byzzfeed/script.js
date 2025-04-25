// Simple scroll reveal effect
const moments = document.querySelectorAll(".moment");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  moments.forEach((moment) => {
    const elementTop = moment.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      moment.style.opacity = 1;
      moment.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
ß
