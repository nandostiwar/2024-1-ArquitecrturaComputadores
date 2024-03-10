const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../controllers/calculadoraControllers.js');

router
    .post('/sumar', calculadoraControllers.sumar)
    .post('/restar', calculadoraControllers.restar)
    .post('/multiplicar', calculadoraControllers.multiplicar)
    .post('/dividir', calculadoraControllers.dividir)
    .post('/elevar_al_cuadrado', calculadoraControllers.elevar_al_cuadrado)
    .post('/raizCuadrada', calculadoraControllers.raizCuadrada)

module.exports = router;