import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Cargar archivos de traducción manualmente
import esPlantilla from '../src/locales/es/plantilla.json';
import esForm from '../src/locales/es/form.json';
import esChatBot from '../src/locales/es/chatbot.json';
import esUiChat from '../src/locales/es/chatHistory.json';
import esfooter from '../src/locales/es/footer.json';
import esNotFound from '../src/locales/es/notFound.json';
import esformError from '../src/locales/es/formError.json';
import esToken from '../src/locales/es/token.json';
import enPlantilla from '../src/locales/en/plantilla.json';
import enForm from '../src/locales/en/form.json';
import enChatBot from '../src/locales/en/chatbot.json';
import enUiChat from '../src/locales/en/chatHistory.json';
import enfooter from '../src/locales/en/footer.json';
import enNotFound from '../src/locales/en/notFound.json';
import enformError from '../src/locales/en/formError.json';
import enToken from '../src/locales/en/token.json';
import frPlantilla from '../src/locales/fr/plantilla.json';
import frForm from '../src/locales/fr/form.json';
import frChatBot from '../src/locales/fr/chatbot.json';
import frUiChat from '../src/locales/fr/chatHistory.json';
import frfooter from '../src/locales/fr/footer.json';
import frNotFound from '../src/locales/fr/notFound.json';
import frformError from '../src/locales/fr/formError.json';
import frToken from '../src/locales/fr/token.json';

// Construimos el objeto de recursos manualmente
const resources = {
    es: {
        translation: {
            plantilla: esPlantilla,
            formu: esForm,
            chatBot: esChatBot,
            uiChatBot: esUiChat,
            footer: esfooter,
            notFound: esNotFound,
            formError: esformError,
            tokenRequired: esToken,
        }
    },
    en: {
        translation: {
            plantilla: enPlantilla,
            formu: enForm,
            chatBot: enChatBot,
            uiChatBot: enUiChat,
            footer: enfooter,
            notFound: enNotFound,
            formError: enformError,
            tokenRequired: enToken,
        }
    },
    fr: {
        translation: {
            plantilla: frPlantilla,
            formu: frForm,
            chatBot: frChatBot,
            uiChatBot: frUiChat,
            footer: frfooter,
            notFound: frNotFound,
            formError: frformError,
            tokenRequired: frToken,
        }
    }
};

i18next.use(initReactI18next).init({
    lng: 'es', // Idioma inicial
    fallbackLng: 'en', // Idioma de respaldo
    resources, // Carga de recursos de traducción
    interpolation: {
        escapeValue: false, // React maneja la seguridad de valores interpolados
    },
});

export default i18next;
