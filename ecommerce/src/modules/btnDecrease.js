import { priceTennis } from "./btnIncrease.js";
import { menuCart, menuCartEmpty } from "./btnCart.js";

const counter = document.querySelectorAll(".counter");
const cartCounter = document.querySelector("#counter");
const total = document.querySelector("#total");

export const handleDecreaseBtnClick = () => {
  let count = 0;
  counter.forEach((item) => {
    count = Number(item.innerText);
    if (count > 0) {
      count--;
      item.innerText = count;
      let price = priceTennis;
      let totalPrice = price * item.innerText;
      total.innerText = "$" + totalPrice.toFixed(2);
    }
    if (count === 0) {
      menuCartEmpty.classList.add("open-menu-cart-empty");
      menuCart.classList.remove("open-menu-cart");
      cartCounter.style.display = "none";
    }
  });
};
