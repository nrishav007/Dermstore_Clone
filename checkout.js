
let form = document.querySelector('form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    let obj = {
         name : form.name.value,
         email : form.email.value,
         address : form.Address.value,
         number : form.number.value,
       
    }

    
    if(obj.name =="" && obj.email == "" && obj.address == "" && obj.number == "" ){
        alert("Please fill the complete details")
    }else{
        // alert("Order Accepted")
        fotp();
    }
});
let fotp=()=>{
    document.querySelector("title").innerHTML="OTP"
    let otp=Math.floor(Math.random()*9999)+1000;
        form.innerHTML="";
        let div=document.createElement("div");
        div.setAttribute("id","io")
        let h1=document.createElement("h1");
        let inp=document.createElement("input");
        let btn=document.createElement("button");
        h1.textContent="Enter OTP"
        inp.placeholder=otp;
        inp.setAttribute("id","uotp")
        btn.textContent="Submit OTP";
        btn.addEventListener("click",()=>{
            let usrotp=document.getElementById("uotp").value;
            if(usrotp==otp){
                setTimeout(()=>{
                    alert("Order accepted");
                },3000);
            }
            else{
                setTimeout(()=>{
                    alert("Invalid otp!");
                },3000);
                fotp();
            }
        });
        div.append(h1,inp,btn);
        form.append(div);
}