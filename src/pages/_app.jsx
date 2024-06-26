import { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import globalStyles from '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';

function MyApp({ Component, pageProps }) {

    const isTemplatePage = Component.name === 'TemplatePage';

    useEffect(() => {
        if (!isTemplatePage) {
        // Agregar estilos globales condicionalmente
        const styleSheetGlobal = document.createElement('style');
        styleSheetGlobal.innerHTML = globalStyles;

        document.head.appendChild(styleSheetGlobal);

        return () => {
            // Limpiar estilos globales cuando salgas de la página
            document.head.removeChild(styleSheetGlobal);
        };
        }
    }, [isTemplatePage]);

    return isTemplatePage ? (
            <Component {...pageProps} />
    ) : (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Component {...pageProps} />
            <ScrollToTop />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
