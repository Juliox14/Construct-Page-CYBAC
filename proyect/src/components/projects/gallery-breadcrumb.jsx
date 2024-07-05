import PropTypes from 'prop-types';
import { Container, NavItem } from 'react-bootstrap';

function GalleryBreadcrumb({ projectsBreadcrumb }) {
    return (
        <div className="page_banner__bg">
            <Container>
                {projectsBreadcrumb?.map((item) => (
                    <div className="page_content" key={item.id}>
                        <span className="page_subtitle">
                            {item?.gallerySubtitle}
                        </span>
                        <h1 className="page_title">{item?.galleryTitle}</h1>
                        <p className="page_desc">{item?.galleryDesc}</p>
                    </div>
                ))}
            </Container>
        </div>
    );
}

GalleryBreadcrumb.propTypes = {
    projectsBreadcrumb: PropTypes.instanceOf(Object).isRequired,
};

export default GalleryBreadcrumb;
