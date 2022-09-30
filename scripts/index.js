import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

document.querySelector("#logo").addEventListener("click", () => {
  document.location.href = "./index.html";
});

document.querySelector("#searchBox").addEventListener("click", () => {
  window.location.href = "search.html";
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
  document.querySelector(".container").style.opacity = "0.5";
  document.querySelector(".new_container").style.opacity = "0.5";

  document.querySelector("#contentdd").style.opacity = "0.5";
  document.querySelector(".container3").style.opacity = "0.1"; //container3
  document.querySelector(".container4").style.opacity = "0.1";
}

function sutogglePopup() {
  document.getElementById("supopup-1").classList.toggle("active");
  document.querySelector(".new_container").style.opacity = "0.5";
}

document
  .querySelector("#mainbar>ul>li+li+li")
  .addEventListener("click", sitogglePopup);

setTimeout(() => {
  sitogglePopup();
}, 20000);

document.querySelector(".siclose-btn").addEventListener("click", () => {
  document.getElementById("sipopup-1").classList.toggle("active");
  document.querySelector(".container").style.opacity = "1";
  document.querySelector(".new_container").style.opacity = "1";

  document.querySelector("#contentdd").style.opacity = "1";

  document.querySelector(".container3").style.opacity = "1";
  document.querySelector(".container4").style.opacity = "1";
});
document.querySelector(".suclose-btn").addEventListener("click", () => {
  sutogglePopup();
  document.querySelector(".container").style.opacity = "1";
  document.querySelector("#contentdd").style.opacity = "1";
  document.querySelector(".new_container").style.opacity = "1";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("popup-1").classList.toggle("active");
  document.querySelector(".container").style.opacity = "1";
  document.querySelector(".new_container").style.opacity = "1";
});
document.querySelector("#offerbar>p>b").addEventListener("click", function () {
  document.getElementById("popup-1").classList.toggle("active");
  document.querySelector(".container").style.opacity = "0.5";
  document.querySelector(".new_container").style.opacity = "0.5";
  //document.querySelectorAll(".container").style.opacity = "0.5";
});

document.querySelector("#signUpButton").addEventListener("click", function () {
  console.log("Iworking");
  sutogglePopup();
});

var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  // autoplay: {
  // //   delay: 2000,
  // // },
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
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper3 = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,

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
    img1.style.width = "50vh";
    img1.style.height = "50vh";
    img1.style.margin = "auto";
    let img2 = document.createElement("img");
    img2.src =
      "https://www.sephora.com/contentimages/meganav/large/2022-sept-concealer-story-site-desktop-global-navigation-button-us-ca.jpg?imwidth=588";
    img2.style.width = "50vh";
    img2.style.height = "50vh";
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
    div.style.border = "0px solid grey";
    let l = document.createElement("ul");
    l.style.listStyleType = "none";
    l.style.margin = 0;
    l.style.padding = 0;

    l.style.lineHeight = "40px";
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
    div2.style.border = "0px solid grey";
    div2.style.padding = "20px";

    let m = document.createElement("ul");
    m.style.listStyleType = "none";
    m.style.margin = 0;
    m.style.padding = 0;

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

    let div3 = document.createElement("div");
    div3.style.border = "0px solid grey";
    div3.style.padding = "20px";
    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    // o.style.fontWeight = "bold";
    o.style.lineHeight = "50px";
    let o1 = document.createElement("li");
    o1.innerText = "Affordable Brands";
    o1.style.fontWeight = "bold";
    let o2 = document.createElement("li");
    o2.innerText = "SEPHORA COLLECTION";
    let o3 = document.createElement("li");
    o3.innerText = "THe Ordinary";
    let o4 = document.createElement("li");
    o4.innerText = "The Inkey List";
    let o5 = document.createElement("li");
    o5.innerText = "Verb";

    o.append(o1, o2, o3, o4, o5);
    div3.append(o);

    let div4 = document.createElement("div");
    div4.style.border = "0px solid grey";
    div4.style.padding = "20px";
    let n = document.createElement("ul");
    n.style.listStyleType = "none";
    n.style.margin = 0;
    n.style.padding = 0;
    // o.style.fontWeight = "bold";
    n.style.lineHeight = "50px";
    let n1 = document.createElement("li");
    n1.innerText = "Black-Owned Brands";
    n1.style.fontWeight = "bold";
    let n2 = document.createElement("li");
    n2.innerText = "Shani Darden Skin Care";
    let n3 = document.createElement("li");
    n3.innerText = "adwoa beauty";
    let n4 = document.createElement("li");
    n4.innerText = "PATTERN by Tracee Ellis Ross";
    let n5 = document.createElement("li");
    n5.innerText = "Briogeo";

    n.append(n1, n2, n3, n4, n5);
    div4.append(n);

    let div5 = document.createElement("div");
    div5.style.border = "0px solid grey";
    div5.style.padding = "20px";
    let k = document.createElement("ul");
    k.style.listStyleType = "none";
    k.style.margin = 0;
    k.style.padding = 0;
    // o.style.fontWeight = "bold";
    k.style.lineHeight = "50px";
    let k1 = document.createElement("li");
    k1.innerText = "Black-Owned Brands";
    k1.style.fontWeight = "bold";
    let k2 = document.createElement("li");
    k2.innerText = "Shani Darden Skin Care";
    let k3 = document.createElement("li");
    k3.innerText = "adwoa beauty";
    let k4 = document.createElement("li");
    k4.innerText = "PATTERN by Tracee Ellis Ross";
    let k5 = document.createElement("li");
    k5.innerText = "Briogeo";

    k.append(k1, k2, k3, k4, k5);
    div5.append(k);

    document.querySelector("#contentdd").append(div, div2, div3, div4, div5);
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

    document.querySelector("#contentdd").style.display = "flex";

    let div = document.createElement("div");
    div.style.padding = "20px";
    div.style.border = "0px solid grey";
    let l = document.createElement("ul");
    l.style.listStyleType = "none";
    l.style.margin = 0;
    l.style.padding = 0;

    l.style.lineHeight = "40px";
    let l1 = document.createElement("li");
    l1.innerText = "All Makeup";
    l1.style.fontWeight = "bold";
    let l2 = document.createElement("li");
    l2.innerText = "Face";
    l2.style.fontWeight = "bold";
    let l3 = document.createElement("li");
    l3.innerText = "Foundation";
    let l4 = document.createElement("li");
    l4.innerText = "BB & CC Creams";
    let l5 = document.createElement("li");
    l5.innerText = "Concealer";
    let l6 = document.createElement("li");
    l6.innerText = "Face Primer";
    let l7 = document.createElement("li");
    l7.innerText = "Setting Spray & Powder";
    let l8 = document.createElement("li");
    l8.innerText = "Highliter";
    l.append(l1, l2, l3, l4, l5, l6, l7, l8);
    div.append(l);

    let div2 = document.createElement("div");
    div2.style.border = "0px solid grey";
    div2.style.padding = "20px";

    let m = document.createElement("ul");
    m.style.listStyleType = "none";
    m.style.margin = 0;
    m.style.padding = 0;

    m.style.lineHeight = "40px";
    let m1 = document.createElement("li");
    m1.innerText = "Eye";
    m1.style.fontWeight = "bold";
    let m2 = document.createElement("li");
    m2.innerText = "Eye Palettes";
    let m3 = document.createElement("li");
    m3.innerText = "Mascara";
    let m4 = document.createElement("li");
    m4.innerText = "Eyeliner";
    let m5 = document.createElement("li");
    m5.innerText = "Eyebrow";
    let m6 = document.createElement("li");
    m6.innerText = "False Eyelashes";
    let m7 = document.createElement("li");
    m7.innerText = "Eyeshadow";
    let m8 = document.createElement("li");
    m8.innerText = "Eyelash Serums";
    let m9 = document.createElement("li");
    m9.innerText = "Eyebrow Serums";
    let m10 = document.createElement("li");
    m10.innerText = "Eye Primer";

    m.append(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10);
    div2.append(m);

    let div3 = document.createElement("div");
    div3.style.border = "0px solid grey";
    div3.style.padding = "20px";
    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    // o.style.fontWeight = "bold";
    o.style.lineHeight = "40px";
    let o1 = document.createElement("li");
    o1.innerText = "Lip";
    o1.style.fontWeight = "bold";
    let o2 = document.createElement("li");
    o2.innerText = "Lipstick";
    let o3 = document.createElement("li");
    o3.innerText = "Lip Gloss";
    let o4 = document.createElement("li");
    o4.innerText = "Lip Balm & Treatment";
    let o5 = document.createElement("li");
    o5.innerText = "Liquid Lipstick";
    let o6 = document.createElement("li");
    o6.innerText = "Lip Stain";
    let o7 = document.createElement("li");
    o7.innerText = "Lip Liner";
    let o8 = document.createElement("li");
    o8.innerText = "Lip Plumper";
    let o9 = document.createElement("li");
    o9.innerText = "Lip Sets";

    o.append(o1, o2, o3, o4, o5, o6, o7, o8, o9);
    div3.append(o);

    let div4 = document.createElement("div");
    div4.style.border = "0px solid grey";
    div4.style.padding = "20px";
    let n = document.createElement("ul");
    n.style.listStyleType = "none";
    n.style.margin = 0;
    n.style.padding = 0;
    // o.style.fontWeight = "bold";
    n.style.lineHeight = "40px";
    let n1 = document.createElement("li");
    n1.innerText = "Cheek";
    n1.style.fontWeight = "bold";
    let n2 = document.createElement("li");
    n2.innerText = "Blush";
    let n3 = document.createElement("li");
    n3.innerText = "Bronzer";
    let n4 = document.createElement("li");
    n4.innerText = "Highliter";
    let n5 = document.createElement("li");
    n5.innerText = "Contour";
    let n6 = document.createElement("li");
    n6.innerText = "Cheek Palettes";

    let a = document.createElement("ul");
    a.style.listStyleType = "none";
    a.style.margin = 0;
    a.style.padding = 0;
    a.style.fontWeight = "bold";
    // o.style.fontWeight = "bold";

    a.style.lineHeight = "40px";
    let a1 = document.createElement("li");
    a1.innerText = "Value & Gift Sets";

    let a2 = document.createElement("li");
    a2.innerText = "Makeup Palettes";
    let a3 = document.createElement("li");
    a3.innerText = "Brushes & Application";
    let a4 = document.createElement("li");
    a4.innerText = "Accessories";
    let a5 = document.createElement("li");
    a5.innerText = "Nail";
    a.append(a1, a2, a3, a4, a5);

    n.append(n1, n2, n3, n4, n5, n6, a);
    div4.append(n);

    let div5 = document.createElement("div");
    div5.style.border = "0px solid grey";
    div5.style.padding = "20px";
    let k = document.createElement("ul");
    k.style.listStyleType = "none";
    k.style.margin = 0;
    k.style.padding = 0;
    k.style.fontWeight = "bold";
    // o.style.fontWeight = "bold";
    k.style.lineHeight = "40px";
    let k1 = document.createElement("li");
    k1.innerText = "Bestsellers";
    k1.style.fontWeight = "bold";
    let k2 = document.createElement("li");
    k2.innerText = "Clean Makeup";
    let k3 = document.createElement("li");
    k3.innerText = "Vegan Makeup";
    let k4 = document.createElement("li");
    k4.innerText = "Mini Size";
    let k5 = document.createElement("li");
    k5.innerText = "Value Size";

    k.append(k1, k2, k3, k4, k5);
    div5.append(k);

    let div6 = document.createElement("div");
    div6.style.border = "0px solid grey";
    div6.style.padding = "20px";
    let b = document.createElement("ul");
    b.style.listStyleType = "none";
    b.style.margin = 0;
    b.style.padding = 0;

    // o.style.fontWeight = "bold";
    b.style.lineHeight = "40px";
    let b1 = document.createElement("li");
    b1.innerText = "Help me Choose";
    b1.style.fontWeight = "bold";
    let b2 = document.createElement("li");
    b2.innerText = "Foundation Quiz";
    let b3 = document.createElement("li");
    b3.innerText = "Lip Quiz";
    let b4 = document.createElement("li");
    b4.innerText = "Brow Quiz";
    let b5 = document.createElement("li");
    b5.innerText = "Complexion Routine Builder";

    let b6 = document.createElement("li");
    b6.innerText = "Guide to Foundations";
    let b7 = document.createElement("li");
    b7.innerText = "Clean Makeup Guide";

    let b8 = document.createElement("li");
    b8.innerText = "No Makeup Guide";

    b.append(b1, b2, b3, b4, b5, b6, b7, b8);
    div6.append(b);

    document
      .querySelector("#contentdd")
      .append(div, div2, div3, div4, div5, div6);

    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown4").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
    // document.querySelector("#contentdd").style.background = "yellow";
    document.querySelector("#contentdd").innerHTML = "";

    document.querySelector("#contentdd").style.display = "flex";

    let div = document.createElement("div");
    div.style.padding = "20px";
    div.style.border = "0px solid grey";
    let l = document.createElement("ul");
    l.style.listStyleType = "none";
    l.style.margin = 0;
    l.style.padding = 0;

    l.style.lineHeight = "40px";
    let l1 = document.createElement("li");
    l1.innerText = "All Skincare";
    l1.style.fontWeight = "bold";
    let l2 = document.createElement("li");
    l2.innerText = "Moisturizers";
    l2.style.fontWeight = "bold";
    let l3 = document.createElement("li");
    l3.innerText = "Night Creams";
    let l4 = document.createElement("li");
    l4.innerText = "Face Oils";
    let l5 = document.createElement("li");
    l5.innerText = "Mists & Essences";
    let l6 = document.createElement("li");
    l6.innerText = "BB & CC Creams";

    let c = document.createElement("ul");
    c.style.listStyleType = "none";
    c.style.margin = 0;
    c.style.padding = 0;
    let c1 = document.createElement("li");
    c1.innerText = "Face Wash & Cleansers";
    l1.style.fontWeight = "bold";
    let c2 = document.createElement("li");
    c2.innerText = "Exfoliations";
    l2.style.fontWeight = "bold";
    let c3 = document.createElement("li");
    c3.innerText = "Makeup Removers";
    let c4 = document.createElement("li");
    c4.innerText = "Face Wipes";
    let c5 = document.createElement("li");
    c5.innerText = "Toners";

    c.append(c1, c2, c3, c4, c5);

    l.append(l1, l2, l3, l4, l5, l6, c);
    div.append(l);

    let div2 = document.createElement("div");
    div2.style.border = "0px solid grey";
    div2.style.padding = "20px";

    let m = document.createElement("ul");
    m.style.listStyleType = "none";
    m.style.margin = 0;
    m.style.padding = 0;

    m.style.lineHeight = "40px";
    let m1 = document.createElement("li");
    m1.innerText = "Treatments";
    m1.style.fontWeight = "bold";
    let m2 = document.createElement("li");
    m2.innerText = "Face Serums";
    let m3 = document.createElement("li");
    m3.innerText = "Blemish and Acne Treatments";
    let m4 = document.createElement("li");
    m4.innerText = "Facial Peels";

    let d = document.createElement("ul");
    d.style.listStyleType = "none";
    d.style.margin = 0;
    d.style.padding = 0;

    d.style.lineHeight = "40px";
    let d1 = document.createElement("li");
    d1.innerText = "Masks";
    d1.style.fontWeight = "bold";
    let d2 = document.createElement("li");
    d2.innerText = "Sheet Masks";
    let d3 = document.createElement("li");
    d3.innerText = "Face Masks";
    let d4 = document.createElement("li");
    d4.innerText = "Eye Masks";

    m.append(m1, m2, m3, m4, d);
    div2.append(m);

    let div3 = document.createElement("div");
    div3.style.border = "0px solid grey";
    div3.style.padding = "20px";
    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    // o.style.fontWeight = "bold";
    o.style.lineHeight = "40px";
    let o1 = document.createElement("li");
    o1.innerText = "Eye Creams & Treatments";
    o1.style.fontWeight = "bold";
    let o2 = document.createElement("li");
    o2.innerText = "Eye Masks";
    let o3 = document.createElement("li");
    o3.innerText = "Lip Balms & Treatment";
    o3.style.fontWeight = "bold";

    o.append(o1, o2, o3);
    div3.append(o);

    let div4 = document.createElement("div");
    div4.style.border = "0px solid grey";
    div4.style.padding = "20px";
    let n = document.createElement("ul");
    n.style.listStyleType = "none";
    n.style.margin = 0;
    n.style.padding = 0;
    // o.style.fontWeight = "bold";
    n.style.lineHeight = "40px";
    let n1 = document.createElement("li");
    n1.innerText = "Sunscreen";
    n1.style.fontWeight = "bold";
    let n2 = document.createElement("li");
    n2.innerText = "Face Sunscreen";
    let n3 = document.createElement("li");
    n3.innerText = "Body Sunscreen";
    let n4 = document.createElement("li");
    n4.innerText = "HighTech Tools";
    n4.style.fontWeight = "bold";
    let n5 = document.createElement("li");
    n5.innerText = "Wellness";
    n5.style.fontWeight = "bold";

    // o.style.fontWeight = "bold";

    n.append(n1, n2, n3, n4, n5);
    div4.append(n);

    let div5 = document.createElement("div");
    div5.style.border = "0px solid grey";
    div5.style.padding = "20px";
    let k = document.createElement("ul");
    k.style.listStyleType = "none";
    k.style.margin = 0;
    k.style.padding = 0;
    k.style.fontWeight = "bold";
    // o.style.fontWeight = "bold";
    k.style.lineHeight = "40px";
    let k0 = document.createElement("li");
    k0.innerText = "New";
    let k1 = document.createElement("li");
    k1.innerText = "Bestsellers";
    k1.style.fontWeight = "bold";
    let k2 = document.createElement("li");
    k2.innerText = "Clean Skincare";
    let k3 = document.createElement("li");
    k3.innerText = "Vegan Skincare";
    let k4 = document.createElement("li");
    k4.innerText = "Mini Size";
    let k5 = document.createElement("li");
    k5.innerText = "Value Size";
    let k6 = document.createElement("li");
    k6.innerText = "Sephora Collection";

    k.append(k0, k1, k2, k3, k4, k5);
    div5.append(k);

    let div6 = document.createElement("div");
    div6.style.border = "0px solid grey";
    div6.style.padding = "20px";
    let b = document.createElement("ul");
    b.style.listStyleType = "none";
    b.style.margin = 0;
    b.style.padding = 0;

    // o.style.fontWeight = "bold";
    b.style.lineHeight = "40px";
    let b1 = document.createElement("li");
    b1.innerText = "Help me Choose";
    b1.style.fontWeight = "bold";
    let b2 = document.createElement("li");
    b2.innerText = "Skincare Quiz";
    let b3 = document.createElement("li");
    b3.innerText = "Skin Routine Quiz";
    let b4 = document.createElement("li");
    b4.innerText = "Luxury Skincare";
    let b5 = document.createElement("li");
    b5.innerText = "Clean+ Planer Positive Beauty guide";

    let b6 = document.createElement("li");
    b6.innerText = "Clinical Skincare";
    let b7 = document.createElement("li");
    b7.innerText = "Skincare Ingreditents";

    let b8 = document.createElement("li");
    b8.innerText = "Best Skincare Guide";

    b.append(b1, b2, b3, b4, b5, b6, b7, b8);
    div6.append(b);

    document
      .querySelector("#contentdd")
      .append(div, div2, div3, div4, div5, div6);

    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown5").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
    document.querySelector("#contentdd").innerHTML = "";
    document.querySelector("#contentdd").style.display = "flex";

    let div = document.createElement("div");
    div.style.padding = "20px";
    div.style.border = "0px solid grey";
    let l = document.createElement("ul");
    l.style.listStyleType = "none";
    l.style.margin = 0;
    l.style.padding = 0;

    l.style.lineHeight = "40px";
    let l1 = document.createElement("li");
    l1.innerText = "All hair";
    l1.style.fontWeight = "bold";
    let l2 = document.createElement("li");
    l2.innerText = "Shampoo & Hair Conditioner";
    l2.style.fontWeight = "bold";
    let l3 = document.createElement("li");
    l3.innerText = "Shampoo";
    let l4 = document.createElement("li");
    l4.innerText = "Conditioner";
    let l5 = document.createElement("li");
    l5.innerText = "Scalp Scrub";

    l.append(l1, l2, l3, l4, l5);
    div.append(l);

    let div2 = document.createElement("div");
    div2.style.border = "0px solid grey";
    div2.style.padding = "20px";

    let m = document.createElement("ul");
    m.style.listStyleType = "none";
    m.style.margin = 0;
    m.style.padding = 0;

    m.style.lineHeight = "50px";
    let m1 = document.createElement("li");
    m1.innerText = "Treatments";
    m1.style.fontWeight = "bold";
    let m2 = document.createElement("li");
    m2.innerText = "Hair Masks";
    let m3 = document.createElement("li");
    m3.innerText = "Leave in air conditioner";
    let m4 = document.createElement("li");
    m4.innerText = "Hair Oil";
    let m5 = document.createElement("li");
    m5.innerText = "Hair Serums";
    let m6 = document.createElement("li");
    m6.innerText = "Scalp Treatments";

    m.append(m1, m2, m3, m4, m5, m6);
    div2.append(m);

    let div3 = document.createElement("div");
    div3.style.border = "0px solid grey";
    div3.style.padding = "20px";
    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    // o.style.fontWeight = "bold";
    o.style.lineHeight = "50px";
    let o1 = document.createElement("li");
    o1.innerText = "Styling";
    o1.style.fontWeight = "bold";
    let o2 = document.createElement("li");
    o2.innerText = "Styling Creams";
    let o3 = document.createElement("li");
    o3.innerText = "Dry Shampoo";
    let o4 = document.createElement("li");
    o4.innerText = "Hair Primers & Heat Protectants";
    let o5 = document.createElement("li");
    o5.innerText = "Hair Spray";

    o.append(o1, o2, o3, o4, o5);
    div3.append(o);

    let div4 = document.createElement("div");
    div4.style.border = "0px solid grey";
    div4.style.padding = "20px";
    let n = document.createElement("ul");
    n.style.listStyleType = "none";
    n.style.margin = 0;
    n.style.padding = 0;
    // o.style.fontWeight = "bold";
    n.style.lineHeight = "50px";
    let n1 = document.createElement("li");
    n1.innerText = "Value & Gift Sets";
    n1.style.fontWeight = "bold";
    let n2 = document.createElement("li");
    n2.innerText = "Tools";
    n2.fontWeight = "bold";
    let n3 = document.createElement("li");
    n3.innerText = "Hair Dryers";
    let n4 = document.createElement("li");
    n4.innerText = "Hair Straighteners & Flat Irons";
    let n5 = document.createElement("li");
    n5.innerText = "Curling Irons";
    let n6 = document.createElement("li");
    n6.innerText = "Brushes & Combos";
    n6.fontWeight = "bold";
    let n7 = document.createElement("li");
    n7.innerText = "Accessories";
    n7.fontWeight = "bold";

    n.append(n1, n2, n3, n4, n5, n6, n7);
    div4.append(n);

    let div5 = document.createElement("div");
    div5.style.border = "0px solid grey";
    div5.style.padding = "20px";
    let k = document.createElement("ul");
    k.style.listStyleType = "none";
    k.style.margin = 0;
    k.style.padding = 0;
    k.style.fontWeight = "bold";
    k.style.lineHeight = "50px";
    let k1 = document.createElement("li");
    k1.innerText = "New";
    // k1.style.fontWeight = "bold";
    let k2 = document.createElement("li");
    k2.innerText = "Bestsellers";
    let k3 = document.createElement("li");
    k3.innerText = "Clean Haircare";
    let k4 = document.createElement("li");
    k4.innerText = "Vegan Haircare";
    let k5 = document.createElement("li");
    k5.innerText = "Mini Size";

    let k6 = document.createElement("li");
    k6.innerText = "Value Size";
    let k7 = document.createElement("li");
    k7.innerText = "Sephora Collection";
    let k8 = document.createElement("li");
    k8.innerText = "Luxury Hair";

    k.append(k1, k2, k3, k4, k5, k6, k7, k8);
    div5.append(k);

    document.querySelector("#contentdd").append(div, div2, div3, div4, div5);
    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown6").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
    document.querySelector("#contentdd").innerHTML = "";
    document.querySelector("#contentdd").style.display = "flex";
    let div = document.createElement("div");
    div.style.padding = "20px";
    div.style.border = "0px solid grey";
    let l = document.createElement("ul");
    l.style.listStyleType = "none";
    l.style.margin = 0;
    l.style.padding = 0;

    l.style.lineHeight = "40px";
    let l1 = document.createElement("li");
    l1.innerText = "All Makeup";
    l1.style.fontWeight = "bold";
    let l2 = document.createElement("li");
    l2.innerText = "Face";
    l2.style.fontWeight = "bold";
    let l3 = document.createElement("li");
    l3.innerText = "Foundation";
    let l4 = document.createElement("li");
    l4.innerText = "BB & CC Creams";
    let l5 = document.createElement("li");
    l5.innerText = "Concealer";
    let l6 = document.createElement("li");
    l6.innerText = "Face Primer";
    let l7 = document.createElement("li");
    l7.innerText = "Setting Spray & Powder";
    let l8 = document.createElement("li");
    l8.innerText = "Highliter";
    l.append(l1, l2, l3, l4, l5, l6, l7, l8);
    div.append(l);

    let div2 = document.createElement("div");
    div2.style.border = "0px solid grey";
    div2.style.padding = "20px";

    let m = document.createElement("ul");
    m.style.listStyleType = "none";
    m.style.margin = 0;
    m.style.padding = 0;

    m.style.lineHeight = "40px";
    let m1 = document.createElement("li");
    m1.innerText = "Eye";
    m1.style.fontWeight = "bold";
    let m2 = document.createElement("li");
    m2.innerText = "Eye Palettes";
    let m3 = document.createElement("li");
    m3.innerText = "Mascara";
    let m4 = document.createElement("li");
    m4.innerText = "Eyeliner";
    let m5 = document.createElement("li");
    m5.innerText = "Eyebrow";
    let m6 = document.createElement("li");
    m6.innerText = "False Eyelashes";
    let m7 = document.createElement("li");
    m7.innerText = "Eyeshadow";
    let m8 = document.createElement("li");
    m8.innerText = "Eyelash Serums";
    let m9 = document.createElement("li");
    m9.innerText = "Eyebrow Serums";
    let m10 = document.createElement("li");
    m10.innerText = "Eye Primer";

    m.append(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10);
    div2.append(m);

    let div3 = document.createElement("div");
    div3.style.border = "0px solid grey";
    div3.style.padding = "20px";
    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    // o.style.fontWeight = "bold";
    o.style.lineHeight = "40px";
    let o1 = document.createElement("li");
    o1.innerText = "Lip";
    o1.style.fontWeight = "bold";
    let o2 = document.createElement("li");
    o2.innerText = "Lipstick";
    let o3 = document.createElement("li");
    o3.innerText = "Lip Gloss";
    let o4 = document.createElement("li");
    o4.innerText = "Lip Balm & Treatment";
    let o5 = document.createElement("li");
    o5.innerText = "Liquid Lipstick";
    let o6 = document.createElement("li");
    o6.innerText = "Lip Stain";
    let o7 = document.createElement("li");
    o7.innerText = "Lip Liner";
    let o8 = document.createElement("li");
    o8.innerText = "Lip Plumper";
    let o9 = document.createElement("li");
    o9.innerText = "Lip Sets";

    o.append(o1, o2, o3, o4, o5, o6, o7, o8, o9);
    div3.append(o);

    let div4 = document.createElement("div");
    div4.style.border = "0px solid grey";
    div4.style.padding = "20px";
    let n = document.createElement("ul");
    n.style.listStyleType = "none";
    n.style.margin = 0;
    n.style.padding = 0;
    // o.style.fontWeight = "bold";
    n.style.lineHeight = "40px";
    let n1 = document.createElement("li");
    n1.innerText = "Cheek";
    n1.style.fontWeight = "bold";
    let n2 = document.createElement("li");
    n2.innerText = "Blush";
    let n3 = document.createElement("li");
    n3.innerText = "Bronzer";
    let n4 = document.createElement("li");
    n4.innerText = "Highliter";
    let n5 = document.createElement("li");
    n5.innerText = "Contour";
    let n6 = document.createElement("li");
    n6.innerText = "Cheek Palettes";

    let a = document.createElement("ul");
    a.style.listStyleType = "none";
    a.style.margin = 0;
    a.style.padding = 0;
    a.style.fontWeight = "bold";
    // o.style.fontWeight = "bold";

    a.style.lineHeight = "40px";
    let a1 = document.createElement("li");
    a1.innerText = "Value & Gift Sets";

    let a2 = document.createElement("li");
    a2.innerText = "Makeup Palettes";
    let a3 = document.createElement("li");
    a3.innerText = "Brushes & Application";
    let a4 = document.createElement("li");
    a4.innerText = "Accessories";
    let a5 = document.createElement("li");
    a5.innerText = "Nail";
    a.append(a1, a2, a3, a4, a5);

    n.append(n1, n2, n3, n4, n5, n6, a);
    div4.append(n);

    let div5 = document.createElement("div");
    div5.style.border = "0px solid grey";
    div5.style.padding = "20px";
    let k = document.createElement("ul");
    k.style.listStyleType = "none";
    k.style.margin = 0;
    k.style.padding = 0;
    k.style.fontWeight = "bold";
    // o.style.fontWeight = "bold";
    k.style.lineHeight = "40px";
    let k1 = document.createElement("li");
    k1.innerText = "Bestsellers";
    k1.style.fontWeight = "bold";
    let k2 = document.createElement("li");
    k2.innerText = "Clean Makeup";
    let k3 = document.createElement("li");
    k3.innerText = "Vegan Makeup";
    let k4 = document.createElement("li");
    k4.innerText = "Mini Size";
    let k5 = document.createElement("li");
    k5.innerText = "Value Size";

    k.append(k1, k2, k3, k4, k5);
    div5.append(k);

    let div6 = document.createElement("div");
    div6.style.border = "0px solid grey";
    div6.style.padding = "20px";
    let b = document.createElement("ul");
    b.style.listStyleType = "none";
    b.style.margin = 0;
    b.style.padding = 0;

    // o.style.fontWeight = "bold";
    b.style.lineHeight = "40px";
    let b1 = document.createElement("li");
    b1.innerText = "Help me Choose";
    b1.style.fontWeight = "bold";
    let b2 = document.createElement("li");
    b2.innerText = "Foundation Quiz";
    let b3 = document.createElement("li");
    b3.innerText = "Lip Quiz";
    let b4 = document.createElement("li");
    b4.innerText = "Brow Quiz";
    let b5 = document.createElement("li");
    b5.innerText = "Complexion Routine Builder";

    let b6 = document.createElement("li");
    b6.innerText = "Guide to Foundations";
    let b7 = document.createElement("li");
    b7.innerText = "Clean Makeup Guide";

    let b8 = document.createElement("li");
    b8.innerText = "No Makeup Guide";

    b.append(b1, b2, b3, b4, b5, b6, b7, b8);
    div6.append(b);

    document
      .querySelector("#contentdd")
      .append(div, div2, div3, div4, div5, div6);
    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown7").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
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

    let div3 = document.createElement("div");
    div3.style.padding = "20px";
    div3.style.border = "0px solid red";
    let n = document.createElement("ul");
    n.style.listStyleType = "none";
    n.style.margin = 0;
    n.style.padding = 0;
    n.style.fontWeight = "bold";
    n.style.lineHeight = "50px";
    let n1 = document.createElement("li");
    n1.innerText = "All New";
    let n2 = document.createElement("li");
    n2.innerText = "Just Dropped";
    let n3 = document.createElement("li");
    n3.innerText = "New Makeup";
    let n4 = document.createElement("li");
    n4.innerText = "New Skincare";
    let n5 = document.createElement("li");
    n5.innerText = "New Haircare";
    let n6 = document.createElement("li");
    n6.innerText = "New Fragrance";
    n.append(n1, n2, n3, n4, n5, n6);
    div3.append(n);

    let div4 = document.createElement("div");
    div4.style.border = "0px solid red";
    div4.style.padding = "20px";

    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    o.style.fontWeight = "bold";
    o.style.lineHeight = "50px";
    let o1 = document.createElement("li");
    o1.innerText = "The Next Big Thing";
    let o2 = document.createElement("li");
    o2.innerText = "Bestsellers";
    let o3 = document.createElement("li");
    o3.innerText = "Quizzes & Buying Guides";
    let o4 = document.createElement("li");
    o4.innerText = "Clean Beauty Guide";
    let o5 = document.createElement("li");
    o5.innerText = "Clean + Planet Positive Beauty Guide";

    o.append(o1, o2, o3, o4, o5);
    div4.append(o);

    let img1 = document.createElement("img");
    img1.src =
      "https://www.sephora.com/contentimages/meganav/large/2022-04-29-sc-site-desktop-global-navigation-button-tools-brushes.jpg?imwidth=588";
    img1.style.width = "60vh";
    img1.style.height = "60vh";
    img1.style.margin = "auto";

    document.querySelector("#contentdd").append(div, div2, div3, div4, img1);
    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown8").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
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

    let div3 = document.createElement("div");
    div3.style.padding = "20px";
    div3.style.border = "0px solid red";
    let n = document.createElement("ul");
    n.style.listStyleType = "none";
    n.style.margin = 0;
    n.style.padding = 0;
    n.style.fontWeight = "bold";
    n.style.lineHeight = "50px";
    let n1 = document.createElement("li");
    n1.innerText = "All New";
    let n2 = document.createElement("li");
    n2.innerText = "Just Dropped";
    let n3 = document.createElement("li");
    n3.innerText = "New Makeup";
    let n4 = document.createElement("li");
    n4.innerText = "New Skincare";
    let n5 = document.createElement("li");
    n5.innerText = "New Haircare";
    let n6 = document.createElement("li");
    n6.innerText = "New Fragrance";
    n.append(n1, n2, n3, n4, n5, n6);
    div3.append(n);

    let div4 = document.createElement("div");
    div4.style.border = "0px solid red";
    div4.style.padding = "20px";

    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    o.style.fontWeight = "bold";
    o.style.lineHeight = "50px";
    let o1 = document.createElement("li");
    o1.innerText = "The Next Big Thing";
    let o2 = document.createElement("li");
    o2.innerText = "Bestsellers";
    let o3 = document.createElement("li");
    o3.innerText = "Quizzes & Buying Guides";
    let o4 = document.createElement("li");
    o4.innerText = "Clean Beauty Guide";
    let o5 = document.createElement("li");
    o5.innerText = "Clean + Planet Positive Beauty Guide";

    o.append(o1, o2, o3, o4, o5);
    div4.append(o);

    let img1 = document.createElement("img");
    img1.src =
      "https://www.sephora.com/contentimages/meganav/large/2020-9-14-site-desktop-global-navigation-button-banner-sol-de-janeiro.jpg?imwidth=588";
    img1.style.width = "60vh";
    img1.style.height = "60vh";
    img1.style.margin = "auto";

    document.querySelector("#contentdd").append(div2, div, div4, div3, img1);
    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown9").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
    document.querySelector("#contentdd").innerHTML = "";
    document.querySelector("#contentdd").style.display = "flex";
    //write the code here
    let div1 = document.createElement("div");
    div1.style.padding = "20px";
    div1.style.border = "0px solid red";
    let a = document.createElement("ul");
    a.style.margin = 0;
    a.style.padding = 0;
    a.style.lineHeight = "50px";
    a.style.fontWeight = "bold";
    a.style.listStyleType = "none";
    let a1 = document.createElement("li");
    a1.innerText = "All Mini Size";
    let a2 = document.createElement("li");
    a2.innerText = "Makeup";
    let a3 = document.createElement("li");
    a3.innerText = "Skincare";
    let a4 = document.createElement("li");
    a4.innerText = "Hair";
    let a5 = document.createElement("li");
    a5.innerText = "Fragrance";
    let a6 = document.createElement("li");
    a6.innerText = "Bath & Body";

    a.append(a1, a2, a3, a4, a5, a6);
    div1.append(a);

    let div2 = document.createElement("div");
    div2.style.padding = "20px";
    div2.style.border = "0px solid red";
    let b = document.createElement("ul");
    b.style.margin = "0";
    b.style.padding = "0";
    b.style.listStyleType = "none";
    b.style.lineHeight = "50px";
    b.style.fontWeight = "bold";
    let b1 = document.createElement("li");
    b1.innerText = "Value & Gift Sets";
    let b2 = document.createElement("li");
    b2.innerText = "$15 and Under";
    let b3 = document.createElement("li");
    b3.innerText = "$25 and Under";
    let b4 = document.createElement("li");
    b4.innerText = "Sephora Favorites";

    b.append(b1, b2, b3, b4);
    div2.append(b);

    let img1 = document.createElement("img");
    img1.src =
      "https://www.sephora.com/contentimages/meganav/large/2020-07-29-site-global-navigation-button-evergreen-crossworld-minis.jpg?imwidth=588";
    img1.style.width = "50vh";

    img1.style.height = "50vh";
    img1.style.margin = "auto";
    let img2 = document.createElement("img");
    img2.src =
      "https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=588";
    img2.style.width = "50vh";

    img2.style.height = "50vh";
    img2.style.margin = "auto";
    document.querySelector("#contentdd").append(div1, div2, img1, img2);

    // document.querySelector("#contentdd").append(div2);

    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown10").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
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

    let div3 = document.createElement("div");
    div3.style.padding = "20px";
    div3.style.border = "0px solid red";
    let n = document.createElement("ul");
    n.style.listStyleType = "none";
    n.style.margin = 0;
    n.style.padding = 0;
    n.style.fontWeight = "bold";
    n.style.lineHeight = "50px";
    let n1 = document.createElement("li");
    n1.innerText = "All New";
    let n2 = document.createElement("li");
    n2.innerText = "Just Dropped";
    let n3 = document.createElement("li");
    n3.innerText = "New Makeup";
    let n4 = document.createElement("li");
    n4.innerText = "New Skincare";
    let n5 = document.createElement("li");
    n5.innerText = "New Haircare";
    let n6 = document.createElement("li");
    n6.innerText = "New Fragrance";
    n.append(n1, n2, n3, n4, n5, n6);
    div3.append(n);

    let div4 = document.createElement("div");
    div4.style.border = "0px solid red";
    div4.style.padding = "20px";

    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    o.style.fontWeight = "bold";
    o.style.lineHeight = "50px";
    let o1 = document.createElement("li");
    o1.innerText = "The Next Big Thing";
    let o2 = document.createElement("li");
    o2.innerText = "Bestsellers";
    let o3 = document.createElement("li");
    o3.innerText = "Quizzes & Buying Guides";
    let o4 = document.createElement("li");
    o4.innerText = "Clean Beauty Guide";
    let o5 = document.createElement("li");
    o5.innerText = "Clean + Planet Positive Beauty Guide";

    o.append(o1, o2, o3, o4, o5);
    div4.append(o);

    let img1 = document.createElement("img");
    img1.src =
      "https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-gift-card.jpg?imwidth=588";
    img1.style.width = "60vh";
    img1.style.height = "60vh";
    img1.style.margin = "auto";

    document.querySelector("#contentdd").append(div2, div, div4, div3, img1);
    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown11").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
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

    let div3 = document.createElement("div");
    div3.style.padding = "20px";
    div3.style.border = "0px solid red";
    let n = document.createElement("ul");
    n.style.listStyleType = "none";
    n.style.margin = 0;
    n.style.padding = 0;
    n.style.fontWeight = "bold";
    n.style.lineHeight = "50px";
    let n1 = document.createElement("li");
    n1.innerText = "All New";
    let n2 = document.createElement("li");
    n2.innerText = "Just Dropped";
    let n3 = document.createElement("li");
    n3.innerText = "New Makeup";
    let n4 = document.createElement("li");
    n4.innerText = "New Skincare";
    let n5 = document.createElement("li");
    n5.innerText = "New Haircare";
    let n6 = document.createElement("li");
    n6.innerText = "New Fragrance";
    n.append(n1, n2, n3, n4, n5, n6);
    div3.append(n);

    let div4 = document.createElement("div");
    div4.style.border = "0px solid red";
    div4.style.padding = "20px";

    let o = document.createElement("ul");
    o.style.listStyleType = "none";
    o.style.margin = 0;
    o.style.padding = 0;
    o.style.fontWeight = "bold";
    o.style.lineHeight = "50px";
    let o1 = document.createElement("li");
    o1.innerText = "The Next Big Thing";
    let o2 = document.createElement("li");
    o2.innerText = "Bestsellers";
    let o3 = document.createElement("li");
    o3.innerText = "Quizzes & Buying Guides";
    let o4 = document.createElement("li");
    o4.innerText = "Clean Beauty Guide";
    let o5 = document.createElement("li");
    o5.innerText = "Clean + Planet Positive Beauty Guide";

    o.append(o1, o2, o3, o4, o5);
    div4.append(o);

    let img1 = document.createElement("img");
    img1.src =
      "https://www.sephora.com/contentimages/meganav/large/2022-07-08-sc-bse-concealer-site-desktop-global-navigation-button-beauty-under-20.jpg?imwidth=588";
    img1.style.width = "60vh";
    img1.style.height = "60vh";
    img1.style.margin = "auto";

    document.querySelector("#contentdd").append(div, div2, div3, div4, img1);
    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

document.querySelector("#dropdown12").addEventListener("mouseover", () => {
  if (localStorage.getItem("dd") == 0) {
    document.querySelector("#contentdd").style.display = "block";
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
      "https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=588";
    img1.style.width = "50vh";
    img1.style.height = "50vh";
    img1.style.margin = "auto";

    let img2 = document.createElement("img");
    img2.src =
      "https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-beauty-offers-abundance.jpg?imwidth=588";
    img2.style.width = "50vh";
    img2.style.height = "50vh";
    img2.style.margin = "auto";

    document.querySelector("#contentdd").append(div, div2, img1, img2);

    localStorage.setItem("dd", 0);
  } else {
    document.querySelector("#contentdd").style.display = "none";
    localStorage.setItem("dd", 0);
  }
});

localStorage.setItem("dd2", 0);
document
  .querySelector("#mainbar>ul>li+li")
  .addEventListener("mouseover", () => {
    if (localStorage.getItem("dd2") == 0) {
    }
    document.querySelector("#community").style.display = "none";
  });

document
  .querySelector("#beautyinsiderr .swiper-slide>button")
  .addEventListener("click", function () {
    sitogglePopup();
  });
