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




// for scrolling products

document.querySelector('#p1').addEventListener('click',() => {
    let obj1={
        "image":"images/c11.png",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"295.00",

    }
    console.log(obj1);
    localStorage.setItem('products',JSON.stringify(obj1))
    window.location.href='product.html';
})

document.querySelector('#p2').addEventListener('click',() => {
    let obj2={
        "image":"images/c12.png",
        "title":"Augustinus Bader The Cream 15ml",
        "price":"85.00",

    }
    console.log(obj2);
    localStorage.setItem('products',JSON.stringify(obj2))
    window.location.href='product.html';
})

document.querySelector('#p3').addEventListener('click',() => {
    let obj3={
        "image":"images/c13.png",
        "title":"Sunday RileyAll-In-One Lactic Acid Treatment",
        "price":"375.00",

    }
    console.log(obj3);
    localStorage.setItem('products',JSON.stringify(obj3))
    window.location.href='product.html';
})

document.querySelector('#p4').addEventListener('click',() => {
    let obj4={
        "image":"images/c14.png",
        "title":"Best of Dermstore Refresh",
        "price":"39.00",

    }
    console.log(obj4);
    localStorage.setItem('products',JSON.stringify(obj4))
    window.location.href='product.html';
})

document.querySelector('#p5').addEventListener('click',() => {
    let obj5={
        "image":"images/c15.png",
        "title":"SkinMedica TNS Advanced+Serum",
        "price":"375.00",

    }
    console.log(obj5);
    localStorage.setItem('products',JSON.stringify(obj5))
    window.location.href='product.html';
})

document.querySelector('#p6').addEventListener('click',() => {
    let obj6={
        "image":"images/c16.png",
        "title":"Augustinus Bader The Cream 15ml",
        "price":"499.00",

    }
    console.log(obj6);
    localStorage.setItem('products',JSON.stringify(obj6))
    window.location.href='product.html';
})

document.querySelector('#p7').addEventListener('click',() => {
    let obj7={
        "image":"images/c17.png",
        "title":"Best of Dermstore Refresh",
        "price":"127.00",

    }
    console.log(obj7);
    localStorage.setItem('products',JSON.stringify(obj7))
    window.location.href='product.html';
})

document.querySelector('#p8').addEventListener('click',() => {
    let obj8={
        "image":"images/c18.png",
        "title":"SkinMedica TNS Advanced+Serum",
        "price":"295.00",

    }
    console.log(obj8);
    localStorage.setItem('products',JSON.stringify(obj8))
    window.location.href='product.html';
})

document.querySelector('#p9').addEventListener('click',() => {
    let obj9={
        "image":"images/c19.png",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"129.00",

    }
    console.log(obj9);
    localStorage.setItem('products',JSON.stringify(obj9))
    window.location.href='product.html';
})

document.querySelector('#p10').addEventListener('click',() => {
    let obj10={
        "image":"images/c20.png",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"295.00",

    }
    console.log(obj10);
    localStorage.setItem('products',JSON.stringify(obj10))
    window.location.href='product.html';
})



// best sellers product


document.querySelector('#p11').addEventListener('click',() => {
    let obj11={
        "image":"images/c1.jpg",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"295.00",

    }
    console.log(obj11);
    localStorage.setItem('products',JSON.stringify(obj11))
    window.location.href='product.html';
})

document.querySelector('#p12').addEventListener('click',() => {
    let obj12={
        "image":"images/c2.jpg",
        "title":"Augustinus Bader The Cream 15ml",
        "price":"85.00",

    }
    console.log(obj12);
    localStorage.setItem('products',JSON.stringify(obj12))
    window.location.href='product.html';
})

document.querySelector('#p13').addEventListener('click',() => {
    let obj13={
        "image":"images/c3.jpg",
        "title":"Sunday RileyAll-In-One Lactic Acid Treatment",
        "price":"375.00",

    }
    console.log(obj13);
    localStorage.setItem('products',JSON.stringify(obj13))
    window.location.href='product.html';
})

document.querySelector('#p14').addEventListener('click',() => {
    let obj14={
        "image":"images/c4.jpg",
        "title":"Best of Dermstore Refresh",
        "price":"39.00",

    }
    console.log(obj14);
    localStorage.setItem('products',JSON.stringify(obj14))
    window.location.href='product.html';
})

document.querySelector('#p15').addEventListener('click',() => {
    let obj15={
        "image":"images/c5.jpg",
        "title":"SkinMedica TNS Advanced+Serum",
        "price":"375.00",

    }
    console.log(obj15);
    localStorage.setItem('products',JSON.stringify(obj15))
    window.location.href='product.html';
})

document.querySelector('#p16').addEventListener('click',() => {
    let obj16={
        "image":"images/c6.jpg",
        "title":"Augustinus Bader The Cream 15ml",
        "price":"499.00",

    }
    console.log(obj16);
    localStorage.setItem('products',JSON.stringify(obj16))
    window.location.href='product.html';
})

document.querySelector('#p17').addEventListener('click',() => {
    let obj17={
        "image":"images/c7.jpg",
        "title":"Best of Dermstore Refresh",
        "price":"127.00",

    }
    console.log(obj17);
    localStorage.setItem('products',JSON.stringify(obj17))
    window.location.href='product.html';
})

document.querySelector('#p18').addEventListener('click',() => {
    let obj18={
        "image":"images/c8.jpg",
        "title":"SkinMedica TNS Advanced+Serum",
        "price":"295.00",

    }
    console.log(obj18);
    localStorage.setItem('products',JSON.stringify(obj18))
    window.location.href='product.html';
})

document.querySelector('#p19').addEventListener('click',() => {
    let obj19={
        "image":"images/c9.jpg",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"129.00",

    }
    console.log(obj19);
    localStorage.setItem('products',JSON.stringify(obj19))
    window.location.href='product.html';
})

document.querySelector('#p20').addEventListener('click',() => {
    let obj20={
        "image":"images/c10.jpg",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"295.00",

    }
    console.log(obj20);
    localStorage.setItem('products',JSON.stringify(obj20))
    window.location.href='product.html';
})

// Buy one get one free scroll


document.querySelector('#p21').addEventListener('click',() => {
    let obj21={
        "image":"images/c21.png",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"295.00",

    }
    console.log(obj21);
    localStorage.setItem('products',JSON.stringify(obj21))
    window.location.href='product.html';
})

document.querySelector('#p22').addEventListener('click',() => {
    let obj22={
        "image":"images/c22.png",
        "title":"Augustinus Bader The Cream 15ml",
        "price":"85.00",

    }
    console.log(obj22);
    localStorage.setItem('products',JSON.stringify(obj22))
    window.location.href='product.html';
})

document.querySelector('#p23').addEventListener('click',() => {
    let obj23={
        "image":"images/c23.png",
        "title":"Sunday RileyAll-In-One Lactic Acid Treatment",
        "price":"375.00",

    }
    console.log(obj23);
    localStorage.setItem('products',JSON.stringify(obj23))
    window.location.href='product.html';
})

document.querySelector('#p24').addEventListener('click',() => {
    let obj24={
        "image":"images/c24.png",
        "title":"Best of Dermstore Refresh",
        "price":"39.00",

    }
    console.log(obj24);
    localStorage.setItem('products',JSON.stringify(obj24))
    window.location.href='product.html';
})

document.querySelector('#p25').addEventListener('click',() => {
    let obj25={
        "image":"images/c25.png",
        "title":"SkinMedica TNS Advanced+Serum",
        "price":"375.00",

    }
    console.log(obj25);
    localStorage.setItem('products',JSON.stringify(obj25))
    window.location.href='product.html';
})

document.querySelector('#p26').addEventListener('click',() => {
    let obj26={
        "image":"images/c26.png",
        "title":"Augustinus Bader The Cream 15ml",
        "price":"499.00",

    }
    console.log(obj26);
    localStorage.setItem('products',JSON.stringify(obj26))
    window.location.href='product.html';
})

document.querySelector('#p27').addEventListener('click',() => {
    let obj27={
        "image":"images/c27.png",
        "title":"Best of Dermstore Refresh",
        "price":"127.00",

    }
    console.log(obj27);
    localStorage.setItem('products',JSON.stringify(obj27))
    window.location.href='product.html';
})

document.querySelector('#p28').addEventListener('click',() => {
    let obj28={
        "image":"images/c28.png",
        "title":"SkinMedica TNS Advanced+Serum",
        "price":"295.00",

    }
    console.log(obj28);
    localStorage.setItem('products',JSON.stringify(obj28))
    window.location.href='product.html';
})

document.querySelector('#p29').addEventListener('click',() => {
    let obj29={
        "image":"images/c29.png",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"129.00",

    }
    console.log(obj29);
    localStorage.setItem('products',JSON.stringify(obj29))
    window.location.href='product.html';
})

document.querySelector('#p30').addEventListener('click',() => {
    let obj30={
        "image":"images/c30.png",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"295.00",

    }
    console.log(obj30);
    localStorage.setItem('products',JSON.stringify(obj30))
    window.location.href='product.html';
})



// new Arrivals

document.querySelector('#p31').addEventListener('click',() => {
    let obj31={
        "image":"images/c1.jpg",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"295.00",

    }
    console.log(obj31);
    localStorage.setItem('products',JSON.stringify(obj31))
    window.location.href='product.html';
})

document.querySelector('#p32').addEventListener('click',() => {
    let obj32={
        "image":"images/c2.jpg",
        "title":"Augustinus Bader The Cream 15ml",
        "price":"85.00",

    }
    console.log(obj32);
    localStorage.setItem('products',JSON.stringify(obj32))
    window.location.href='product.html';
})

document.querySelector('#p33').addEventListener('click',() => {
    let obj33={
        "image":"images/c3.jpg",
        "title":"Sunday RileyAll-In-One Lactic Acid Treatment",
        "price":"375.00",

    }
    console.log(obj33);
    localStorage.setItem('products',JSON.stringify(obj33))
    window.location.href='product.html';
})

document.querySelector('#p34').addEventListener('click',() => {
    let obj34={
        "image":"images/c4.jpg",
        "title":"Best of Dermstore Refresh",
        "price":"39.00",

    }
    console.log(obj34);
    localStorage.setItem('products',JSON.stringify(obj34))
    window.location.href='product.html';
})

document.querySelector('#p35').addEventListener('click',() => {
    let obj35={
        "image":"images/c5.jpg",
        "title":"SkinMedica TNS Advanced+Serum",
        "price":"375.00",

    }
    console.log(obj35);
    localStorage.setItem('products',JSON.stringify(obj35))
    window.location.href='product.html';
})

document.querySelector('#p36').addEventListener('click',() => {
    let obj36={
        "image":"images/c6.jpg",
        "title":"Augustinus Bader The Cream 15ml",
        "price":"499.00",

    }
    console.log(obj36);
    localStorage.setItem('products',JSON.stringify(obj36))
    window.location.href='product.html';
})

document.querySelector('#p37').addEventListener('click',() => {
    let obj37={
        "image":"images/c7.jpg",
        "title":"Best of Dermstore Refresh",
        "price":"127.00",

    }
    console.log(obj37);
    localStorage.setItem('products',JSON.stringify(obj37))
    window.location.href='product.html';
})

document.querySelector('#p38').addEventListener('click',() => {
    let obj38={
        "image":"images/c8.jpg",
        "title":"SkinMedica TNS Advanced+Serum",
        "price":"295.00",

    }
    console.log(obj38);
    localStorage.setItem('products',JSON.stringify(obj38))
    window.location.href='product.html';
})

document.querySelector('#p39').addEventListener('click',() => {
    let obj39={
        "image":"images/c9.jpg",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"129.00",

    }
    console.log(obj39);
    localStorage.setItem('products',JSON.stringify(obj39))
    window.location.href='product.html';
})

document.querySelector('#p40').addEventListener('click',() => {
    let obj40={
        "image":"images/c10.jpg",
        "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
        "price":"295.00",

    }
    console.log(obj40);
    localStorage.setItem('products',JSON.stringify(obj40))
    window.location.href='product.html';
})

let userloggedin = JSON.parse(localStorage.getItem("userloggedin"))||{};
if(Object.keys(userloggedin).length!=0){
    setTimeout(function() { usernameshow(); }, 5000);
    
}
function usernameshow(){
    let username = document.querySelector("#showusername");
    let loginlogout= document.getElementById("loginlogout");
    console.log(username.attributes)
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

