import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import { saveError } from "../utils/bbddFirebase";
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';

// Interfaz para los datos del formulario de error
interface ErrorReportData {
    TourId: string;
    tipoError: string;
    fecha: string;
    nombre: string;
}

const FormError: React.FC = () => {
    const { t } = useTranslation();
    const [tipoError, setTipoError] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [stepsEnabled, setStepsEnabled] = useState<boolean>(false);

    const sitiosTuristicos = [
        "Parque Nacional Torres del Paine",
        "Desierto de Atacama",
        "Isla de Pascua",
        "Valle de la Luna",
        "Lago Llanquihue",
        "Puerto Varas",
        "San Pedro de Atacama",
        "Viña del Mar",
        "Valparaíso",
        "Parque Nacional Vicente Pérez Rosales",
        "Glaciar San Rafael",
        "Isla Chiloé",
        "Valle del Elqui",
        "Parque Nacional Conguillío",
        "Reserva Nacional Los Flamencos"
    ];

    const generarNombreAleatorio = () => {
        const randomIndex = Math.floor(Math.random() * sitiosTuristicos.length);
        return sitiosTuristicos[randomIndex];
    };

    const generarTourId = () => {
        return Math.floor(Math.random() * 45) + 1;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const fechaActual = new Date();
        const fechaFormateada = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;

        if (tipoError) {
            const errorData: ErrorReportData = {
                TourId: generarTourId().toString(),
                tipoError,
                fecha: fechaFormateada,
                nombre: generarNombreAleatorio()
            };

            setIsSubmitting(true);

            try {
                await saveError(errorData);
                Swal.fire({
                    title: t("formError.successTitle"),
                    text: t("formError.successMessage"),
                    icon: 'success'
                });
                setTipoError('');
            } catch (error) {
                console.error('Error al enviar el reporte:', error);
                Swal.fire({
                    title: t("formError.errorTitle"),
                    text: t("formError.errorMessage"),
                    icon: 'error'
                });
            }

            setIsSubmitting(false);
        } else {
            Swal.fire({
                title: t("formError.warningTitle"),
                text: t("formError.warningMessage"),
                icon: 'warning'
            });
        }
    };

    const steps = [
        {
            element: '#tipoError',
            intro: t('formError.stepSelectType'),
            position: 'right'
        },
        {
            element: '.btn-primary',
            intro: t('formError.stepSubmitButton'),
            position: 'bottom'
        }
    ];

    return (
        <>
            <div className="text-center mb-3">
                <button onClick={() => setStepsEnabled(true)} className="btn">
                    {t('formError.iniciar_tutorial')}
                </button>
            </div>

            <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={0}
                onExit={() => setStepsEnabled(false)}
            />

            <form className="contenido" id="formError" onSubmit={handleSubmit}>
                <h2>{t("formError.formTitle")}</h2>

                <div className="mb-3">
                    <label htmlFor="tipoError" className="form-label">{t("formError.typeErrorLabel")}</label>
                    <select
                        id="tipoError"
                        className="form-select"
                        value={tipoError}
                        onChange={(e) => setTipoError(e.target.value)}
                        required
                    >
                        <option value="">{t("formError.selectPlaceholder")}</option>
                        <option value="Error Visual">{t("formError.errorVisual")}</option>
                        <option value="Error 404">{t("formError.error404")}</option>
                        <option value="Error carga infinita">{t("formError.errorInfiniteLoad")}</option>
                        <option value="Otro">{t("formError.errorOther")}</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? t("formError.submitButtonSending") : t("formError.submitButton")}
                </button>
            </form>
        </>
    );
};

export default FormError;
