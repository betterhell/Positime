const sliderLine = document.querySelector(".wheel");

let offset = 0;
const slider = () => {
  sliderLine.addEventListener("touchmove", () => {
    offset += 240;
    if (offset > 480) {
      offset = 0;
    }
    sliderLine.style.left = -offset + "px";
  });
};

slider();
