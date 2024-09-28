const admin = require('firebase-admin');
const serviceAccount = require('../keyProyecto.json');  // Ajusta la ruta si es necesario

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();  // Inicializamos Firestore

module.exports = { db };
