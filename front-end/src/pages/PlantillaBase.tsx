import React from 'react';
import Timeline, { TimelineData } from '../components/Timeline'; // Asegúrate de importar correctamente

// Datos de ejemplo que estás pasando a Timeline
const sampleData: TimelineData = {
    nombre: 'Nombre del sitio turístico',
    año1: 'Año de suceso',
    año2: 'Año de suceso',
    año3: 'Año de suceso',
    imagen1: 'ruta-de-imagen-1.jpg',
    imagen2: 'ruta-de-imagen-2.jpg',
    imagen3: 'ruta-de-imagen-3.jpg',
    titulo1: 'Título 1',
    titulo2: 'Título 2',
    titulo3: 'Título 3',
    descripcion1: 'Descripción 1',
    descripcion2: 'Descripción 2',
    descripcion3: 'Descripción 3',
    detalle1: 'Detalle adicional sobre el sitio',
    detalle2: 'Detalle adicional sobre el sitio',
    detalle3: 'Detalle adicional sobre el sitio',
};

const PlantillaBase: React.FC = () => {
    return (
        <div>
            {/* Pasando los datos correctamente al componente Timeline */}
            <Timeline data={sampleData} />
        </div>
    );
};

export default PlantillaBase;
