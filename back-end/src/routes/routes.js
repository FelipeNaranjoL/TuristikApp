const express = require('express');  // Importa Express para gestionar las rutas.
const router = express.Router();  // Crea una instancia del enrutador de Express.
const { getOpiniones, getTuristas, getSitiosTuristicos, getAllData } = require('../controllers/Controller');  // Importa las funciones del controlador.

// Rutas para obtener los datos de cada colección

// Ruta para obtener las opiniones de la colección "opiniones"
router.get('/opiniones', getOpiniones);

// Ruta para obtener los turistas de la colección "Turistas"
router.get('/turistas', getTuristas);

// Ruta para obtener los sitios turísticos de la colección "SitioTuristico"
router.get('/sitios-turisticos', getSitiosTuristicos);

// Ruta para obtener todos los datos de las colecciones juntas
router.get('/data', getAllData);

module.exports = router;  // Exporta el enrutador para que pueda ser utilizado en la aplicación principal.
