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
            <Head>
                {/* <link
                    rel="apple-touch-icon-precomposed"
                    sizes="57x57"
                    href="/img/favicon/apple-touch-icon-57x57.png"
                    />
                    <link
                    rel="apple-touch-icon-precomposed"
                    sizes="114x114"
                    href="/img/favicon/apple-touch-icon-114x114.png"
                    />
                    <link
                    rel="apple-touch-icon-precomposed"
                    sizes="72x72"
                    href="/img/favicon/apple-touch-icon-72x72.png"
                    />
                    <link
                    rel="apple-touch-icon-precomposed"
                    sizes="144x144"
                    href="/img/favicon/apple-touch-icon-144x144.png"
                    />
                    <link
                    rel="apple-touch-icon-precomposed"
                    sizes="60x60"
                    href="/img/favicon/apple-touch-icon-60x60.png"
                    />
                    <link
                    rel="apple-touch-icon-precomposed"
                    sizes="120x120"
                    href="/img/favicon/apple-touch-icon-120x120.png"
                    />
                    <link
                    rel="apple-touch-icon-precomposed"
                    sizes="76x76"
                    href="/img/favicon/apple-touch-icon-76x76.png"
                    />
                    <link
                    rel="apple-touch-icon-precomposed"
                    sizes="152x152"
                    href="/img/favicon/apple-touch-icon-152x152.png"
                    />
                    <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon/favicon-196x196.png"
                    sizes="196x196"
                    />
                    <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon/favicon-96x96.png"
                    sizes="96x96"
                    />
                    <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon/favicon-32x32.png"
                    sizes="32x32"
                    />
                    <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon/favicon-16x16.png"
                    sizes="16x16"
                    />
                    <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon/favicon-128.png"
                    sizes="128x128"
                    /> */}
                    {/* Favicon Tags End */}
                    {/* Font Tags Start */}
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap"
                    rel="stylesheet"
                    />
                    <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
                    rel="stylesheet"
                    /> */}
                    {/* <link rel="stylesheet" href="/font/CS-Interface/style.css" /> */}
                    {/* Font Tags End */}
                    {/* Vendor Styles Start */}
                    {/* <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/vendor/OverlayScrollbars.min.css" /> */}
                    {/* Vendor Styles End */}
                    {/* Template Base Styles Start */}
                    {/* <link rel="stylesheet" href="/css/styles.css"/> */}
                    {/* Template Base Styles End */}
                    {/* <link rel="stylesheet" href="/css/main.css"/> */}
            </Head>
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
