// login components

const emailLogged = document.getElementById("email").value;
const passwordLogged = document.getElementById("password").value;
const login = document.getElementById("button");
const testButton = document.getElementById("test");



testButton.addEventListener("click",function(){

})



login.addEventListener("click",function(){

    if(localStorage.getItem("name") === emailLogged && localStorage.getItem("pass") === passwordLogged)  {
        window.location.href = "home.html"
    }else {
        alert("login Couldn't be succesful");
    }
})