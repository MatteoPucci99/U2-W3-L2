let timerCounter = parseInt(sessionStorage.getItem("timer"));
const addOne = 1;
let newCount = 0;
let progressValue = document.querySelector(".progress-value");



const timer = () => {
  setInterval(() => {
    timerCounter += addOne;
    sessionStorage.setItem("timer", timerCounter);
    progressValue.innerHTML = `${timerCounter}`;
   
  }, 1000);
};

if (timerCounter) {
} else {
  timerCounter = 0;
}

timer();
