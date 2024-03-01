const callButton = document.querySelectorAll('.button-repair');
const asideMenu = document.querySelector('.aside-call');
const closeCall = document.querySelector('.aside-call__close-button');

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-call');
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-call');
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};