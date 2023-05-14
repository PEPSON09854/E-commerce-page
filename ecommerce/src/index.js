import { images } from "./modules/modal.js";
import { openModal } from "./modules/modal.js";
import { handleBtnCardClick } from "./modules/btnCart.js";
import { handleBtnTrashClick } from "./modules/btnTrash.js";
import { menuCart, menuCartEmpty } from "./modules/btnCart.js";
import { handleBtnAddCartClick } from "./modules/btnAddCart.js";
import { handleDecreaseBtnClick } from "./modules/btnDecrease.js";
import { handleIncreaseBtnClick } from "./modules/btnIncrease.js";

const closeCart = document.querySelectorAll(".menu-cart-close");
const btnAddCart = document.querySelector("#add-cart");
const navBar = document.querySelector("#nav-bar");
const menuMobile = document.querySelectorAll(".menu-mobile");
const btnCart = document.querySelector("#btn-cart");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const btnTrash = document.querySelector("#delete");

btnCart.addEventListener("click", handleBtnCardClick);
btnTrash.addEventListener("click", handleBtnTrashClick);
btnAddCart.addEventListener("click", handleBtnAddCartClick);
decreaseBtn.addEventListener("click", handleDecreaseBtnClick);
increaseBtn.addEventListener("click", handleIncreaseBtnClick);

closeCart.forEach((btn) => {
  btn.addEventListener("click", () => {
    menuCartEmpty.classList.remove("open-menu-cart-empty");

    menuCart.classList.remove("open-menu-cart");
  });
});

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    openModal(image.src, index);
  });
  if (window.innerWidth <= 915) {
    openModal(images[0].src, 0);
  }
});

menuMobile.forEach((btn) => {
  btn.addEventListener("click", () => {
    navBar.classList.toggle("nav-bar");
  });
});
