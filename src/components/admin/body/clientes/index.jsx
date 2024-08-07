import Component from "..";

export default function Clientes() {
    const componentsInThePage = [
        {
            title: 'Titulo',
            description: 'Titulo y descripción breve de la página',
            link: '/admin/clientes/slider',
            id: 'frame1',
            url: '/images/admin/clients/title.png',
        },
        {
            title: 'Clientes',
            description:
                'Apartado donde se muestran los clientes que posee Reichstag',
            link: '/admin/clientes/editClients',
            id: 'frame2',
            url: '/images/admin/clients/clients.png',
        },
    ];

    return (
        <Component componentsInThePage={componentsInThePage} />
    );
}

