const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Bem Vindo!!'));
router.get('/clients', (req, res) => res.send('Processando clientes'));
router.get('/cars', (req, res) => res.send('Processando carros'));

module.exports = router;