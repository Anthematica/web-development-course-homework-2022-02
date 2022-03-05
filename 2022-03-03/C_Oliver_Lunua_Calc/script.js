const buttom = document.querySelectorAll(".special");
const operat = document.querySelector(".operator");
const result = document.querySelector(".result");
const remove = document.querySelector(".remove");
const suma = document.querySelector(".suma");
const equal = document.querySelector(".equal");
const mode = document.querySelector(".slider");

const array = [];
let sumar = [];

buttom.forEach((btn) => {
  btn.addEventListener("click", function () {
    array.push(btn.textContent);
    operat.textContent = array.join("");
  });
});

remove.addEventListener("click", function () {
  array.pop();
  operat.textContent = array.join("");
});

const eraser = document.querySelector(".eraser");

eraser.addEventListener("click", function (e) {
  array.splice(0, array.length);
  operat.textContent = array;
  sumar.splice(0, sumar.length);
  result.textContent = sumar;
});

equal.addEventListener("click", function () {
  sumar = operat.textContent.split("+").map(function (item) {
    return parseFloat(item);
  });

  sumar = operat.textContent.split("-").map(function (item) {
    return parseFloat(item);
  });

  sumar = operat.textContent.split("÷").map(function (item) {
    return parseFloat(item);
  });

  sumar = operat.textContent.split("x").map(function (item) {
    return parseFloat(item);
  });

  result.textContent = sumar.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  result.textContent = sumar.reduce(
    (previousValue, currentValue) => previousValue - currentValue
  );

  result.textContent = sumar.reduce(
    (previousValue, currentValue) => previousValue / currentValue
  );

  result.textContent = sumar.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
});

mode.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
