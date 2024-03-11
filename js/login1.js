const email=document.querySelector ("#email")
const password=document.querySelector("#password")
const btn=document.querySelector("#btnSubmit")

btn.addEventListener("click", function (event){
  event.preventDefault()
 if (email.value ==="leo@gmail.com" && password.value ==="12345"){
window.location.href="./menu.html"
 }
 else{
  alert("Usuario o Contraseña erroneos");
 }

})