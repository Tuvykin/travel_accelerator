export const initToursSlider = () => {
  const swiperWrapper = document.querySelector('[data-tours-swiper]');
  const buttonPrev = document.querySelector('[data-tours-swiper-btn-prev]');
  const buttonNext = document.querySelector('[data-tours-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      // when window width is >= 1200px
      1240: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
