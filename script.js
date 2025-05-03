let startTime = 0;
let endTime = 0;
let timerInterval = null;

document.getElementById('date-start').addEventListener('input', (e) => {
    const dateStartInput = e.target.value.split('-');
    const timeStartInput = document.getElementById('time-start').value.split(':');
    startTime = new Date(dateStartInput[0], dateStartInput[1] - 1, dateStartInput[2], timeStartInput[0], timeStartInput[1]).getTime() / 1000;
});

document.getElementById('time-start').addEventListener('input', (e) => {
    const dateStartInput = document.getElementById('date-start').value.split('-');
    const timeStartInput = e.target.value.split(':');
    startTime = new Date(dateStartInput[0], dateStartInput[1] - 1, dateStartInput[2], timeStartInput[0], timeStartInput[1]).getTime() / 1000;
});

document.getElementById('date-end').addEventListener('input', (e) => {
    const dateEndInput = e.target.value.split('-');
    const timeEndInput = document.getElementById('time-end').value.split(':');
    endTime = new Date(dateEndInput[0], dateEndInput[1] - 1, dateEndInput[2], timeEndInput[0], timeEndInput[1]).getTime() / 1000;
});

document.getElementById('time-end').addEventListener('input', (e) => {
    const dateEndInput = document.getElementById('date-end').value.split('-');
    const timeEndInput = e.target.value.split(':');
    endTime = new Date(dateEndInput[0], dateEndInput[1] - 1, dateEndInput[2], timeEndInput[0], timeEndInput[1]).getTime() / 1000;
});

function updateTimer() {
    const currentTime = new Date().getTime() / 1000;
    const timeLeft = endTime - currentTime;
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = Math.floor(timeLeft % 60);

    document.getElementById('countdown-timer').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const elapsedTime = currentTime - startTime;
    const elapsedHours = Math.floor(elapsedTime / 3600);
    const elapsedMinutes = Math.floor((elapsedTime % 3600) / 60);
    const elapsedSeconds = Math.floor(elapsedTime % 60);
    document.getElementById('elapsed-time').innerText = `Elapsed Time: ${elapsedHours.toString().padStart(2, '0')}:${elapsedMinutes.toString().padStart(2, '0')}:${elapsedSeconds.toString().padStart(2, '0')}`;

    const progress = (currentTime - startTime) / (endTime - startTime) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

timerInterval = setInterval(updateTimer, 1000);