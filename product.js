
let productData=JSON.parse(localStorage.getItem('products'))
console.log(productData);

document.getElementById('head-title').innerHTML="Home / "+ productData.title;

let anotherImg=document.createElement('img')
anotherImg.src=productData.image;

document.getElementById('diff1').append(anotherImg);

let img=document.getElementById('pro-pic');
img.src=productData.image;

document.getElementById('pro-title').innerHTML=productData.title;

document.getElementById('pro-price').innerHTML="$" +productData.price;

let quant=1;
document.getElementById('q2').innerHTML=quant;
document.getElementById('q3').addEventListener("click",()=> {
    quant++;
    document.getElementById('q2').innerHTML=quant;
})

document.getElementById('q1').addEventListener("click",()=> {
    quant--;

    if(quant<=1){
        quant=1;
    }
    document.getElementById('q2').innerHTML=quant;
});