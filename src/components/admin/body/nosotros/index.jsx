import Component from '..';

export default function Nosotros() {
    const componentsInThePage = [
        {
            title: 'Titulo',
            description: 'Titulo y descripción breve de la página',
            link: '/admin/nosotros/edit/titulo',
            id: 'frame1',
            url: '/images/admin/nosotros/title.png',
        },
        {
            title: 'Sobre nosotros',
            description: 'Información sobre la empresa',
            link: '/admin/nosotros/edit/sobre-nosotros',
            id: 'frame2',
            url: '/images/admin/nosotros/about.png',
        },
        {
            title: 'Mision, visión, objetivos',
            description:
                'Descripción breve acerca de los principios de la empresa',
            link: '/admin/nosotros/edit/mision-vision-objetivos',
            id: 'frame3',
            url: '/images/admin/nosotros/mision.png',
        },
        {
            title: 'Equipo de trabajo',
            description:
                'Descripción breve acerca del apartado del equipo de trabajo',
            link: '/admin/nosotros/edit/equipo-de-trabajo',
            id: 'frame4',
            url: '/images/admin/nosotros/ourTeam.png',
        },
        {
            title: 'Carrusel del equipo de trabajo',
            description:
                'Empleados mostrados en un carrusel con su respectiva imagen, nombre y redes sociales',
            link: '/admin/projects',
            id: 'frame5',
            url: '/images/admin/nosotros/sliderTeam.png',
        },
    ];

    return <Component componentsInThePage={componentsInThePage} />;
};
