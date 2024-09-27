// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC4kU9IXsgNvY9ycOXOqoBrkJR2N28u1qo",
    authDomain: "capstone-f76d5.firebaseapp.com",
    databaseURL: "https://capstone-f76d5-default-rtdb.firebaseio.com",
    projectId: "capstone-f76d5",
    storageBucket: "capstone-f76d5.appspot.com",
    messagingSenderId: "798151572083",
    appId: "1:798151572083:web:01a866d7a34cf27af34806"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
export const db = getFirestore(app);
