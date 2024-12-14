let signupbtn=document.getElementById("signup")
let userInputName=document.getElementById("username")
let userInputEmail=document.getElementById("useremail")
let userInputpswd=document.getElementById("userpswd")
let nameError=document.getElementById("nameerror")
let pswdError=document.getElementById("pswderror")
let emailerror=document.getElementById("emailerror")


signupbtn.addEventListener("click",(e)=>{
     let regName=/^[a-zA-Z]{3,}$/
    let regEmail=/^[a-zA-Z0-9.%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    let regpassword=/^[a-zA-Z0-9@!#$%^&*]{8,15}$/
   e.preventDefault()
   if(!userInputName.value==""&&!userInputEmail.value==""&&!userInputpswd.value==""){
    let name=userInputName.value;
    let email=userInputEmail.value;
    let pswd=userInputpswd.value;
    if(!regName.test(userInputName.value)){
        nameError.textContent="please enter valid  name which consists only smalls and caps "
    }
    if(!regEmail.test(userInputEmail.value)){
        emailError.textContent="please enter valid email"
    }
    if(!regpassword.test(userInputpswd.value)){
        pswdError.textContent="please enter strong password "
    }

    alert("signup done!!!!!!!!!!!!!!!!")
    window.location.href=("login.html")
    localStorage.setItem("name", name)
    localStorage.setItem("email",email)
    localStorage.setItem("pswd",pswd)
   }
   else{
    alert("pls fill the fields")
   }
}

)       