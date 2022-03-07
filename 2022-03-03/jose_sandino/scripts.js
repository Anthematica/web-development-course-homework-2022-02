const buttons = document.querySelector('.buttons');
const previousTextEl = document.querySelector('.display-operation');
const currentTextEl = document.querySelector('.display-total');

class Calculator {
   constructor(previousTextEl, currentTextEl) {
      this.previousTextEl = previousTextEl;
      this.currentTextEl = currentTextEl;
      this.clear();
   }
   clear() {
      this.currentOper = '';
      this.previousOper = '';
      this.operation = undefined;
      this.previousTextEl.innerText = '';
   }
   delete() {
      this.currentOper = this.currentOper.toString().slice(0, -1);
   }
   appendNumber(number) {
      if (number === '.' && this.currentOper.includes('.')) return;
      this.currentOper = this.currentOper.toString() + number.toString();
   }
   operations(operation) {
      if (this.currentOper === '') return;
      if (this.previousOper !== '') {
         this.calculation();
      }
      this.operation = operation;
      this.previousOper = this.currentOper;
      this.currentOper = '';
   }
   calculation() {
      let evaluation;
      const prev = parseFloat(this.previousOper);
      const current = parseFloat(this.currentOper);
      if (isNaN(prev) || isNaN(current)) {
         return;
      }
      switch (this.operation) {
         case '+':
            evaluation = prev + current;
            break;
         case '-':
            evaluation = prev - current;
            break;
         case 'x':
            evaluation = prev * current;
            break;
         case '÷':
            evaluation = prev / current;
            break;
         case '%':
            evaluation = (prev / 100) * current;
            break;
         case '*(-1)':
            evaluation = -prev * 1;
            break;
         default:
            return;
      }
      this.currentOper = evaluation;
      this.operation = undefined;
      this.previousOper = '';
   }
   updateDisplay() {
      this.currentTextEl.innerText = this.currentOper;
      if (this.operation != null) {
         this.previousTextEl.innerText = `${this.previousOper} ${this.operation} ${this.currentOper}`;
      }
   }
}

const calculator = new Calculator(previousTextEl, currentTextEl);

buttons.addEventListener('click', function (e) {
   const button = e.target;
   /* const character = button.dataset.value; */

   if (button.classList.contains('operator')) {
      /*  console.log(`Soy un operador ${character}`); */
      calculator.operations(button.innerText);
      calculator.updateDisplay();
   } else if (button.classList.contains('equal')) {
      /*       console.log(`Soy un igual ${character}`);
       */ calculator.calculation();
      calculator.updateDisplay();
   } else if (button.classList.contains('delete')) {
      /*       console.log(`Soy un delete ${character}`);
       */ calculator.delete();
      calculator.updateDisplay();
   } else if (button.classList.contains('clear')) {
      /*       console.log(`Soy un clear ${character}`);
       */ calculator.clear();
      calculator.updateDisplay();
   } else if (button.classList.contains('numbers')) {
      /*       console.log(`Soy un numero ${character}`);
       */ calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
   } else {
      return;
   }
});

const schemeMode = document.querySelector('.toggle');
const darkmode = document.querySelector('.dark');

schemeMode.addEventListener('click', function (e) {
   const mode = e.target;
   console.log('click');
   let matched = window.matchMedia('(prefers-color-scheme: light)').matches;
   if (matched) {
      console.log(matched);
      var theme = document.body;
      theme.classList.toggle('dark');
      localStorage.setItem('theme', 'dark');
   }
});
