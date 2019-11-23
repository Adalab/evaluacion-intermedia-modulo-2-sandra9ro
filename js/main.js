"use strict";
// debugger;
const button = document.querySelector(".js-button");
const numField = document.querySelector(".js-numberField");
const clueField = document.querySelector(".js-clue");
const shotField = document.querySelector(".js-shot");

//random number

const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log("El número aleatorio es:" + randomNumber);

//Read number written by user with random number

const compareNumber = function() {
  const numberFieldValue = parseInt(numField.value);
  if (numberFieldValue < 1 || numberFieldValue > 100) {
    clueFieldValue('Debes introducir un número entre 1 y 100');
  } else if (numberFieldValue === randomNumber) {
    clueFieldValue('¡¡¡Enhorabuena, has acertado el número secreto!!!');
  } else if (numberFieldValue < randomNumber) {
    clueFieldValue('Tu número es muy bajo');
  } else if (numberFieldValue > randomNumber) {
    clueFieldValue('Tu número es muy alto');
  // } else {
  //   clueFieldValue('Debes introducir un número entre 1 y 100');
  }
};

function clueFieldValue(text) {
  clueField.value = text;
}

// Counting number of shots

let tries = 0;

const countShotsNumber = function(){
  tries = tries + 1; 
  shotField.value = 'Número de intentos: ' + tries;
}

// Listening to button
 
const handleButton = function() {
 compareNumber();
 countShotsNumber();
};
button.addEventListener("click", handleButton);
