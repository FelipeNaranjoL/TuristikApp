import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { DatoFirestore } from '../types/types'; // Importa la interfaz

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
    satisfaccion: string;  // Grado de satisfacción del usuario
    amabilidad: string;    // Valoración de la amabilidad
    camino: string;        // Opinión sobre la ruta/camino
    recomendacion: string; // Si recomendaría el tour
    transporte: string;    // Opinión sobre el transporte
    costo: string;         // Valoración del costo del servicio
    opinion: string;       // Opinión general o comentarios adicionales
}

// Función para guardar las respuestas en Firestore
export const saveOpinion = async (data: OpinionData): Promise<void> => {
    try {
        // Agrega un documento a la colección "opiniones" con los datos recibidos
        await addDoc(collection(db, "opiniones"), data);
    } catch (error) {
        // En caso de error al guardar, lo captura y lanza el error
        console.error('Error al guardar la opinión:', error);
        throw error;
    }
};

// Define un tipo para los datos del error
interface ErrorReportData {
    TourId: string;
    tipoError: string;
    fecha: string;
}

// Función para guardar un reporte de error en la colección "Errores"
export const saveError = async (errorData: ErrorReportData): Promise<void> => {
    try {
        // Referencia a la colección "Errores"
        const erroresRef = collection(db, 'Errores');

        // Agrega un nuevo documento a la colección con los datos proporcionados
        await addDoc(erroresRef, errorData);

        console.log('Reporte de error guardado exitosamente');
    } catch (error) {
        console.error('Error al guardar el reporte de error:', error);
        throw error; // Propaga el error para manejarlo en el componente
    }
};

// Función para obtener datos desde Firestore
export async function getDatosDesdeFirestore(): Promise<DatoFirestore[]> {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "opiniones"));
    const datos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<DatoFirestore, 'id'>) // Usa el operador `as` para convertir el tipo
    }));
    return datos;
}
