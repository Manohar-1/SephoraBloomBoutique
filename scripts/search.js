document.querySelector("#seeDetailsText").addEventListener("click", function () {
    document.getElementById("popup-1").classList.toggle("active");
    console.log("hello")
  });
  document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("popup-1").classList.toggle("active");
  });

//   redirecting to cart and homepage
  document.querySelector("#brandname").addEventListener("click", function () {
    window.location.href="index.html"
  });
  document.querySelector("#goToCartPage").addEventListener("click", function () {
    window.location.href="cart.html"
  });


  document.querySelector("#createAccount").addEventListener("click", () => {
    sitogglePopup();
    sutogglePopup();
  });
  
  document.querySelector("#signInKaButton").addEventListener("click", sitogglePopup,true);
  
  function sitogglePopup() {
    document.getElementById("sipopup-1").classList.toggle("active");
  }
  document.querySelector(".siclose-btn").addEventListener("click", () => {
    document.getElementById("sipopup-1").classList.toggle("active");
    sitogglePopup();
  
  });
  
  document.querySelector("#signIn").addEventListener("click", () => {
    sitogglePopup();
    Login();
    // let name = document.querySelector("#l_password").value;
    // document.querySelector("#details").innerText = `Welcome ${name}...!`;
  });
  
  function sutogglePopup() {
    document.getElementById("supopup-1").classList.toggle("active");
  }
  
  document.querySelector(".suclose-btn").addEventListener("click", () => {
    sutogglePopup();
  
  
  });
  
  document.querySelector("#signUpButton").addEventListener("click", function () {
    sutogglePopup();
    Register();

  },true);
  
  function sitogglePopup() {
    document.getElementById("sipopup-1").classList.toggle("active");
  }
  document.querySelector(".siclose-btn").addEventListener("click", () => {
    document.getElementById("sipopup-1").classList.toggle("active");
  
  
  });


// js for signup and login


class User1{
    constructor() {

    }
    #checkUserName(username) {
        return username.includes("#") ? false : true;
        
    }
    #checkPassword(password) {
        return password.length>8 ? true: false;
        
    }
    async SignUp(n, e, u, p, m, d) {
        let isValidData = this.#checkUserName(u) && this.#checkPassword(p);
        if (isValidData) {
            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = m;
            this.description = d;
            let actual_data = JSON.stringify(this);
            try {
                const register_url = `https://masai-api-mocker.herokuapp.com/auth/register`
                let res = await fetch(register_url, {
                    method: "POST",
                    body: actual_data,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                let data = await res.json();
                console.log("data", data);
                let name=document.getElementById("name").value
                alert(`Dear,${name} your SIgn Up is successfull`);
                sitogglePopup();
            }
            catch (err) {
                console.log("error", err)
            }
        }
    }
}
let u1 = new User1();
function Register() {
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    let mobile=document.getElementById("phnumber").value
    let description = document.getElementById("desc").value
    
    u1.SignUp(name, email, username, password, mobile, description);
}


class User{
    constructor() {

    }
    async Login(u, p) {
        this.username = u;
        this.password = p;
        let actual_data = JSON.stringify(this);
        try {
            const login_url=`https://masai-api-mocker.herokuapp.com/auth/login`;
            let res=await fetch(login_url,{
                method: 'POST',
                body: actual_data,
                headers:{
                    'Content-Type': 'application/json',
                },
            });
            let data = await res.json();
            // console.log("data", data)
            let token = data.token;
            getProfile(this.username,token)

        }
        catch (err) {
            console.log("error", err)
        }
    }
}


let u = new User();
function Login() {
    let username=document.getElementById("l_username").value
    let password=document.getElementById("l_password").value
    u.Login(username, password);
}



let lsUserName=JSON.parse(localStorage.getItem("username"));
let signInKaButtonKaText=document.getElementById("signInKaButtonKaText")
let signInText=document.getElementById("signInText")
let randomname
async function getProfile(username, token) {
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;
    let res = await fetch(api, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    let data = await res.json();
    console.log(data);
    randomname=data.name
    alert(`Dear,${data.name} your login is successfull`)
    // window.location.href="index.html"
    localStorage.setItem("username",JSON.stringify(data.name))
    signInKaButtonKaText.innerText=randomname
    signInText.innerText=""

}
if(lsUserName!=undefined || ""){
    signInKaButtonKaText.innerText=lsUserName
}
if(signInKaButtonKaText.innerText!="Sign In"){
    signInText.innerText=""
  document.querySelector("#signInKaButton").removeEventListener("click", sitogglePopup,true);

}

if(signInKaButtonKaText.innerText=="Sign In"){
    setTimeout(() => {
        sitogglePopup();
    }, 10000);
}
const dropdown=document.querySelectorAll(".dropdown");

dropdown.forEach((dropdown)=>{

dropdown.addEventListener("click",()=>{

     dropdown.classList.toggle("active")

    })
})

let input = document.getElementById("searchBox").addEventListener("input", function () {
    let searchBox=document.getElementById("searchBox").value
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchBox}`
    debounce(searchVideos,url)
})

staticData=document.getElementById("pTag0").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=alva`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag1").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=annabelle`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag2").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag3").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=cargo cosmetics`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag4").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=colourpop`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag5").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=cover girl`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag6").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=l'oreal`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag7").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=lotus cosmetics usa`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag8").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag9").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=rejuva minerals`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag10").addEventListener("click", function () {
    let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=wet n wild`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Blush`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Bronzer`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyebrow`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyeliner`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Eyeshadow`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Foundation`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lip liner`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Lipstick`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Mascara`
    debounce(searchVideos,url)
})
staticData=document.getElementById("pTag11").addEventListener("click", function () {
    let url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Nail polish`
    debounce(searchVideos,url)
})



let id;

function debounce(searchVideos,url){
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(() => {
       
        searchVideos(url)
    },1000)
}

let searchVideos =async (url) => {
    try {
            let container=document.getElementById("container")
            container.innerHTML=null
            let newloaderImage=document.createElement("img")
            newloaderImage.src="https://i.gifer.com/origin/bf/bf0e10f1d5cd0f286f59b37cd0958fb7_w200.gif"
            newloaderImage.id="loader"
            container.append(newloaderImage)
            let res = await fetch(url)
            console.log(res)
            let data = await res.json();
            appendData(data);
            console.log(data.length)
            localStorage.setItem('product', JSON.stringify(data));

            let filter=document.querySelector("#filter");
            document.querySelector("#filter").addEventListener("click", function(el){
                el.preventDefault();
                let data=JSON.parse(localStorage.getItem("product"));
                if(filter.value=="Sort-Ih"){
                    console.log("filterlow");
                    let Sortinglow=data.sort(function(a,b){
                        if (a.price>b.price) return 1;
                        if(a.price<b.price) return -1;
                        return 0;
                    });
                    appendData(Sortinglow);
                    
                }
                if(filter.value=="High"){    
                    let SortingHigh=data.sort(function(a,b){
                        if (a.price>b.price) return -1;
                        if(a.price<b.price) return 1;
                        return 0;
                    });
                    appendData(SortingHigh);
                }
            });
        }  catch(err){
        console.log("error",err)
    }
}
let productArray=JSON.parse(localStorage.getItem("cartItems"))||[];
let sum=0
let x=JSON.parse(localStorage.getItem("cartQuantiy"));
let toShowCartQuentity=document.getElementById("toShowCartQuentity")
if(x>sum){
    sum=x
}


let appendData = (data) => {
    if (data.length==0){
            // console.log("data is empty")
            let nodataImage=document.createElement("img")
            nodataImage.src="https://media.tenor.com/V9Z08mOcTJwAAAAC/this-content-is-not-available.gif"
            nodataImage.id="nodataImage"
            let container=document.getElementById("container")
            container.innerHTML=null
            container.append(nodataImage)

            let SearchResults=document.getElementById("SearchResults")
            SearchResults.innerText=""
            let makeup=document.getElementById("makeup")
            makeup.innerText=""
            let gift=document.getElementById("gift")
            gift.innerText=""
            let Clean=document.getElementById("Clean")
            Clean.innerText=""
            let skincare=document.getElementById("skincare")
            skincare.innerText=""
            let MiniSize=document.getElementById("MiniSize")
            MiniSize.innerText=""

            let ActiveDiv=document.getElementById("ActiveDiv")
            ActiveDiv.style.display="none"
    }else{

        let productLength=document.getElementById("productLength")
        productLength.innerText=` ${data.length} Search Results `

        let ActiveDiv=document.getElementById("ActiveDiv")
        ActiveDiv.style.display="flex"

        let container=document.getElementById("container")
        container.innerHTML=null
        container.id="container"
    
        data.map((el)=>{
            if(el.price!=0.0||0){
                let box = document.createElement("div");
                box.style.boxShadow = " rgba(0, 0, 0, 0.24) 0px 3px 8px";
                box.style.padding = "20px";
                box.style.textAlign = "center";

            let img= document.createElement("img")
            img.src =el.image_link;
            img.style.height = "25vh";
            img.style.height = "30vh";
            img.style.border = "1px solid black";

            let Brnad= document.createElement("h3")
            Brnad.innerText = el.brand;
            Brnad.style.textAlign = "center";
       
            let pdiv = document.createElement("div");
            let productName= document.createElement("p")
            productName.innerText = el.name;
            productName.style.textAlign = "center";
            productName.setAttribute("class","productName")
            pdiv.append(productName);
            pdiv.style.display = "flex";
            pdiv.style.margin = "auto";
            pdiv.style.height = "80px";
            pdiv.style.width = "100%";
        // pdiv.style.border = "1px solid black";
            pdiv.style.boxShadow ="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
            pdiv.style.justifyContent = "center";
            pdiv.style.alignItems = "center";
            pdiv.style.margin = "auto";
            pdiv.style.height = "80px";
            pdiv.style.width = "120px";
            pdiv.style.border = "0px solid red";

            let color= document.createElement("p")
            let x=el.product_colors.length
            if(x==0){
                x=1
            }
            color.innerText = x+" colors"
            color.style.color="grey"
            color.style.fontSize="11px"

            let price= document.createElement("h3")
            price.innerText ="$ "+el.price
            price.setAttribute("class","priceTag")
            price.style.textAlign = "center";

            let button =document.createElement("button")
            button.innerText="Add To Cart";
            button.style.fontSize="10px";
            button.style.cursor="pointer";
            button.setAttribute("class","addToCartButton")
            button.addEventListener("click",function(){
                toShowCartQuentity.style.display="flex" 
                productArray.push(el)
                localStorage.setItem("cartItems",JSON.stringify(productArray))
                localStorage.setItem("cartQuantiy",JSON.stringify(sum++))
                toShowCartQuentity.innerText=sum;
            })

            box.append(img,Brnad,pdiv,color,price,button);
            container.append(box)

            let SearchResults=document.getElementById("SearchResults")
            SearchResults.innerText=`Search Results`
            let makeup=document.getElementById("makeup")
            makeup.innerText=`Makeup (${Math.floor((Math.random(100))*200)})`
            let gift=document.getElementById("gift")
            gift.innerText=`Gifts (${Math.floor((Math.random(100))*10)})`
            let Clean=document.getElementById("Clean")
            Clean.innerText=`Clean at Sephora (${Math.floor((Math.random(100))*10)})`
            let skincare=document.getElementById("skincare")
            skincare.innerText=`Skincare (${Math.floor((Math.random(100))*5)})`
            let MiniSize=document.getElementById("MiniSize")
            MiniSize.innerText=`Mini Size (${Math.floor((Math.random(100))*2)})`
            }
        })
    }
}

toShowCartQuentity.innerText=sum;
if(toShowCartQuentity.innerText!=0){
    toShowCartQuentity.style.display="flex"
}else{
    toShowCartQuentity.style.display="none"
}














// manohar code
