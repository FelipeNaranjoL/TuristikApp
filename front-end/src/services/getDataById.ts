import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";  // Importar la conexión a Firestore

// Función para obtener datos por ID desde Firestore
export const getDataById = async (id: string) => {
    // Crear referencia al documento en la colección "SitioTuristico" basado en el ID proporcionado
    const docRef = doc(db, "SitioTuristico", id);  // Asegúrate de que "SitioTuristico" sea el nombre de tu colección
    const docSnap = await getDoc(docRef);  // Obtener el documento

    // Verificar si el documento existe en la base de datos
    if (docSnap.exists()) {
        return docSnap.data();  // Si existe, devuelve los datos del documento
    } else {
        // Si no existe, lanza un error indicando que el documento no fue encontrado
        throw new Error("Documento no encontrado");
    }
};
