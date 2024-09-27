import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { initializeVoice } from '../utils/voice';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/timeline.css";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const Timeline: React.FC = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false); // Estado para el diálogo modal

    useEffect(() => {
        initializeVoice();
    }, []);

    return (
        <>
            <section className="timeline">
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            >
                                <h4>1980</h4>
                                <i className="fa-solid fa-bullseye"></i>
                            </button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            >
                                <h4>1990</h4>
                                <i className="fa-solid fa-bullseye"></i>
                            </button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            >
                                <h4>2010</h4>
                                <i className="fa-solid fa-bullseye"></i>
                            </button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="experience-slide-one row align-items-center">
                                    <div className="col-md-5">
                                        <div className="experience-slide-img">
                                            <img src="/images/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="experience-slide-text">
                                            <h3>{t('plantilla.1980_title')}</h3>
                                            <p>{t('plantilla.hello_world')}</p>
                                            <p>{t('plantilla.lorem_text')}</p>

                                            {/* Diálogo Modal */}
                                            <div className="card flex justify-content-center">
                                                <Button label="Más información" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                                                <Dialog header="Text sample" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                                    <p className="mb-5">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <p className="mb-5">
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                                    </p>
                                                </Dialog>
                                            </div>

                                            {/* Espaciado entre el botón de voz y el diálogo */}
                                            <div className="separator"></div>

                                            {/* Botón de voz */}
                                            <button className="btn-voice">
                                                <i className="pi pi-microphone"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Otras diapositivas */}
                            <div className="carousel-item">
                                <div className="experience-slide-one row align-items-center">
                                    <div className="col-md-5">
                                        <div className="experience-slide-img">
                                            <img src="/images/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="experience-slide-text">
                                            <h3>{t('plantilla.1990_title')}</h3>
                                            <p>{t('plantilla.hello_again')}</p>
                                            <p>{t('plantilla.lorem_text_long')}</p>

                                            {/* Diálogo Modal */}
                                            <div className="card flex justify-content-center">
                                                <Button label="Más información" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                                                <Dialog header="Text sample" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                                    <p className="mb-5">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <p className="mb-5">
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                                    </p>
                                                </Dialog>
                                            </div>

                                            {/* Espaciado entre el botón de voz y el diálogo */}
                                            <div className="separator"></div>

                                            {/* Botón de voz */}
                                            <button className="btn-voice">
                                                <i className="pi pi-microphone"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="experience-slide-one row align-items-center">
                                    <div className="col-md-5">
                                        <div className="experience-slide-img">
                                            <img src="/images/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="experience-slide-text">
                                            <h3>{t('plantilla.2010_title')}</h3>
                                            <p>{t('plantilla.hello_since_2010')}</p>
                                            <p>{t('plantilla.lorem_text_long')}</p>

                                            {/* Diálogo Modal */}
                                            <div className="card flex justify-content-center">
                                                <Button label="Más información" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                                                <Dialog header="Text sample" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                                    <p className="mb-5">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <p className="mb-5">
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                                    </p>
                                                </Dialog>
                                            </div>

                                            {/* Espaciado entre el botón de voz y el diálogo */}
                                            <div className="separator"></div>

                                            {/* Botón de voz */}
                                            <button className="btn-voice">
                                                <i className="pi pi-microphone"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon">
                                <i className="pi pi-arrow-circle-left"></i>
                            </span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon">
                                <i className="pi pi-arrow-circle-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;
