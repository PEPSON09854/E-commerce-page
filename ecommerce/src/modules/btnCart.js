import { count } from "./btnIncrease.js";

export const menuCart = document.querySelector("#menu-cart");
export const counterCart = document.querySelector(".counter");
export const menuCartEmpty = document.querySelector("#menu-cart-empty");

export const handleBtnCardClick = () => {
  if (count === 0) {
    menuCartEmpty.classList.add("open-menu-cart-empty");
    menuCartEmpty.style.animation = "menu-cart .2s linear";
  } else if (counterCart.textContent > 0) {
    menuCart.classList.add("open-menu-cart");
    menuCart.style.animation = "menu-cart .2s linear";
  } else {
    menuCartEmpty.classList.add("open-menu-cart-empty");
    menuCartEmpty.style.animation = "menu-cart .2s linear";
  }
};
