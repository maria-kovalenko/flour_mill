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
  .querySelector(".politics__label")
  .addEventListener("click", function () {
    this.classList.toggle("active");
  });

const buttonMenuBurger = document.querySelector(".header__button-menu");
const buttonviewСross = document.querySelector(".header__toggle--opened");
const headerWrapper = document.querySelector(".header__wrapper");
const menu = document.querySelector(".mobile-menu");

const contentMain = document.querySelector(".page-main");
const contentFooter = document.querySelector(".page-footer");

let condition = "close";

buttonMenuBurger.addEventListener("click", function () {
  if (condition === "close") {
    menu.style.display = "block";
    headerWrapper.style.display = "none";
    contentMain.style.display = "none";
    contentFooter.style.display = "none";
    condition = "open";
  }
});

buttonviewСross.addEventListener("click", function () {
  if (condition === "open") {
    menu.style.display = "none";
    headerWrapper.style.display = "grid";
    contentMain.style.display = "block";
    contentFooter.style.display = "block";

    condition = "close";

    // document.querySelectorAll(".navigation__list .open").forEach((element) => {
    //   element.classList.remove("open");
    // });
  }
});
