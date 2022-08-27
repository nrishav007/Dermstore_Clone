
let arr = JSON.parse(localStorage.getItem("users")) || [];

function cusFun(n, e, p) {
    this.name = n;
    this.email = e;
    this.pass = p;

}



function add() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("id_password").value;

    let s1 = new cusFun(name, email, pass)

    arr.push(s1)

    localStorage.setItem("users", JSON.stringify(arr))
    window.location.href = "login.html"
}



const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
});

const togglePasswor = document.querySelector('#togglePasswor');
const passwor = document.querySelector('#id1_password');

togglePasswor.addEventListener('click', function (e) {

    const type = passwor.getAttribute('type') === 'password' ? 'text' : 'password';
    passwor.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
});



function verifypass(e) {
    e.preventDefault();
    let firstemail = document.getElementById("email").value;
    let confirmemail = document.getElementById("confirm_email").value;
    var firstpass = document.getElementById("id_password").value;
    var secondpass = document.getElementById("id1_password").value;
    var n = document.getElementById("number").value;


    if (firstpass === secondpass && firstpass.length >= 6) {
        if (firstemail === confirmemail) {


            if (n.length == 10) {
                add();

                return true;

            }
            else {
                alert("number should be 10 digits");

            }


        }
        else {
            alert("email must be same!");

        }

    }
    else {
        alert("password must be same and password must be 6 digit!");

    }



}
document.getElementById("home").addEventListener("click", () => {
    window.location.href = "index.html";
});