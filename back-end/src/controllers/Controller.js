const { db } = require('../config/firestoreConfig');  // Importa la configuración de Firestore desde el archivo de configuración.

// Función para obtener los datos de la colección "opiniones"
const getOpiniones = async (req, res) => {
  try {
    const opinionesRef = db.collection('opiniones');  // Referencia a la colección "opiniones" en Firestore.
    const snapshot = await opinionesRef.get();  // Obtiene los documentos de la colección.
    const opiniones = [];  // Inicializa un arreglo para almacenar las opiniones.
    snapshot.forEach(doc => {
      opiniones.push({ id: doc.id, ...doc.data() });  // Agrega cada opinión al arreglo, incluyendo el ID del documento.
    });

    res.json(opiniones);  // Envía el arreglo de opiniones como respuesta en formato JSON.
  } catch (error) {
    console.error("Error obteniendo opiniones: ", error);  // Muestra el error en la consola si ocurre un problema.
    res.status(500).send('Error obteniendo opiniones.');  // Envía un error 500 si algo falla.
  }
};

// Función para obtener los datos de la colección "Turistas"
const getTuristas = async (req, res) => {
  try {
    const turistasRef = db.collection('Turistas');  // Referencia a la colección "Turistas" en Firestore.
    const snapshot = await turistasRef.get();  // Obtiene los documentos de la colección.
    const turistas = [];  // Inicializa un arreglo para almacenar los datos de los turistas.
    snapshot.forEach(doc => {
      turistas.push({ id: doc.id, ...doc.data() });  // Agrega cada turista al arreglo, incluyendo el ID del documento.
    });

    res.json(turistas);  // Envía el arreglo de turistas como respuesta en formato JSON.
  } catch (error) {
    console.error("Error obteniendo turistas: ", error);  // Muestra el error en la consola si ocurre un problema.
    res.status(500).send('Error obteniendo turistas.');  // Envía un error 500 si algo falla.
  }
};

// Función para obtener los datos de la colección "SitioTuristico"
const getSitiosTuristicos = async (req, res) => {
  try {
    const sitiosRef = db.collection('SitioTuristico');  // Referencia a la colección "SitioTuristico" en Firestore.
    const snapshot = await sitiosRef.get();  // Obtiene los documentos de la colección.
    const sitiosTuristicos = [];  // Inicializa un arreglo para almacenar los sitios turísticos.
    snapshot.forEach(doc => {
      sitiosTuristicos.push({ id: doc.id, ...doc.data() });  // Agrega cada sitio turístico al arreglo, incluyendo el ID del documento.
    });

    res.json(sitiosTuristicos);  // Envía el arreglo de sitios turísticos como respuesta en formato JSON.
  } catch (error) {
    console.error("Error obteniendo sitios turísticos: ", error);  // Muestra el error en la consola si ocurre un problema.
    res.status(500).send('Error obteniendo sitios turísticos.');  // Envía un error 500 si algo falla.
  }
};

// Función para obtener los datos de todas las colecciones juntas
const getAllData = async (req, res) => {
  try {
    // Obtener datos de la colección "opiniones"
    const opinionesRef = db.collection('opiniones');  // Referencia a la colección "opiniones".
    const opinionesSnapshot = await opinionesRef.get();  // Obtiene los documentos de la colección.
    const opiniones = [];  // Inicializa un arreglo para las opiniones.
    opinionesSnapshot.forEach(doc => {
      opiniones.push({ id: doc.id, ...doc.data() });  // Agrega cada opinión al arreglo.
    });

    // Obtener datos de la colección "Turistas"
    const turistasRef = db.collection('Turistas');  // Referencia a la colección "Turistas".
    const turistasSnapshot = await turistasRef.get();  // Obtiene los documentos de la colección.
    const turistas = [];  // Inicializa un arreglo para los turistas.
    turistasSnapshot.forEach(doc => {
      turistas.push({ id: doc.id, ...doc.data() });  // Agrega cada turista al arreglo.
    });

    // Obtener datos de la colección "SitioTuristico"
    const sitiosRef = db.collection('SitioTuristico');  // Referencia a la colección "SitioTuristico".
    const sitiosSnapshot = await sitiosRef.get();  // Obtiene los documentos de la colección.
    const sitiosTuristicos = [];  // Inicializa un arreglo para los sitios turísticos.
    sitiosSnapshot.forEach(doc => {
      sitiosTuristicos.push({ id: doc.id, ...doc.data() });  // Agrega cada sitio turístico al arreglo.
    });

    // Combinar los datos en un solo objeto
    const allData = {
      opiniones,  // Lista de opiniones
      turistas,   // Lista de turistas
      sitiosTuristicos  // Lista de sitios turísticos
    };

    // Devolver todos los datos en formato JSON
    res.json(allData);  // Envía la respuesta combinada de todas las colecciones en JSON.
  } catch (error) {
    console.error("Error obteniendo los datos: ", error);  // Muestra el error en la consola si ocurre un problema.
    res.status(500).send('Error obteniendo los datos.');  // Envía un error 500 si algo falla.
  }
};

module.exports = {
  getOpiniones,  // Exporta la función para obtener opiniones
  getTuristas,  // Exporta la función para obtener turistas
  getSitiosTuristicos,  // Exporta la función para obtener sitios turísticos
  getAllData  // Exporta la función para obtener todos los datos
};
