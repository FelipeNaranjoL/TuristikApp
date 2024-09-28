// src/routes/routes.js

const express = require('express');
const router = express.Router();
const { getOpiniones, getTuristas, getSitiosTuristicos, getAllData } = require('../controllers/Controller');

// Rutas para obtener los datos de cada colección
router.get('/opiniones', getOpiniones);
router.get('/turistas', getTuristas);
router.get('/sitios-turisticos', getSitiosTuristicos);

// Ruta para obtener todos los datos de las colecciones juntas
router.get('/data', getAllData);

module.exports = router;
