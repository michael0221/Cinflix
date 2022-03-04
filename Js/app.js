const form = document.getElementById("form")
const email = document.getElementById("email")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")


form.addEventListener("submit", processForm);

function processForm(e){
  e.preventDefault();
  checkInputs();
  getInput();
  window.location.href = window.location.href.replace('signup.html', 'login.html');
}
// form.addEventListener("submit",(e) => {
//   e.preventDefault();
//   checkInputs();
//   getInput();
//   window.location.href = window.location.href.replace("signup.html", 'login.html');

 
// })


function getInput(){
  let user_data = {};
  user_data.email = email.value;
  user_data.password = password.value;

  user_data = JSON.stringify(user_data);
  localStorage.setItem("user", user_data);

}



function checkInputs(e){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstnameValue === ""){
      setErrorFor(firstname, "This field is Required");
    }else{
      setSuccessFor(firstname);
    }

   if(lastnameValue === ""){
     setErrorFor(lastname, "This field is Required");
   }else{
     setSuccessFor(lastname);
   }

    if(emailValue === ""){
      setErrorFor(email, "This field is Required");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Not a valid email");
      }else{
      setSuccessFor(email);
    }

    if(passwordValue === ""){
      setErrorFor(password, "Password should not be empty");
    }else{
      setSuccessFor(password);
    }

    if(password2Value === ""){
      setErrorFor(password2, "Password should not be empty");
    }else if(passwordValue != password2Value){
      setErrorFor(password2, "Passwords dont match");
    }else{
      setSuccessFor(password2);
    }


    
}

function setErrorFor(input, message){
  const input_wrap = input.parentElement;
  const small = input_wrap.querySelector("small");
  input_wrap.className = "input_wrap error";
  small.innerHTML = message;
}

function setSuccessFor(input){
  const input_wrap = input.parentElement;
  input_wrap.className = "input_wrap success";
}

function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function redirect(){

  window.location.href="login.html";
}

