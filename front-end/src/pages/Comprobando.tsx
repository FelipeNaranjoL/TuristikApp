import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Para capturar el ID de la URL
import { getDataById } from '../services/getDataById';  // Importar la función que obtiene datos de Firestore
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const Comprobando: React.FC = () => {
    const { id } = useParams<{ id: string }>();  // Capturar el ID desde la URL
    const [data, setData] = useState<any>(null);  // Estado para los datos obtenidos de Firestore
    const [visible, setVisible] = useState(false);  // Estado para el diálogo modal

    // Efecto para obtener los datos desde Firestore cuando el ID cambia
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getDataById(id as string);  // Obtener los datos usando el ID
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (id) {
            fetchData();  // Llamar a la función cuando el ID esté disponible
        }
    }, [id]);

    return (
        <div>
            {data ? (
                <section className="timeline">
                    <div className="container">
                        <div className="experience-slide-text">
                            <h3>{data.nombre}</h3> {/* Usar datos de Firestore */}
                            <p>{data.ubicacion}</p>
                            <p>{data.descripcion}</p>

                            {/* Botón de información adicional */}
                            <div className="card flex justify-content-center">
                                <Button label="Más información" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                                <Dialog header="Text sample" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                                    <p className="mb-5">{data.detalle}</p> {/* Información adicional */}
                                </Dialog>
                            </div>

                            {/* Botón de voz */}
                            <button className="btn-voice">
                                <i className="pi pi-microphone"></i>
                            </button>
                        </div>
                    </div>
                </section>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default Comprobando;
