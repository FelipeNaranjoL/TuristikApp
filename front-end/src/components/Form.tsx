import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import { saveOpinion } from "../utils/bbddFirebase";  // Asegúrate de que este archivo esté correctamente configurado
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import '../styles/formulario.css'

// Definir la interfaz OpinionData para los datos del formulario
interface OpinionData {
    satisfaccion: string;
    amabilidad: string;
    camino: string;
    recomendacion: string;
    transporte: string;
    costo: string;
    opinion: string;
}

const Form: React.FC = () => {
    // Estados para capturar las respuestas del formulario
    const { t } = useTranslation();
    const [satisfaccion, setSatisfaccion] = useState<string>('');
    const [amabilidad, setAmabilidad] = useState<string>('');
    const [camino, setCamino] = useState<string>('');
    const [recomendacion, setRecomendacion] = useState<string>('');
    const [transporte, setTransporte] = useState<string>('');
    const [costo, setCosto] = useState<string>('');
    const [opinion, setOpinion] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Función para manejar el envío del formulario
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Verifica si todos los campos están llenos
        if (satisfaccion && amabilidad && camino && recomendacion && transporte && costo && opinion) {
            const formData: OpinionData = {
                satisfaccion,
                amabilidad,
                camino,
                recomendacion,
                transporte,
                costo,
                opinion
            };

            setIsSubmitting(true);

            try {
                await saveOpinion(formData);
                Swal.fire({
                    title: '¡Buen trabajo!',
                    text: '¡La opinión se ha enviado correctamente!',
                    icon: 'success'
                });
            } catch (error) {
                console.error('Error al guardar la opinión:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al enviar la opinión. Intenta de nuevo.',
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
        <form className="contenido" id="encuesta" onSubmit={handleSubmit}>
            <h2>{t('formu.titulo')}</h2>

            <h3>{t('formu.pregunta_satisfaccion')}
                <button className="btn-voice" aria-label="Botón de voz">
                    <i className="fa fa-microphone"></i>
                </button>
            </h3>
            <div className="container">
                <div className="radio-tile-group">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="input-container">
                            <input
                                type="radio"
                                name="satisfaccion"
                                value={value.toString()}
                                id={`radio-satisfaccion-${value}`}
                                onChange={(e) => setSatisfaccion(e.target.value)}
                            />
                            <div className="radio-tile">
                                <label htmlFor={`radio-satisfaccion-${value}`}>
                                    <i className={`icono fa-solid fa-${value}`}></i>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h3>{t('formu.pregunta_amabilidad')}</h3>
            <div className="container">
                <div className="radio-tile-group">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="input-container">
                            <input
                                type="radio"
                                name="amabilidad"
                                value={value.toString()}
                                id={`radio-amabilidad-${value}`}
                                onChange={(e) => setAmabilidad(e.target.value)}
                            />
                            <div className="radio-tile">
                                <label htmlFor={`radio-amabilidad-${value}`}>
                                    <i className={`icono fa-solid fa-${value}`}></i>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h3>{t('formu.pregunta_camino')}</h3>
            <div className="container">
                <div className="radio-tile-group">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="input-container">
                            <input
                                type="radio"
                                name="camino"
                                value={value.toString()}
                                id={`radio-camino-${value}`}
                                onChange={(e) => setCamino(e.target.value)}
                            />
                            <div className="radio-tile">
                                <label htmlFor={`radio-camino-${value}`}>
                                    <i className={`icono fa-solid fa-${value}`}></i>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h3>{t('formu.pregunta_recomendacion')}</h3>
            <div className="container">
                <div className="radio-tile-group">
                    <div className="input-container">
                        <input
                            type="radio"
                            name="recomendacion"
                            value="sí"
                            id="radio-recomendacion-si"
                            onChange={(e) => setRecomendacion(e.target.value)}
                        />
                        <div className="radio-tile">
                            <label htmlFor="radio-recomendacion-si">
                                <i className="icono fa-solid fa-thumbs-up"></i>
                            </label>
                        </div>
                    </div>

                    <div className="input-container">
                        <input
                            type="radio"
                            name="recomendacion"
                            value="no"
                            id="radio-recomendacion-no"
                            onChange={(e) => setRecomendacion(e.target.value)}
                        />
                        <div className="radio-tile">
                            <label htmlFor="radio-recomendacion-no">
                                <i className="icono fa-solid fa-thumbs-down"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <h3>{t('formu.pregunta_transporte')}</h3>
            <div className="container">
                <div className="radio-tile-group">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="input-container">
                            <input
                                type="radio"
                                name="transporte"
                                value={value.toString()}
                                id={`radio-transporte-${value}`}
                                onChange={(e) => setTransporte(e.target.value)}
                            />
                            <div className="radio-tile">
                                <label htmlFor={`radio-transporte-${value}`}>
                                    <i className={`icono fa-solid fa-${value}`}></i>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h3>{t('formu.pregunta_costo')}</h3>
            <div className="container">
                <div className="radio-tile-group">
                    <div className="input-container">
                        <input
                            type="radio"
                            name="costo"
                            value="sí"
                            id="radio-costo-si"
                            onChange={(e) => setCosto(e.target.value)}
                        />
                        <div className="radio-tile">
                            <label htmlFor="radio-costo-si">
                                <i className="icono fa-solid fa-thumbs-up"></i>
                            </label>
                        </div>
                    </div>
                    <div className="input-container">
                        <input
                            type="radio"
                            name="costo"
                            value="no"
                            id="radio-costo-no"
                            onChange={(e) => setCosto(e.target.value)}
                        />
                        <div className="radio-tile">
                            <label htmlFor="radio-costo-no">
                                <i className="icono fa-solid fa-thumbs-down"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <h3>{t('formu.pregunta_opinion')}</h3>
            <textarea
                name="opinion"
                placeholder="Escribe aquí tu opinión"
                id="opinion"
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
            ></textarea>

            <button type="submit" id="btnEnviar" className="enviar" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    );
};

export default Form;
