import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function FullWidthBreadcrumb({ projectsBreadcrumb }) {
    return (
        <div className="page_banner__bg">
            <Container>
                {projectsBreadcrumb?.map((item) => (
                    <div className="page_content" key={item.id}>
                        <span className="page_subtitle">
                            {item?.fullWidthSubtitle}
                        </span>
                        <h1 className="page_title">{item?.fullWidthTitle}</h1>
                        <p className="page_desc">{item?.fullWidthDesc}</p>
                    </div>
                ))}
            </Container>
        </div>
    );
}

FullWidthBreadcrumb.propTypes = {
    projectsBreadcrumb: PropTypes.instanceOf(Object).isRequired,
};

export default FullWidthBreadcrumb;
