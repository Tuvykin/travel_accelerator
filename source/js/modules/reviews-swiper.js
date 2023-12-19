export const initReviewsSlider = () => {
  const swiperWrapper = document.querySelector('[data-reviews-swiper]');
  const buttonNext = document.querySelector('[data-reviews-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-reviews-swiper-btn-prev]');

  return new window.Swiper(swiperWrapper, {
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        initialSlide: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        initialSlide: 0.5,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 1.605,
        spaceBetween: 120,
        initialSlide: 0,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
