export const initAdvantagesSlider = () => {
  const swiperWrapper = document.querySelector('[data-advantages-swiper]');
  const buttonNext = document.querySelector('[data-advantages-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-advantages-swiper-btn-prev]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1240: {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 2,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
