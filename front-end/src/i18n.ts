import i18next from 'i18next'; // Importa la librería i18next para manejar internacionalización
import { initReactI18next } from 'react-i18next'; // Importa el adaptador de i18next para React

// Importa los archivos de traducción para los idiomas soportados
import es from '../src/locales/es/traslation.json';
import es_form from '../src/locales/es/form.json';
import en from '../src/locales/en/traslation.json';
import en_form from '../src/locales/en/form.json';

// Inicializa i18next con la configuración de idiomas
i18next.use(initReactI18next).init({
    lng: 'es', // Establece el idioma inicial (en este caso, español)
    fallbackLng: 'en', // Idioma de respaldo si no existe traducción en el idioma seleccionado
    resources: {
        es: {
            translation: {
                plantilla: es, // Asigna el archivo de traducción de la plantilla en español
                formu: es_form // Asigna el archivo de traducción de formularios en español
            }
        },
        en: {
            translation: {
                plantilla: en, // Asigna el archivo de traducción de la plantilla en inglés
                formu: en_form // Asigna el archivo de traducción de formularios en inglés
            }
        }
    },
    interpolation: {
        escapeValue: false // Evita escapar los valores interpolados porque React ya lo hace de manera segura
    }
});

export default i18next; // Exporta la configuración de i18next
