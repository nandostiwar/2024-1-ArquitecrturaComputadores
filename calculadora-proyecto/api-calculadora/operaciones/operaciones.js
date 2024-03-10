const { borrar } = require("../controllers/calculadoraControllers");

/**
 * Sumar dos cantidades numéricas
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function add(a, b) {
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 + number2;
}

function subtract(a, b) {
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 - number2;
}

function multiply(a, b) {
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 * number2;
}

function dividirNumeros(a, b) {
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 / number2;
}

function elevarAlCuadrado(a) {
    let number1 = parseInt(a);
    return number1 * number1;
    
}

function borrarResultado() {
    number1 = null;
    number2 = null;
    return number1, number2;
}
module.exports = {
    add,
    subtract,
    multiply,
    dividirNumeros,
    elevarAlCuadrado,
    borrarResultado
}