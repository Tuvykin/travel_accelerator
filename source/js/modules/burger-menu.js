const nav = document.querySelector('[data-navigation]');
const navList = nav.querySelector('[data-navigation-list]');
const navToggle = nav.querySelector('[data-navigation-toogle]');
const navLink = nav.querySelectorAll('[data-navigation-link]');
const bodyElement = document.querySelector('body');
const hero = document.querySelector('.hero');


function onNavToggleClick() {
  if (navList.classList.contains('navigation__list--closed')) {
    navList.classList.remove('navigation__list--closed');
    navList.classList.add('navigation__list--opened');

    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');

    navToggle.classList.remove('navigation__toogle--closed');
    navToggle.classList.add('navigation__toogle--opened');

    bodyElement.classList.add('menu-opened');
    hero.classList.add('hero-menu');
  } else {
    navList.classList.remove('navigation__list--opened');
    navList.classList.add('navigation__list--closed');

    nav.classList.remove('navigation--opened');
    nav.classList.add('navigation--closed');

    navToggle.classList.remove('navigation__toogle--opened');
    navToggle.classList.add('navigation__toogle--closed');

    bodyElement.classList.remove('menu-opened');
    hero.classList.remove('hero-menu');
  }
}

const setNavToggle = () => {
  navToggle.addEventListener('click', onNavToggleClick);
};

const onNavLinkClick = () => {
  onNavToggleClick();
};

function setNavLinkClick() {

  navLink.forEach((link) => {
    link.addEventListener('click', onNavLinkClick);
  });
}

export {setNavToggle, setNavLinkClick};
