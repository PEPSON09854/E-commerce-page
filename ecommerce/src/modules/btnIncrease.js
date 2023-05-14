import { menuCartEmpty } from "./btnCart.js";

const total = document.querySelector("#total");
const counter = document.querySelectorAll(".counter");

export let count = 0;
export const priceTennis = 125.0;

export const handleIncreaseBtnClick = () => {
  counter.forEach((item) => {
    count = Number(item.innerText);
    count++;
    item.innerText = count;
    let price = priceTennis;
    let totalPrice = price * item.innerText;
    total.innerText = "$" + totalPrice.toFixed(2);
  });
  menuCartEmpty.classList.remove("open-menu-cart-empty");
};
