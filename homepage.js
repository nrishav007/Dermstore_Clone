var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// scrolling images

const productContainers = [...document.querySelectorAll('.product1-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn1')];
const preBtn = [...document.querySelectorAll('.pre-btn1')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


const productContainers2 = [...document.querySelectorAll('.product2-container')];
const nxtBtn2 = [...document.querySelectorAll('.nxt-btn2')];
const preBtn2 = [...document.querySelectorAll('.pre-btn2')];

productContainers2.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn2[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
const productContainers1 = [...document.querySelectorAll('.product-container')];
const nxtBtn1 = [...document.querySelectorAll('.nxt-btn')];
const preBtn1 = [...document.querySelectorAll('.pre-btn')];

productContainers1.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn1[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn1[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
let userloggedin = JSON.parse(localStorage.getItem("userloggedin"))||{};
if(Object.keys(userloggedin).length!=0){
usernameshow();

}
function usernameshow(){
    let username = document.querySelector("#showusername");
    let loginlogout= document.getElementById("loginlogout");
    
    let register = document.getElementById("register");
    if(username.style.display=="none"||username.style.display==""){
        username.style.display="block"
    }
    loginlogout.href="#"
    loginlogout.innerHTML="<b style='color: aliceblue;' >Logout</b>"
    register.style.display="none";
    console.log(userloggedin)
    username.innerHTML=userloggedin.name;
    
}
document.querySelector("#loginlogout").addEventListener("click", logoutfun)

function logoutfun(){
    
    if(document.getElementById("loginlogout").innerText=="Login"){
        window.location.href="login.html"
     }
    let loginlogout= document.getElementById("loginlogout");
    
    let register = document.getElementById("register");
    
    register.style.display="block";
    loginlogout.innerHTML="<b style='color: aliceblue;' >Login</b>"
   
   
    document.querySelector("#showusername").style.display="none";
    localStorage.removeItem("userloggedin")



}

    
