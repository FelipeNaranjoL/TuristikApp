import { Navbar, NavbarBrand, NavbarContent, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import 'primeicons/primeicons.css';
import { cambiarTamanoFuente } from '../utils/cambiarTamañoFuente';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';  // Importar los estilos CSS

const Header = () => {
    const { i18n } = useTranslation();

    // Función para cambiar el tamaño de la fuente
    const handleFontSizeChange = (incremento: number) => {
        cambiarTamanoFuente(incremento, '.iconos * , .timeline * , .contenido *');
    };

    // Función para cambiar el idioma utilizando i18n
    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    // Función que maneja el evento de selección de idioma desde el Dropdown
    const handleSelect = (key: string) => {
        handleLanguageChange(key); // Llama a la función que cambia el idioma
    };

    return (
        <Navbar className="navbar">  {/* Aplica la clase CSS */}
            <NavbarBrand>
                <p className="font-bold text-inherit">TuristikApp</p>
            </NavbarBrand>

            <NavbarContent as="div" justify="end">
                {/* Cambiar tamaño de fuente */}
                <span
                    onClick={() => handleFontSizeChange(1)}
                    style={{ cursor: 'pointer', marginRight: '15px' }}
                >
                    <i className="pi pi-plus"></i>
                </span>
                <span
                    onClick={() => handleFontSizeChange(-1)}
                    style={{ cursor: 'pointer', marginRight: '15px' }}
                >
                    <i className="pi pi-minus"></i>
                </span>

                {/* Dropdown para selección de idioma */}
                <Dropdown placement="bottom-end" onAction={handleSelect}>
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            text="leng"
                            size="sm"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Language Selection">
                        <DropdownItem key="es">es</DropdownItem>
                        <DropdownItem key="en">en</DropdownItem>
                        <DropdownItem key="fr">fr</DropdownItem>
                        <DropdownItem key="pronto">pronto</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
