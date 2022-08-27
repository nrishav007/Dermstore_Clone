function sub(e){
    e.preventDefault();
    
   
    let email = document.getElementById("email").value;
    let pass= document.getElementById("password").value;
    

    let data = JSON.parse(localStorage.getItem("users"))||[];
   if(data.length==0){
    alert("user not exist")
    return

   
   }

   

let b = false
    for(let i=0; i<data.length; i++){
        if(data[i].email==email){
            if(data[i].pass==pass){
                alert("login successful")
                b=true;
                localStorage.setItem("userloggedin",JSON.stringify(data[i]));
                window.location.href="./index.html";
                return;
            }
            else{
                alert("password incorrect")
                return;
            }
        }
        
    }
if(b==false){
    alert("user not exist")
}

    

    
    }

function show(e){
    e.preventDefault();
    const passwordEle = document.getElementById('password');
    const toggleEle = document.getElementById('toggle');
 passwordEle.getAttribute("type")
    if(passwordEle.getAttribute("type")=="password"){
        passwordEle.setAttribute("type","text")
    }
    else{
        passwordEle.setAttribute("type","password")
    }
}
document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index.html";
});