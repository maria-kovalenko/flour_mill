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
  breakpoints: {
    390: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

document
  .querySelector(".form__bottom-wrapper")
  .addEventListener("click", function () {
    this.classList.toggle("active");
  });
