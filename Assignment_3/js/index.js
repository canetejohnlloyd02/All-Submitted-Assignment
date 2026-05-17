document.getElementById("current-year").textContent =
    new Date().getFullYear();

document.getElementById("weekday").textContent =
    new Date().toLocaleString('en-US', { weekday: 'long' });

function getCurrentDate() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return `${month}/${day}/${year}`;
}

function getCurrentTime() {
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
}

document.addEventListener("DOMContentLoaded", function () {

    const dateElement = document.getElementById("mmddyy");

    const timeElement = document.getElementById("current-time");

    dateElement.textContent = getCurrentDate();

    timeElement.textContent = getCurrentTime();

    setInterval(() => {

        dateElement.textContent = getCurrentDate();

        timeElement.textContent = getCurrentTime();

    }, 1000);

});




let seconds = 0;

let minutes = 0;

let hours = 0;

let stopwatchInterval;


function updateStopwatch() {

    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    let displaySeconds =
        seconds < 10 ? "0" + seconds : seconds;

    let displayMinutes =
        minutes < 10 ? "0" + minutes : minutes;

    let displayHours =
        hours < 10 ? "0" + hours : hours;

    document.getElementById("stopwatch").textContent =
        `${displayHours}:${displayMinutes}:${displaySeconds}`;
}


document.getElementById("start-btn").addEventListener("click", function () {

    clearInterval(stopwatchInterval);

    stopwatchInterval = setInterval(updateStopwatch, 1000);

});


document.getElementById("pause-btn").addEventListener("click", function () {

    clearInterval(stopwatchInterval);

});


document.getElementById("reset-btn").addEventListener("click", function () {

    clearInterval(stopwatchInterval);

    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("stopwatch").textContent =
        "00:00:00";

});