
const toggle = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

toggle.addEventListener("click", () => {
    nav.classList.toggle("shownavbar");
  });