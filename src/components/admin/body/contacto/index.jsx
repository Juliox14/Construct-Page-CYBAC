import Component from "..";

const Contacto = () => {

    const componentsInThePage = [
        {title: 'Slider', description: 'Slider de la página principal', link: '/admin/slider', id: "frame1", urlFrame: 'http://localhost:3000/contact', positionFrame: "-7vh"},
        {title: 'Sobre nosotros', description: 'Información sobre la empresa', link: '/admin/about', id: "frame2", urlFrame: 'http://localhost:3000/contact', positionFrame: "-108vh"},
        {title: 'Proyectos', description: 'Proyectos de la empresa', link: '/admin/projects', id: "frame3", urlFrame: 'http://localhost:3000/contact', positionFrame: "-165vh"},
        {title: 'Slider clientes', description: 'Clientes mostrados en un slider con su respectivo nombre', link: '/admin/projects', id: "frame4", urlFrame: 'http://localhost:3000/contact', positionFrame: "-445vh"},
    ];

    return (
        <>
            <Component componentsInThePage={componentsInThePage}/>
        </>
    )
}

export default Contacto;