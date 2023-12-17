export const initReviewsSlider = () => {
  const swiperWrapper = document.querySelector('[data-reviews-swiper]');
  const buttonNext = document.querySelector('[data-reviews-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-reviews-swiper-btn-prev]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        initialSlide: 4,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 4,
      },
      // when window width is >= 1200px
      1240: {
        slidesPerView: 2,
        spaceBetween: 120,
        initialSlide: 1,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};