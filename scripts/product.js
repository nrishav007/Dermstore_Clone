
let productData = JSON.parse(localStorage.getItem('products'))

document.getElementById('head-title').innerHTML = "Home / " + productData.title;

let anotherImg = document.createElement('img')
anotherImg.src = productData.image;

document.getElementById('diff1').append(anotherImg);

let img = document.getElementById('pro-pic');
img.src = productData.image;

document.getElementById('pro-title').innerHTML = productData.title;

document.getElementById('pro-price').innerHTML = "$" + productData.price;

let quant = 1;
document.getElementById('q2').innerHTML = quant;
document.getElementById('q3').addEventListener("click", () => {
    let d=document.getElementById('q2').innerHTML;
        console.log(d)
    quant++;
    document.getElementById('q2').innerHTML = quant;
})

document.getElementById('q1').addEventListener("click", () => {
    quant--;

    if (quant <= 1) {
        quant = 1;
    }
    document.getElementById('q2').innerHTML = quant;
});

document.getElementById("shop").addEventListener("click", () => {
    window.location.href = "index.html";
    localStorage.removeItem("products");
});

document.getElementById("addm2").addEventListener("click", () => {
    let user = JSON.parse(localStorage.getItem("userloggedin")) || [];
    if (user.length == 0) {
        alert("Please login your account to move further")
        window.location.href = "login.html";
        localStorage.removeItem("products");
    }
    else {
        let carts = JSON.parse(localStorage.getItem("cart")) || [];
        let prod = {
            "image": productData.image,
            "title": productData.title,
            "price": productData.price,
            "quantity": document.getElementById('q2').innerHTML
        }
        carts.push(prod);
        localStorage.setItem("cart",JSON.stringify(carts));
        window.location.href="cart.html";
    }
    
})