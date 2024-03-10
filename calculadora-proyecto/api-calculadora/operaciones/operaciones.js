
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

function division (a,b) {
    let number1 = parseFloat(a);
    let number2 = parseFloat(b);
    return number1/number2;
}
function power (a,b) {
    let number1 = parseFloat(a);
    let number2 = parseInt(b);
    return Math.pow(number1, number2);
}
function rtz (a,b) {
    let number1 = parseFloat(a);
    let number2 = parseInt(b);
    return Math.pow(number1, 1/(number2));
}

module.exports = {
    add,
    subtract,
    multiply,
    division,
    rtz,
    power
}