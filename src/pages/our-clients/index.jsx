import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerTwo from '../../components/banner/index-2';
import BrandTwo from '../../components/brand/index-2';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import TestimonialTwo from '../../components/testimonial/index-2';
import { getAllItems, getElement } from '../../lib/items-util';
import ClientsList from '../../components/clients/clientsList';

function OurClients({
    dataHomeClients,
    other_data
}) {
    return (
        <>
            <Head>
                <title>
                    Proyecto Clientes - Reichstag, Edificaciones S.A. de C.V.
                </title>
                <meta
                    name="description"
                    content="Celebre el éxito junto a nosotros. En Reichstag, hemos colaborado con instituciones públicas y privadas, gobiernos estatales y municipales, así como proyectos particulares. Año tras año, ampliamos nuestra lista de clientes selectos, trabajando con dedicación para dejar una marca de excelencia en cada proyecto."
                />
            </Head>
            <Breadcrumb
                subTitle={other_data.subTitle_breadcrumb}
                title={other_data.title_breadcrumb}
                desc={other_data.descripcion_breadcrumb}
            />
            <ClientsList dataHomeClients={dataHomeClients}/>
            <BrandTwo dataHomeClients={dataHomeClients}/>
            {/* <TestimonialTwo
                testimonialItems={testimonialItems}
                testimonialSectionItems={testimonialSectionItems}
            /> */}
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            {/* <Footer footerItems={footerItems} />*/}
        </>
    );
}

export async function getStaticProps() {
    const dataHomeClients = await getElement('home_clients');
    const [other_data] = dataHomeClients[1];
    return {
        props: {
            dataHomeClients,
            other_data,
        },
    };
}
export default OurClients;