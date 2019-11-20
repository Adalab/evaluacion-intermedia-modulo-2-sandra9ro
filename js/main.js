"use strict";
const button = document.querySelector(".js-button");
const randomNumber = getRandomNumber(100);
const numField = document.querySelector(".js-numberField");
const clueField = document.querySelector(".js-clue");
const number = numField.innerHTML.value;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(randomNumber);
console.log(number);

// const checkNumberquality = function(introducedNumber){
//      if (introducedNumber.value <1 && >100){
//       clueField.innerHTML.value = "El número debe estar entre 0 y 100"
//      }
//    }

// button.addEventListener("click", );
