import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import { saveOpinion } from "../utils/bbddFirebase";  // Asegúrate de que este archivo esté correctamente configurado
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import '../styles/formulario.css'
import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';


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
    const [stepsEnabled, setStepsEnabled] = useState(false);

    // Configuración del tutorial
    const steps = [
        {
            element: '.radio-tile-group',
            intro: t('formu.tutorial_seleccionar_opciones'),
            position: 'bottom'
        },
        {
            element: '.btn-voice',
            intro: t('formu.tutorial_boton_voz'),
            position: 'right'
        },
        {
            element: '#btnEnviar',
            intro: t('formu.tutorial_boton_enviar'),
            position: 'top'
        }
    ];

    const handleVoiceClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Evita el comportamiento por defecto del botón
        e.stopPropagation(); // Detiene la propagación del evento hacia el formulario
        const container = e.currentTarget.closest('h3') as HTMLElement; // Cambié esto para seleccionar correctamente el contenedor
        textToSpeak(container); // Llama a la función para hablar el texto
    };

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
                    title: t('formu.buen_trabajo'), // Título de éxito traducido
                    text: t('formu.opinion_enviada'), // Texto de éxito traducido
                    icon: 'success'
                });
            } catch (error) {
                console.error('Error al guardar la opinión:', error);
                Swal.fire({
                    title: t('formu.error'), // Título de error traducido
                    text: t('formu.problema_opinion'), // Texto de error traducido
                    icon: 'error'
                });
            }

            setIsSubmitting(false);
        } else {
            Swal.fire({
                title: t('formu.advertencia'), // Título de advertencia traducido
                text: t('formu.completar_campos'), // Texto de advertencia traducido
                icon: 'warning'
            });
        }
    };


    // Función para convertir texto a voz
    const textToSpeak = (container: HTMLElement) => {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = container.textContent || '';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <>
            {/* Botón para iniciar el tutorial */}
            <div className="flex justify-center mb-3">
                <button onClick={() => setStepsEnabled(true)} className="p-button-info">
                    {t('formu.iniciar_tutorial')}
                </button>
            </div>

            {/* Componente de tutorial */}
            <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={0}
                onExit={() => setStepsEnabled(false)}
            />
            <form className="contenido" id="encuesta" onSubmit={handleSubmit}>
                <h2>{t('formu.titulo')}</h2>

                <h3>{t('formu.pregunta_satisfaccion')}
                    <button className="btn-voice" aria-label="Botón de voz" onClick={handleVoiceClick}>
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

                <h3>{t('formu.pregunta_amabilidad')}
                    <button className="btn-voice" aria-label="Botón de voz" onClick={handleVoiceClick}>
                        <i className="fa fa-microphone"></i>
                    </button>
                </h3>
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

                <h3>{t('formu.pregunta_camino')}
                    <button className="btn-voice" aria-label="Botón de voz" onClick={handleVoiceClick}>
                        <i className="fa fa-microphone"></i>
                    </button>
                </h3>
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

                <h3>{t('formu.pregunta_recomendacion')}
                    <button className="btn-voice" aria-label="Botón de voz" onClick={handleVoiceClick}>
                        <i className="fa fa-microphone"></i>
                    </button>
                </h3>
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

                <h3>{t('formu.pregunta_transporte')}
                    <button className="btn-voice" aria-label="Botón de voz" onClick={handleVoiceClick}>
                        <i className="fa fa-microphone"></i>
                    </button>
                </h3>
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

                <h3>{t('formu.pregunta_costo')}
                    <button className="btn-voice" aria-label="Botón de voz" onClick={handleVoiceClick}>
                        <i className="fa fa-microphone"></i>
                    </button>
                </h3>
                <div className="container">
                    <div className="radio-tile-group">
                        <div className="input-container">
                            <input
                                type="radio"
                                name="costo"
                                value="si"
                                id={`radio-costo-si`}
                                onChange={(e) => setCosto(e.target.value)}
                            />
                            <div className="radio-tile">
                                <label htmlFor={`radio-costo-si`}>
                                    <i className={`icono fa-solid fa-thumbs-up`}></i>
                                </label>
                            </div>
                        </div>

                        <div className="input-container">
                            <input
                                type="radio"
                                name="costo"
                                value="no"
                                id={`radio-costo-no`}
                                onChange={(e) => setCosto(e.target.value)}
                            />
                            <div className="radio-tile">
                                <label htmlFor={`radio-costo-no`}>
                                    <i className={`icono fa-solid fa-thumbs-down`}></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>{t('formu.pregunta_opinion')}
                    <button className="btn-voice" aria-label="Botón de voz" onClick={handleVoiceClick}>
                        <i className="fa fa-microphone"></i>
                    </button>
                </h3>
                <textarea
                    name="opinion"
                    placeholder={t('formu.escribe_opinion')}
                    id="opinion"
                    value={opinion}
                    onChange={(e) => setOpinion(e.target.value)}
                ></textarea>

                <button type="submit" id="btnEnviar" className="enviar" disabled={isSubmitting}>
                    {isSubmitting ? t('formu.enviando') : t('formu.enviar')}
                </button>
            </form>
        </>
    );

};

export default Form;
