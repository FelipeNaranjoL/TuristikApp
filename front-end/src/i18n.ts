import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: 'Welcome to Turistikapp',
        },
    },
    es: {
        translation: {
            welcome: 'Bienvenido a Turistikapp',
        },
    },
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en', // Default language
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;
