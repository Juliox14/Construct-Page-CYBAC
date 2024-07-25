import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Contact from '../../components/contact';
import Footer from '../../components/layout/footer';
import { getElement } from '../../lib/items';

function ContactPage({ contactItems, footerItems, services }) {
    return (
        <>
            <Head>
                <title>Contacto - Reichstag, Edificaciones S.A. de C.V.</title>
                <meta
                    name="description"
                    content="Reichstag, Edificaciones S.A. de C.V., está listo para llevar la excelencia en construcción y diseño a todo México. Con infraestructura disponible en todo el país, hemos ejecutado obras destacadas en municipios como Monterrey y estados como Nuevo León y Coahuila. ¡Contáctenos y déjenos hacer realidad su visión!"
                />
            </Head>
            <Breadcrumb
                subTitle={contactItems.titulo_breadcrumb}
                title={contactItems.subtitulo_breadcrumb}
                desc={contactItems.descripcion_breadcrumb}
            />
            <Contact contactItems={contactItems} />
            <Footer footerItems={footerItems} services={services} />
        </>
    );
}

export async function getServerSideProps() {
    const contactItems = await getElement('contact');
    const footerItems = await getElement('footer');
    const services = await getElement('titulo_servicios');

    return {
        props: {
            contactItems,
            footerItems,
            services,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired
};

export default ContactPage;
