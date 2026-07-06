let currentTime = 0;
let timer = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

function updateDisplay() {
    display.textContent = currentTime.toFixed(2);
}

function setButtonStates(isRunning) {
    startBtn.disabled = isRunning;
    stopBtn.disabled = !isRunning;
    resetBtn.disabled = isRunning === null ? true : !isRunning && currentTime === 0;
}

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
        currentTime += 0.01;
        updateDisplay();
    }, 10);

    setButtonStates(true);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    setButtonStates(false);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    currentTime = 0;
    updateDisplay();
    setButtonStates(false);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
setButtonStates(false);
