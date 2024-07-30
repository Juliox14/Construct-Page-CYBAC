import { useEffect, useState } from "react";
import Component from "..";

const Proyectos = ({proyectos}) => {

    const [componentsInThePage, setComponentsInThePage] = useState([proyectos]);

    useEffect(() => {
            const updatedComponents = proyectos.map((proyecto) => ({
                title: proyecto.nombre_proyecto,
                description: `Información sobre el proyecto de ${proyecto.cliente}`,
                link: `/admin/proyecto/edit/${proyecto.id_proyecto}`,
                id: proyecto.id_proyectoo,
                url: proyecto.ruta_imagen
            }));

            const initialComponent = {
                title: 'Titulo',
                description: 'Titulo y descripción breve de la página',
                link: '/admin/slider',
                id: "frame1",
                url: '/images/admin/projects/title.png'
            };

            setComponentsInThePage([initialComponent, ...updatedComponents]);
       
    }, []);
    return (
        <>
            <Component componentsInThePage={componentsInThePage} extra={{title: 'Agregar proyecto', href: '/admin/proyecto/newProject'}} delete_button={true} />
        </>
    )
}

export default Proyectos;