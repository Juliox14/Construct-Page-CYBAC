import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutTwo from '../../components/about/index-2';
import BannerTwo from '../../components/banner/index-2';
import BannerFour from '../../components/banner/index-4';
import BrandOne from '../../components/brand';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import AllServices from '../../components/services/all-services';
import Breadcrumb from '../../components/breadcrumb';
import HomePageServices from '../../components/home-page/homepage-services';
import { getAllItems } from '../../lib/items-util';

function ServicePage({
    aboutItemsTwo,
    services,
    serviceSectionItems,
    bannerFourItems,
    bannerSection,
    footerItems,
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
                subTitle="¿Qué Hacemos?"
                title="Nuestros Servicios"
                desc="En Reichstag, ofrecemos una amplia gama de servicios de construcción que abarcan todas las fases del desarrollo de proyectos, desde la concepción hasta la entrega de cada proyecto."
            />
            <AboutTwo aboutItemsTwo={aboutItemsTwo} />
            <HomePageServices
                services={services}
                serviceSectionItems={serviceSectionItems}
            />
            <BannerFour
                bannerFourItems={bannerFourItems}
                bannerSection={bannerSection}
            />

            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const aboutItemsTwo = getAllItems('about-2');
    const AllServices = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const bannerTwoItems = getAllItems('banner-2');
    const brandItems = getAllItems('brand');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const bannerFourItems = getAllItems('banner-4');
    const bannerSection = getAllItems('banner-section');
    const testimonialItems = getAllItems('testimonial');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItemsTwo,
            services: AllServices,
            serviceSectionItems,
            bannerTwoItems,
            brandItems,
            bannerFourItems,
            bannerSection,
            testimonialItems,
            testimonialSectionItems,
            newsletterItems,
            footerItems,
        },
    };
}

ServicePage.propTypes = {
    aboutItemsTwo: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    bannerFourItems: PropTypes.instanceOf(Object).isRequired,
    bannerSection: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServicePage;
