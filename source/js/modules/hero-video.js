const ANIMATION_DELAY = 450;

const HERO_VIDEO_SRC = 'https://www.youtube.com/embed/9TZXsZItgdw?si=5jpJCX8KEnZiVuf-&amp;controls=0&autoplay=1';
const videoWrapper = document.querySelector('[data-hero-video]');
const posterWrapper = videoWrapper.querySelector('[data-hero-poster]');
const videoButton = videoWrapper.querySelector('[data-hero-video-button]');
const heroIframe = videoWrapper.querySelector('[data-hero-iframe]');

function onClickVideoButton() {
  posterWrapper.classList.add('hero-video__container--hidden');
  heroIframe.src = HERO_VIDEO_SRC;

  setTimeout(() => {
    posterWrapper.classList.add('hero-video__container--del');
  }, ANIMATION_DELAY);
}

const setHeroVideo = () => {
  videoButton.addEventListener('click', onClickVideoButton);
};

export {setHeroVideo};
