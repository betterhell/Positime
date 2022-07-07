const progressBar = document.querySelector(".progress-line");
progressBar.style.width = 0 + "%";

document.onscroll = function () {
  let progressLine =
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;

  progressBar.style.width = progressLine + "%";
};
