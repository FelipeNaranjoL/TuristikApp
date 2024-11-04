import React from 'react';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            {/* Error Container */}
            <div className="bg-red-100 rounded-lg p-8 max-w-md w-full text-center space-y-4">
                {/* Icon */}
                <div className="flex justify-center">
                    <AlertCircle className="w-16 h-16 text-red-500" />
                </div>

                {/* Error Number */}
                <div className="text-red-500 text-8xl font-bold">404</div>

                {/* Error Message */}
                <h2 className="text-2xl font-semibold text-red-700">
                    Página no encontrada
                </h2>

                {/* Error Description */}
                <p className="text-red-600">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                </p>

                {/* Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                    Volver atrás
                </button>
            </div>
        </div>
    );
};

export default NotFound;