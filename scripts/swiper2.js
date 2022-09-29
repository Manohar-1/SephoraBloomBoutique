let data = [
  {
    img_url:
      "https://www.sephora.com/productimages/sku/s2362168-main-zoom.jpg?imwidth=320",
    name: "Rare Beauty By Selena Gomez",
    description: "Positive Light Liquid Luminizer Highlight",
  },
  {
    img_url:
      "https://www.sephora.com/productimages/sku/s2366524-main-zoom.jpg?imwidth=320",
    name: "Charlotte Tilbury",
    description: "Beauty Highliter Wand",
  },
  {
    img_url:
      "https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320",
    name: "Kosas",
    description: "Revealer Super Creamy Brightening",
  },
  {
    img_url:
      "https://www.sephora.com/productimages/sku/s2418663-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=320",
    name: "Rare Beauty by Selena Gomez",
    description: "Stay Vulnerable Melting Cream Blush",
  },
  {
    img_url:
      "https://www.sephora.com/productimages/sku/s2362028-main-zoom.jpg?imwidth=320",
    name: "Rare Beauty by Selena Gomez",
    description: "Liquid Touch Brightening Concealer",
  },
  {
    img_url:
      "https://www.sephora.com/productimages/sku/s2597342-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
    name: "HAUS LABS BY LADY GAGA",
    description: "Triclone Skin Tech Medium Coverage",
  },
  {
    img_url:
      "https://www.sephora.com/productimages/sku/s1966258-main-zoom.jpg?pb=2020-03-allure-best-2019&imwidth=320",
    name: "Charlotte Tilbury",
    description: "Mini Hollywood Flawless Filter",
  },
];

let section = document.createElement("section");
section.className = "slider_container";

let cont = document.createElement("div");
cont.className = "container";

let scs = document.createElement("div");
scs.className = "swiper card_newthing";

let sw = document.createElement("div");
sw.className = "swiper-wrapper";

let nextsw = document.createElement("div");
nextsw.className = "swiper-button-next";

let prevsw = document.createElement("div");
prevsw.className = "swiper-button-prev";

data.forEach(({ img_url, name, description }) => {
  let ss = document.createElement("div");
  ss.className = "swiper-slide";

  let ib = document.createElement("div");
  ib.className = "img_box";
  ib.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
  ib.style.padding = "20px";
  ib.style.height = "45vh";
  ib.style.marginBottom = "50px";

  let img = document.createElement("img");
  img.src = img_url;
  img.style.width = "100%";
  img.style.height = "20vh";

  let h2tag = document.createElement("h2");
  h2tag.innerText = name;
  h2tag.style.fontSize = "17px";

  let desc = document.createElement("p");
  desc.innerText = description;

  ib.append(img, h2tag, desc);
  ss.append(ib);

  sw.append(ss);
});
scs.append(sw, nextsw, prevsw);
cont.append(scs);
section.append(cont);

console.log(section);
document.querySelector("#swiper2>#swiper2_container").append(section);
