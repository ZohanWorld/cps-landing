const burger = document.querySelector('.header-navigation__burger');
const aside = document.querySelector('.aside-menu');
const closeButton = document.querySelector('.aside-menu__button--close');
<<<<<<< Updated upstream

burger.addEventListener('click', function (){
  aside.classList.add('hide-aside');
=======
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');

burger.addEventListener('click', function (){
  aside.classList.add('hide-aside');
  mainContent.classList.add('call-blur');
  bodyContent.style.overflow = 'hidden';
>>>>>>> Stashed changes
});

closeButton.addEventListener('click', function (){
  aside.classList.remove('hide-aside');
<<<<<<< Updated upstream
=======
  mainContent.classList.remove('call-blur');
  bodyContent.style.overflow = 'auto';
>>>>>>> Stashed changes
});