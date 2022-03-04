const toggleDarkMode = (containerEl) => {
  containerEl.classList.toggle("dark-theme", toggleFlag);

  const plusminIconBlackEl = document.querySelector(".plus-minus-black");
  const plusminIconWhiteEl = document.querySelector(".plus-minus-white");
  const deleteIconBlackEl = document.querySelector(".delete-black");
  const deleteIconWhiteEl = document.querySelector(".delete-white");

  plusminIconBlackEl.classList.toggle("toggle-show", !toggleFlag);
  deleteIconBlackEl.classList.toggle("toggle-show", !toggleFlag);
  plusminIconWhiteEl.classList.toggle("toggle-show", toggleFlag);
  deleteIconWhiteEl.classList.toggle("toggle-show", toggleFlag);

  toggleFlag
    ? localStorage.setItem("colorScheme", "dark")
    : localStorage.setItem("colorScheme", "light");

  toggleFlag = !toggleFlag;
};

// -------------------------------------

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const togglerWrapperEl = document.querySelector(".toggler-wrapper");
const containerEl = document.querySelector(".container");

let toggleFlag = isDarkMode || localStorage.getItem("colorScheme") === "dark";
console.log(
  toggleFlag,
  isDarkMode,
  localStorage.getItem("colorScheme") === "dark"
);

togglerWrapperEl.firstElementChild.classList.toggle("toggled", toggleFlag);
toggleDarkMode(containerEl);

togglerWrapperEl.addEventListener("click", (e) => {
  togglerWrapperEl.firstElementChild.classList.toggle("toggled");

  toggleDarkMode(containerEl);
});

// -------------------------------------

const evaluateExpression = (expression) => {
  let result = 0;
  let operatorIndex = expression.search(/[-+×÷]/i);
  let operator = expression.charAt(operatorIndex);

  const expArr = expression.split(/[-+×÷]/i);

  switch (operator) {
    case "+":
      result = parseFloat(expArr[0]) + parseFloat(expArr[1]);
      console.log(result);
      break;
    case "-":
      result = parseFloat(expArr[0]) - parseFloat(expArr[1]);
      console.log(result);
      break;
    case "×":
      result = parseFloat(expArr[0]) * parseFloat(expArr[1]);
      console.log(result);
      break;
    case "÷":
      result = parseFloat(expArr[0]) / parseFloat(expArr[1]);
      console.log(result);
      break;
  }
  return result;
};

const processEvent = (clickedBtn, opEl, resEl) => {
  switch (clickedBtn.classList[2]) {
    case "clear":
      opEl.value = "";
      resEl.value = "";
      break;
    case "plus-minus":
      break;
    case "del":
      break;
    case "eq":
      resEl.value = evaluateExpression(opEl.value);
      break;
    default:
      opEl.value += clickedBtn.innerText;
      break;
  }
};

// -------------------------------------

const buttonsEl = document.querySelector(".buttons");

buttonsEl.addEventListener("click", (e) => {
  let clickableEl =
    e.target.classList.contains("btn-num") ||
    e.target.classList.contains("btn-ops") ||
    e.target.classList.contains("btn-other");

  if (!clickableEl) {
    return;
  }

  const opTextEl = document.querySelector(".operation");
  const resTextEl = document.querySelector(".result");

  processEvent(e.target, opTextEl, resTextEl);
});
