// src/hooks/useLanguage.ts
import { useTranslation } from 'react-i18next';

// Hook personalizado para cambiar el idioma de la aplicación
export const useLanguage = () => {
    const { i18n } = useTranslation();  // Obtenemos el objeto i18n a través del hook useTranslation

    // Función para cambiar el idioma de la aplicación
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);  // Cambia el idioma usando la función changeLanguage del objeto i18n
    };

    // Retorna la función para cambiar el idioma
    return { changeLanguage };
};
