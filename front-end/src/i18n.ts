import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import es from '../src/locales/es/traslation.json';
import es_form from '../src/locales/es/form.json';
import en from '../src/locales/en/traslation.json';
import en_form from '../src/locales/en/form.json';

i18next.use(initReactI18next).init({
    lng: 'es', // Idioma inicial
    fallbackLng: 'en', // Idioma de respaldo en caso de que no exista traducción en el idioma seleccionado
    resources: {
        es: {
            translation: {
                plantilla: es,
                formu: es_form
            }
        },
        en: {
            translation: {
                plantilla: en,
                formu: en_form
            }
        }
    },
    interpolation: {
        escapeValue: false // React ya se encarga de escapar las interpolaciones de valores de forma segura
    }
});

export default i18next;
