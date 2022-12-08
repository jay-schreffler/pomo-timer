let productiveTimeCurrent = document.querySelector('#productive-time');
let restTimeTimeCurrent = document.querySelector('#rest-time');
let countdownCurrentTime = document.querySelector('#countdown-current-time');
let countDownCircle = document.querySelector('#countdown-timer-circle');
// buttons
const minutes20 = document.querySelector('#timer-20');
const minutes25 = document.querySelector('#timer-25');
const minutes30 = document.querySelector('#timer-30');
const rest5 = document.querySelector('#rest-timer-5');
const rest10 = document.querySelector('#rest-timer-10');
const rest15 = document.querySelector('#rest-timer-15');

// time
const time = new Date();
const getHours = time.getHours();
const getMinutes = time.getHours();
const getSeconds = time.getSeconds();

//time
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;

//productivity count
let productivityTotal = 0;
let productivitySeconds = 0;
let productivityMinutes = 0;
let productivityHours = 0;
let restTotal = 0;
let restSeconds = 0;
let restMinutes = 0;
let restHours = 0;
productiveTimeCurrent.textContent = productivityTotal;
restTimeTimeCurrent.textContent = restTotal;

// declare interval outside the function so it can be referenced when you clear it
let timerInterval;

//button events
minutes20.addEventListener('click', () => {
    clearInterval(timerInterval)
    timer(1200000, '#FEB571');
});
minutes25.addEventListener('click', () => {
    clearInterval(timerInterval)
    timer(1500000, '#FE9C3F')
});
minutes30.addEventListener('click', () => {
    clearInterval(timerInterval)
    timer(1800000, '#FE8B20')
});
countDownCircle.addEventListener('click', () => {
    clearInterval(timerInterval);
})
rest5.addEventListener('click', () => {
    clearInterval(timerInterval)
    timer(300000, '#89ACBE')
});
rest10.addEventListener('click', () => {
    clearInterval(timerInterval)
    timer(600000, '#6E99AF')
});
rest15.addEventListener('click', () => {
    clearInterval(timerInterval)
    timer(900000, '#57869E')
});

function timer(time,color){  
    countDownCircle.style.backgroundColor = color;
    timerInterval = setInterval(function (){
        if(time > -1){
            let seconds = (time / 1000) % 60;
            let minutes = Math.floor(time / 1000 / 60);
            time = time - 1000;
            countdownCurrentTime.textContent = `${minutes}m ${seconds}s`
            if(color === '#89ACBE' || color === '#6E99AF' || color === '#57869E') {
                restTotal = restTotal + 1000;
                restSeconds = (restTotal / 1000 ) % 60;
                restMinutes = Math.floor((restTotal / 1000) / 60);
                restHours = Math.floor((restTotal / 1000) / 60 / 60);
                restTimeTimeCurrent.textContent = `${restHours}:h ${restMinutes}:m ${restSeconds}:s`;
                console.log(restTotal)
            } else if(color === '#FEB571' || color === '#FE9C3F' || color === '#FE8B20') {
                productivityTotal = productivityTotal + 1000;
                productivitySeconds = (productivityTotal / 1000 ) % 60;
                productivityMinutes = Math.floor((productivityTotal / 1000) / 60);
                productivityHours = Math.floor((productivityTotal / 1000) / 60 / 60);
                productiveTimeCurrent.textContent = `${productivityHours}:h ${productivityMinutes}:m ${productivitySeconds}:s`;
            }
        }
        else if(time <0) {
            countdownCurrentTime.textContent = 'Times Up!'
            clearInterval(timerInterval);
        };
    },1000); 
};

console.log(productivityTotal)
console.log(restTotal)

