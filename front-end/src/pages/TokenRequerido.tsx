// src/pages/TokenRequerido.tsx
import React from 'react';
import { AlertCircle } from 'lucide-react';

const TokenRequerido: React.FC = () => {
    const handleScrollToDownload = () => {
        const downloadSection = document.getElementById('download-section');
        if (downloadSection) {
            downloadSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            {/* Error Container */}
            <div className="bg-yellow-100 rounded-lg p-8 max-w-md w-full text-center space-y-4">
                {/* Icon */}
                <div className="flex justify-center">
                    <AlertCircle className="w-16 h-16 text-red-500" />
                </div>

                {/* Restricted Access Message */}
                <div className="text-red-500 font-bold">No posees un token</div>

                {/* Access Denied Heading */}
                <h2 className="text-2xl font-semibold text-red-700">
                    Acceso Restringido
                </h2>

                {/* Access Denied Description */}
                <p className="text-red-600">
                    Para acceder a esta sección, necesitas solicitar un token de verificación en nuestra app oficial.
                </p>

                {/* Back Button */}
                <button
                    onClick={handleScrollToDownload}
                    className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                    Guiame
                </button>
            </div>

        </div>
    );
};

export default TokenRequerido;