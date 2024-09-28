const { db } = require('../config/firestoreConfig');

// Función para obtener todas las opiniones desde Firestore
const getOpiniones = async () => {
    const opinionesRef = db.collection('opiniones');
    const snapshot = await opinionesRef.get();

    if (snapshot.empty) {
        return [];  // Devuelve un array vacío si no hay documentos
    }

    const opiniones = [];
    snapshot.forEach(doc => {
        opiniones.push({ id: doc.id, ...doc.data() });
    });

    return opiniones;
};

module.exports = { getOpiniones };
