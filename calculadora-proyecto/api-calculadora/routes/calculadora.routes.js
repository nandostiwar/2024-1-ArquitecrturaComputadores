const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../controllers/calculadoraControllers.js');

router
    .post('/sumar', calculadoraControllers.sumar)
    .post('/restar', calculadoraControllers.restar)
    .post('/multiplicar', calculadoraControllers.multiplicar)
    .post('/dividir', calculadoraControllers.dividir)
    .post('/potencia', calculadoraControllers.potencia)
    .post('/calcularRaiz', calculadoraControllers.calcularRaiz);

module.exports = router;