const calculator = document.querySelector(".calculator-container");
const keys = calculator.querySelector(".calculator-grid");
const previousDisplay = document.querySelector(".previous-operand");
const display = document.querySelector(".current-operand");

// dark/light mode
let lightMode = localStorage.getItem("lightMode");
const lightModeToggle = document.querySelector(".light-mode");

console.log(lightMode);
//chekear si lightmode esta habilitado
//si esta habilitado, apagarlo
//si esta deshabilitado, encenderlo

const enableLightMode = function enable() {
    //1. agregar la clase light al body
    document.body.classList.add("light-mode");
    //2. actualizar lightmode en localstorage
    localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = function disable() {
    //1. remover la clase light al body
    document.body.classList.remove("light-mode");
    //2. actualizar lightmode en localstorage
    localStorage.setItem("lightMode", null);
};

lightModeToggle.addEventListener("click", function changeMode() {
    lightMode = localStorage.getItem("lightMode");
    if (lightMode !== "enabled") {
        enableLightMode();
        console.log(lightMode);
    } else {
        disableLightMode();
        console.log(lightMode);
    }
    let toggleActive = document.querySelector(".sun-reverse");
    if (toggleActive) {
        toggleActive.classList.toggle("sun-active");
    }
});

keys.addEventListener("click", function (event) {
    if (!event.target.closest("button")) return;

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const { type } = key.dataset;
    const { previousKeyType } = calculator.dataset;

    // const {dataset: {type}, textContent: keyValue} = key

    if (type == "number") {
        if (displayValue == "0" || previousKeyType == "operator") {
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue;
        }
    }

    if (type == "operator") {
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(function (element) {
            element.dataset.state = "";
        });
        key.dataset.state = "selected";

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }

    if (type == "equals") {
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;
        display.textContent = calculate(firstNumber, operator, secondNumber);
    }

    if (type == "clear") {
        display.textContent = 0;
        calculator.dataset.previousKeyType = "clear";
    }

    calculator.dataset.previousKeyType = type;
});

function calculate(firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if (operator == "plus") return firstNumber + secondNumber;
    if (operator == "minus") return firstNumber - secondNumber;
    if (operator == "multiply") return firstNumber * secondNumber;
    if (operator == "divide") return firstNumber / secondNumber;
    if (operator == "percent") return secondNumber / 100;
    if (operator == "negative") return secondNumber * -1;
    if (operator == "clear") return display.textContent(" ");

    if (operator == "back") return secondNumber.slice(0, -1);
}
