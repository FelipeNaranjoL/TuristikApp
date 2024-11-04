import React, { useState } from 'react';
import "../styles/Footer.css";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const Footer: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false); // Estado para controlar la visibilidad del diálogo

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>&copy; Turistik</h3>
                        {/* Botón para mostrar el diálogo */}
                        <div className="footer-section">
                            <Button label="políticas de privacidad" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                        </div>
                        {/* Diálogo que se muestra al hacer clic en el botón */}
                        <Dialog
                            header="Políticas de privacidad"
                            visible={visible}
                            style={{ width: '90vw', textAlign: 'center' }}
                            onHide={() => setVisible(false)}
                        >
                            <p style={{ margin: '15px', fontWeight: 'bold', textAlign: 'center' }}>
                                En Turistik, nos comprometemos a proteger la privacidad de nuestros usuarios.
                                Recopilamos información personal como nombre, correo, ubicación y preferencias de viaje para mejorar nuestros servicios turísticos,
                                gestionar reservas y personalizar la experiencia. No compartimos tus datos con terceros, excepto con
                                proveedores de servicios necesarios o en cumplimiento de la ley. Implementamos medidas de seguridad para proteger tu información,
                                y puedes acceder, corregir o eliminar tus datos en cualquier momento. También usamos cookies para optimizar la navegación.
                                Para cualquier duda, puedes contactarnos en
                                <span style={{ color: 'blue' }}> info@turistik.cl. </span>
                            </p>
                        </Dialog>
                    </div>
                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <p>Email: <a href="mailto:info@grupo2k.com">Turistik@gmail.com</a></p>
                        <p>Tel: +1 234 567 890</p>
                    </div>
                    <div className="footer-section social-media">
                        <h4>Síguenos en redes sociales</h4>
                        <a href="#" aria-label="Facebook" className="social-icon">
                            <i className="pi pi-facebook"></i>
                        </a>
                        <a href="#" aria-label="Twitter" className="social-icon">
                            <i className="pi pi-twitter"></i>
                        </a>
                        <a href="#" aria-label="Instagram" className="social-icon">
                            <i className="pi pi-instagram"></i>
                        </a>
                    </div>
                    <div className="footer-section app-links" id="download-section">
                        <h4>Descarga nuestra app oficial</h4>
                        <a href="https://play.google.com/store/apps/details?id=com.globalguidesystems.tracker.tuc&hl=es_CL" aria-label="Android" className="app-icon">
                            <i className="pi pi-android"></i> Android
                        </a>
                        <a href="https://apps.apple.com/cl/app/turistik-chile/id6450220908" aria-label="iOS" className="app-icon">
                            <i className="pi pi-apple"></i> iOS
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
