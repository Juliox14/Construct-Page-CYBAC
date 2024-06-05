import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
// import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems, newsletterItems, footerItems }) {
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
                subTitle="Contáctanos"
                title="Hagamos realidad su Proyecto."
                desc="Estamos comprometidos en llevar sus ideas a la realidad y construir un futuro sólido juntos."
            />
            <Contact contactItems={contactItems} />
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            contactItems,
            newsletterItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
