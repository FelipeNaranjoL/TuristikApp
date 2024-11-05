// src/types/types.ts
export interface DatoFirestore {
    id: string;
    opinion: string;
    transporte: string;
    recomendacion: string;
    amabilidad: string;
    satisfaccion: string;
    camino: string;
    costo: string;
}

export interface DatoErrorFirestore {
    id: string;
    TourId: string;
    tipoError: string;
    fecha: string;
    nombre: string;
}