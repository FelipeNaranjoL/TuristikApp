import React from 'react';
import * as XLSX from 'xlsx';
import { getDatosDesdeFirestore } from '../utils/bbddFirebase';
import { DatoFirestore } from '../types/types'; // Importa la interfaz desde types.ts

const ExportarDatos: React.FC = () => {
    const exportarExcel = async () => {
        const datos: DatoFirestore[] = await getDatosDesdeFirestore();
        const datosConID = datos.map(dato => ({
            ID: dato.id,
            opinion: dato.opinion || 'Sin opinión',
            transporte: dato.transporte || 'No especificado',
            recomendacion: dato.recomendacion || 'No especificado',
            amabilidad: dato.amabilidad || 'No especificado',
            satisfaccion: dato.satisfaccion || 'No especificado',
            camino: dato.camino || 'No especificado',
            costo: dato.costo || 'No especificado',
        }));

        const worksheet = XLSX.utils.json_to_sheet(datosConID);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
        XLSX.writeFile(workbook, 'reporte_datos.xlsx');
    };

    return (
        <div className="container flex justify-center items-center min-h-screen">
            <div className="flex flex-col space-y-4">
                <button
                    onClick={exportarExcel}
                    className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
                >
                    Descargar Excel
                </button>
            </div>
        </div>
    );
};

export default ExportarDatos;
