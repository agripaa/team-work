const toggleButton = document.querySelector(".toggle-button");
const menu = document.querySelector(".menu");

toggleButton.addEventListener('click', mobileMenu);

function mobileMenu() {
    toggleButton.classList.toggle('is-active');
    menu.classList.toggle('active')
}