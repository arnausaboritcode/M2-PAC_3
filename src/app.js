
/*Menu hamburguesa responsive*/
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

/*Inicialitzar llibreria AOS*/
AOS.init();

