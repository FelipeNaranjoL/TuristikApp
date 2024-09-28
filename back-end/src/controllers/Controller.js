// src/controllers/Controller.js

const { db } = require('../config/firestoreConfig');

// Función para obtener los datos de la colección "opiniones"
const getOpiniones = async (req, res) => {
  try {
    const opinionesRef = db.collection('opiniones');
    const snapshot = await opinionesRef.get();
    const opiniones = [];
    snapshot.forEach(doc => {
      opiniones.push({ id: doc.id, ...doc.data() });
    });

    res.json(opiniones);
  } catch (error) {
    console.error("Error obteniendo opiniones: ", error);
    res.status(500).send('Error obteniendo opiniones.');
  }
};

// Función para obtener los datos de la colección "Turistas"
const getTuristas = async (req, res) => {
  try {
    const turistasRef = db.collection('Turistas');
    const snapshot = await turistasRef.get();
    const turistas = [];
    snapshot.forEach(doc => {
      turistas.push({ id: doc.id, ...doc.data() });
    });

    res.json(turistas);
  } catch (error) {
    console.error("Error obteniendo turistas: ", error);
    res.status(500).send('Error obteniendo turistas.');
  }
};

// Función para obtener los datos de la colección "SitioTuristico"
const getSitiosTuristicos = async (req, res) => {
  try {
    const sitiosRef = db.collection('SitioTuristico');
    const snapshot = await sitiosRef.get();
    const sitiosTuristicos = [];
    snapshot.forEach(doc => {
      sitiosTuristicos.push({ id: doc.id, ...doc.data() });
    });

    res.json(sitiosTuristicos);
  } catch (error) {
    console.error("Error obteniendo sitios turísticos: ", error);
    res.status(500).send('Error obteniendo sitios turísticos.');
  }
};

// Función para obtener los datos de todas las colecciones juntas
const getAllData = async (req, res) => {
  try {
    // Obtener datos de la colección "opiniones"
    const opinionesRef = db.collection('opiniones');
    const opinionesSnapshot = await opinionesRef.get();
    const opiniones = [];
    opinionesSnapshot.forEach(doc => {
      opiniones.push({ id: doc.id, ...doc.data() });
    });

    // Obtener datos de la colección "Turistas"
    const turistasRef = db.collection('Turistas');
    const turistasSnapshot = await turistasRef.get();
    const turistas = [];
    turistasSnapshot.forEach(doc => {
      turistas.push({ id: doc.id, ...doc.data() });
    });

    // Obtener datos de la colección "SitioTuristico"
    const sitiosRef = db.collection('SitioTuristico');
    const sitiosSnapshot = await sitiosRef.get();
    const sitiosTuristicos = [];
    sitiosSnapshot.forEach(doc => {
      sitiosTuristicos.push({ id: doc.id, ...doc.data() });
    });

    // Combinar los datos en un solo objeto
    const allData = {
      opiniones,
      turistas,
      sitiosTuristicos
    };

    // Devolver todos los datos en formato JSON
    res.json(allData);
  } catch (error) {
    console.error("Error obteniendo los datos: ", error);
    res.status(500).send('Error obteniendo los datos.');
  }
};

module.exports = {
  getOpiniones,
  getTuristas,
  getSitiosTuristicos,
  getAllData
};
