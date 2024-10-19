import { Navbar, NavbarBrand, NavbarContent, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import 'primeicons/primeicons.css';
import { cambiarTamanoFuente } from '../utils/cambiarTamañoFuente';
import { useTranslation } from 'react-i18next';

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
        <Navbar className="navbar-tour" style={{ backgroundColor: 'rgb(253, 96, 96)' }}>
            <NavbarBrand>
                <p className="font-bold text-inherit">TuristikApp</p>
            </NavbarBrand>

            <NavbarContent as="div" justify="end">
                {/* Botón para aumentar el tamaño de la fuente */}
                <span
                    className="navbar-tour-mas"
                    onClick={() => handleFontSizeChange(1)}
                    style={{ cursor: 'pointer', marginRight: '15px' }}
                >
                    <i className="pi pi-plus"></i>
                </span>

                {/* Botón para reducir el tamaño de la fuente */}
                <span
                    className="navbar-tour-menos"
                    onClick={() => handleFontSizeChange(-1)}
                    style={{ cursor: 'pointer', marginRight: '15px' }}
                >
                    <i className="pi pi-minus"></i>
                </span>

                {/* Dropdown para seleccionar el idioma */}
                <Dropdown placement="bottom-end">
                    <DropdownTrigger className="navbar-tour-idiomas">
                        <Avatar
                            as="button"
                            showFallback name='Lang'
                            src='https://images.unsplash.com/broken'
                            size="xl"
                        />
                    </DropdownTrigger>
                    {/* Se maneja la selección con onAction en lugar de onSelectionChange */}
                    <DropdownMenu aria-label="Language Selection" onAction={handleSelect}>
                        <DropdownItem key="es">Español</DropdownItem>
                        <DropdownItem key="en">English</DropdownItem>
                        <DropdownItem key="fr">Français</DropdownItem>
                        <DropdownItem key="pronto" disabled>Pronto</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
