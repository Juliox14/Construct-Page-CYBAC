import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import Footer from '../components/layout/footer';
import "../styles/globals.scss";
import { ScrollToTop } from '../components/scroll';

function MyApp({ Component, pageProps }) {

    const isTemplatePage = Component.name === 'AdminPage' || Component.name === 'Inicio';

    return isTemplatePage ? (
        <>
            <Component {...pageProps} />
        </>
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
