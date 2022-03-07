class Display {
	constructor(displayValorAnterior,displayValorActual){
		this.displayValorActual = displayValorActual;
		this.displayValorAnterior = displayValorAnterior;
		this.calculador = new Calculadora();
		this.tipoOperation = undefined;
		this.valorActual = "";
		this.valorAnterior = "";
		this.signo = {
			sumar: "+",
			dividir: "%",
			multiplicar: "x",
			restar: "-"
		}
	}
	borrar(){
		this.valorActual = this.valorActual.toString().slice(0,-1);
		this.imprimirValor();
	}
	borrarTodo(){
		this.valorActual = "";
		this.valorAnterior = "";
		this.tipoOperation = undefined;
		this.imprimirValor();
	}
	computar(tipo){
		this.tipoOperation !== "igual" && this.calcular();
		this.tipoOperation = tipo;
		this.valorAnterior = this.valorActual || this.valorAnterior;
		this.valorActual = "";
		this.imprimirValor();
	}
	agregarNumero(num){
		if(num === "." && this.valorActual.includes(".")) return;
		this.valorActual = this.valorActual.toString() + num.toString();;
		this.imprimirValor();
	}
	imprimirValor(){
		this.displayValorActual.textContent = this.valorActual;
		this.displayValorAnterior.textContent = `${this.valorAnterior}`;
	}
	calcular(){
		const valorAnterior = parseFloat(this.valorAnterior);
		const valorActual = parseFloat(this.valorActual);
		if(isNaN(valorActual) || isNaN(valorAnterior)) return;
		this.valorActual = this.calculador[this.tipoOperation](valorAnterior,valorActual)
	}
}