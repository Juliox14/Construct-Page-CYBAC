import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Component from '..';

export default function Proyectos({ proyectos }) {
    const [componentsInThePage, setComponentsInThePage] = useState([proyectos]);

    useEffect(() => {
        const updatedComponents = proyectos.map((proyecto) => ({
            title: proyecto.nombre_proyecto,
            description: `Información sobre el proyecto de ${proyecto.cliente}`,
            link: `/admin/proyecto/edit/${proyecto.id_proyecto}`,
            id: proyecto.id_proyecto,
            url: proyecto.ruta_imagen,
        }));

        const initialComponent = {
            title: 'Index de proyectos',
            description: 'Titulo, subtitulo y descripción breve del breadcrumb',
            link: '/admin/slider',
            id: 'frame1',
            url: '/images/admin/projects/title.png',
        };

        setComponentsInThePage([initialComponent, ...updatedComponents]);
    }, [proyectos]);
    return (
        <Component
            componentsInThePage={componentsInThePage}
            extra={{
                title: 'Agregar proyecto',
                href: '/admin/proyecto/newProject',
            }}
            deleteButton
        />
    );
};

Proyectos.propTypes = {
    proyectos: PropTypes.arrayOf(
        PropTypes.shape({
            id_proyecto: PropTypes.number.isRequired,
            nombre_proyecto: PropTypes.string.isRequired,
            cliente: PropTypes.string.isRequired,
            ruta_imagen: PropTypes.string.isRequired,
        })
    ).isRequired,
};