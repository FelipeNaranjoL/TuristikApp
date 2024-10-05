// src/firebase.ts
import { initializeApp } from "firebase/app"; // Importa la función para inicializar la app de Firebase
import { getFirestore } from "firebase/firestore"; // Importa la función para obtener una instancia de Firestore

// Tu configuración de Firebase, con las claves del proyecto
const firebaseConfig = {
    apiKey: "AIzaSyC4kU9IXsgNvY9ycOXOqoBrkJR2N28u1qo", // Llave de API para la autenticación con Firebase
    authDomain: "capstone-f76d5.firebaseapp.com", // Dominio de autenticación de Firebase
    databaseURL: "https://capstone-f76d5-default-rtdb.firebaseio.com", // URL de la base de datos en tiempo real (Realtime Database)
    projectId: "capstone-f76d5", // ID del proyecto de Firebase
    storageBucket: "capstone-f76d5.appspot.com", // Ubicación del almacenamiento de Firebase
    messagingSenderId: "798151572083", // ID del remitente para los servicios de mensajería de Firebase
    appId: "1:798151572083:web:01a866d7a34cf27af34806" // ID de la aplicación de Firebase
};

// Inicializa Firebase con la configuración especificada
const app = initializeApp(firebaseConfig);

// Inicializa Firestore, el servicio de base de datos de Firebase
export const db = getFirestore(app); // Exporta la instancia de Firestore para usar en otros archivos
