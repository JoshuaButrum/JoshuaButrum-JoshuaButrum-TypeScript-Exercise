const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0o0;
let isRunning = false;
let interval: number | undefined;

function startTimer() {
    if (isRunning) {
        return;
    }

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    if (!isRunning) {
        return;
    }

    isRunning = false;
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();

    timerTime = 0;
    (<HTMLElement>minutes).innerText = '00';
    (<HTMLElement>seconds).innerText = '00';
}

function incrementTimer() {
    timerTime++;

    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;

    (<HTMLElement>minutes).innerText = pad(numOfMinutes);
    (<HTMLElement>seconds).innerText = pad(numOfSeconds);
}

function pad(number) {
    return (number < 10) ? '0' + number : number;
    // if (number < 10) {
    //     return '0' + number;
    // } else {
    //     return number;
    // }
}

startButton!.addEventListener('click', startTimer);
stopButton!.addEventListener('click', stopTimer);
resetButton!.addEventListener('click', resetTimer);