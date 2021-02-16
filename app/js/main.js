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

let i = 0;

const activeBtn = n => {
  for (let button of sliderBtns) {
    button.classList.remove('page-header__controls-button--active');
  }
  sliderBtns[n].classList.add('page-header__controls-button--active');
  showSlide();
};


const slideChange = () => {
  if (i == sliderBtns.length - 1) {
    i = 0;
    activeBtn(i);
  } else {
    i++;
    activeBtn(i);
  }
};

setInterval(slideChange, 4000);



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

//reviews slider

const prev = document.querySelector('.reviews__button--back');
const next = document.querySelector('.reviews__button--forward');
const slides = document.querySelectorAll('.reviews__feedback');

let index = 0;

const activeSlide = n => {
  for (let slide of slides) {
    slide.classList.remove('reviews__feedback--active');
  }
  slides[n].classList.add('reviews__feedback--active');
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

