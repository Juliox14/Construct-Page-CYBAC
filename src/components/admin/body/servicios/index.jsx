'use client'
import Component from "..";
import AddServiceBtn from "./AddService";
import { getElement } from "../../../../lib/items";
import { useEffect, useState } from "react";

const Servicios = () => {
    const [componentsInThePage, setComponentsInThePage] = useState([]);
    
    useEffect(() => {
        const fetchServices = async () => {
            const services = await getElement('titulo_servicios');
            const updatedComponents = services.map((service) => ({
                title: service.titulo,
                description: `Información sobre el servicio ${service.titulo}`,
                link: `/admin/servicio/edit/${service.titulo}`,
                id: service.id_servicio,
                urlFrame: `http://localhost:3000/services/${service.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`,
                positionFrame: "-6.5vh"
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
