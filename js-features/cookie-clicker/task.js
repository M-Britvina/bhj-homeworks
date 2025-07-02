const clicker = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const clickerSpeed = document.getElementById("clicker__speed");

let clickerValue = 0;
let increment = 200;
let lastClickTime = new Date();

function changeImageSize() {
    image.width += increment;
    image.height += increment;
}

image.onclick = function() {
    let currentClick = new Date();
    let speedClick = ((1 / (currentClick - lastClickTime)) * 1000).toFixed(2);
    lastClickTime = currentClick;
    clickerSpeed.textContent = speedClick;

    clickerValue += 1;
    clicker.textContent = clickerValue;
    
    changeImageSize();
    increment *= -1;
}