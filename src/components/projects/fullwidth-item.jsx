import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

function ProjectFullwidthItem({ project }) {
    const imagePath = `/images/projects/aula_pantepec/aula_pantepec.jpg`;
    const linkPath = `/projects/${project?.id_proyecto}`;

    return (
        <Col lg={{ span: 4 }} md={{ span: 6 }}>
            <div className="project-item">
                <Link href={linkPath} className="project-img">
                    <img src={imagePath} alt={project?.nombre_proyecto} />
                </Link>
                <div className="project-content">
                    <span className="sub-title">{project?.tipo_obra}</span>
                    <h3 className="title mb-0">
                        <Link href={linkPath}>{project?.nombre_proyecto}</Link>
                    </h3>
                    <span>{project?.ubicacion}</span>
                </div>
            </div>
        </Col>
    );
}

ProjectFullwidthItem.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidthItem;
