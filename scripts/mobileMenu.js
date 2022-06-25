const burgerButton = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("header__burger_active");
  mobileMenu.classList.toggle("header__menu-active");
});
