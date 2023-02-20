// window.onload = () => {
//   let loader = document.querySelector(".loader");
//   document.body.style.overflow = "hidden";
//   setTimeout(function () {
//     loader.style.display = "none";
//     document.body.style.overflow = "auto";
//   }, 3000);
// };
//to change nav bar on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("change-nav-color", scrollY > 100);
});
// end change color navbar

//Event click
let a = document.querySelectorAll(".question");
a.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("open");
    //change icon
    let icon = question.querySelector(".question-icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});
//Event click
/////////
/////////
//show hidden nav
let menu = document.querySelector(".nav-menu");
let openBtn = document.querySelector("#open-menu-btn");
let closeBtn = document.querySelector("#close-menu-btn");
//show menu navbar
openBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
});
//close menu
let closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav);
///////////////////////
