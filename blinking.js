const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-action=start]');
const btnStop = document.querySelector('button[data-action=stop]');
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const randomColor = () => {
    body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, 5)]}`;
}

const blinker = () => {
    btnStart.disabled = true;
    newInterval = setInterval(randomColor, 1000);
}

const stopBlinker = () => {
  btnStart.disabled = false;
  clearInterval(newInterval);
}

btnStart.addEventListener('click', blinker);
btnStop.addEventListener('click', stopBlinker);

console.log(btnStart);
console.log(btnStop);