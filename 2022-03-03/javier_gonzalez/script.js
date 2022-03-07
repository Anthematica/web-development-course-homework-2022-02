const operation = document.querySelector(".operation");
const resultDisplay = document.querySelector(".result");
const buttonNumber = document.querySelectorAll(".button");
const buttonDelete = document.querySelector(".button_svg");
const buttonC = document.querySelector(".button_color1");
//const buttonOperator = document.querySelectorAll(".button_color2");
const buttonOperatorRest = document.querySelector(".button_color2.rest");
const buttonOperatorMulti = document.querySelector(".button_color2.multi");
const buttonOperatorResult = document.querySelector("#buttonResult")
const buttonOperatorSum = document.querySelector(".plus");
const operators = document.querySelectorAll('.buttonOperators');
const darkMode = document.querySelector('.slider');

const array = [];
let a = [];
let ope;
//function plus(num1, num2){
    //return num1 + num2
//}

//function rest(num1, num2){
    //return num1 - num2
//}

//function multi(num1, num2){
    //return num1 * num2
//}

//function divide(num1, num2){
    //return num1 / num2
//}

let sumO = false;

darkMode.addEventListener('click', function(e){
    document.body.classList.toggle('dark');
});

operators.forEach(function(button){
    button.addEventListener('click', function(e){
        ope = e.target.textContent
        array.push(ope);
        operation.textContent = array.join('');
        console.log("rest", array);
    });
});

buttonOperatorResult.addEventListener('click', function(e){
    
    if (ope === '+') {
        // function sum(x, y){
        //     return parseInt(x) + parseInt(y);
        // }  

        // console.log(sum(array[0], array[1]))
        a.push(operation.textContent);

        console.log('aja ', a);
            
        const b = a.join('').split('+').map(function(item){
            return parseInt(item);
        })
        console.log('result', b);
        const initialResult = 0;
        const result = b.reduce((previusValue, currentValue) => previusValue + currentValue, initialResult);
        console.log('ajaa ', result)
        resultDisplay.textContent = result;
        a = [];
        operation.textContent = result
    }

    if (ope === '-') {
        // a.push(operation.textContent);              
        //     const b = a.join('').split('-').map(function(item){
        //         return parseInt(item);
        //     })
        // console.log('result', b);
        // let initialResult = 0
        // const result = b.reduce((previusValue, currentValue) => previusValue - currentValue, initialResult);
        // function sum(x, y){
        //     return a[0] - a[1]
        // }  
        // resultDisplay.textContent = result.textContent;
        // console.log(sum(a[0], a[1]))
        a.push(operation.textContent);
            
        const b = a.join('').split('-').map(function(item){
            return parseInt(item);
        })
        console.log('result', b);
        const initialResult = 0;
        const result = b.reduce((previusValue, currentValue) => previusValue - currentValue);
        console.log(initialResult)
        //console.log('ajaa ', result)
        resultDisplay.textContent = result;
    }

    if (ope === '*') {

        // console.log(sum(array[0], array[1]))
        a.push(operation.textContent);
        const b = a.join('').split('*').map(function(item){
            return parseFloat(item);
        })
        console.log({b})
        console.log('result', b);
        const initialResult = 0;
        const result = b.reduce((previusValue, currentValue) => previusValue * currentValue);
        console.log('ajaa ', result)
        resultDisplay.textContent = result;
        // function multi(x, y){
        //     return x * y;
        // }  
        // const result = multi(b[0], b[1]);
        // resultDisplay.textContent = result;
    }

    if (ope === '/') {
        // function divide(x, y){
        //     return x / y;
        // } 

        a.push(operation.textContent);

        // console.log(sum(array[0], array[1]))
        const b = a.join('').split('/').map(function(item){
            return parseFloat(item);
        })
        console.log('result', b);
        const initialResult = 0;
        const result = b.reduce((previusValue, currentValue) => previusValue / currentValue);
        console.log('ajaa ', result)
        resultDisplay.textContent = result;
        // const result = divide(b[0], b[1]);
        // resultDisplay.textContent = result;
    }

    // if (sumO) {
    //     console.log(sum(array[0], array[1]));
    // }
    
});

// buttonOperatorSum.addEventListener('click', function(e){
//     sumO = true;
// });

buttonNumber.forEach(function (button){
    button.addEventListener('click', function(event){
        array.push(button.textContent);
        operation.textContent = array.join('');
        console.log("hola", array);
    });
});

buttonDelete.addEventListener('click', function(){
    array.pop();
    operation.textContent = array.join("");
    console.log('adios ', array);
});

buttonC.addEventListener('click', function(){
    array.splice(0, array.length);
    a.splice(0, a.length);
    a.join('');
    operation.textContent = array.join("");
    resultDisplay.textContent = 0;
});

// buttonOperator.forEach(function (buttonPlus){
//     buttonPlus.addEventListener('click', function(e){
//         if(buttonPlus.textContent === '+'){
//             array.push(buttonPlus.textContent);
//             operation.textContent = array.join('');
//             console.log("plus", array);  
//         }

//         if(buttonPlus.textContent === '='){
//             a.push(operation.textContent);
            
            

//             const b = a.join('').split('+').map(function(item){
//                 return parseInt(item);
//             })
//             console.log('result', b);
//             const initialResult = 0;
//             const result = b.reduce((previusValue, currentValue) => previusValue + currentValue, initialResult);
//             console.log('ajaa ', result)
//             resultDisplay.textContent = result;
//         }
//     });
// });

//     buttonOperatorRest.addEventListener('click', function(e){
//         if(buttonOperatorRest.textContent === '-'){
//             array.push(buttonOperatorRest.textContent);
//             operation.textContent = array.join('');
//             console.log("rest", array);
//         }

//         if(buttonOperatorRest.textContent === '='){
//             a.push(operation.textContent);
            
//             const b = a.join('').split('-').map(function(item){
//                 return parseInt(item);
//             })
//             console.log('result', b);
//             const initialResult = 0;
//             const result = b.reduce((previusValue, currentValue) => previusValue - currentValue, initialResult);
//             console.log('ajaa ', result)
//             resultDisplay.textContent = result;
//         }
//     });

//     buttonOperatorMulti.addEventListener('click', function(e){
//         if(buttonOperatorMulti.textContent === '*'){
//             array.push(buttonOperatorMulti.textContent);
//             operation.textContent = array.join('');
//             console.log('multi', array);
//         }
//     })


    


