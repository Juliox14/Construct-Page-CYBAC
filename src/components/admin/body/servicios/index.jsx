'use client'
import Component from "..";
import AddServiceBtn from "./AddService";
import { getElement } from "../../../../lib/items";
import { useEffect, useState } from "react";

const Servicios = () => {

    // const componentsInThePage = [
    //     {title: 'Titulo', description: 'Titulo y descripción breve de la página', link: '/admin/slider', id: "frame1", url: '/images/admin/services/title.png'},
    //     {title: 'Descripción', description: 'Información acerca del servicio que ofrece la empresa', link: '/admin/about', id: "frame2", url: '/images/admin/services/description.png'},
    //     {title: 'Carrusel de servicios', description: 'Servicios mostrados en un carrusel con su respectiva imagen y nombre', link: '/admin/projects', id: "frame3", url: '/images/admin/services/servicesSlider.png'},
    // ];
    const [componentsInThePage, setComponentsInThePage] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const services = await getElement('titulo_servicios');
            const updatedComponents = services.map((service) => ({
                title: service.titulo,
                description: `Información sobre el servicio ${service.titulo}`,
                link: `/admin/servicio/edit/${service.titulo}`,
                id: service.id_servicio,
                url: '/images/admin/services/description.png'
            }));
            setComponentsInThePage(updatedComponents);

        };
        fetchServices();
    }, []);

    return (
        <>
            <Component componentsInThePage={componentsInThePage} extra={true} />
        </>
    );
}

export default Servicios;
