import Component from "..";

const Nosotros = () => {

    const componentsInThePage = [
        {title: 'Slider', description: 'Slider de la página principal', link: '/admin/slider', id: "frame1", urlFrame: 'http://localhost:3000/about', positionFrame: "-6.7vh"},
        {title: 'Sobre nosotros', description: 'Información sobre la empresa', link: '/admin/about', id: "frame2", urlFrame: 'http://localhost:3000/about', positionFrame: "-54vh"},
        {title: 'Proyectos', description: 'Proyectos de la empresa', link: '/admin/projects', id: "frame3", urlFrame: 'http://localhost:3000/about', positionFrame: "-224vh"},
        {title: 'Slider clientes', description: 'Clientes mostrados en un slider con su respectivo nombre', link: '/admin/projects', id: "frame4", urlFrame: 'http://localhost:3000/about', positionFrame: "-311.5vh"},
        {title: 'Slider clientes', description: 'Clientes mostrados en un slider con su respectivo nombre', link: '/admin/projects', id: "frame5", urlFrame: 'http://localhost:3000/about', positionFrame: "-348vh"},
    ];

    return (
        <>
            <Component componentsInThePage={componentsInThePage}/>
        </>
    )
}

export default Nosotros;