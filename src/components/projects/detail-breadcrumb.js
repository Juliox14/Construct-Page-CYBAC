import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function DetailBreadcrumb({ project }) {
    return (
        <div className="page_banner__bg">
            <Container>
                <div className="page_content">
                    <span className="page_subtitle">{project?.subTitle}</span>
                    <h1 className="page_title">{project?.title}</h1>
                    <p className="page_desc">{project?.breadcrumbDesc}</p>
                </div>
            </Container>
        </div>
    );
}

DetailBreadcrumb.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default DetailBreadcrumb;
