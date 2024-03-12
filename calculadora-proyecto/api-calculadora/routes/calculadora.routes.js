const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../controllers/calculadoraControllers.js');

router
    .post('/sumar', calculadoraControllers.sumar)
    .post('/restar', calculadoraControllers.restar)
    .post('/multiplicar', calculadoraControllers.multiplicar)
    .post('/dividir', calculadoraControllers.dividir)
    .post('/raizCuadrada', calculadoraControllers.raizCuadrada)
    .post('/potencia', calculadoraControllers.potencia);

module.exports = router;