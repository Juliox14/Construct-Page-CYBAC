import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

function ProjectGalleryItem({ project }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;
    const linkPath = `/projects/${project?.slug}`;

    return (
        <Col lg={{ span: 4 }} md={{ span: 6 }}>
            <div className="project-item">
                <Link href={linkPath} className="project-img">
                    <img src={imagePath} alt={project?.title} />
                </Link>
            </div>
        </Col>
    );
}

ProjectGalleryItem.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectGalleryItem;
