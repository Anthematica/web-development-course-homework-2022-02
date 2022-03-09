// VARIABLES
let fullOperation = '';
let result = 0;

let operator1 = '';
let operator2 = '';
let operation = '';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '÷': (a, b) => a / b
}

// DOM
const inputResult = document.querySelector('.result');
const inputFullOperation = document.querySelector('.fullOperation');

const numbersBtn = document.querySelectorAll('.button-number');
const operationsBtn = document.querySelectorAll('.button-operation');
const resultBtn = document.querySelector('.button-result');
const resetBtn = document.querySelector('.button-reset');


// FUNCIONES

function loadOutput() {
  inputFullOperation.value = fullOperation;
  inputResult.value = result;
}

function clickNumber(evt) {

  if (operation && operator1) { // si hay una operacion, operador 1, pero no operador 2
    operator2 += evt.target.textContent;
    result = operations[operation]( Number(operator1), Number(operator2) );
  } else if (!operation && !operator2) { // Si no hay operacion ni operador 2
    operator1 += evt.target.textContent;
  }
  
  fullOperation += evt.target.textContent;
  loadOutput();
}

function clickOperation(evt) {
  if (operation && operator1 && !operator2) { // Si hay una operacion, operador 1, pero no operador 2
    fullOperation = fullOperation.slice(0, (fullOperation.length - 1));
  }

  if (operation && operator1 && operator2) { // Si hay una operacion, operador 1 y operador 2
    result = operations[operation]( Number(operator1), Number(operator2) );
    operator1 = result;
    operation = ''; operator2 = '';
  }

  operation = evt.target.textContent;
  fullOperation += evt.target.textContent;
  loadOutput();
}

function clickResult(evt) {
  result = operations[operation]( Number(operator1), Number(operator2) );
  operator1 = result.toString();
  operator2 = '';
  operation = '';
  fullOperation = result.toString();
  loadOutput();
}

function clickReset() {
  fullOperation = '';
  result = 0;

  operator1 = '';
  operator2 = '';
  operation = '';

  loadOutput();
}


// Events Listener
numbersBtn.forEach( element => {
  element.addEventListener('click', clickNumber);
});

operationsBtn.forEach( element => {
  element.addEventListener('click', clickOperation);
});

resultBtn.addEventListener('click', clickResult);
resetBtn.addEventListener('click', clickReset);