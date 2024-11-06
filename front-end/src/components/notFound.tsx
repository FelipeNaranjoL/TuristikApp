import { AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation(); // Hook para traducción
    const navigate = useNavigate(); // Hook para redirigir

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            {/* Contenedor de error */}
            <div className="bg-red-100 rounded-lg p-8 max-w-md w-full text-center space-y-4">
                {/* Ícono */}
                <div className="flex justify-center">
                    <AlertCircle className="w-16 h-16 text-red-500" />
                </div>

                {/* Número de error */}
                <div className="text-red-500 text-8xl font-bold">{t("notFound.errorNumber")}</div>

                {/* Mensaje de error */}
                <h2 className="text-2xl font-semibold text-red-700">
                    {t("notFound.errorMessage")}
                </h2>

                {/* Descripción del error */}
                <p className="text-red-600">
                    {t("notFound.errorDescription")}
                </p>

                {/* Botón para volver atrás */}
                <button
                    onClick={() => window.history.back()}
                    className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                    {t("notFound.backButton")}
                </button>

                {/* Botón para reportar problema */}
                <button
                    onClick={() => navigate('/error')} // Redirige a la página de reporte de error
                    className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                    {t("notFound.reportButton")}
                </button>
            </div>
        </div>
    );
};

export default NotFound;
