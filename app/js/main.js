// const sliderAdvantages = document.querySelector(".slider-advantages");

const swiperAdvantages = new Swiper(".slider-advantages", {
  direction: "horizontal",
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination",
  },
  //   paginationClickable: true,

  //   effect: "fade",
  //   fadeEffect: {
  //     crossFade: true,
  //   },
  spaceBetween: 10,
  freeMode: true,
});
