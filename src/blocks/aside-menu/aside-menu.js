const burger = document.querySelector('.header-navigation__burger');
const aside = document.querySelector('.aside-menu');
const closeButton = document.querySelector('.aside-menu__button--close');

burger.addEventListener('click', function (){
  aside.classList.add('hide-aside');
});

closeButton.addEventListener('click', function (){
  aside.classList.remove('hide-aside');
});