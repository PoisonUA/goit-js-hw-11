const inputDataForm = document.querySelector('#calendar');
inputDataForm.min = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()+1}`;
const defaultTargetData = inputDataForm.valueAsNumber;
const currentDate = new Date().getTime();
const someText = document.querySelector('.some-text')

class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = document.querySelector(`${selector}`);
        this.targetDate = targetDate;
    }
};

const newTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: defaultTargetData.valueAsNumber,
});

const convertingMsToDate = (time) => {
    inputDataForm.value ? time = inputDataForm.valueAsNumber : time = currentDate;
    let stringToJoin = '';
    time = time - new Date().getTime();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    time = {days, hours, minutes, seconds}

    for (let current in time) {
        stringToJoin += `<div class="field">
        <span class="value" data-value="days">${time[current]}</span>
        <span class="label">${current}</span></div>`;
    };

    newTimer.selector.innerHTML = stringToJoin;
    return {time};
};

const runTimer = () => {
    setInterval(convertingMsToDate, 1000);
}

convertingMsToDate();
inputDataForm.addEventListener('change', runTimer);

