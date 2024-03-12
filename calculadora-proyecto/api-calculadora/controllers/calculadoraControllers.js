const {add, subtract, multiply,divide, squareRoot,power} = require('../operaciones/operaciones.js');

function sumar(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = add(number1, number2);
    res.json({
        resultado: result
    });
}

function restar(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = subtract(number1, number2);
    res.json({
        resultado: result
    })
}

function multiplicar(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = multiply(number1, number2);
    res.json({
        resultado: result
    })
}

function dividir(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = divide(number1, number2);
    res.json({
        resultado: result
    })
}

function raizCuadrada(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = squareRoot(number1 , number2);
    res.json({
        resultado: result
    })
}

function potencia(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = power(number1, number2);
    res.json({
        resultado: result
    })
}
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    raizCuadrada,
    potencia
}