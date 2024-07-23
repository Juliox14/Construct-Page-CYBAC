import Component from "..";

const Clientes = () => {

    const componentsInThePage = [
        {title: 'Slider', description: 'Slider de la página principal', link: '/admin/slider', id: "frame1", urlFrame: 'http://localhost:3000/our-clients', positionFrame: "-7.5vh"},
        {title: 'Sobre nosotros', description: 'Información sobre la empresa', link: '/admin/about', id: "frame2", urlFrame: 'http://localhost:3000/our-clients', positionFrame: "-52vh"},
        {title: 'Proyectos', description: 'Proyectos de la empresa', link: '/admin/projects', id: "frame3", urlFrame: 'http://localhost:3000/our-clients', positionFrame: "-236vh"},
    ];

    return (
        <>
            <Component componentsInThePage={componentsInThePage}/>
        </>
    )
}

export default Clientes;