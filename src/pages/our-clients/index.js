'use client'

import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerTwo from '../../components/banner/index-2';
import BrandTwo from '../../components/brand/index-2';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import TestimonialTwo from '../../components/testimonial/index-2';
import { getAllItems } from '../../lib/items-util';
import ClientsList from '../../components/clients/clientsList';

const municipios = [
    { id: 1, name: 'Gobierno del Estado de Nuevo León' },
    { id: 2, name: 'Presidencia Municipal de Benito Juárez, N. L.' },
    { id: 3, name: 'Presidencia Municipal de Dr. González, N. L.' },
    { id: 4, name: 'Presidencia Municipal de Escobedo, N. L.' },
    { id: 5, name: 'Presidencia Municipal de Lampazos de Naranjo, N. L.' },
    { id: 6, name: 'Presidencia Municipal de Los Herreras, N. L.' },
    { id: 7, name: 'Presidencia Municipal de Monterrey, N. L.' },
    { id: 8, name: 'Presidencia Municipal de San Nicolás de los Garza, N. L.' },
    { id: 9, name: 'Presidencia Municipal de Santa Catarina, N. L.' },
    // Agrega más municipios aquí
];

const iniciativaPrivada = [
    { id: 1, name: 'Arkhos' },
    { id: 2, name: 'Autos Galerías' },
    { id: 1, name: 'Centro Comercial H. E. B.' },
    { id: 1, name: 'Centro Comercial Soriana San Pedro' },
    { id: 1, name: 'Cerrey, S. A. de C. V.' },
    { id: 1, name: 'Club de Golf La Herradura' },
    { id: 1, name: 'Construcciones Marchesini, S. A. de C. V.' },
    { id: 1, name: 'Construcciones Marmolejo' },
    { id: 1, name: 'Corporación Hemex, S. A. de C. V.' },
    { id: 1, name: 'Cydsa, S. A. de C. V.' },
    { id: 1, name: 'Dirección y Gerencia de Proyectos, S. A. de C. V.' },
    { id: 1, name: 'Esquema Constructivo, S. A. de C. V.' },
    { id: 1, name: 'Grupo Alcalli' },
    { id: 1, name: 'Grupo Avante Grupo Llapaca , S. A. de C.' },
    { id: 1, name: 'Grupo Maseca' },
    { id: 1, name: 'Grupo T. D. E.' },
    { id: 1, name: 'Grupo Titán' },
    { id: 1, name: 'Hojalata y Lámina, S. A. de C. V.' },
    { id: 1, name: 'Ingenieros Capetillo' },
    { id: 1, name: 'Inmobiliaria Villarreal, S. A. de C. V.' },
    { id: 1, name: 'Inmobiliaria Ocasa , S. A. de C.' },
    { id: 1, name: 'Minera México' },
    { id: 1, name: 'Prisma Proyectos, S. A. de C. V.' },
    { id: 1, name: 'Rodal Obras y Servicios, S. A. de C. V.' },
    { id: 1, name: 'Sierra Norte Construcciones, S. A. de C. V.' },
    { id: 1, name: 'Sun Chemical' },
    { id: 1, name: 'TV Azteca México, S. A. de C. V.' },
    { id: 1, name: 'Plate Dirección de proyectos y construcción' },
    // Agrega más iniciativas privadas aquí
];

const particulares = [
    { id: 1, name: 'Arq. Carlos Valadéz' },
    { id: 2, name: 'Dr. Antonio Rodríguez' },
    { id: 2, name: 'Ing. Franklin Jiménez' },
    { id: 2, name: 'Lic. Martín Sandoval' },
    { id: 2, name: 'Dr. Antonio Treviño Rodríguez' },
    // Agrega más particulares aquí
];

function OurClients({
    brandItems,
    bannerTwoItems,
    testimonialItems,
    testimonialSectionItems,
    newsletterItems,
    footerItems,
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
                subTitle="Nuestros Clientes"
                title="Clientes Satifechos"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <ClientsList
                municipios={municipios}
                iniciativaPrivada={iniciativaPrivada}
                particulares={particulares}
            />
            ;
            <BrandTwo brandItems={brandItems} />
            <BannerTwo bannerTwoItems={bannerTwoItems} />
            {/* <TestimonialTwo
                testimonialItems={testimonialItems}
                testimonialSectionItems={testimonialSectionItems}
            /> */}
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const brandItems = getAllItems('brand');
    const bannerTwoItems = getAllItems('banner-2');
    const testimonialItems = getAllItems('testimonial');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            brandItems,
            bannerTwoItems,
            testimonialItems,
            testimonialSectionItems,
            newsletterItems,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    brandItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
