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
                window.location.href="homepage.html";
                return;
            }
            else{
                alert("password incorrect")
            }
        }
        
    }
if(b==false){
    alert("user not exist")
}

    

    
    }