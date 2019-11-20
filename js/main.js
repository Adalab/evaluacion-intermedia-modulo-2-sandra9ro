"use strict";
const button = document.querySelector(".js-button");
const randomNumber = getRandomNumber(100);
const numField = document.querySelector(".js-numberField");
const clueField = document.querySelector(".js-clue");
const number = numField.value;
const clue = clueField.value;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(randomNumber);

const checkNumberquality = function() {
  console.log(number);

  if (number < 1 || number > 100) {
    console.log("número fuera de rango");
  } else if (number === randomNumber) {
    //mensaje enhorabuena
  } else if (number < randomNumber) {
    // num muy bajo
  } else {
    // numero muy alto
  }
};

button.addEventListener("click", checkNumberquality);
