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
  document.querySelector(".container").style.opacity = "0.25";
  document.querySelector("#contentdd").style.opacity = "0.25";
}

function sutogglePopup() {
  document.getElementById("supopup-1").classList.toggle("active");
}

document
  .querySelector("#mainbar>ul>li+li+li")
  .addEventListener("click", sitogglePopup);

setTimeout(() => {
  sitogglePopup();
}, 3000);

document.querySelector(".siclose-btn").addEventListener("click", () => {
  sitogglePopup();
  document.querySelector(".container").style.opacity = "1";
  document.querySelector("#contentdd").style.opacity = "1";
});
document.querySelector(".suclose-btn").addEventListener("click", () => {
  sutogglePopup();
  document.querySelector(".container").style.opacity = "1";
  document.querySelector("#contentdd").style.opacity = "1";
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

document.querySelector("#mainbar").addEventListener("mouseover", () => {
  document.querySelector("#contentdd").style.display = "none";
});
document.querySelector("#dropdown1").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
    // document.querySelector("#contentdd").style.background = "white";
    document.querySelector("#contentdd").innerHTML = "";

    document.querySelector("#contentdd").style.display = "flex";

    let div = document.createElement("div");
    div.style.padding = "20px";
    div.style.border = "0px solid red";
    let l = document.createElement("ul");
    l.style.listStyleType = "none";
    l.style.margin = 0;
    l.style.padding = 0;
    l.style.fontWeight = "bold";
    l.style.lineHeight = "50px";
    let l1 = document.createElement("li");
    l1.innerText = "All New";
    let l2 = document.createElement("li");
    l2.innerText = "Just Dropped";
    let l3 = document.createElement("li");
    l3.innerText = "New Makeup";
    let l4 = document.createElement("li");
    l4.innerText = "New Skincare";
    let l5 = document.createElement("li");
    l5.innerText = "New Haircare";
    let l6 = document.createElement("li");
    l6.innerText = "New Fragrance";
    l.append(l1, l2, l3, l4, l5, l6);
    div.append(l);

    let div2 = document.createElement("div");
    div2.style.border = "0px solid red";
    div2.style.padding = "20px";

    let m = document.createElement("ul");
    m.style.listStyleType = "none";
    m.style.margin = 0;
    m.style.padding = 0;
    m.style.fontWeight = "bold";
    m.style.lineHeight = "50px";
    let m1 = document.createElement("li");
    m1.innerText = "The Next Big Thing";
    let m2 = document.createElement("li");
    m2.innerText = "Bestsellers";
    let m3 = document.createElement("li");
    m3.innerText = "Quizzes & Buying Guides";
    let m4 = document.createElement("li");
    m4.innerText = "Clean Beauty Guide";
    let m5 = document.createElement("li");
    m5.innerText = "Clean + Planet Positive Beauty Guide";

    m.append(m1, m2, m3, m4, m5);
    div2.append(m);

    let img1 = document.createElement("img");
    img1.src =
      "https://www.sephora.com/contentimages/meganav/large/2022-09-skincare-mbc-site-desktop-global-navigation-button.jpg?imwidth=588";
    img1.style.width = "40vh";
    img1.style.height = "40vh";
    img1.style.margin = "auto";
    let img2 = document.createElement("img");
    img2.src =
      "https://www.sephora.com/contentimages/meganav/large/2022-sept-concealer-story-site-desktop-global-navigation-button-us-ca.jpg?imwidth=588";
    img2.style.width = "40vh";
    img2.style.height = "40vh";
    img2.style.margin = "auto";
    document.querySelector("#contentdd").append(div, div2, img1, img2);
    //img1.style.width = "80%";

    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    document.querySelector("#dropdown1").style.textDecoration = "underline";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown2").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
    // document.querySelector("#contentdd").style.background = "green";

    document.querySelector("#contentdd").innerHTML = "";

    document.querySelector("#contentdd").style.display = "flex";

    let div = document.createElement("div");
    div.style.padding = "20px";
    div.style.border = "1px solid red";
    let l = document.createElement("ul");
    l.style.listStyleType = "none";
    l.style.margin = 0;
    l.style.padding = 0;
    l.style.fontWeight = "bold";
    l.style.lineHeight = "50px";
    let l1 = document.createElement("li");
    l1.innerText = "Brands A-Z";
    l1.style.fontWeight = "bold";
    let l2 = document.createElement("li");
    l2.innerText = "SEPHORA COLLECTION";
    l2.style.fontWeight = "bold";
    let l3 = document.createElement("li");
    l3.innerText = "New Brands";
    let l4 = document.createElement("li");
    l4.innerText = "HAUS LABS BY LADY GAGA";
    let l5 = document.createElement("li");
    l5.innerText = "Curlsmith";
    let l6 = document.createElement("li");
    l6.innerText = "Ceremonia";
    let l7 = document.createElement("li");
    l7.innerText = "Boysmells";
    let l8 = document.createElement("li");
    l8.innerText = "Kulfi";
    l.append(l1, l2, l3, l4, l5, l6, l7, l8);
    div.append(l);

    let div2 = document.createElement("div");
    div2.style.border = "1px solid red";
    div2.style.padding = "20px";

    let m = document.createElement("ul");
    m.style.listStyleType = "none";
    m.style.margin = 0;
    m.style.padding = 0;
    m.style.fontWeight = "bold";
    m.style.lineHeight = "50px";
    let m1 = document.createElement("li");
    m1.innerText = "Only At Sephora";
    m1.style.fontWeight = "bold";
    let m2 = document.createElement("li");
    m2.innerText = "JVN";
    let m3 = document.createElement("li");
    m3.innerText = "Biossancce";
    let m4 = document.createElement("li");
    m4.innerText = "Dr.Jart+";
    let m5 = document.createElement("li");
    m5.innerText = "DedCool";
    let m6 = document.createElement("li");
    m6.innerText = "PATRICK TA";

    m.append(m1, m2, m3, m4, m5, m6);
    div2.append(m);

    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    o.style.fontWeight = "bold";
    o.style.lineHeight = "50px";
    let o1 = document.createElement("li");
    o1.innerText = "Black-Owned ";
    m1.style.fontWeight = "bold";
    let o2 = document.createElement("li");
    o2.innerText = "";
    let o3 = document.createElement("li");
    o3.innerText = "ssancce";
    let o4 = document.createElement("li");
    o4.innerText = "Jart+";
    let o5 = document.createElement("li");
    o5.innerText = "Cool";
    let o6 = document.createElement("li");
    o6.innerText = "RICK TA";

    // m.append(m1, m2, m3, m4, m5, m6);
    // div2.append(m);

    // let m = document.createElement("ul");
    // m.style.listStyleType = "none";
    // m.style.margin = 0;
    // m.style.padding = 0;
    // m.style.fontWeight = "bold";
    // m.style.lineHeight = "50px";
    // let m1 = document.createElement("li");
    // m1.innerText = "Only At Sephora";
    // m1.style.fontWeight = "bold";
    // let m2 = document.createElement("li");
    // m2.innerText = "JVN";
    // let m3 = document.createElement("li");
    // m3.innerText = "Biossancce";
    // let m4 = document.createElement("li");
    // m4.innerText = "Dr.Jart+";
    // let m5 = document.createElement("li");
    // m5.innerText = "DedCool";
    // let m6 = document.createElement("li");
    // m6.innerText = "PATRICK TA";

    // m.append(m1, m2, m3, m4, m5, m6);
    // div2.append(m);

    // let m = document.createElement("ul");
    // m.style.listStyleType = "none";
    // m.style.margin = 0;
    // m.style.padding = 0;
    // m.style.fontWeight = "bold";
    // m.style.lineHeight = "50px";
    // let m1 = document.createElement("li");
    // m1.innerText = "Only At Sephora";
    // m1.style.fontWeight = "bold";
    // let m2 = document.createElement("li");
    // m2.innerText = "JVN";
    // let m3 = document.createElement("li");
    // m3.innerText = "Biossancce";
    // let m4 = document.createElement("li");
    // m4.innerText = "Dr.Jart+";
    // let m5 = document.createElement("li");
    // m5.innerText = "DedCool";
    // let m6 = document.createElement("li");
    // m6.innerText = "PATRICK TA";

    // m.append(m1, m2, m3, m4, m5, m6);
    // div2.append(m);

    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown3").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
    // document.querySelector("#contentdd").style.background = "yellow";
    document.querySelector("#contentdd").innerHTML = "";

    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});
