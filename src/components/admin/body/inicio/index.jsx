import Component from '..';

const AdminPageMain = () => {
    const componentsInThePage = [
        {
            title: 'Deslizador principal',
            description: 'Deslizador de la página principal',
            link: '/admin/inicio/edit/deslizador-principal',
            id: 'frame1',
            url: '/images/admin/inicio/slider_home.mp4',
            video: true,
        },
        {
            title: 'Sobre nosotros',
            description: 'Información sobre la empresa',
            link: '/admin/nosotros/edit/sobre-nosotros',
            id: 'frame2',
            url: '/images/admin/inicio/about.png',
        },
        {
            title: 'Proyectos',
            description: 'Proyectos de la empresa',
            link: '/admin/inicio/edit/proyectos',
            id: 'frame3',
            url: '/images/admin/inicio/project.png',
        },
        {
            title: 'Carrusel de servicios',
            description: 'Servicios mostrados en un deslizador',
            link: '/admin/inicio/edit/carrusel-de-clientes',
            id: 'frame4',
            url: '/images/admin/inicio/slider_project.png',
        },
        {
            title: 'Carrusel de clientes',
            description:
                'Clientes mostrados en un deslizador con su respectivo nombre',
            link: '/admin/inicio/edit/carrusel-de-clientes',
            id: 'frame6',
            url: '/images/admin/inicio/slider_clientes.png',
        },
    ];

    return <Component componentsInThePage={componentsInThePage} />;
};

export default AdminPageMain;
