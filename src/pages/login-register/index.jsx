import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import LoginRegister from '../../components/login-register';
import Newsletter from '../../components/newsletter/newsletter';
import { getAllItems } from '../../lib/items-util';

function LoginRegisterPage({ newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Login || Register - Oxybuild</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb
                subTitle="Login & Register"
                title="User Info!"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <LoginRegister />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            newsletterItems,
            footerItems,
        },
    };
}

LoginRegisterPage.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default LoginRegisterPage;
