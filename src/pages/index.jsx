import Head from 'next/head';
import PropTypes, { array } from 'prop-types';
import AboutOne from '../components/about';
import BannerTwo from '../components/banner/index-2';
import BrandOne from '../components/brand';
import Hero from '../components/home-page/hero';
import HomePageServices from '../components/home-page/homepage-services';
import LatestProject from '../components/home-page/latest-project';
import Footer from '../components/layout/footer';
import {getElement} from '../lib/items';
import { clearConfig } from 'dompurify';

export default function HomePage({
    heroItems,
    projects,
    aboutItems,
    services,
    brandItems,
    servicesList,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Reichstag Edificaciones S.A DE C.V</title>
                <meta
                    name="description"
                    content="Descubra el mundo de la excelencia en construcción y diseño arquitectónico con Reichstag, Edificaciones S.A. de C.V. Comprometidos con la calidad y el servicio, ofrecemos soluciones innovadoras para sus proyectos. Su satisfacción es nuestra meta principal. ¡Explore nuestro portafolio ahora!"
                />
            </Head>
            <Hero heroItems={heroItems} />
            <AboutOne aboutItem={aboutItems} />
            <LatestProject
                projects={projects}
            />
            <HomePageServices
                services={services}
            />
            <BannerTwo/>
            {/* <BrandOne clientes={brandItems} /> */}
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            <Footer footerItems={footerItems} services={servicesList}/>
        </>
    );
}

export async function getServerSideProps() {
    const allDataHome = await getElement('home');
    const [aboutItems] = await getElement('about');
    const heroItems = allDataHome[0];
    const projects = allDataHome[1];
    const services = await getElement('titulo_servicios');
    const brandItems = await getElement('brand_one');
    const servicesList = await getElement('titulo_servicios');
    const footerItems = await getElement('footer');
    

    return {
        props: {
            heroItems,
            projects,
            aboutItems,
            services,
            brandItems,
            servicesList,
            footerItems,
        },
    };
}

HomePage.propTypes = {
    allDataHome: PropTypes.arrayOf(array).isRequired,
    heroItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    servicesList: PropTypes.arrayOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
};