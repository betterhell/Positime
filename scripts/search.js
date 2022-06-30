const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
const closeButton = document.querySelector(".search-close");
const searchValue = document.querySelector(".search-input__input");

const searchActivated = () => {
  searchButton.addEventListener("click", () => {
    searchInput.classList.toggle("search-button__search-input_active");
  });
};
searchActivated();

const searchClear = () => {
  closeButton.addEventListener("click", () => {
    searchValue.value = "";
  });
};
searchClear();
