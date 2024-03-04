const callButton = document.querySelectorAll('.button-checkstatus');
const asideMenu = document.querySelector('.aside-status');
const closeCall = document.querySelector('.aside-status__close-button');
<<<<<<< Updated upstream
=======
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');
>>>>>>> Stashed changes

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-status');
<<<<<<< Updated upstream
=======
  mainContent.classList.add('status-blur');
  bodyContent.style.overflow = 'hidden';
>>>>>>> Stashed changes
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-status');
<<<<<<< Updated upstream
=======
  mainContent.classList.remove('status-blur');
  bodyContent.style.overflow = 'auto';
>>>>>>> Stashed changes
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};