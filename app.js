//Elements
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondsEl = document.querySelector('.seconds');
const milisecondsEl = document.querySelector('.miliseconds');
const results = document.querySelector('.results');

//Buttons
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const newBtn = document.querySelector('.new');
newBtn.disabled = true;

//Listeners
startBtn.addEventListener('click', () => {
	clearInterval(interval);
	interval = setInterval(startTimer, 10);
	newBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
	clearInterval(interval);
});

stopBtn.addEventListener('click', () => {
	clearInterval(interval);
	clearFields();
	newBtn.disabled = true;
});

newBtn.addEventListener('click', () => {
	clearInterval(interval);
	const block = document.createElement('div');
	counter++;
	if (counter > 9) {
		counter = 1;
		results.innerHTML = '';
	}
	block.classList.add('results__info');
	block.textContent = `Result-${counter}: ${hour < 10 ? '0' + hour : hour}:${
		minute < 10 ? '0' + minute : minute
	}:${seconds < 10 ? '0' + seconds : seconds}:${
		miliseconds < 10 ? '0' + miliseconds : miliseconds
	}`;
	results.append(block);
	clearFields();
	clearInterval(interval);
	interval = setInterval(startTimer, 10);
});

//Variables
let hour = 0,
	minute = 0,
	seconds = 0,
	miliseconds = 0,
	interval,
	counter = 0;

const startTimer = () => {
	miliseconds++;

	//Miliseconds
	miliseconds < 10
		? (milisecondsEl.textContent = `0${miliseconds}`)
		: (milisecondsEl.textContent = miliseconds);
	if (miliseconds > 99) {
		seconds++;
		secondsEl.textContent = `0${seconds}`;
		miliseconds = 0;
		milisecondsEl.textContent = `0${miliseconds}`;
	}

	//Seconds
	seconds < 10
		? (secondsEl.textContent = `0${seconds}`)
		: (secondsEl.textContent = seconds);
	if (seconds > 59) {
		minute++;
		minuteEl.textContent = `0${minute}`;
		seconds = 0;
		secondsEl.textContent = `0${seconds}`;
	}

	//Minutes
	minute < 10
		? (minuteEl.textContent = `0${minute}`)
		: (minuteEl.textContent = minute);
	if (minute > 59) {
		hour++;
		hourEl.textContent = `0${hour}`;
		minute = 0;
		minuteEl.textContent = `0${minute}`;
	}

	//Hours
	hour < 10 ? (hourEl.textContent = `0${hour}`) : (hourEl.textContent = hour);
};

const clearFields = () => {
	hour = 00;
	minute = 00;
	seconds = 00;
	miliseconds = 00;
	hourEl.textContent = '00';
	minuteEl.textContent = '00';
	secondsEl.textContent = '00';
	milisecondsEl.textContent = '00';
};
