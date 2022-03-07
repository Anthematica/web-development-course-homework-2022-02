// ==============cambio de tema===============//
const theme = document.querySelector(".component__theme");
const buttonToggle = document.querySelector(".button__toggle");

// Iconos
const svgModule = document.querySelector(".svg__module-firts");
const svgModuleSecond = document.querySelector(".sbg__module-second");
const svgDeleteLight = document.querySelector(".button__detele_light");
const svgDeleteNaght = document.querySelector(".button__detele_night");

const modeTheme = () =>{
	theme.addEventListener("click", ()=>{
		if (!document.body.classList.contains("theme")) {
            document.body.classList.add("theme");
            buttonToggle.classList.add("modeTheme");
            document.body.style.transition = "backgroundColor 1s ease-in-out";
            document.body.style.backgroundColor = "#171717";

            svgModule.classList.add("hideButton");
            svgModuleSecond.classList.remove("sbg__module-second");
            svgDeleteLight.classList.add("buttonDelete");
            svgDeleteNaght.classList.remove("button__detele_night");
            
        }else {
            document.body.classList.remove("theme");
            buttonToggle.classList.remove("modeTheme");
            document.body.style.backgroundColor = "#E5E5E5";

            svgModule.classList.remove("hideButton");
            svgModuleSecond.classList.add("sbg__module-second");
            svgDeleteLight.classList.remove("buttonDelete");
            svgDeleteNaght.classList.add("button__detele_night");
        }
        if(document.body.classList.contains("theme")){
            localStorage.setItem("theme", "mode Darkr");
           
        }else{
            localStorage.setItem("theme", "mode Light");
           buttonToggle.classList.remove("modeTeme");
        }
	});
}
if(localStorage.getItem("theme") === "mode Darkr"){
    document.body.classList.add("theme");
    buttonToggle.classList.add("modeTheme");
    document.body.style.backgroundColor = "#171717";
}

modeTheme();

// =========CALCULATOR==============//
const displayValorAnterior = document.querySelector(".result");
const displayValorActual = document.querySelector(".operation");
const buttons = document.querySelector(".component__action");
const buttonsAll = document.querySelectorAll(".component__buttons")
const buttonsOperator = document.querySelectorAll(".operator");

const display = new Display(displayValorAnterior,displayValorActual);

const calculadora = new Calculadora();
// console.log(calculadora.sumar(2,6));
// console.log(calculadora.restar(8,6));


buttonsAll.forEach(element =>{
	element.addEventListener("click", valor =>{
		display.agregarNumero(element.innerText);
	});
});

buttonsOperator.forEach(element =>{
	element.addEventListener("click", () =>{
		display.computar(element.value);
		console.log(element.value);
	});
});



setInterval( () =>{
	const time = document.querySelector(".time");
	
	let tiempoActual = new Date();
	let days = tiempoActual.getDate();
	let hours = tiempoActual.getHours();
	let minutes = tiempoActual.getMinutes();
	let seconds = tiempoActual.getSeconds();
	let turno = "am";

	hours >= 12 ? turno = "Pm" : turno = "am";
	hours > 12 ? hours -= 12 : hours = hours;
	hours < 10 ? hours = `0${hours}` : hours = hours;

	minutes < 10 ? minutes = `0${minutes}` : null;
	seconds < 10 ? seconds = `0${seconds}` : null;

	time.innerHTML = `${hours}:${minutes}:${seconds}s ${turno}`;

}, 1000);