

function toggleMenu() {
  const isOpen = document.body.classList.toggle("menu--open");
  document.querySelector(".nav__burger").setAttribute("aria-expanded", isOpen);
}

function closeMenu() {
  document.body.classList.remove("menu--open");
  document.querySelector(".nav__burger").setAttribute("aria-expanded", "false");
}

// close the dropdown after a link is clicked
document.querySelectorAll(".nav__link").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

let currentTestimonial = 0;

function showTestimonial(index) {
  const slides = document.querySelectorAll(".tst__slide");
  currentTestimonial = (index + slides.length) % slides.length;  // wraps around
  slides.forEach(function (slide, i) {
    slide.classList.toggle("is-active", i === currentTestimonial);
  });
}

function nextTestimonial() {
  showTestimonial(currentTestimonial + 1);
}

function prevTestimonial() {
  showTestimonial(currentTestimonial - 1);
}