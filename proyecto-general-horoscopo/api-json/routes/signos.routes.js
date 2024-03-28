const express = require('express');
const router = express.Router();
const signoController = require('./controllers/signoController.js');

router.get('/', signoController.getAllSignos);
router.get('/:signo', signoController.getOneSigno);
router.patch('/:signoEditar', signoController.updateSigno);
router.post('/login', signoController.login); // Cambiado de GET a POST

module.exports = router;





