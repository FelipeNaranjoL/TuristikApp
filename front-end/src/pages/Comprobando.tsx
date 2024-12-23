import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Para capturar el ID de la URL
import { getDataById } from '../services/getDataById';  // Importar la función que obtiene datos de Firestore
import Timeline from '../components/Timeline';  // Importar el componente Timeline
import LoaderPage from '../components/loader';
import NotFound from '../components/notFound';

interface SitioTuristicoData {
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

const Comprobando: React.FC = () => {
    const { id } = useParams<{ id: string }>();  // Capturar el ID desde la URL
    const [data, setData] = useState<SitioTuristicoData | null>(null);// Estado para los datos obtenidos de Firestore
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sitioData = await getDataById(id!); // Asegúrate de que el servicio getDataById funciona correctamente
                setData(sitioData as SitioTuristicoData); // Tipado explícito con la interfaz
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <LoaderPage />;
    }

    if (!data) {
        return <NotFound />;
    }

    return (
        <div>
            {/* Aquí usas el componente Timeline con los datos de la base de datos */}
            <Timeline data={data} />
        </div>
    );
};


export default Comprobando;
