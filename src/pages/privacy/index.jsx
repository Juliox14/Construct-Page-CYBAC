import { getElement } from '../../lib/items';
import Head from 'next/head';
import Footer from '../../components/layout/footer';

const PrivacyNotice = ({ servicesList, footerItems }) => {
    return (
        <>
            <Head>
                <title>
                    Aviso de Privacidad - Reichstag, Edificaciones S.A. de C.V.
                </title>
                <meta name="description" content="Aviso de Privacidad" />
            </Head>
            <div
                style={{
                    padding: '20px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 'small',
                    textAlign: 'center',
                }}
            >
                <h2 style={{ textAlign: 'center', color: '#333' }}>
                    Aviso de Privacidad
                </h2>
                <p style={{ fontSize: '15px' }}>
                    En Reichstag Edificaciones, nos comprometemos a proteger la
                    privacidad de nuestros visitantes y usuarios. Este aviso de
                    privacidad describe cómo recopilamos, utilizamos,
                    compartimos y protegemos su información personal.
                </p>

                <h3 style={{ color: '#333' }}>
                    1. Información que Recopilamos
                </h3>
                <p style={{ fontSize: '15px' }}>
                    Al visitar nuestra landing page, es posible que recopilemos
                    la siguiente información:
                </p>
                <ul>
                    <li>
                        <strong>Información de Contacto:</strong> Nombre, correo
                        electrónico, número de teléfono, u otra información que
                        nos proporcione voluntariamente a través de formularios
                        de contacto.
                    </li>
                    <li>
                        <strong>Información de Navegación:</strong> Datos sobre
                        su visita a nuestra página, como dirección IP, tipo de
                        navegador, páginas visitadas, tiempo de visita y otros
                        datos de tráfico.
                    </li>
                </ul>
                <br />

                <h3 style={{ color: '#333' }}>2. Uso de la Información</h3>
                <p style={{ fontSize: '15px' }}>
                    Utilizamos la información recopilada para:
                </p>
                <ul>
                    <li>
                        Proporcionarle la información solicitada sobre nuestros
                        servicios.
                    </li>
                    <li>
                        Mejorar nuestra landing page y personalizar su
                        experiencia de usuario.
                    </li>
                    <li>
                        Comunicarnos con usted para responder a sus consultas o
                        solicitudes.
                    </li>
                </ul>
                <br />

                <h3 style={{ color: '#333' }}>
                    3. Compartición de Información
                </h3>
                <p style={{ fontSize: '15px' }}>
                    Reichstag Edificaciones no vende, alquila ni comparte su
                    información personal con terceros, excepto en las siguientes
                    circunstancias:
                </p>
                <ul>
                    <li>
                        <strong>Proveedores de Servicios:</strong> Podemos
                        compartir su información con proveedores de servicios
                        que nos ayudan a operar nuestra landing page y brindar
                        nuestros servicios.
                    </li>
                    <li>
                        <strong>Obligaciones Legales:</strong> Podemos divulgar
                        su información si así lo requiere la ley o en respuesta
                        a un proceso legal.
                    </li>
                </ul>
                <br />

                <h3 style={{ color: '#333' }}>
                    4. Seguridad de la Información
                </h3>
                <p style={{ fontSize: '15px' }}>
                    Nos esforzamos por proteger su información personal mediante
                    medidas de seguridad adecuadas. Sin embargo, ninguna
                    transmisión de datos por internet o método de almacenamiento
                    electrónico es completamente seguro, por lo que no podemos
                    garantizar una seguridad absoluta.
                </p>

                <h3 style={{ color: '#333' }}>5. Sus Derechos</h3>
                <p style={{ fontSize: '15px' }}>
                    Usted tiene derecho a acceder, rectificar o eliminar su
                    información personal que hemos recopilado. Para ejercer
                    estos derechos, por favor contáctenos a través del
                    formulario de contacto disponible en nuestra landing page.
                </p>

                <h3 style={{ color: '#333' }}>
                    6. Cambios al Aviso de Privacidad
                </h3>
                <p style={{ fontSize: '15px' }}>
                    Podemos actualizar este aviso de privacidad periódicamente.
                    Le recomendamos revisar esta página regularmente para estar
                    informado sobre cómo protegemos su información.
                </p>

                <h3 style={{ color: '#333' }}>7. Contacto</h3>
                <p style={{ fontSize: '15px' }}>
                    Si tiene alguna pregunta o inquietud sobre este aviso de
                    privacidad, puede contactarnos a través del siguiente correo
                    electrónico:{' '}
                    <a href="mailto:google@reichstag.com.mx">
                        google@reichstag.com.mx
                    </a>{' '}
                    o visitando nuestra página de contacto.
                </p>

                <hr />
                <p
                    style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '20px',
                    }}
                >
                    <em>Última actualización: 02/08/2024</em>
                </p>
            </div>
            <Footer footerItems={footerItems} services={servicesList} />
        </>
    );
};

export async function getServerSideProps() {
    const servicesList = await getElement('titulo_servicios');
    const footerItems = await getElement('footer');

    return {
        props: {
            servicesList,
            footerItems,
        },
    };
}

export default PrivacyNotice;
