// src/components/Header.tsx
import { cambiarTamanoFuente } from '../utils/cambiarTamañoFuente';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
    const { changeLanguage } = useLanguage();

    const handleFontSizeChange = (incremento: number) => {
        // Se utiliza la función importada desde utils
        cambiarTamanoFuente(incremento, '.iconos * , .timeline * , .contenido *');
    };

    return (
        <header>
            <span
                className="material-symbols-outlined"
                onClick={() => handleFontSizeChange(1)}
            >
                uppercase
            </span>
            <span
                className="material-symbols-outlined"
                onClick={() => handleFontSizeChange(-1)}
            >
                lowercase
            </span>
            <h2 className="logo">Turisticapp</h2>
            <i className="fa-solid fa-language">
                <button onClick={() => changeLanguage('es')}>ES</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
            </i>
        </header>
    );
};

export default Header;
