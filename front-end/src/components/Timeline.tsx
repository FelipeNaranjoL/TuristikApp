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

interface TimelineData {
    nombre: string;
    ubicacion: string;
    descripcion: string;
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
}

interface TimelineProps {
    data: TimelineData;
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        initializeVoice();
    }, []);

    return (
        <>
            <div className="card">
                <TabView>
                    {/* Primer TabPanel con ícono */}
                    <TabPanel header="Timeline">
                        {/* Ícono dentro del contenedor del TabPanel */}
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
                                            <h4>{data.nombre}</h4>
                                            <i className="fa-solid fa-bullseye"></i>
                                        </button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"
                                        >
                                            <h4>{data.ubicacion}</h4>
                                            <i className="fa-solid fa-bullseye"></i>
                                        </button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"
                                        >
                                            <h4>{data.descripcion}</h4>
                                            <i className="fa-solid fa-bullseye"></i>
                                        </button>
                                    </div>

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="experience-slide-one row align-items-center">
                                                <div className="col-md-5">
                                                    <div className="experience-slide-img">
                                                        <img src={data.descripcion} alt="" className="rounded img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="experience-slide-text">
                                                        <h3>{data.descripcion}</h3>
                                                        <p>{data.descripcion}</p>

                                                        {/* Diálogo Modal */}
                                                        <div className="card flex justify-content-center">
                                                            <Button label="Más información" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                                                            <Dialog header="Más información" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                                                                <p className="mb-5">{data.descripcion}</p>
                                                            </Dialog>
                                                        </div>

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
                                                        <img src={data.descripcion} alt="" className="rounded img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="experience-slide-text">
                                                        <h3>{data.descripcion}</h3>
                                                        <p>{data.descripcion}</p>

                                                        {/* Diálogo Modal */}
                                                        <div className="card flex justify-content-center">
                                                            <Button label="Más información" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                                                            <Dialog header="Más información" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                                                                <p className="mb-5">{data.descripcion}</p>
                                                            </Dialog>
                                                        </div>

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
                    </TabPanel>

                    {/* Segundo TabPanel con ícono */}
                    <TabPanel header="Información adicional">
                        <Chat lugar={data.nombre} />
                    </TabPanel>
                </TabView>
            </div>
        </>
    );
};

export default Timeline;
