// import '../scss/style.scss';
'use strict';

//  $('#menu-toggle').click(function(){
//   $(this).toggleClass('open');
// })

const menuButton = document.querySelector ('.toggle-button');

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log('qqqqw');
  menuButton.classList.toggle("toggle-button--open");
});
