const burger = document.querySelector('.header-navigation__burger');
const aside = document.querySelector('.aside-menu');
const closeButton = document.querySelector('.aside-menu__button--close');
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');

burger.addEventListener('click', function (){
  aside.classList.add('hide-aside');
  mainContent.classList.add('call-blur');
  bodyContent.style.overflow = 'hidden';
});

closeButton.addEventListener('click', function (){
  aside.classList.remove('hide-aside');
  mainContent.classList.remove('call-blur');
  bodyContent.style.overflow = 'auto';
});