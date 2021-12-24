// // let currentNumber = document.addEventListener("currentNumber");
// let counter = 0;
// let plus = document.getElementsByName("add");
// let less = document.getElementsByName("subtract");

// function increment() {
//   counter++;
//   currentNumber = counter;
// }

// function decrement() {
//   counter--;
//   currentNumber = counter;
// }

// plus.addEventListener("click", increment());
// less.addEventListener("click", decrement());

let counter = 0;
let plus = document.querySelector(".add");
let less = document.querySelector(".subtract");
let currentNumber = document.querySelector("#labelTimer");
let buttonStart = document.querySelector(".start-timer");
let buttonPause = document.querySelector(".pause-timer");
let buttonContinue = document.querySelector(".continue-timer");

plus.addEventListener("click", function () {
  counter++;
  currentNumber.textContent =
    counter >= 10 ? `${counter}:00` : `0${counter}:00`;
});

less.addEventListener("click", function () {
  if (counter === 0) {
    alert("You can't set a timer less than zero!");
  } else {
    counter--;
    currentNumber.textContent =
      counter >= 10 ? `${counter}:00` : `0${counter}:00`;
  }
});
console.log(currentNumber);

buttonStart.addEventListener("click", function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      alert("Time is up!");
    }
    // Decrease is
    time--;
  };

  // Set time to 5 minutes
  let time = counter * 60;

  buttonPause.addEventListener("click", function () {
    clearInterval(timer);
  });

  // BUTTON CONTINUE, STILL NOT WORKING ////////////////////////////////////////////////////////
  // buttonContinue.addEventListener("click", function () {
  //   tick();
  //   const timer = setInterval(tick, 1000);
  //   return timer;
  // });

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
});
