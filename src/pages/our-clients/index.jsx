import Head from 'next/head';
import PropTypes, { array } from 'prop-types';
import BrandTwo from '../../components/brand/index-2';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import {getElement} from '../../lib/items';
import ClientsList from '../../components/clients/clientsList';

function OurClients({
    dataHomeClients,
    servicesList,
    footerItems
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

            <ClientsList dataHomeClients={dataHomeClients}/>
            {(clientes_municipio.length != 0) && <BrandTwo clientes={clientes_municipio}/>}
            {(clientes_iniciativa_privada.length != 0) && <BrandTwo clientes={clientes_iniciativa_privada}/>}
            {(clientes_particular.length != 0) && <BrandTwo clientes={clientes_particular}/>}
            <Footer footerItems={footerItems} services={servicesList} />
        </>
    );
}

export async function getServerSideProps() {
    const dataHomeClients = await getElement('home_clients');
    const servicesList = await getElement('titulo_servicios');
    const footerItems = await getElement('footer');
    return {
        props: {
            dataHomeClients,
            servicesList,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    dataHomeClients: PropTypes.arrayOf(array).isRequired,
    servicesList: PropTypes.arrayOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
