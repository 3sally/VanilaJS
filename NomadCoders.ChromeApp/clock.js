const clockContainer = document.querySelector(".js-clock"), //js-clock라는 클래스를 찾아줌
      clockTitle = document.querySelector("h1");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours>9?hours:`0${hours}`}:${minutes>9?minutes:`0${minutes}`}:${seconds>9?seconds:`0${seconds}`}`;
}
function init(){
    getTime();
    setInterval(getTime, 1000); // setInterval(실행시킬 함수, 갱신할 시간);
}

init();