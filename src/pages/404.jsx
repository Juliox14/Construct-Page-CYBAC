import Head from 'next/head';
import Error404 from '../components/error-404';

function Error404Page() {
    return (
        <>
            <Head>
                <title>Error 404 - Oxybuild</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
            </Head>
            <Error404 />
        </>
    );
}
export default Error404Page;
