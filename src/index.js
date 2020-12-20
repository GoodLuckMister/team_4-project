import "./sass/main.scss";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
const mySwiper = new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
);
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");


  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();