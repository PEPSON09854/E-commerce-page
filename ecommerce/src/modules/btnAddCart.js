import { menuCart, menuCartEmpty } from "./btnCart.js";

const counter = document.querySelectorAll(".counter");
const cartCounter = document.querySelector("#counter");

export const handleBtnAddCartClick = () => {
  counter.forEach((item) => {
    if (item.innerText > 0) {
      cartCounter.style.display = "flex";
      menuCartEmpty.classList.remove("open-menu-cart-empty");
      menuCart.classList.add("open-menu-cart");
      menuCart.style.animation = "menu-cart .2s linear";
    }
  });
};
