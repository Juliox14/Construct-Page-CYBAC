import Component from "..";

const Servicios = () => {

    const componentsInThePage = [
        {title: 'Titulo', description: 'Titulo y descripción breve de la página', link: '/admin/slider', id: "frame1", url: '/images/admin/services/title.png'},
        {title: 'Descripción', description: 'Información acerca del servicio que ofrece la empresa', link: '/admin/about', id: "frame2", url: '/images/admin/services/description.png'},
        {title: 'Carrusel de servicios', description: 'Servicios mostrados en un carrusel con su respectiva imagen y nombre', link: '/admin/projects', id: "frame3", url: '/images/admin/services/servicesSlider.png'},
    ];

    return (
        <>
            <Component componentsInThePage={componentsInThePage}/>
        </>
    )
}

export default Servicios;