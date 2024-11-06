import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { initializeVoice } from '../utils/voice';
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { TabView, TabPanel } from 'primereact/tabview';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import "../styles/timeline.css";
import Chat from './chat';
import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';
import { useTranslation } from 'react-i18next';

export interface TimelineData {
    nombre: string;
    año1: string;
    año2: string;
    año3: string;
    imagen1: string;
    imagen2: string;
    imagen3: string;
    titulo1: string;
    titulo2: string;
    titulo3: string;
    descripcion1: string;
    descripcion2: string;
    descripcion3: string;
    detalle1: string;
    detalle2: string;
    detalle3: string;
}

interface TimelineProps {
    data: TimelineData;
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
    const { i18n } = useTranslation();
    const [stepsEnabled, setStepsEnabled] = useState(false);
    const [activeDetail, setActiveDetail] = useState<string | null>(null);

    useEffect(() => {
        initializeVoice();
    }, []);

    // Función para obtener el valor correcto basado en el idioma
    const getLocalizedField = (fieldBaseName: keyof TimelineData) => {
        const langSuffix = i18n.language === 'en' ? '_en' : i18n.language === 'fr' ? '_fr' : '';
        const localizedField = `${fieldBaseName}${langSuffix}` as keyof TimelineData;
        return data[localizedField] || data[fieldBaseName];
    };

    return (
        <>
            <div className="card">
                <Button label="Iniciar tutorial" onClick={() => setStepsEnabled(true)} className="p-button-info mb-3" />

                <Steps
                    enabled={stepsEnabled}
                    steps={[
                        { element: '.navbar-tour', intro: 'Esta barra...', position: 'bottom' },
                        { element: '.navbar-tour-mas', intro: 'Si presiona este signo...', position: 'bottom' },
                    ]}
                    initialStep={0}
                    onExit={() => setStepsEnabled(false)}
                />

                <TabView>
                    <TabPanel className='timeline-tabs-historia' header="Historia">
                        <section className="timeline">
                            <div className="container">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                                            <h4>{data.año1}</h4>
                                            <i className="fa-solid fa-bullseye"></i>
                                        </button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                                            <h4>{data.año2}</h4>
                                            <i className="fa-solid fa-bullseye"></i>
                                        </button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                                            <h4>{data.año3}</h4>
                                            <i className="fa-solid fa-bullseye"></i>
                                        </button>
                                    </div>

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="experience-slide-one row align-items-center">
                                                <div className="col-md-5">
                                                    <div className="experience-slide-img">
                                                        <img src="images/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="experience-slide-text">
                                                        <h3>{getLocalizedField('titulo1')}</h3>
                                                        <p>{getLocalizedField('descripcion1')}</p>
                                                        <div className="card flex justify-content-center">
                                                            <Button label="Más información" icon="pi pi-external-link" onClick={() => setActiveDetail('detalle1')} />
                                                            <Dialog header="Más información" visible={activeDetail === 'detalle1'} style={{ width: '50vw' }} onHide={() => setActiveDetail(null)}>
                                                                <p className="mb-5">{getLocalizedField('detalle1')}</p>
                                                                <button className="btn-voice">
                                                                    <i className="pi pi-microphone"></i>
                                                                </button>
                                                            </Dialog>
                                                        </div>
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
                                                        <img src="images/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="experience-slide-text">
                                                        <h3>{getLocalizedField('titulo2')}</h3>
                                                        <p>{getLocalizedField('descripcion2')}</p>
                                                        <div className="card flex justify-content-center">
                                                            <Button label="Más información" icon="pi pi-external-link" onClick={() => setActiveDetail('detalle2')} />
                                                            <Dialog header="Más información" visible={activeDetail === 'detalle2'} style={{ width: '50vw' }} onHide={() => setActiveDetail(null)}>
                                                                <p className="mb-5">{getLocalizedField('detalle2')}</p>
                                                                <button className="btn-voice">
                                                                    <i className="pi pi-microphone"></i>
                                                                </button>
                                                            </Dialog>
                                                        </div>
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
                                                        <img src="images/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="experience-slide-text">
                                                        <h3>{getLocalizedField('titulo3')}</h3>
                                                        <p>{getLocalizedField('descripcion3')}</p>
                                                        <div className="card flex justify-content-center">
                                                            <Button label="Más información" icon="pi pi-external-link" onClick={() => setActiveDetail('detalle3')} />
                                                            <Dialog header="Más información" visible={activeDetail === 'detalle3'} style={{ width: '50vw' }} onHide={() => setActiveDetail(null)}>
                                                                <p className="mb-5">{getLocalizedField('detalle3')}</p>
                                                                <button className="btn-voice">
                                                                    <i className="pi pi-microphone"></i>
                                                                </button>
                                                            </Dialog>
                                                        </div>
                                                        <button className="btn-voice">
                                                            <i className="pi pi-microphone"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon"><i className="pi pi-arrow-circle-left"></i></span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon"><i className="pi pi-arrow-circle-right"></i></span>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </TabPanel>

                    <TabPanel className='timeline-tabs-ia' header="Información adicional">
                        <Chat lugar={getLocalizedField('nombre')} />
                    </TabPanel>
                </TabView>
            </div>
        </>
    );
};

export default Timeline;
