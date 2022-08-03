// const sliderAdvantages = document.querySelector(".slider-advantages");

const swiperAdvantages = new Swiper(".slider-advantages", {
  direction: "horizontal",
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",

    clickable: true,
  },

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  spaceBetween: 19,
});

document
  .querySelector(".form__bottom-wrapper")
  .addEventListener("click", function () {
    this.classList.toggle("active");
  });
