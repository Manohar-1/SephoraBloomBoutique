import { navbar } from "../components/navbar.js";

console.log("navbar:", navbar);
document.querySelector("#navbar").innerHTML = navbar();

document.querySelector("#logo").addEventListener("click", () => {
  document.location.href = "./index.html";
});

document.querySelector("#createAccount").addEventListener("click", () => {
  sitogglePopup();
  sutogglePopup();
});

document.querySelector("#signIn").addEventListener("click", () => {
  sitogglePopup();
  let name = document.querySelector("#l_password").value;
  document.querySelector("#details").innerText = `Welcome ${name}...!`;
});

function sitogglePopup() {
  document.getElementById("sipopup-1").classList.toggle("active");
}

function sutogglePopup() {
  document.getElementById("supopup-1").classList.toggle("active");
}

document
  .querySelector("#mainbar>ul>li+li+li")
  .addEventListener("click", sitogglePopup);

setTimeout(() => {
  sitogglePopup();
}, 30000);

document.querySelector(".siclose-btn").addEventListener("click", () => {
  sitogglePopup();
});
document.querySelector(".suclose-btn").addEventListener("click", () => {
  sutogglePopup();
});

function togglePopup() {
  // console.log("I'm working");
  document.getElementById("popup-1").classList.toggle("active");
  // document.querySelector("body").style.opacity = "1";
}

document.querySelector(".close-btn").addEventListener("click", togglePopup);
document.querySelector("#offerbar>p>b").addEventListener("click", togglePopup);

document.querySelector("#signUpButton").addEventListener("click", function () {
  sutogglePopup();
});

var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  // autoplay: {
  //   delay: 2000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".card_newthing", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  // autoplay: {
  //   delay: 2000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
