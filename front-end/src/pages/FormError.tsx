// src/pages/FormError.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import { saveError } from "../utils/bbddFirebase";  // Asegúrate de que esta función esté configurada para guardar en Firestore
import Swal from 'sweetalert2';

// Interfaz para los datos del formulario de error
interface ErrorReportData {
    TourId: string;
    tipoError: string;
    fecha: string;
}

const FormError: React.FC = () => {
    // Estado para capturar el tipo de error
    const [tipoError, setTipoError] = useState<string>(''); // Tipo de error
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Función para generar un ID aleatorio entre 1 y 45
    const generarTourId = () => {
        return Math.floor(Math.random() * 45) + 1;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Generar la fecha en formato día/mes/año
        const fechaActual = new Date();
        const fechaFormateada = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;

        if (tipoError) {
            const errorData: ErrorReportData = {
                TourId: generarTourId().toString(), // Genera un TourId aleatorio
                tipoError,
                fecha: fechaFormateada
            };

            setIsSubmitting(true);

            try {
                await saveError(errorData); // Guardar el reporte en Firestore
                Swal.fire({
                    title: '¡Gracias!',
                    text: 'Tu reporte de error ha sido enviado correctamente.',
                    icon: 'success'
                });
                // Resetear el formulario después de enviar
                setTipoError('');
            } catch (error) {
                console.error('Error al enviar el reporte:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al enviar el reporte. Intenta de nuevo.',
                    icon: 'error'
                });
            }

            setIsSubmitting(false);
        } else {
            Swal.fire({
                title: 'Advertencia',
                text: 'Por favor, completa todos los campos',
                icon: 'warning'
            });
        }
    };

    return (
        <form className="contenido" id="formError" onSubmit={handleSubmit}>
            <h2>Formulario de Reporte de Errores</h2>

            <div className="mb-3">
                <label htmlFor="tipoError" className="form-label">Tipo de Error</label>
                <select
                    id="tipoError"
                    className="form-select"
                    value={tipoError}
                    onChange={(e) => setTipoError(e.target.value)}
                    required
                >
                    <option value="">Selecciona el tipo de error</option>
                    <option value="Error Visual">Error Visual</option>
                    <option value="Error 404">Error 404</option>
                    <option value="Error carga infinita">Error de carga infinita</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Reporte'}
            </button>
        </form>
    );
};

export default FormError;
