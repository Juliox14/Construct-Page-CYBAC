import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;700;900&display=swap"
                        rel="stylesheet"
                    />
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

                    {/* Header del template Admin */}
                    {/* Favicon Tags Start */}
                    <link
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
                    />
                    {/* Favicon Tags End */}
                    {/* Font Tags Start */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap"
                    rel="stylesheet"
                    />
                    <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
                    rel="stylesheet"
                    />
                    <link rel="stylesheet" href="/font/CS-Interface/style.css" />
                    {/* Font Tags End */}
                    {/* Vendor Styles Start */}
                    <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/vendor/OverlayScrollbars.min.css" />
                    {/* Vendor Styles End */}
                    {/* Template Base Styles Start */}
                    <link rel="stylesheet" href="/css/styles.css" />
                    {/* Template Base Styles End */}
                    <link rel="stylesheet" href="/css/main.css" />
                    <Script src="/js/vendor/jquery-3.5.1.min.js"  strategy="beforeInteractive"/>
                    <Script src="/js/vendor/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
                    <Script src="/js/vendor/OverlayScrollbars.min.js" strategy="beforeInteractive"/>
                    <Script src="/js/vendor/autoComplete.min.js" strategy="beforeInteractive"/>
                    <Script src="/js/vendor/clamp.min.js" strategy="beforeInteractive"/>
                    <Script src="/icon/acorn-icons.js" strategy="beforeInteractive"/>
                    <Script src="/icon/acorn-icons-interface.js" strategy="beforeInteractive"/>
                    <Script src="/icon/acorn-icons-commerce.js" strategy="beforeInteractive"/>
                    <Script src="/js/base/helpers.js" strategy="beforeInteractive"/>
                    <Script src="/js/base/globals.js" strategy="beforeInteractive"/>
                    <Script src="/js/base/nav.js" strategy="beforeInteractive"/> 
                    <Script src="/js/base/search.js" strategy="beforeInteractive"/>
                    <Script src="/js/base/settings.js" strategy="beforeInteractive"/>
                    <Script src="/js/common.js" strategy="beforeInteractive"/>
                    <Script src="/js/scripts.js" strategy="beforeInteractive"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
