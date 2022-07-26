// const sliderAdvantages = document.querySelector(".slider-advantages");

const swiperAdvantages = new Swiper(".slider-advantages", {
  direction: "horizontal",
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
  },
  paginationClickable: true,

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  spaceBetween: 10,
});
