export const initTrainingSlider = () => {
  const swiperWrapper = document.querySelector('[data-training-swiper]');
  const buttonPrev = document.querySelector('[data-training-swiper-btn-prev]');
  const buttonNext = document.querySelector('[data-training-swiper-btn-next]');

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
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
