import Component from "..";

const Contacto = () => {

    const componentsInThePage = [
        {title: 'Breadcrumb', description: 'Titulo y descripción breve de la página', link: '/admin/contacto/edit/informacion', id: "frame1", url: '/images/admin/contact/title.png'},
        {title: 'Información de contacto', description: 'Información acerca de como contactar a la empresa', link: '/admin/contacto/edit/informacion', id: "frame2", url: '/images/admin/contact/description.png'},
        {title: 'Formulario de contacto', description: 'Apartado donde se puede contactar a la empresa a través de correo electronico. En la parte superior cuenta con una pequeña descripción', link: '/admin/contacto/edit/informacion', id: "frame3", url: '/images/admin/contact/form.png'},
    ];

    return (
        <>
            <Component componentsInThePage={componentsInThePage}/>
        </>
    )
}

export default Contacto;