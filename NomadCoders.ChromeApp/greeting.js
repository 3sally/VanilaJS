const form = document.querySelector(".js-form"),    
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(name){  //localStorage에 name 저장
    localStorage.setItem(USER_LS,name);
}

function handleSubmit(event){  //name 입력하면
    event.preventDefault(); //dafault값 막음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(user){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${user}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser==null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();