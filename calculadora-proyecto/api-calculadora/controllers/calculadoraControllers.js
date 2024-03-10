const { add, subtract, multiply, division,rtz, power } = require('../operaciones/operaciones.js');

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

function dividir (req, res) {
    const { body } = req;
    const { number1, number2 } = body;
    let result = '';
    if (number2 == 0) {
        result = 'No se puede dividir por cero'
    }else{
        result = division(number1,number2)
    }
    res.json({
        resultado: result
    })
}
function raiz (req, res)  {
    const { body } = req;
    const { number1, number2 } = body;
    let result = '';

    if(number2 != 0){
        result =  rtz(number1,number2)
    }else{
        result = 'No se puede obtener raiz de cero'
    }
    res.json({
        resultado: result
    })
}

function potencia (req, res)  {
    const { body } = req;
    const { number1, number2 } = body;
    result =  power(number1,number2)
    res.json({
        resultado: result
    })
}

function validar_campos (a,b) {
    let mensaje = '';
    if(a == '' || b == ''){
        mensaje = 'Los campos son obligatorios'
    }

    return mensaje;
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    raiz,
    potencia
}