import Component from "..";

const AdminPageMain = () => {

    const componentsInThePage = [
    {title: 'Slider', description: 'Slider de la página principal', link: '/admin/slider', id: "frame1", urlFrame: 'http://localhost:3000', positionFrame: "-19vh"},
    {title: 'Sobre nosotros', description: 'Información sobre la empresa', link: '/admin/about', id: "frame2", urlFrame: 'http://localhost:3000', positionFrame: "-66vh"},
    {title: 'Proyectos', description: 'Proyectos de la empresa', link: '/admin/projects', id: "frame3", urlFrame: 'http://localhost:3000', positionFrame: "-236vh"},
    {title: 'Slider clientes', description: 'Clientes mostrados en un slider con su respectivo nombre', link: '/admin/projects', id: "frame4", urlFrame: 'http://localhost:3000', positionFrame: "-445vh"},
    ];

    return (
        <Component componentsInThePage={componentsInThePage}/>
    );
}

export default AdminPageMain;