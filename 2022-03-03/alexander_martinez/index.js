const displayEl = document.querySelector(".display");
const totalEl = document.querySelector(".total");
const buttonsEl = document.querySelectorAll(".button");
const operatorEl = document.querySelectorAll(".operator");
const equalEl = document.querySelector(".equal");
const removeEl = document.querySelector(".remove");
const resetEl = document.querySelector(".reset");
const percentageEl = document.querySelector(".percentage");
const plusMinus = document.querySelector(".plus-minus");
const dot = document.querySelector(".dot");

const btnSwitch = document.querySelector(".switch");
const body = document.querySelector("body");
const btnMedium = document.querySelectorAll(".btn-medium");
const btnLow = document.querySelectorAll(".btn");

let operator = "",
	firstOp = "",
	secondOp = "",
	calculation = 0;

buttonsEl.forEach((btn) => {
	btn.addEventListener("click", () => {
		addNumber(btn.innerText);
	});
});

operatorEl.forEach((op) => {
	op.addEventListener("click", () => {
		setOpeation(op.innerText);
	});
});

equalEl.addEventListener("click", () => {
	console.log();
	calculate();
	updateDisplay();
});

resetEl.addEventListener("click", () => {
	reset();
	updateDisplay();
});

removeEl.addEventListener("click", () => {
	firstOp = firstOp.slice(0, -1);
	updateDisplay();
});

percentageEl.addEventListener("click", () => {
	if (!firstOp) return;
	let percent = 0;

	percent = parseFloat(firstOp);
	firstOp = (percent / 100).toString();
	updateDisplay();
});

plusMinus.addEventListener("click", () => {
	if (!firstOp) return;
	let inverse = 0;
	inverse = parseFloat(firstOp);
	firstOp = (inverse * -1).toString();
	updateDisplay();
});

dot.addEventListener("click", () => {
	if (!firstOp) return;

	if (displayEl.textContent.includes(".")) {
		return;
	}

	addNumber(dot.textContent);
});

const addNumber = (number) => {
	firstOp = firstOp + number;
	updateDisplay();
};

const calculate = () => {
	const operator1 = parseFloat(firstOp);
	const operator2 = parseFloat(secondOp);

	if (isNaN(operator1) || isNaN(operator2)) return;

	switch (operator) {
		case "+":
			calculation = operator2 + operator1;
			break;
		case "-":
			calculation = operator2 - operator1;
			break;

		case "÷":
			if (operator1 === 0 || operator2 === 0) {
				updateDisplay();
				break;
			}
			calculation = operator2 / operator1;
			break;

		case "x":
			calculation = operator2 * operator1;
			break;

		default:
			return;
	}

	firstOp = calculation;
	operator = "";
	secondOp = "";
};

const reset = () => {
	operator = "";
	firstOp = "";
	secondOp = "";
	displayEl.innerText = "0";
};

const setOpeation = (op) => {
	if (firstOp === "") return;

	if (secondOp !== "") {
		calculate();
	}
	operator = op;
	secondOp = firstOp;
	firstOp = "";
};
const updateDisplay = () => {
	displayEl.innerText = firstOp;
};

// detect the color scheme
const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches; //true
let colorTheme = darkTheme || localStorage.getItem("colorTheme") === "dark"; // true

const changeTheme = () => {
	body.classList.toggle("dark", colorTheme);
	body.classList.toggle("light", !colorTheme);
	btnSwitch.classList.toggle("switch--active", colorTheme);

	colorTheme // falso
		? localStorage.setItem("colorTheme", "dark")
		: localStorage.setItem("colorTheme", "light");
	colorTheme = !colorTheme;
};

changeTheme();

// change theme
btnSwitch.addEventListener("click", () => {
	changeTheme();
});
