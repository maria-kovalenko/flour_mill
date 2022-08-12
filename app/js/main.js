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

// --------открытие мобильного меню--------

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

    document.querySelectorAll(".navigation__list .open").forEach((element) => {
      element.classList.remove("open");
    });
  }
});

// --------------------------- открытие подменю шапки----------

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // для мобильных устройств
  document.querySelectorAll(".navigation__item").forEach((element) => {
    element.addEventListener("click", OpenNavList);
  });

  function OpenNavList(event) {
    event.stopPropagation();
    if (this.classList.contains("open")) {
      this.classList.remove("open");
    } else {
      this.classList.add("open");
      let childrenLi = this.querySelectorAll("li");
      if (childrenLi.length !== 0) {
        childrenLi.forEach((element) => {
          element.addEventListener("click", OpenNavList);
        });
      }
    }
  }
} else {
  //для обычных устройств
  document.querySelectorAll(".first").forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.classList.add("open");
    });
  });

  document.querySelectorAll(".first").forEach((element) => {
    element.addEventListener("mouseout", function () {
      element.classList.remove("open");
    });
  });
}
