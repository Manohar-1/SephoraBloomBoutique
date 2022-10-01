import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

// import footer from "../components/footercomponents.js";
// document.querySelector("footer").innerHTML = footer();

document.querySelector("#logo").addEventListener("click", () => {
  document.location.href = "index.html";
});
document.querySelector("#details").style.marginTop = "10px";
const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
});

let input = document
  .getElementById("searchBox")
  .addEventListener("input", function () {
    let searchBox = document.getElementById("searchBox").value;
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchBox}`;
    debounce(searchVideos, url);
  });

let staticData = document
  .getElementById("pTag0")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=alva`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag1")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=annabelle`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag2")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag3")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=cargo cosmetics`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag4")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=colourpop`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag5")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=cover girl`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag6")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=l'oreal`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag7")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=lotus cosmetics usa`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag8")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag9")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=rejuva minerals`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag10")
  .addEventListener("click", function () {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=wet n wild`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Blush`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Bronzer`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyebrow`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyeliner`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyeshadow`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Foundation`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lip liner`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lipstick`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Mascara`;
    debounce(searchVideos, url);
  });
staticData = document
  .getElementById("pTag11")
  .addEventListener("click", function () {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Nail polish`;
    debounce(searchVideos, url);
  });

let id;

function debounce(searchVideos, url) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    searchVideos(url);
  }, 1000);
}

let searchVideos = async (url) => {
  try {
    let container = document.getElementById("container");
    container.innerHTML = null;
    let newloaderImage = document.createElement("img");
    newloaderImage.src =
      "https://media.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif";
    newloaderImage.id = "loader";
    container.append(newloaderImage);
    let res = await fetch(url);
    console.log(res);
    let data = await res.json();
    appendData(data);
    console.log(data.length);
    localStorage.setItem("product", JSON.stringify(data));

    let filter = document.querySelector("#filter");
    document.querySelector("#filter").addEventListener("click", function (el) {
      el.preventDefault();
      let data = JSON.parse(localStorage.getItem("product"));
      if (filter.value == "Sort-Ih") {
        console.log("filterlow");
        let Sortinglow = data.sort(function (a, b) {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        });
        appendData(Sortinglow);
      }
      if (filter.value == "High") {
        let SortingHigh = data.sort(function (a, b) {
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          return 0;
        });
        appendData(SortingHigh);
      }
    });
  } catch (err) {
    console.log("error", err);
  }
};
let productArray = JSON.parse(localStorage.getItem("cartItems")) || [];
let appendData = (data) => {
  if (data.length == 0) {
    // console.log("data is empty")
    let nodataImage = document.createElement("img");
    nodataImage.src =
      "https://media.tenor.com/V9Z08mOcTJwAAAAC/this-content-is-not-available.gif";
    nodataImage.id = "nodataImage";
    let container = document.getElementById("container");
    container.innerHTML = null;
    container.append(nodataImage);

    let SearchResults = document.getElementById("SearchResults");
    SearchResults.innerText = "";
    let makeup = document.getElementById("makeup");
    makeup.innerText = "";
    let gift = document.getElementById("gift");
    gift.innerText = "";
    let Clean = document.getElementById("Clean");
    Clean.innerText = "";
    let skincare = document.getElementById("skincare");
    skincare.innerText = "";
    let MiniSize = document.getElementById("MiniSize");
    MiniSize.innerText = "";

    let ActiveDiv = document.getElementById("ActiveDiv");
    ActiveDiv.style.display = "none";
  } else {
    let productLength = document.getElementById("productLength");
    productLength.innerText = ` ${data.length} Search Results `;

    let ActiveDiv = document.getElementById("ActiveDiv");
    ActiveDiv.style.display = "flex";

    let container = document.getElementById("container");
    container.innerHTML = null;
    container.id = "container";

    data.map((el) => {
      if (el.price != 0.0 || 0) {
        let box = document.createElement("div");
        box.style.boxShadow = " rgba(0, 0, 0, 0.24) 0px 3px 8px";
        box.style.padding = "20px";
        box.style.textAlign = "center";

        let img = document.createElement("img");
        img.src = el.image_link;
        img.style.height = "25vh";
        img.style.border = "1px solid black";

        let Brnad = document.createElement("h3");
        Brnad.innerText = el.brand;
        Brnad.style.textAlign = "center";

        let pdiv = document.createElement("div");
        let productName = document.createElement("p");
        productName.innerText = el.name;
        productName.style.textAlign = "center";
        productName.setAttribute("class", "productName");
        pdiv.append(productName);
        pdiv.style.display = "flex";
        pdiv.style.margin = "auto";
        pdiv.style.height = "80px";
        pdiv.style.width = "100%";
        // pdiv.style.border = "1px solid black";
        pdiv.style.boxShadow =
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
        pdiv.style.justifyContent = "center";
        pdiv.style.alignItems = "center";

        let color = document.createElement("p");
        let x = el.product_colors.length;
        if (x == 0) {
          x = 1;
        }
        color.innerText = x + " colors";
        color.style.color = "grey";
        color.style.fontSize = "11px";

        let price = document.createElement("h3");
        price.innerText = "$ " + el.price;
        price.setAttribute("class", "priceTag");
        price.style.textAlign = "center";

        let button = document.createElement("button");
        button.innerText = "Add To Cart";
        button.style.fontSize = "10px";
        button.style.cursor = "pointer";
        button.setAttribute("class", "addToCartButton");
        button.addEventListener("click", function () {
          productArray.push(el);
          localStorage.setItem("cartItems", JSON.stringify(productArray));
        });

        box.append(img, Brnad, pdiv, color, price, button);
        container.append(box);

        let SearchResults = document.getElementById("SearchResults");
        SearchResults.innerText = `Search Results`;
        let makeup = document.getElementById("makeup");
        makeup.innerText = `Makeup (${Math.floor(Math.random(100) * 200)})`;
        let gift = document.getElementById("gift");
        gift.innerText = `Gifts (${Math.floor(Math.random(100) * 10)})`;
        let Clean = document.getElementById("Clean");
        Clean.innerText = `Clean at Sephora (${Math.floor(
          Math.random(100) * 10
        )})`;
        let skincare = document.getElementById("skincare");
        skincare.innerText = `Skincare (${Math.floor(Math.random(100) * 5)})`;
        let MiniSize = document.getElementById("MiniSize");
        MiniSize.innerText = `Mini Size (${Math.floor(Math.random(100) * 2)})`;
      }
    });
  }
};
