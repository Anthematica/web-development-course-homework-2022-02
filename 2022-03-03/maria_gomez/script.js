const checkBox = document.querySelector(".toggleTheme");
const elChangeTheme = document.querySelectorAll(".changeTheme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");



if (prefersDarkScheme.matches == false) {
  toggleLight();
}
if (currentTheme == "dark") {
  toggleDark();
} else if (currentTheme == "light") {
  checkBox.click();
  toggleLight();
}


function toggleLight() {
  elChangeTheme.forEach((elChangeTheme) => {
    elChangeTheme.classList.remove("darktheme");
    elChangeTheme.classList.add("lightmode");
  });
}
function toggleDark() {
  elChangeTheme.forEach((elChangeTheme) => {
    elChangeTheme.classList.remove("lightmode");
    elChangeTheme.classList.add("darktheme");
  });
}

checkBox.addEventListener("change", (e) => {
  if (e.target.checked == true) {
    console.log("checked");
    toggleLight();
    var theme = "light";
  }
  if (e.target.checked == false) {
    console.log("no checked");
    toggleDark();
    var theme = "dark";
  }
  localStorage.setItem("theme", theme);

});

// funciones de calculadora

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  // const {displayValue} = calculator;
  // calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  const { displayValue, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
  console.log(calculator);
}

function inputOperator(operator) {
  const { displayValue } = calculator;
  calculator.displayValue =
    displayValue === "0" ? operator : displayValue + operator;
  console.log(calculator);
}
function updateDisplay() {
  const display = document.querySelector(".previousMath");
  display.textContent = calculator.displayValue;
}

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.'
      calculator.waitingForSecondOperand = false;
      return
    }
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
    console.log(calculator);
  }
}

function handleOperator(nextOperator) {
  // Destructure
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);
  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
    updateDisplay();
    console.log(calculator);
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
  updateDisplay();
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "x") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}

function resetCalculator(){
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}
function calculatePerc(){
  res = calculator.displayValue / 100;
  console.log(res)
  calculator.displayValue = res;
  updateDisplay();

}
function changePlusMin(){
  plusMinus = -1 * (calculator.displayValue);
  calculator.displayValue = String(plusMinus);
  updateDisplay();
}
function inputDelete(){
  if ((String(calculator.displayValue).length == 1)){
    calculator.displayValue = '0';
    updateDisplay();
  } else{
    del = (String(calculator.displayValue)).slice(0,-1);
    console.log(del);
    calculator.displayValue = del;
    updateDisplay();

  }
}

updateDisplay();

const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".previousMath");

keys.addEventListener("click", (e) => {
  const { target } = e;
  if (target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    if (!action) {
      if (displayedNum == "0") {
        display.textContent = keyContent;
        inputDigit(keyContent);
      } else {
        display.textContent = displayedNum + keyContent;
        inputDigit(keyContent);
      }
      console.log("number key!");
      updateDisplay();
    }
    if (["add", "substract", "multiply", "divide", "calculate"].includes(action)) {
      console.log("operator key!");
      handleOperator(keyContent);
      return;
    }
    if (action === "decimal") {
      console.log("decimal", keyContent);
      inputDecimal(keyContent);
      updateDisplay();
    }
    if (action === "clear") {
        resetCalculator();
        updateDisplay();
        console.log("clear key!");
    }
    if (action === "percent"){
      calculatePerc();
    }
    if (action === "plusminus"){
      changePlusMin();
    }
    if (action === "delete") {
        inputDelete();
        console.log("delete key!");
    }

    if (action === "calculate") {
      console.log("equal key!");
    }
  }

  //   if (target.dataset.contains('all-clear')) {
  //     console.log('clear', target.value);
  //     return;
  //   }
});
