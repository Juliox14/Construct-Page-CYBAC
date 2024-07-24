import Component from "..";

const AdminPageMain = () => {

    const componentsInThePage = [
    {title: 'Deslizador principal', description: 'Deslizador de la página principal', link: '/admin/slider', id: "frame1", url: '/images/admin/inicio/slider_home.mp4', video: true},
    {title: 'Sobre nosotros', description: 'Información sobre la empresa', link: '/admin/about', id: "frame2", url: '/images/admin/inicio/about.png'},
    {title: 'Proyectos', description: 'Proyectos de la empresa', link: '/admin/projects', id: "frame3", url: '/images/admin/inicio/project.png'},
    {title: 'Carrusel de clientes', description: 'Clientes mostrados en un slider con su respectivo nombre', link: '/admin/projects', id: "frame4", url: '/images/admin/inicio/slider_project.png'},
    ];

    return (
        <Component componentsInThePage={componentsInThePage}/>
    );
}

export default AdminPageMain;