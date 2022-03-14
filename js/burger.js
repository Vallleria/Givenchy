const headerBurgerBtn = document.querySelector('.header__burger-btn')
const navbar = document.querySelector('.navbar')
const burgerMenuBtnClose = document.querySelector('.burger-menu__btn-close')


function toggleBurgerMenu(){
    navbar.classList.toggle('navbar_show');
}

burgerMenuBtnClose.addEventListener('click', toggleBurgerMenu);
headerBurgerBtn.addEventListener('click', toggleBurgerMenu);