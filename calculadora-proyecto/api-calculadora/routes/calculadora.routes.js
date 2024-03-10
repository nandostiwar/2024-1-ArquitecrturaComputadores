const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../controllers/calculadoraControllers.js');

router
    .post('/sumar', calculadoraControllers.sumar)
    .post('/restar', calculadoraControllers.restar)
    .post('/multiplicar', calculadoraControllers.multiplicar)
    .post('/dividir', calculadoraControllers.dividir)
    .post('/elevar2', calculadoraControllers.elevar2)
    .post('/borrar', calculadoraControllers.borrar)
module.exports = router;