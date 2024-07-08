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
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

                    {/* Header del template Admin */}
                    {/* Favicon Tags Start */}
                    <Script src="/js/vendor/jquery-3.5.1.min.js" strategy='beforeInteractive'/>
                    <Script src="/js/vendor/bootstrap.bundle.min.js" strategy='beforeInteractive'/>
                    <Script src="/js/vendor/OverlayScrollbars.min.js" strategy='beforeInteractive'/>
                    <Script src="/js/vendor/autoComplete.min.js" strategy='beforeInteractive'/>
                    <Script src="/js/vendor/clamp.min.js" strategy='beforeInteractive'/>
                    <Script src="/icon/acorn-icons.js" strategy='beforeInteractive'/>
                    <Script src="/icon/acorn-icons-interface.js" strategy='beforeInteractive'/>
                    <Script src="/icon/acorn-icons-commerce.js" strategy='beforeInteractive'/>
                    <Script src="/js/base/helpers.js" strategy='beforeInteractive'/>
                    <Script src="/js/base/globals.js" strategy='beforeInteractive'/>
                    <Script src="/js/base/nav.js" strategy='beforeInteractive'/> 
                    <Script src="/js/base/search.js" strategy='beforeInteractive'/>
                    <Script src="/js/base/settings.js" strategy='beforeInteractive'/>
                    <Script src="/js/common.js" strategy='beforeInteractive'/>
                    <Script src="/js/scripts.js" strategy='beforeInteractive'/>
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
