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
    services,
})
{;
    return (
        <>
            <Head>
                <title>
                    {services.servicios.titulo} - Reichstag, Edificaciones S.A. de C.V.
                </title>
                <meta
                    name="description"
                    content="Reichstag, Edificaciones S.A. de C.V., ofrece una gama completa de servicios, desde instalaciones eléctricas hasta montajes estructurales, obra civil e instalaciones hidrosanitarias. Nuestro compromiso con la calidad y la eficiencia se refleja en cada detalle. Confié en nosotros para llevar su proyecto al siguiente nivel."
                />
            </Head>
            <Breadcrumb
                subTitle="Servicio Unitario"
                title={services.servicios.titulo}
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <ServiceDetail
                sidebarList={servicesList}
                service={services.servicios}
                richTexts={richTexts}
                ourServices={services.get_servicio}
            />
            <Footer footerItems={footerItems} services={servicesList} />
        </>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    
    const services = await getItemsBy('services', slug);
    const servicesList = await getElement('titulo_servicios');
    const footerItems = await getElement('footer');

    return {
        props: {
            servicesList,
            footerItems,
            services,
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
    return {
        paths,
        fallback: false,
    };
}

ServiceDetailsPage.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    servicesList: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceDetailsPage;
