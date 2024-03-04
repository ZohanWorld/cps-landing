const callButton = document.querySelectorAll('.button-repair');
const asideMenu = document.querySelector('.aside-call');
const closeCall = document.querySelector('.aside-call__close-button');
<<<<<<< Updated upstream
=======
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');
>>>>>>> Stashed changes

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-call');
<<<<<<< Updated upstream
=======
  mainContent.classList.add('call-blur');
  bodyContent.style.overflow = 'hidden';
>>>>>>> Stashed changes
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-call');
<<<<<<< Updated upstream
=======
  mainContent.classList.remove('call-blur');
  bodyContent.style.overflow = 'auto';
>>>>>>> Stashed changes
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};