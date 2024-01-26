function getTime(){
    const time = new Date();

    const hour = time.getHours().toString().padStart(2, 0);
    const minute = time.getMinutes().toString().padStart(2, 0);
    const second = time.getSeconds().toString().padStart(2, 0);

    const currentTime = `${hour}:${minute}:${second}`;

    document.getElementById("clock").textContent = currentTime;
}

getTime();

setInterval(getTime, 1000);