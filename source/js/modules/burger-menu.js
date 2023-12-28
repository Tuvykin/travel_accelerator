const nav = document.querySelector('[data-navigation]');
const navList = nav.querySelector('[data-navigation-list]');
const navToggle = nav.querySelector('[data-navigation-toogle]');


function onNavToggleClick() {
  if (navList.classList.contains('navigation__list--closed')) {
    navList.classList.remove('navigation__list--closed');
    navList.classList.add('navigation__list--opened');
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    navList.classList.add('navigation__list--closed');
    navList.classList.remove('navigation__list--opened');
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
  }
}


const setNavToggle = () => {
  navToggle.addEventListener('click', onNavToggleClick);
};

export {setNavToggle};
