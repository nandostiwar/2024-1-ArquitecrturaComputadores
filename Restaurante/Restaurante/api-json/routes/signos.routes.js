const express = require('express');
const router = express.Router();
const signoController = require('./controllers/signoController.js');
const usuarioController = require('./controllers/usuarioController.js');

router.post('/login', usuarioController.login);
router
    .get('/', signoController.getAllSignos)
    .get('/:signo', signoController.getOneSigno)
    .patch('/:signoEditar', signoController.updateSigno);

module.exports = router;
