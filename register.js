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
    

     

     







 
