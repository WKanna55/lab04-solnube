const express = require('express');
const router = express.Router();
// para definir rutas
router.get('/', (req, res) => {
    res.send('Lista de clientes');
});
router.get('/:id', (req, res) => {
    res.send(`Detalles del cliente con ID: ${req.params.id}`);
});
// fin definicion de rutas
module.exports = router;