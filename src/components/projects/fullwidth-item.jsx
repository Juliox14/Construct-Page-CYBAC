import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { Col } from 'react-bootstrap';

function ProjectFullwidthItem({ project }) {
    const linkPath = `/projects/${project?.id_proyecto}`;

    return (
        <Col lg={{ span: 4 }} md={{ span: 6 }}>
            <div className="project-item" style={{display: 'flex' , alignItems: 'center', height: '300px'}}>
                <Link href={linkPath} className="project-img" style={{width: '100%', height: '100%'}}>
                    <img src={project.ruta_imagen} alt={project?.nombre_proyecto} style={{objectFit: 'cover'}}/>
                </Link>
                <div className="project-content" style={{maxHeight: '100%'}}>
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
