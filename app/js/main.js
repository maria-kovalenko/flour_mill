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

// const buttonOpenMenu = document.querySelector(".header__button-menu");
// const buttonConditionClosed = document.querySelector(".header__toggle--closed");
// // const buttonConditionOpened = document.querySelector(".header__toggle--opened");
// const menu = document.querySelector(".header__navigation");

// const headerWrapper = document.querySelector(".header__wrapper");
// // const headerWrapperPseudo = document.querySelector(".header__wrapper::before");
// const logo = document.querySelector(".header__logo");
// const search = document.querySelector(".header__search");
// const social = document.querySelector(".header__social");
// const contacts = document.querySelector(".header__contacts");

// const contentMain = document.querySelector(".page-main");
// const contentFooter = document.querySelector(".page-footer");

// let condition = "close";

// buttonOpenMenu.addEventListener("click", function () {
//   if (condition === "close") {
//     menu.style.display = "block";
//     buttonConditionClosed.classList.remove("header__toggle--closed");
//     buttonConditionClosed.classList.add("header__toggle--opened");
//     contentMain.style.display = "none";
//     contentFooter.style.display = "none";
//     logo.style.display = "none";
//     search.style.display = "block";
//     // headerWrapperPseudo.style.display = "none";
//     headerWrapper.style.display = "flex";
//     headerWrapper.style.justifyContent = "space-Between";
//     social.style.display = "none";
//     contacts.style.display = "none";

//     condition = "open";
//   }
// });

// buttonOpenMenu.addEventListener("click", function () {
//   if (condition === "open") {
//     buttonConditionClosed.classList.remove("header__toggle--opened");
//     buttonConditionClosed.classList.add("header__toggle--closed");

//     menu.classList.remove("showMenu");
//     contentMain.style.display = "block";
//     contentFooter.style.display = "block";

//     condition = "close";

//     // document.querySelectorAll(".navigation__list .open").forEach((element) => {
//     //   element.classList.remove("open");
//     // });
//   }
// });
