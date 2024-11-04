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
import { Steps } from 'intro.js-react';  // Importar intro.js-react
import 'intro.js/introjs.css';  // Importar estilos de intro.js
// import { useTranslation } from 'react-i18next';

export interface TimelineData {
    nombre: string;
    año1: string,
    año2: string,
    año3: string,
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
    detalle2: string,
    detalle3: string,
}

interface TimelineProps {
    data: TimelineData;
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
    // const { t } = useTranslation();
    // const [visible, setVisible] = useState(false);
    const [stepsEnabled, setStepsEnabled] = useState(false);  // Estado para habilitar los pasos del tutorial
    const [activeDetail, setActiveDetail] = useState<string | null>(null); // Estado para manejar qué diálogo está abierto

    useEffect(() => {
        initializeVoice();
    }, []);

    // Definir los pasos del tutorial
    const steps = [
        {
            element: '.navbar-tour',  // Referencia al Navbar
            intro: 'Esta barra de navegación le permitira realizar acciones como modificar el lenguaje y alterar la fuente del texto en pantalla.',
            position: 'bottom'
        },
        {
            element: '.navbar-tour-mas',  // Referencia al Navbar
            intro: 'Si presiona este signo, aumentara el tamaño de la letra.',
            position: 'bottom'
        },
        {
            element: '.navbar-tour-menos',  // Referencia al Navbar
            intro: 'Si presiona este signo, disminuira el tamaño de la letra.',
            position: 'bottom'
        },
        {
            element: '.navbar-tour-idiomas',  // Referencia al Navbar
            intro: 'Aqui se abrira un listado de idiomas, eliga el de su preferencia y el contenido pasara a ese idioma.',
            position: 'bottom'
        },
        {
            element: '.timeline-tabs-historia',  // Referencia al Navbar
            intro: 'Aqui se mostrara la información acerca del sitio turistico.',
            position: 'bottom'
        },
        {
            element: '.timeline-tabs-ia',  // Referencia al Navbar
            intro: 'Aqui podra realizar consultas turisticas a nuestra inteligencia artificial.',
            position: 'bottom'
        },
        {
            element: '.carousel', // Selector del primer paso (carrusel)
            intro: 'Este es el carrusel donde puedes ver las imágenes y descripciones del tour.',  // Descripción del paso
            position: 'bottom'
        },
        {
            element: '.btn-voice', // Segundo paso: el botón de voz
            intro: 'Presiona este botón para escuchar la descripción del tour.',
            position: 'right'
        },
        {
            element: '.footer', // Segundo paso: el botón de voz
            intro: 'En caso de dudas, puedes contactarnos por estas vias.',
            position: 'right'
        }
    ];

    return (
        <>
            <div className="card">
                <Button label="Iniciar tutorial" onClick={() => setStepsEnabled(true)} className="p-button-info mb-3" /> {/* Botón para iniciar tutorial */}

                {/* Componente para mostrar los pasos del tutorial */}
                <Steps
                    enabled={stepsEnabled}
                    steps={steps}
                    initialStep={0}
                    onExit={() => setStepsEnabled(false)}  // Deshabilitar el tutorial cuando se salga
                />

                <TabView>
                    {/* Primer TabPanel con ícono */}
                    <TabPanel className='timeline-tabs-historia' header="Historia">
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
                                            <h4>{data.año1}</h4>
                                            <i className="fa-solid fa-bullseye"></i>
                                        </button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"
                                        >
                                            <h4>{data.año2}</h4>
                                            <i className="fa-solid fa-bullseye"></i>
                                        </button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"
                                        >
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
                                                        <h3>{data.titulo1}</h3>
                                                        <p>{data.descripcion1}</p>

                                                        {/* Diálogo Modal */}
                                                        <div className="card flex justify-content-center">
                                                            <Button label="Más información" icon="pi pi-external-link" onClick={() => setActiveDetail('detalle1')} />
                                                            <Dialog header="Más información" visible={activeDetail === 'detalle1'} style={{ width: '50vw' }} onHide={() => setActiveDetail(null)}>
                                                                <p className="mb-5">{data.detalle1}</p>
                                                                <button className="btn-voice">
                                                                    <i className="pi pi-microphone"></i>
                                                                </button>
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
                                                        <img src="images/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="experience-slide-text">
                                                        <h3>{data.titulo2}</h3>
                                                        <p>{data.descripcion2}</p>

                                                        {/* Diálogo Modal */}
                                                        <div className="card flex justify-content-center">
                                                            <Button label="Más información" icon="pi pi-external-link" onClick={() => setActiveDetail('detalle2')} />
                                                            <Dialog header="Más información" visible={activeDetail === 'detalle2'} style={{ width: '50vw' }} onHide={() => setActiveDetail(null)}>
                                                                <p className="mb-5">{data.detalle2}</p>
                                                                <button className="btn-voice">
                                                                    <i className="pi pi-microphone"></i>
                                                                </button>
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
                                                        <img src="images/santa_ana.jpg" alt="" className="rounded img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="experience-slide-text">
                                                        <h3>{data.titulo3}</h3>
                                                        <p>{data.descripcion3}</p>

                                                        {/* Diálogo Modal */}
                                                        <div className="card flex justify-content-center">
                                                            <Button label="Más información" icon="pi pi-external-link" onClick={() => setActiveDetail('detalle3')} />
                                                            <Dialog header="Más información" visible={activeDetail === 'detalle3'} style={{ width: '50vw' }} onHide={() => setActiveDetail(null)}>
                                                                <p className="mb-5">{data.detalle3}</p>
                                                                <button className="btn-voice">
                                                                    <i className="pi pi-microphone"></i>
                                                                </button>
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
                    <TabPanel className='timeline-tabs-ia' header="Información adicional">
                        <Chat lugar={data.nombre} />
                    </TabPanel>
                </TabView>
            </div>
        </>
    );
};

export default Timeline;
