let timer = document.getElementById("timer");
let timerValue = +timer.textContent;

function formatTime(seconds) {
	let hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
	let minutes = Math.floor(seconds % 3600 / 60).toString().padStart(2, '0');
	seconds = (seconds %60).toString().padStart(2, '0');
	
	return `${hours}:${minutes}:${seconds}`
}

timer.textContent = formatTime(timerValue);
 
const countDown = () => {
	if (timerValue === 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(interval);
		document.getElementById("downloadLink").click();
	} else {
		timerValue -= 1;
		timer.textContent = formatTime(timerValue);
	}
}
 
let interval = setInterval(countDown, 1000);