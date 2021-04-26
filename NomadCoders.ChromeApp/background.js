const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `../images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function randomNum(){
    const number = Math.floor(Math.random()*IMG_NUMBER); //0-2까지 random한 숫자
    return number;
}

function init(){
    const randomNumber = randomNum();
    paintImage(randomNumber);
}

init();