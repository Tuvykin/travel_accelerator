export const initAdvantagesSlider = () => {
  const swiperWrapper = document.querySelector('[data-advantages-swiper]');
  const buttonNext = document.querySelector('[data-advantages-swiper-btn-next]');
  const buttonPrev = document.querySelector('[data-advantages-swiper-btn-prev]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    centeredSlides: true,
    slidesPerView: 3.585,
    spaceBetween: 30,
    initialSlide: 2,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
