'use client';
import Component from '..';
import AddServiceBtn from '../items-util/AddBtn';
import { getElement } from '../../../../lib/items';
import { useEffect, useState } from 'react';

const Servicios = () => {
    const [componentsInThePage, setComponentsInThePage] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const services = await getElement('allServices');
            const updatedComponents = services.map((service) => ({
                title: service.titulo,
                description: `Información sobre el servicio ${service.titulo}`,
                link: `/admin/servicio/edit/${service.titulo}`,
                id: service.id_servicio,
                url: service.imagen_url,
            }));

            const initialComponent = {
                title: 'Index de servicios',
                description: 'Página general de servicios',
                link: '/admin/servicio/edit/index',
                id: 'frame1',
                url: '/images/admin/services/title.png',
            };

            setComponentsInThePage([initialComponent, ...updatedComponents]);
        };
        fetchServices();
    }, []);

    return (
        <>
            <Component
                componentsInThePage={componentsInThePage}
                extra={{
                    title: 'Agregar servicio',
                    href: '/admin/servicio/newService',
                }}
                deleteButton={true}
            />
        </>
    );
};

export default Servicios;
