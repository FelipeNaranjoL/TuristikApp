// src/pages/ExportarDatos.tsx
import React from 'react';
import * as XLSX from 'xlsx';
import { getDatosDesdeFirestore, getDatosErroresDesdeFirestore } from '../utils/bbddFirebase';
import { DatoFirestore, DatoErrorFirestore } from '../types/types';

const ExportarDatos: React.FC = () => {
    // Función para exportar opiniones a Excel
    const exportarOpinionesExcel = async () => {
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
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Opiniones');
        XLSX.writeFile(workbook, 'reporte_opiniones.xlsx');
    };

    // Función para exportar errores a Excel
    const exportarErroresExcel = async () => {
        const datos: DatoErrorFirestore[] = await getDatosErroresDesdeFirestore();
        const datosConID = datos.map(dato => ({
            ID: dato.id,
            TourId: dato.TourId || 'No especificado',
            tipoError: dato.tipoError || 'No especificado',
            fecha: dato.fecha || 'Sin fecha',
            nombre: dato.nombre || 'Sin nombre'
        }));

        const worksheet = XLSX.utils.json_to_sheet(datosConID);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Errores');
        XLSX.writeFile(workbook, 'reporte_errores.xlsx');
    };

    return (
        <div className="container flex justify-center items-center min-h-screen">
            <div className="flex flex-col space-y-4">
                <button
                    onClick={exportarOpinionesExcel}
                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                    Descargar Opiniones en Excel
                </button>
                <button
                    onClick={exportarErroresExcel}
                    className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
                >
                    Descargar Errores en Excel
                </button>
            </div>
        </div>
    );
};

export default ExportarDatos;
