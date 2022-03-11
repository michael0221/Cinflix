let loginForm = document.querySelector('form');
let loginBtn = document.getElementById('loginBtn');

let login_fail = document.createElement('p');
login_fail.innerText = "Check login details";
login_fail.style.color='red';
login_fail.style.textAlign='left';
login_fail.style.fontSize='13px';
login_fail.style.width='80%';
login_fail.style.margin='0px 0px 16px 0px';

function loginInput(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let login_data = {};
    login_data.email = email.value;
    login_data.password = password.value;

    login_data = JSON.stringify(login_data);
    sessionStorage.setItem('user_login', login_data);
}

function login(e){
    e.preventDefault();
    let user_data = JSON.parse(localStorage.getItem('user'));
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if(email.value == user_data.email && password.value == user_data.password){
        loginInput();
        window.location.href = window.location.href.replace('login.html', 'stream.html');
    }else{
        if(password.nextElementSibling.tagName == 'P'){
            password.nextElementSibling.remove();
        }
        password.outerHTML += login_fail.outerHTML;
    }

}

loginForm.addEventListener('submit', login)