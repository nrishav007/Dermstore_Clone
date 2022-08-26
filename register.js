let form= document.getElementById("form")




let arr=[]

    
 async function add(){
   
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let confirm=document.getElementById("confirm_email").value;
    let pass=document.getElementById("pass").value;

    
    
        let send_this_data = {
            name: name,
            email : email,
            confirm : confirm,
            password:pass
        }
    
    
        let res = await fetch(`http://localhost:3000/posts`,{
            method: "POST",
            body: JSON.stringify(send_this_data) ,
            headers:{
                "Content-Type":"application/json"
            },
    
        })
    
        
        let data = await res.json();
        console.log(data)
    }
    
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#id_password');
    
    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
    });

    const togglePasswor= document.querySelector('#togglePasswor');
    const passwor = document.querySelector('#id1_password');
    
    togglePasswor.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = passwor.getAttribute('type') === 'password' ? 'text' : 'password';
      passwor.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
    });



function verifypass(event){ 
    event.preventDefault()
    let firstemail =document.getElementById("email").value;
    let confirmemail = document.getElementById("confirm_email").value; 
    var firstpass= document.getElementById("id_password").value;
    var secondpass= document.getElementById("id1_password").value;
    var n = document.getElementById("number").value;

let first=firstpass.includes(1)
      console.log(first)
      
    if(firstpass===secondpass && firstpass.length>=6){  
        if(firstemail===confirmemail){ 
            
            
                if(n.length==10){  
                    return true;
                }
                else{
                    alert("number should be 10 digits"); 
                } 
           
            return true;
        }
        else{
            alert("email must be same!"); 
        }
        
    }  
    else{  
    alert("password must be same and password must be 6 digit!");  
     
    }  
    }  

     







 
