const { add, subtract, multiply, dividirNumeros, elevarAlCuadrado, borrarResultado } = require('../operaciones/operaciones.js');

function sumar(req, res) {
    const { body } = req;
    const { number1, number2 } = body;
    const result = add(number1, number2);
    res.json({
        resultado: result
    });
}

function restar(req, res) {
    const { body } = req;
    const { number1, number2 } = body;
    const result = subtract(number1, number2);
    res.json({
        resultado: result
    })
}

function multiplicar(req, res) {
    const { body } = req;
    const { number1, number2 } = body;
    const result = multiply(number1, number2);
    res.json({
        resultado: result
    })
}

function dividir(req, res) {
    const { body } = req;
    const { number1, number2 } = body;
    if (number2 === 0) {
        return res.status(400).json({ error: "No es posible dividir entre cero." });
    }
    const result = dividirNumeros(number1, number2);
    res.json({
        resultado: result
    });
}

function elevar2(req, res) {
    const { body } = req;
    const { number1 } = body;
    const result = elevarAlCuadrado(number1);
    res.json({
        resultado: result
    })
}
function borrar(req, res) {
    const { body } = req;
    const { number1, number2 } = body;
    borrarResultado(number1, number2);
    res.json({
        resultado: " "      
    });
}
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    elevar2,
    borrar
}