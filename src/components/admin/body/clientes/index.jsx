import Component from "..";

const Clientes = () => {

    const componentsInThePage = [
        {title: 'Titulo', description: 'Titulo y descripción breve de la página', link: '/admin/slider', id: "frame1", url: '/images/admin/clients/title.png'},
        {title: 'Deslizador de clientes', description: 'Apartado donde se muestran los clientes que posee Reichstag', link: '/admin/about', id: "frame2", url: '/images/admin/clients/clients.png'},
    ];

    return (
        <>
            <Component componentsInThePage={componentsInThePage}/>
        </>
    )
}

export default Clientes;