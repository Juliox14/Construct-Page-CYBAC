import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerFive from '../../components/banner/index-5';
import Breadcrumb from '../../components/breadcrumb';
import BannerTwo from '../../components/banner/index-2';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectFullwidth from '../../components/projects/fullwidth';
import {getElement} from '../../lib/items';

function ProjectFullwidthPage({
    projects,
    servicesList,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Proyectos - Reichstag, Edificaciones S.A. de C.V.</title>
                <meta name="description" content="Projects FullWidth" />
            </Head>
            <Breadcrumb
                subTitle="Nuestros proyectos"
                title="Proyectos"
                desc="Conoce todos nuestros proyectos y date una idea de las cosas increíbles que podremos lograr trabajando contigo"
            />
            <ProjectFullwidth projects={projects} />
            <BannerTwo/>
            <Footer footerItems={footerItems} services={servicesList} />
        </>
    );
}

export async function getStaticProps() {
    const proyectos = await getElement('proyectos');
    const servicesList = await getElement('titulo_servicios');
    const footerItems = await getElement('footer');

    return {
        props: {
            projects: proyectos,
            servicesList,
            footerItems,
            // bannerTwoItems,
            // newsletterItems,
        },
    };
}

ProjectFullwidthPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    // bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    // newsletterItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidthPage;
