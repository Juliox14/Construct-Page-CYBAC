import Component from "..";

const Proyectos = () => {

    const componentsInThePage = [
        {title: 'Slider', description: 'Slider de la página principal', link: '/admin/slider', id: "frame1", urlFrame: 'http://localhost:3000/projects/project-fullwidth', positionFrame: "-7vh"},
    ];

    return (
        <>
            <Component componentsInThePage={componentsInThePage}/>
        </>
    )
}

export default Proyectos;