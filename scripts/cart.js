
let cart = JSON.parse(localStorage.getItem('cart'))||[];
let displaydata = document.getElementById("showdata");
let totalprice =document.getElementById("totalprice");
const appand=(data)=>{
    let points = 0
    let subtotal = 0;
    displaydata.innerHTML="";
    data.forEach(function(ele,index){
        

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
        del.addEventListener("click",function(){
            removefunc(data,index);
        });
        let quantity = document.createElement('h3')
        quantity.textContent = ele.quantity;
       
        let total = document.createElement('h2')
        total.textContent = "$"+ele.price*ele.quantity;
        subtotal += ele.price*ele.quantity;
        points+=Math.floor(subtotal/50)*250;
        let hr= document.createElement('hr')
        let add = document.createElement('button')
        add.textContent = "+";
        add.addEventListener('click', function() {
          addfunc(data,index)
        });
        let sub = document.createElement('button')
        sub.textContent = "-"
        sub.addEventListener('click', function() {
            subfunc(data,index)
          });
        div3.append(add,quantity,sub)
        div2.append(image,title)
         div.append(div2,price,div3,total,del)
         displaydata.append(div,hr);

    })
    totalprice.textContent ="$"+subtotal; 
    console.log(points)
    document.getElementById("point").innerHTML=`Rewards members earn ${points} points on this order`
}
appand(cart);
document.getElementById("btn2").addEventListener("click",()=>{
    window.location.href="checkout.html";
});
document.getElementById("btn4").addEventListener("click",()=>{
    window.location.href="checkout.html";
});
const subfunc=(ele,index)=> {
    ele[index].quantity--;
    if(ele[index].quantity==0){
        removefunc(ele,index)
    }
    localStorage.setItem("cart",JSON.stringify(ele));
    appand(ele);
  }
 const removefunc=(data,index)=>{
    data.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(data));
    appand(data);
 }
 
  const addfunc=(ele,ind)=> {
    ele[ind].quantity++;
    localStorage.setItem("cart",JSON.stringify(ele));
    appand(ele);
  }
document.getElementById("btn1").addEventListener("click",()=>{
    window.location.href="index.html";
})