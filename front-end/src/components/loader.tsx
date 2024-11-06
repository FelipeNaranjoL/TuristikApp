import React from 'react';

const LoaderPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            {/* Loader Container */}
            <div className="space-y-8 text-center">
                {/* Spinner Animation */}
                <div className="inline-block">
                    <svg
                        className="w-16 h-16 animate-spin text-red-500"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </div>

                {/* Loading Text */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-red-700">
                    </h2>
                    <div className="flex justify-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

                {/* Optional Loading Message */}
                <p className="text-red-600 max-w-md mx-auto">
                </p>
            </div>
        </div>
    );
};

export default LoaderPage;