window.onload = function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1190: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const menuBtn = document.querySelector(".header__menu_btn");
  const menuBtnIcon = document.querySelector(".header__menu_btn i");
  const menuList = document.querySelector(".nav__list");

  menuBtn.addEventListener("click", function () {
    menuList.classList.toggle("active");
    menuBtnIcon.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav__list li a");

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      if (!navLinks[i].classList.contains("active")) {
        navLinks[i].classList.add("active");
      }
    });
  }
};
