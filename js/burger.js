const headerBurgerBtn = document.querySelector('.header__burger-btn')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuBtnClose = document.querySelector('.burger-menu__btn-close')


function toggleBurgerMenu(){
    burgerMenu.classList.toggle('burger-menu_hide');
}

burgerMenuBtnClose.addEventListener('click', toggleBurgerMenu);
headerBurgerBtn.addEventListener('click', toggleBurgerMenu);