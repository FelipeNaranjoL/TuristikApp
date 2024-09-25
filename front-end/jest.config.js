module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy' // Para manejar estilos en los tests
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Para usar Jest DOM
};
