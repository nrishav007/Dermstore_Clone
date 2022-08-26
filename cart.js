let array = []
let obj1={
    "image":"https://static.thcdn.com/images/medium/webp/widgets/208-us/22/SkinC_Bundles-031222.png",
    "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
    "price":1000,
    "quantity":2

}
array.push(obj1);
let obj2={
    "image":"https://static.thcdn.com/images/medium/webp/widgets/208-us/22/SkinC_Bundles-031222.png",
    "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
    "price":300,
    "quantity":1
    

}
array.push(obj2);
let obj3={
    "image":"https://static.thcdn.com/images/medium/webp/widgets/208-us/22/SkinC_Bundles-031222.png",
    "title":"SkinMedica TNS Advanced+Serum(1 oz.)",
    "price":500,
    "quantity":3

}
array.push(obj3);
localStorage.setItem('cart',JSON.stringify(array))

let cart = JSON.parse(localStorage.getItem('cart'))||[];
let displaydata = document.getElementById("showdata")
let totalprice =document.getElementById("totalprice")
function append(data){
    let count = 0
    let subtotal = 0;
    data.forEach(function(ele,index){
        subtotal += Number(ele.price);

        let div = document.createElement("div") ;
        let div2= document.createElement("div") ;
        let div3= document.createElement("div") ;
        let image = document.createElement("img") ;
            image.src = ele.image;
        let title = document.createElement('p')
        title.textContent = ele.title ;
        let price = document.createElement('p')
        price.textContent = ele.price ;
        let del = document.createElement('button')
        del.textContent = "x"
        del.addEventListener("click",function(i){
            removefunc(ele,index)
        });
        let quantity = document.createElement('h3')
        quantity.textContent = ele.quantity;
       
        let total = document.createElement('h2')
        total.textContent = "$"+ele.price*ele.quantity;
        let hr= document.createElement('hr')
        let add = document.createElement('button')
        add.textContent = "+";
        add.addEventListener('click', function(e) {
          addfunc(ele)
        })
        let sub = document.createElement('button')
        sub.textContent = "-"
        
        div3.append(add,quantity,sub)
        div2.append(image,title)
         div.append(div2,price,div3,total,del)
         displaydata.append(div,hr);

    })
    totalprice.textContent ="$"+subtotal; 
    console.log(total)
}
append(cart)
function removefunc(ele,index) {
    array.splice(index, 1)
    window.location.reload();
  }
 
 
  function addfunc(ele) {
    let count = 0;
   return count + 1;
  }
