
const humburgerMenuInput = document.querySelector(".humburger-menu input");
const nav = document.querySelector(".navigation-link");
const link = document.querySelectorAll(".navigation-link li");
const main = document.querySelector("#main");
const headMain = document.querySelector("#main-header");

humburgerMenuInput.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

main.addEventListener("click", function () {
  nav.classList.toggle("slide");
  humburgerMenuInput.checked = false;
});

headMain.addEventListener("click", function () {
  nav.classList.toggle("slide");
  humburgerMenuInput.checked = false;
});

link.forEach(function (e) {
  e.addEventListener("click", function () {
    nav.classList.toggle("slide");
    humburgerMenuInput.checked = false;
  });
});