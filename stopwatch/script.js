let timer = null;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById("display");

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    
    display.textContent = `00:00:00:00`;
}

function update() {
    elapsedTime = Date.now() - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    let seconds = Math.floor(elapsedTime / (1000) % 60).toString().padStart(2, 0);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    display.textContent = timeString;
}