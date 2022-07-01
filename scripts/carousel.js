const sliderLine = document.querySelector(".wheel");
const clwdth = document.documentElement.clientWidth;

let offset = 0;
if (clwdth < 600) {
  sliderLine.addEventListener("touchmove", () => {
    offset += 240;
    if (offset > 240) {
      offset = 0;
    }
    sliderLine.style.left = -offset + "px";
  });
}
