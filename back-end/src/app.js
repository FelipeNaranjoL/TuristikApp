// src/app.js

const express = require('express');
const routes = require('./routes/routes');  // Importa las rutas

const app = express();
const PORT = process.env.PORT || 3000;

// Usa las rutas
app.use('/', routes);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
