const { add, subtract, multiply, division, exponente, raiz } = require('../operaciones/operaciones.js');

function sumar(req, res){
    const { body } = req;
    const { number1, number2 } = body;
    const result = add(number1, number2);
    res.json({
        resultado: result
    });
}

function restar(req, res){
    const { body } = req;
    const { number1, number2 } = body;
    const result = subtract(number1, number2);
    res.json({
        resultado: result
    });
}

function multiplicar(req, res){
    const { body } = req;
    const { number1, number2 } = body;
    const result = multiply(number1, number2);
    res.json({
        resultado: result
    });
}

function dividir(req, res){
    const { body } = req;
    const { number1, number2 } = body;
    const result = division(number1, number2);
    res.json({
        resultado: result
    });
}

function potencia(req, res){
    const { body } = req;
    const { number1, number2 } = body;
    const result = exponente(number1, number2);
    res.json({
        resultado: result
    })
}

function calcularRaiz(req, res){
    const { body } = req;
    const { number1, number2} = body;
    const result = raiz(number1, number2);
    res.json({
        resultado: result
    });
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    potencia,
    calcularRaiz
}
