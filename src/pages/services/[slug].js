import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ServiceDetail from '../../components/services/service-detail';
import {getElement, getItemsBy} from '../../lib/items';

function ServiceDetailsPage({
    servicesList,
    richTexts,
    footerItems,
    servicePrueba,
})
{;
    return (
        <>
            <Head>
                <title>
                    {servicePrueba.servicios.titulo} - Reichstag, Edificaciones S.A. de C.V.
                </title>
                <meta
                    name="description"
                    content="Reichstag, Edificaciones S.A. de C.V., ofrece una gama completa de servicios, desde instalaciones eléctricas hasta montajes estructurales, obra civil e instalaciones hidrosanitarias. Nuestro compromiso con la calidad y la eficiencia se refleja en cada detalle. Confié en nosotros para llevar su proyecto al siguiente nivel."
                />
            </Head>
            <Breadcrumb
                subTitle="Servicio Unitario"
                title={servicePrueba.servicios.titulo}
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <ServiceDetail
                servicesList={servicesList}
                service={servicePrueba.servicios}
                richTexts={richTexts}
                ourServices={servicePrueba.get_servicio}
            />
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            <Footer footerItems={footerItems} services={servicesList} />
        </>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    
    const servicePrueba = await getItemsBy('services', slug);
    const servicesList = await getElement('titulo_servicios');
    const footerItems = await getElement('footer');

    return {
        props: {
            servicesList,
            footerItems,
            servicePrueba,
        },
    };
}

export async function getStaticPaths() {
    const serviceNames = await getElement('titulo_servicios');
    const paths = serviceNames.map((Name) =>{
        return {
            params: {
                slug: `${Name.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`, 
            },
        };
    }
    );
    console.log('paths: ', paths);
    return {
        paths,
        fallback: false,
    };
}

ServiceDetailsPage.propTypes = {
    servicePrueba: PropTypes.instanceOf(Object).isRequired,
    servicesList: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceDetailsPage;
