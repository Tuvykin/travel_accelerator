export const initTrainingSlider = () => {
  const swiperWrapper = document.querySelector('[data-training-swiper]');
  const buttonNext = document.querySelector('[data-training-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-training-swiper-btn-prev]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 4,
      },
      // when window width is >= 1200px
      1240: {
        slidesPerView: 4,
        spaceBetween: 20,
        initialSlide: 4,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
