import React from 'react';
import "../styles/footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>&copy; Turistik</h3>
                        <p>All rights reserved.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <p>Email: <a href="mailto:info@grupo2k.com">info@grupo2k.com</a></p>
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
                </div>
            </div>
        </footer>
    );
};

export default Footer;
