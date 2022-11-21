let menu_icons = document.querySelector('.menu-icons'),
nav = document.querySelector('nav');

menu_icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});