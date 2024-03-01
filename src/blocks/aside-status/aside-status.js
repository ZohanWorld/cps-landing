const callButton = document.querySelectorAll('.button-checkstatus');
const asideMenu = document.querySelector('.aside-status');
const closeCall = document.querySelector('.aside-status__close-button');

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-status');
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-status');
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};