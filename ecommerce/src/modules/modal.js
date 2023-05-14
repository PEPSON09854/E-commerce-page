export const images = document.querySelectorAll(".image");
const background = document.querySelector("#modal");

let currentImageIndex = 0;

const createModal = (image) => {
  const imageModal = document.createElement("div");
  imageModal.classList.add("modal");

  const btns = document.createElement("div");
  btns.classList.add("btns");

  const imgs = document.createElement("img");
  imgs.src = image;

  const closeModal = document.createElement("button");
  closeModal.classList.add("close-modal");
  closeModal.innerText = "x";

  closeModal.addEventListener("click", () => {
    background.style.display = "none";
    imageModal.style.display = "none";
  });

  const btnPrev = document.createElement("img");
  btnPrev.classList.add("btn");
  btnPrev.src = "./../public/assets/icons/Path 2(1).svg";

  btnPrev.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    imgs.src = images[currentImageIndex].src;
  });

  const btnNext = document.createElement("img");
  btnNext.classList.add("btn");
  btnNext.src = "./../public/assets/icons/Path 2.svg";

  btnNext.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgs.src = images[currentImageIndex].src;
  });

  btns.appendChild(btnPrev);
  btns.appendChild(btnNext);
  imageModal.appendChild(closeModal);
  imageModal.appendChild(imgs);
  imageModal.appendChild(btns);

  return imageModal;
};

export const openModal = (imageSrc, index) => {
  currentImageIndex = index;
  const modalElement = createModal(imageSrc);
  document.body.appendChild(modalElement);
  background.style.display = "flex";
};
