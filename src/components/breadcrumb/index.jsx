import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function Breadcrumb({ img, subTitle, title, desc }) {
    return (
        <div
            className="page_banner__bg"
            style={{
                backgroundImage: `url("${img}")`,
            }}
        >
            <Container>
                <div className="page_content">
                    <span className="page_subtitle">{subTitle}</span>
                    <h1 className="page_title">{title}</h1>
                    <p style={{ maxWidth: '800px' }}>{desc}</p>
                </div>
            </Container>
        </div>
    );
}

Breadcrumb.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default Breadcrumb;
