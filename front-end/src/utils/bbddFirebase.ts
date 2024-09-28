import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configuración de Firebase (se reemplaza API_KEY con el valor correcto)
const firebaseConfig = {
    apiKey: "AIzaSyC4kU9IXsgNvY9ycOXOqoBrkJR2N28u1qo",
    authDomain: "capstone-f76d5.firebaseapp.com",
    databaseURL: "https://capstone-f76d5-default-rtdb.firebaseio.com",
    projectId: "capstone-f76d5",
    storageBucket: "capstone-f76d5.appspot.com",
    messagingSenderId: "798151572083",
    appId: "1:798151572083:web:01a866d7a34cf27af34806"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Define un tipo para los datos de la opinión
interface OpinionData {
    satisfaccion: string;
    amabilidad: string;
    camino: string;
    recomendacion: string;
    transporte: string;
    costo: string;
    opinion: string;
}

// Función para guardar las respuestas en Firestore
export const saveOpinion = async (data: OpinionData): Promise<void> => {
    try {
        await addDoc(collection(db, "opiniones"), data);
    } catch (error) {
        console.error('Error al guardar la opinión:', error);
        throw error;
    }
};
