import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        
        // Leer la cookie en el servidor
        const cookies = ctx.req ? ctx.req.headers.cookie || "" : "";
        const colorModeCookie = cookies.split('; ').find(row => row.startsWith('darkMode='));
        const colorMode = colorModeCookie ? colorModeCookie.split('=')[1] : 'light';
    
        return { ...initialProps, colorMode };
      }
    render() {
        return (
            <Html lang="en" className={this.props.colorMode}>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;700;900&display=swap"
                        rel="stylesheet"
                    />
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
