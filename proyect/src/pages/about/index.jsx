import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../../components/about';
import Breadcrumb from '../../components/breadcrumb';
import BannerThree from '../../components/banner/index-3';
import CounterTwo from '../../components/counter/index-2';
import LatestProject from '../../components/home-page/latest-project';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import Team from '../../components/team';
import Testimonial from '../../components/testimonial';
import { getAllItems, getFeaturedItems } from '../../lib/items-util';
import TimeLine from '../../components/timeline/timeline';

function AboutPage({
    aboutItems,
    bannerThreeItems,
    projects,
    projectSectionItems,
    teamItems,
    teamSectionItems,
    testimonialItems,
    testimonialSectionItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>
                    Sobre Nosotros - Reichstag, Edificaciones S.A. de C.V.
                </title>
                <meta
                    name="description"
                    content="En Reichstag, nos enorgullece presentar a nuestro equipo altamente capacitado en arquitectura, ingeniería, iluminación y refrigeración. Con una filosofía centrada en la calidad y el compromiso total con cada proyecto, garantizamos resultados óptimos y tiempos de entrega impecables. Descubra cómo podemos hacer realidad sus ideas."
                />
            </Head>
            <Breadcrumb
                subTitle="Que Hacemos"
                title="Sobre Nosotros"
                desc="En Reichstag Edificaciones, Transformamos Visiones Construyendo."
            />
            <AboutOne aboutItems={aboutItems} />
            <BannerThree bannerThreeItems={bannerThreeItems} />
            <CounterTwo />
            <TimeLine />
            <LatestProject
                projects={projects}
                projectSectionItems={projectSectionItems}
            />
            <Team teamItems={teamItems} teamSectionItems={teamSectionItems} />
            {/* <Testimonial
                testimonialItems={testimonialItems}
                testimonialSectionItems={testimonialSectionItems}
            /> */}
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const aboutItems = getAllItems('about');
    const bannerThreeItems = getAllItems('banner-3');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const teamSectionItems = getAllItems('team-section');
    const teamItems = getAllItems('team');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const testimonialItems = getAllItems('testimonial');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItems,
            bannerThreeItems,
            projectSectionItems,
            projects: LatestProject,
            teamSectionItems,
            testimonialItems,
            testimonialSectionItems,
            teamItems,
            newsletterItems,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
