function sumar(a, b, buffer){ 
        if (buffer == null){
            let result = parseFloat(a)+parseFloat(b)
            let history = a + '+' + b 
            let resultarr = [result, history]
            console.log(buffer);
            return resultarr
           
        }
        else{
            a = buffer
            console.log(a);
            let result = parseFloat(a)+parseFloat(b)
            let history = a + '+' + b 
            let resultarr = [result, history]
            return resultarr
        }
        

        

}
function x1(a,b){
    result=document.getElementById('preview')
    console.log(result);
    resultado=result * -1

}
function restar(a, b, buffer){
    if (buffer == null){
        let result = parseFloat(a)-parseFloat(b)
        let history = a + '-' + b 
        let resultarr = [result, history]
        console.log(buffer);
        return resultarr
       
    }
    else{
        a = buffer
        console.log(a);
        let result = parseFloat(a)-parseFloat(b)
        let history = a + '+' + b 
        let resultarr = [result, history]
        return resultarr
    }
}
function div(a, b, buffer){ 
    if (buffer == null){
        let result = parseFloat(a)/parseFloat(b)
        let history = a + '/' + b 
        let resultarr = [result, history]
        console.log(buffer);
        return resultarr
       
    }
    else{
        a = buffer
        console.log(a);
        let result = parseFloat(a)+parseFloat(b)
        let history = a + '/' + b 
        let resultarr = [result, history]
        return resultarr
    }
}
function mult(a, b, buffer){ 
    if (buffer == null){
        let result = parseFloat(a)*parseFloat(b)
        let history = a + 'x' + b 
        let resultarr = [result, history]
        console.log(buffer);
        return resultarr
       
    }
    else{
        a = buffer
        console.log(a);
        let result = parseFloat(a)*parseFloat(b)
        let history = a + 'x' + b 
        let resultarr = [result, history]
        return resultarr
    }
}


let numero1 =''

let numero2 = ''

let operacion = ''

let buffer 

document.getElementById('0').addEventListener('click', () => {
    if(operacion == ''){
        numero1 ="" +  numero1 + 0;
        let num1str = numero1.slice(0,12)
        console.log(typeof num1str);
        document.getElementById('preview').innerHTML = num1str  
}
else{
    numero2 ="" +  numero2 + 0; 
    let num2str = numero2.slice(0,12)
        document.getElementById('preview').innerHTML = num2str     
}   

})
document.getElementById('1').addEventListener('click', () => {
    if(operacion == ''){
            numero1 ="" +  numero1 + 1;
            let num1str = numero1.slice(0,12)
            document.getElementById('preview').innerHTML = num1str  
    }
    else{
        numero2 ="" +  numero2 + 1; 
        let num2str = numero2.slice(0,12)
            document.getElementById('preview').innerHTML = num2str     
    }    
})
document.getElementById('2').addEventListener('click', () => {
    if(operacion == ''){
        numero1 ="" +  numero1 + 2;
        let num1str = numero1.slice(0,12)
        document.getElementById('preview').innerHTML = num1str  
}
else{
    numero2 ="" +  numero2 + 2; 
    let num2str = numero2.slice(0,12)
        document.getElementById('preview').innerHTML = num2str     
}   
})
document.getElementById('3').addEventListener('click', () => {
    if(operacion == ''){
        numero1 = "" +  numero1 + 3;
        let num1str = numero1.slice(0,12)
        document.getElementById('preview').innerHTML = num1str  
}
else{
    numero2 ="" +  numero2 + 3; 
    let num2str = numero2.slice(0,12)
        document.getElementById('preview').innerHTML = num2str     
}   
    
})
document.getElementById('4').addEventListener('click', () => {
    if(operacion == ''){
        numero1 ="" +  numero1 + 4;
        let num1str = numero1.slice(0,12)
        document.getElementById('preview').innerHTML = num1str  
}
else{
    numero2 ="" +  numero2 + 4; 
    let num2str = numero2.slice(0,12)
        document.getElementById('preview').innerHTML = num2str     
}   
    
})
document.getElementById('5').addEventListener('click', () => {
    if(operacion == ''){
        numero1 ="" +  numero1 + 5;
        let num1str = numero1.slice(0,12)
        document.getElementById('preview').innerHTML = num1str  
}
else{
    numero2 ="" +  numero2 + 5; 
    let num2str = numero2.slice(0,12)
        document.getElementById('preview').innerHTML = num2str     
}   
})
document.getElementById('6').addEventListener('click', () => {
    if(operacion == ''){
        numero1 ="" +  numero1 + 6;
        let num1str = numero1.slice(0,12)
        document.getElementById('preview').innerHTML = num1str  
}
else{
    numero2 ="" +  numero2 + 6; 
    let num2str = numero2.slice(0,12)
        document.getElementById('preview').innerHTML = num2str     
}   
})
document.getElementById('7').addEventListener('click', () => {
     if(operacion == ''){
        numero1 ="" +  numero1 + 7;
        let num1str = numero1.slice(0,12)
        document.getElementById('preview').innerHTML = num1str  
}
else{
    numero2 ="" +  numero2 + 7; 
    let num2str = numero2.slice(0,12)
        document.getElementById('preview').innerHTML = num2str     
}   
})
document.getElementById('8').addEventListener('click', () => {
    if(operacion == ''){
        numero1 ="" +  numero1 + 8;
        let num1str = numero1.slice(0,12)
        document.getElementById('preview').innerHTML = num1str  
}
else{
    numero2 ="" +  numero2 + 8; 
    let num2str = numero2.slice(0,12)
        document.getElementById('preview').innerHTML = num2str     
}   
})
document.getElementById('9').addEventListener('click', () => {
    if(operacion == ''){
        numero1 ="" +  numero1 + 9;
        let num1str = numero1.slice(0,12)
        document.getElementById('preview').innerHTML = num1str  
}
else{
    numero2 ="" +  numero2 + 9; 
    let num2str = numero2.slice(0,12)
        document.getElementById('preview').innerHTML = num2str     
}   
})
document.getElementById('dot').addEventListener('click', () => {
    
    if(operacion === ''){
        if(numero1 === ''){
            numero1 = "0.";
            document.getElementById('preview').innerHTML = numero1
            
        }   
        else if(!numero1.includes('.')){
            numero1 ="" +  numero1 + '.'; 
            document.getElementById('preview').innerHTML = numero1
            
        }  
    }  
    else   {
        if(numero2 === ''){
            numero2 = "0.";
            document.getElementById('preview').innerHTML = numero2
        }     
        else if(!numero2.includes('.')){
            numero2 ="" +  numero2 + '.'; 
            document.getElementById('preview').innerHTML = numero2
        }  
    }   
     
    
})
document.getElementById('delete').addEventListener('click', () => {
    if(operacion == ''){
        let newNum1 = numero1.slice(0, -1);     
        document.getElementById('preview').innerHTML= newNum1
        numero1=newNum1
        


    }
    else{
        let newNum2 = numero2.slice(0, -1);     
        document.getElementById('preview').innerHTML= newNum2
        numero2=newNum2
               
    }    

})
document.getElementById('ac').addEventListener('click', () => {
    if(operacion == ''){
        document.getElementById('result').innerHTML= ''
        document.getElementById('preview').innerHTML= ''
        numero1 ='' 
        numero2 =''  
        resultado = ''  
        operacion = ''
        historyDisplay = ''
        buffer = null
       
        
    }
    else{
        document.getElementById('result').innerHTML= ''
        document.getElementById('preview').innerHTML= ''
        numero2 = ''
        numero1 = ''
        resultado = ''
        operacion = ''
        historyDisplay = ''

        
    }  

})
document.getElementById('suma').addEventListener('click', () => {
    document.getElementById('preview').innerHTML= ''
    document.getElementById('result').innerHTML= numero1 + '+'
    operacion="suma" 
})
document.getElementById('x-1').addEventListener('click', () => {
    operacion="x1" 
})
document.getElementById('div').addEventListener('click', () => {
    operacion="div" 
})
document.getElementById('rest').addEventListener('click', () => {
    operacion="restar" 
})
document.getElementById('mult').addEventListener('click', () => {
    operacion="mult" 
})
document.getElementById('radical').addEventListener('click', () => {
    operacion="raiz" 
})
document.getElementById('equal').addEventListener('click', () => {
    let resultado = ''
    let strResult
    

    switch(operacion){
        case "suma": 
            strResult = sumar(numero1, numero2, buffer )
            console.log(strResult);
            resultado=strResult[0]
            historyDisplay=strResult[1]
            buffer=resultado
            break

        case "restar":
            strResult = restar(numero1, numero2, buffer )
            console.log(strResult);
            resultado=strResult[0]
            historyDisplay=strResult[1]
            buffer=resultado
            break
        case "mult": 
        strResult = mult(numero1, numero2, buffer )
        console.log(strResult);
        resultado=strResult[0]
        historyDisplay=strResult[1]
        buffer=resultado
        break

        case "div":
            rstrResult = div(numero1, numero2, buffer )
            console.log(strResult);
            resultado=strResult[0]
            historyDisplay=strResult[1]
            buffer=resultado
            break

        case "raiz":
            resultado = raiz(numero1)
            break
        case "x1":
            resultado=x1(numero1,numero2)
        break
   }

    numero2 = ''
    document.getElementById('preview').innerHTML= resultado



    document.getElementById('result').innerHTML= historyDisplay

})


document.querySelector('.switch-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark')
})







