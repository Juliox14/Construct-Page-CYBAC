import Head from 'next/head';
import PropTypes, { object } from 'prop-types';
import AboutTwo from '../../components/about/index-2';
import Footer from '../../components/layout/footer';
import Breadcrumb from '../../components/breadcrumb';
import HomePageServices from '../../components/home-page/homepage-services';
import {getElement } from '../../lib/items';

function ServicePage({
    aboutItemsTwo,
    services,
    servicesList,
    footerItems,
    // bannerFourItems,
    // bannerSection,
    // footerItems,
}) {
    return (
        <>
            <Head>
                <title>Servicios - Reichstag, Edificaciones S.A. de C.V.</title>
                <meta
                    name="description"
                    content="Reichstag, Edificaciones S.A. de C.V., ofrece una gama completa de servicios, desde instalaciones eléctricas hasta montajes estructurales, obra civil e instalaciones hidrosanitarias. Nuestro compromiso con la calidad y la eficiencia se refleja en cada detalle. Confié en nosotros para llevar su proyecto al siguiente nivel."
                />
            </Head>
            <Breadcrumb
                subTitle={aboutItemsTwo.titulo_breadcrumb}
                title={aboutItemsTwo.subtitulo_breadcrumb}
                desc={aboutItemsTwo.descripcion_breadcrumb}
            />
            <AboutTwo aboutItemsTwo={aboutItemsTwo} />
            <HomePageServices
                services={services}
            />
            <Footer footerItems={footerItems} services={servicesList}/>
        </>
    );
}

export async function getStaticProps() {
    const AllServices = await getElement('titulo_servicios');
    const aboutItemsTwo = await getElement('home_services');
    const servicesList = await getElement('titulo_servicios');
    const footerItems = await getElement('footer');

    return {
        props: {
            aboutItemsTwo: aboutItemsTwo[0],
            services: AllServices,
            servicesList,
            footerItems,
          
        },
    };
}

ServicePage.propTypes = {
    aboutItemsTwo: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    servicesList: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServicePage;
