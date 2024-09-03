const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importar las rutas
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

// Configurar las rutas
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

// Ruta principal (opcional)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});