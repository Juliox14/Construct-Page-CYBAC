import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';

function MyApp({ Component, pageProps }) {
    return (
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
