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
let currentNumber = document.querySelector("#currentNumber");
let limit = Number(prompt("Tell me the max you want to count"));
// let counterr = prompt("Tell me the max you want to count");

plus.addEventListener("click", function () {
  if (counter < limit) {
    counter++;
    currentNumber.textContent = counter;
    less.style.backgroundColor = "rgb(177, 225, 225)";
    less.style.borderColor = "blue";
  } else {
    alert(`The max you can count is ${limit}`);
    plus.style.backgroundColor = "rgb(240, 130, 130)";
    plus.style.borderColor = "red";
  }

  //   if (counter === limit) {
  //   }
  console.log(counter, limit);
});

less.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    currentNumber.textContent = counter;
    plus.style.backgroundColor = "rgb(177, 225, 225)";
    plus.style.borderColor = "blue";
  } else {
    alert("you can't count below zero!");
    less.style.backgroundColor = "rgb(240, 130, 130)";
    less.style.borderColor = "red";
  }
});
