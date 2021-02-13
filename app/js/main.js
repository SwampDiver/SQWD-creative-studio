'use strict';

// mobile menu

const mainNav = document.querySelector('.main-nav'),
  logo = document.querySelector('.page-header__logo'),
  menuButton = mainNav.querySelector('.toggle-button'),
  mainMenu = mainNav.querySelector('.main-nav__list');

mainNav.classList.remove('main-nav--no-js');

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuButton.classList.toggle("toggle-button--open");
  mainMenu.classList.toggle("main-nav__list--open");
  logo.classList.toggle("page-header__logo--in-menu");
});

// background image

const header = document.querySelector('.page-header'),
  sliderBtns = header.querySelectorAll('.page-header__controls-button');

const removeActive = () => {
  sliderBtns.forEach(btn => {
    btn.classList.remove('page-header__controls-button--active');
  });
};

const showSlide = () => {
  sliderBtns.forEach((item, i) => {
    if (item.classList.contains('page-header__controls-button--active')) {
      header.className = 'page-header';
      header.classList.add(`page-header--bg${i + 1}`);
    }
  });
};

sliderBtns.forEach(() => {
  addEventListener('click', (evt) => {
    evt.preventDefault();
    const target = evt.target;

    if (target && target.classList.contains('page-header__controls-button')) {
      removeActive();
      evt.target.classList.add('page-header__controls-button--active');
      showSlide();
    }
  });
});
