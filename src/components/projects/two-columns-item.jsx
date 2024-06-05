import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

function ProjectTwoColumnsItem({ project }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;
    const linkPath = `/projects/${project?.slug}`;

    return (
        <Col lg={{ span: 6 }}>
            <div className="project-item">
                <Link href={linkPath} className="project-img">
                    <img src={imagePath} alt={project?.title} />
                </Link>
                <div className="project-content">
                    <span className="sub-title">{project?.subTitle}</span>
                    <h3 className="title mb-0">
                        <Link href={linkPath}>{project?.title}</Link>
                    </h3>
                    <span>{project?.duration}</span>
                </div>
            </div>
        </Col>
    );
}

ProjectTwoColumnsItem.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectTwoColumnsItem;
