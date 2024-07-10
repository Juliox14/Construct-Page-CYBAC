import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerTwo from '../../components/banner/index-2';
import BrandTwo from '../../components/brand/index-2';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import {getElement } from '../../lib/items-util';
import ClientsList from '../../components/clients/clientsList';

function OurClients({
    dataHomeClients,
    other_data,
    servicesList,
    footerItems,
    settings
}) {
    let clientes_municipio=[];
    let clientes_iniciativa_privada=[];
    let clientes_particular=[];
    const [data_desc] = dataHomeClients[1];
    for(let cliente of dataHomeClients[0]){
        if(cliente.clasificacion_cliente==='Municipios' && cliente.ruta_logo_cliente!=null){
            clientes_municipio.push(cliente);
        }
        else if(cliente.clasificacion_cliente==='Iniciativa Privada' && cliente.ruta_logo_cliente!=null){
            clientes_iniciativa_privada.push(cliente);
        }
        else if(cliente.ruta_logo_cliente!=null){
            clientes_particular.push(cliente);
        }
    }
    settings = {
        pagination: false,
        loop: true,
        navigation: {
            nextEl: '.brand-button-next',
            prevEl: '.brand-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 100,
            },
            576: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
                spaceBetween: 30,
            },
        },
    };
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
            {(clientes_municipio.length != 0) && <BrandTwo clientes_municipios={clientes_municipio} settings={settings}/>}
            {(clientes_iniciativa_privada.length != 0) && <BrandTwo clientes_municipios={clientes_iniciativa_privada} settings={settings}/>}
            {(clientes_particular.length != 0) && <BrandTwo clientes_municipios={clientes_particular} settings={settings}/>}
            <Footer footerItems={footerItems} services={servicesList} />
        </>
    );
}

export async function getStaticProps() {
    const dataHomeClients = await getElement('home_clients');
    const [other_data] = dataHomeClients[1];
    const servicesList = await getElement('titulo_servicios');
    const footerItems = await getElement('footer');
    return {
        props: {
            servicesList,
            footerItems,
            dataHomeClients,
            other_data,
        },
    };
}
export default OurClients;