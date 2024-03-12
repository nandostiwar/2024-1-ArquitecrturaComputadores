
/**
 * Sumar dos cantidades numéricas
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function add(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 + number2;
}

function subtract(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 - number2;
}

function multiply(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 * number2;
}
function divide(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 / number2;
}

function squareRoot(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return Math.sqrt(number1 + number2);
}    

function power(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return Math.pow(number1 + number2, 2);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    power
}