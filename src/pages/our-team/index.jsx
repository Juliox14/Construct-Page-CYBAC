import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import TeamTwo from '../../components/team/index-2';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';
import CounterTwo from '../../components/counter/index-2';

function OurClients({ teamItemsTwo, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>
                    Nuestro Equipo - Reichstag, Edificaciones S.A. de C.V.
                </title>
                <meta
                    name="description"
                    content="Descubre la esencia de Reichstag a través de nuestro equipo, una mezcla excepcional de creatividad, experiencia y dedicación que impulsa la innovación en cada proyecto arquitectónico. Conoce a los expertos que dan vida a nuestras visiones y lideran el camino hacia la excelencia en la construcción."
                />
            </Head>
            <Breadcrumb
                subTitle="Nuestro Equipo"
                title="Profesional"
                desc="Nuestro equipo de trabajo es la fuerza detrás de la innovación y la excelencia en cada proyecto"
            />
            <TeamTwo teamItemsTwo={teamItemsTwo} />
            <CounterTwo />
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const teamItemsTwo = getAllItems('team-02');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            teamItemsTwo,
            newsletterItems,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    teamItemsTwo: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
