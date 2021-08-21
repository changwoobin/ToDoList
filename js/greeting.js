const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginBtnClick(info) 
{
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}

function paintGreetings(savedUsername) {
    greeting.innerHTML = `hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnClick);
}
else 
{
    paintGreetings(savedUsername);
}