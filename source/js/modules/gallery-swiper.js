export const initGallerySlider = () => {
  const swiperWrapper = document.querySelector('[data-gallery-swiper]');
  const buttonNext = document.querySelector('[data-gallery-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-gallery-swiper-btn-prev]');

  return new window.Swiper(swiperWrapper, {
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
        initialSlide: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
        initialSlide: 0,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 5,
        spaceBetween: 5,
        initialSlide: 0,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
