const calculator = document.querySelector(".calculator-container");
const keys = calculator.querySelector(".calculator-grid");
const previousDisplay = document.querySelector(".previous-operand");
const display = document.querySelector(".current-operand");

// dark/light mode
const btnSwitch = document.querySelector(".toogle-button");
let toggleActive = document.querySelector(".sun-reverse");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleActive.classList.toggle("sun-active");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("light-mode", "true");
    } else {
        localStorage.setItem("light-mode", "false");
    }
});

if (localStorage.getItem("light-mode") == "true") {
    document.body.classList.add("light-mode");
    toggleActive.classList.add("sun-active");
} else {
    document.classList.remove("ight-mode");
    toggleActive.classList.remove("sun-active");
}

keys.addEventListener("click", function (event) {
    if (!event.target.closest("button")) return;

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const { type } = key.dataset;
    const { previousKeyType } = calculator.dataset;

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
