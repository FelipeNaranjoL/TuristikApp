import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";  // Importar la conexión a Firestore

// Función para obtener datos por ID desde Firestore
export const getDataById = async (id: string) => {
    const docRef = doc(db, "SitioTuristico", id);  // Asegúrate de que "SitioTuristico" sea el nombre de tu colección
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();  // Devuelve los datos del documento
    } else {
        throw new Error("Documento no encontrado");
    }
};
