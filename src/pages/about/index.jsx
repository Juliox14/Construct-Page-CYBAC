import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../../components/about';
import Breadcrumb from '../../components/breadcrumb';
import BannerThree from '../../components/banner/index-3';
import CounterTwo from '../../components/counter/index-2';
import Footer from '../../components/layout/footer';
import Team from '../../components/team';
import { getElement } from '../../lib/items';

function AboutPage({
    aboutItems,
    teamItems,
    footerItems,
    services,
})
{
    const bannerThreeItems = {
        mision: aboutItems.mision,
        vision: aboutItems.vision,
        valores: aboutItems.valores
    };

    const teamSectionItems = {
        titulo: aboutItems.titulo_equipo,
        descripcion: aboutItems.descripcion_equipo
    };
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
                img={aboutItems.imgTitulo}
                subTitle={aboutItems.titulo_breadcrumb}
                title={aboutItems.subtitulo_breadcrumb}
                desc={aboutItems.descripcion_breadcrumb}
            />
            <AboutOne aboutItem={aboutItems} />
            <BannerThree bannerThreeItems={bannerThreeItems} />
            <CounterTwo proyectos={aboutItems.proyectos} clientes={aboutItems.clientes} />
            <Team teamItems={teamItems} teamSectionItems={teamSectionItems}/>
            <Footer footerItems={footerItems} services={services} />
        </>
    );
}

export async function getServerSideProps() {
    const aboutItems = await getElement('about');
    const teamItems = await getElement('team');
    const services = await getElement('titulo_servicios');
    const footerItems = await getElement('footer');

    return {
        props: {
            aboutItems: aboutItems[0],
            services,
            teamItems,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
