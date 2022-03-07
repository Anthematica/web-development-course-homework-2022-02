const thema = document.querySelector("#theme");
const historial = document.querySelector(".results div p");
const resultadoActual = document.querySelector(".results div span");

const main = document.querySelector('main');
const buttonsContainerEl = document.querySelector(".buttons");
var number, number1, number2, resultado, operacion = false,
    operacion_rest = false,
    temp = [],
    temp2 = [],
    contador = 0,
    contador2, largo,
    operations = ["%", "./.", "*", "-", "+", "+/-"];

load();

thema.addEventListener('click', e => {
    main.classList.toggle('darkmode');
    store(main.classList.contains('darkmode'));
});

buttonsContainerEl.addEventListener("click", function(e) {
    const button = e.target;


    if (button.tagName == "BUTTON") {

        resultadoActual.classList.add("showresult");
        const type = button.dataset.type;
        const value = button.dataset.value;
        if (type == "operation" && value != "%") {
            operacion = false;
        }
        if (operacion) {
            alert("ingrese una operación para continuar")
        } else {
            if (type == "number") {
                if (!number) {
                    number = value;
                    temp.push(number);
                    if (contador == 1) {
                        temp2 = temp.slice();

                        for (signos of operations) {
                            searchsign(signos);
                        }

                        resultadoActual.textContent = temp2;
                        contador = 0;
                    }
                } else {
                    number = number + value;

                    temp.splice(-1, 1, number);
                }
            } else {
                if (value === "clearall") {

                    clearall()

                } else {

                    if (value === "deleteLast") {

                        if (temp.length == 0) {
                            alert("no hay datos para eliminar");
                        } else {
                            deleteLast()

                        }

                    } else {
                        if (value === "=") {
                            if (temp.length <= 2) {
                                alert("ingrese una operacion completa")
                            } else {
                                for (signos of operations) {
                                    searchsign(signos);
                                }
                                resultadoActual.textContent = temp2;
                                resultadoActual.classList.remove("showresult");
                            }
                        } else {

                            if (number) {
                                if (value === "%") {
                                    operacion = true;
                                    contador = contador + 1;
                                    temp.push(value);
                                    searchsign("%");

                                } else {

                                    temp.push(value);
                                    number = null;
                                    contador = contador + 1;
                                }

                            } else {
                                if (value === "-") {

                                    if (operacion_rest) {

                                        alert("Ingrese un numero")
                                    } else {
                                        number = value;
                                        operacion_rest = true;
                                    }

                                } else {

                                    alert("Ingrese un numero")
                                }
                            }
                        }
                    }
                }


            }

        }

        updateDatos()
    }


})


function load() {
    const darkmode = localStorage.getItem('theme')
    if (!darkmode) {
        store('false');
    } else if (darkmode == 'true') {

        main.classList.toggle('darkmode');
    }
}

function store(value) {

    localStorage.setItem('theme', value);
}

function sum(position) {


    resultado = parseFloat(temp2[position - 1]) + parseFloat(temp2[position + 1])
    temp2.splice(position - 1, 3, resultado);
}

function subtraction(position) {


    resultado = parseFloat(temp2[position - 1]) - parseFloat(temp2[position + 1])
    temp2.splice(position - 1, 3, resultado);

}

function updateDatos() {
    historial.textContent = temp.join(" ");
}

function divide(position) {

    resultado = parseFloat(temp2[position - 1]) / parseFloat(temp2[position + 1])
    temp2.splice(position - 1, 3, resultado);

}

function multiply(position) {

    resultado = parseFloat(temp2[position - 1]) * parseFloat(temp2[position + 1])
    temp2.splice(position - 1, 3, resultado);
}

function clearall() {

    historial.textContent = "Historial";
    resultadoActual.textContent = "Resultado";
    temp = [];
    temp2 = [];
    number = null;
}

function percentage(position) {

    var porcentaje = temp2[position - 1]
    if (porcentaje > 100) {

        porcentaje = porcentaje / 100;
    } else {
        porcentaje = "0." + porcentaje;
    }
    console.log(porcentaje)
    console.log("no pos no entra")

}

function deleteLast() {
    var ultimo = temp[temp.length - 1];
    number = null;
    var arrayTemp = ultimo.split("");
    if (arrayTemp.length == 1) {
        temp = [];

        historial.textContent = "Historial";
        resultadoActual.textContent = "Resultado";
    } else {

        arrayTemp.splice(-1, 1, "");
        var stringTemp = arrayTemp.join("");

        temp[temp.length - 1] = stringTemp.slice();
    }

}

function searchsign(signo) {

    largo = temp.length;
    for (contador2 = 0; contador2 < largo; contador2++) {
        if (temp2[contador2] == signo) {
            switch (signo) {
                case './.':
                    divide(contador2);
                    break
                case '*':
                    multiply(contador2);
                    break
                case '-':
                    subtraction(contador2);
                    break
                case '+':
                    sum(contador2);
                    break
                case 'clearall':
                    clearall();
                    break
                case '%':
                    percentage(contador2);
                    break

            }
        }
    }

}