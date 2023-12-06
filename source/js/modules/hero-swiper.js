export const initHeroSlider = () => {
  const swiperWrapper = document.querySelector('[data-hero-swiper]');

  return new window.Swiper(swiperWrapper, {
    pagination: {
      el: '[data-swiper-hero-pagination]',
    },
  });
};
