export const initToursSlider = () => {
  const swiperWrapper = document.querySelector('[data-tours-swiper]');
  const buttonNext = document.querySelector('[data-tours-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-tours-swiper-btn-prev]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        initialSlide: 3,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        initialSlide: 3,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 4,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
