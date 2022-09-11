"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number!";

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(".guess").value = 91;
console.log(document.querySelector(`.guess`).value);
*/
let number = Math.trunc(Math.random() * 20 + 1);
let number2 = Math.trunc(Math.random() * 20 + 1);

let score = 20;

document.querySelector(".check").addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "some shit!";
  } else if (number === guess) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = " You Win!";
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(".number").style.width = "30rem";
  } else if (number < guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "The number less!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "FUCK YOU!";
      document.querySelesector(".score").textContent = 0;
    }
  } else if (number > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "The number greater!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "FUCK YOU!";
      document.querySelesector(".score").textContent = 0;
    }

    /* Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/
  }
});

document.querySelector(".again").addEventListener("click", function () {
  const again = Number(document.querySelector(".number").value);

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").textContent = number = Math.trunc(
    Math.random() * 20 + 1
  );
  document.querySelector(".score").textContent = score = 20;
  document.querySelector(".number").textContent = "?";
});
