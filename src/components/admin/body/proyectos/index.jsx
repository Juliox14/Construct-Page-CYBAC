import Component from "..";

const Proyectos = () => {

    const componentsInThePage = [
        {title: 'Titulo', description: 'Titulo y descripción breve de la página', link: '/admin/slider', id: "frame1", url: '/images/admin/projects/title.png'},
    ];

    return (
        <>
            <Component componentsInThePage={componentsInThePage}/>
        </>
    )
}

export default Proyectos;