const callButton = document.querySelectorAll('.button-repair');
const asideMenu = document.querySelector('.aside-call');
const closeCall = document.querySelector('.aside-call__close-button');
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-call');
  mainContent.classList.add('call-blur');
  bodyContent.style.overflow = 'hidden';
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-call');
  mainContent.classList.remove('call-blur');
  bodyContent.style.overflow = 'auto';
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};