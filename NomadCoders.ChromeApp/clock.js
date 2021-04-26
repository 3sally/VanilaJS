const clockContainer = document.querySelector(".js-clock"), //js-clock라는 클래스를 찾아줌
      clockTitle = document.querySelector("h1");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}.${seconds}`;
}
function init(){
    getTime();
}

init();