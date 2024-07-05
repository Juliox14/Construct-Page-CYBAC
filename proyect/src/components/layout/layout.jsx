import PropTypes from 'prop-types';
import Header from './header';

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
