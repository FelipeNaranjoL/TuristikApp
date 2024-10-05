const admin = require('firebase-admin');  // Importa el SDK de Firebase Admin para interactuar con Firebase.
const serviceAccount = require('../keyProyecto.json');  // Carga las credenciales del proyecto desde un archivo JSON.

// Inicializa la aplicación de Firebase utilizando las credenciales del servicio.
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();  // Inicializa Firestore y lo almacena en la variable 'db' para interactuar con la base de datos.

module.exports = { db };  // Exporta el objeto 'db' para que otros módulos puedan usar Firestore.
