import { priceTennis } from "./btnIncrease.js";
import { menuCart, menuCartEmpty } from "./btnCart.js";

const counter = document.querySelectorAll(".counter");
const cartCounter = document.querySelector("#counter");
const total = document.querySelector("#total");

export const handleBtnTrashClick = () => {
  menuCart.classList.remove("open-menu-cart");
  menuCartEmpty.classList.add("open-menu-cart-empty");
  menuCartEmpty.style.animation = "menu-cart .2s linear";

  counter.forEach((item) => {
    item.innerText = 0;
    let price = priceTennis;
    let totalPrice = price * item.innerText;
    total.innerText = "$" + totalPrice.toFixed(2);
    cartCounter.style.display = "none";
  });
};
