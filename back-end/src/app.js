const { db } = require('../config/firestoreConfig');  // Importa la configuración de Firestore desde el archivo firestoreConfig.js

// Función para obtener todas las opiniones desde la colección "opiniones" en Firestore
const getOpiniones = async () => {
    const opinionesRef = db.collection('opiniones');  // Referencia a la colección "opiniones" en Firestore
    const snapshot = await opinionesRef.get();  // Obtiene el snapshot de todos los documentos en la colección

    if (snapshot.empty) {
        return [];  // Si no hay documentos en la colección, retorna un array vacío
    }

    const opiniones = [];  // Array donde se almacenarán las opiniones obtenidas
    snapshot.forEach(doc => {
        opiniones.push({ id: doc.id, ...doc.data() });  // Añade cada documento a la lista de opiniones, incluyendo su id
    });

    return opiniones;  // Retorna el array con las opiniones
};

module.exports = { getOpiniones };  // Exporta la función para ser utilizada en otros módulos
