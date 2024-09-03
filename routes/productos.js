const express = require('express');
const router = express.Router();
// Para definir rutas
router.get('/', (req, res) => {
    res.send('Lista de productos');
});
router.get('/:id', (req, res) => {
    res.send(`Detalles del producto con ID: ${req.params.id}`);
});
// fin definicion de rutas
module.exports = router;