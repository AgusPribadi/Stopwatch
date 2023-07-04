var timerElement = document.getElementById("timer");
var startButton = document.getElementById("startBtn");
var stopButton = document.getElementById("stopBtn");
var resetButton = document.getElementById("resetBtn");

var startTime;
var elapsedTime = 0;
var timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerElement.textContent = "00:00:00";
    elapsedTime = 0;
    startButton.disabled = false;
    stopButton.disabled = true;
}

function updateTimer() {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    var formattedTime = formatTime(elapsedTime);
    timerElement.textContent = formattedTime;
}

function formatTime(time) {
    var date = new Date(time);
    var hours = date.getUTCHours().toString().padStart(2, "0");
    var minutes = date.getUTCMinutes().toString().padStart(2, "0");
    var seconds = date.getUTCSeconds().toString().padStart(2, "0");
    var milliseconds = Math.floor(date.getUTCMilliseconds() / 10)
        .toString()
        .padStart(2, "0");
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
