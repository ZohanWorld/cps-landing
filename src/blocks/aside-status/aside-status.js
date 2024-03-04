const callButton = document.querySelectorAll('.button-checkstatus');
const asideMenu = document.querySelector('.aside-status');
const closeCall = document.querySelector('.aside-status__close-button');
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-status');
  mainContent.classList.add('status-blur');
  bodyContent.style.overflow = 'hidden';
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-status');
  mainContent.classList.remove('status-blur');
  bodyContent.style.overflow = 'auto';
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};