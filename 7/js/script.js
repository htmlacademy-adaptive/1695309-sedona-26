const navToggle = document.querySelector(".navigation__toggle");
const nav = document.querySelector(".navigation");

nav.classList.remove("navigation--nojs");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("navigation--closed");
  nav.classList.toggle("navigation--opened");
})
