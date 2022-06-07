const menu = document.querySelector('#mobile-menu');
const listMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    listMenu.classList.toggle('active');
})