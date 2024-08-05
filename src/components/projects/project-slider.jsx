import PropTypes from 'prop-types';
import Link from 'next/link';
function ProjectSlider({ project }) {
    const linkPath = `/projects/${project?.id_proyecto}`;
    return (
        <div className="project-item">
            <Link href={linkPath} className="project-img">
                <div style={{ height: '400px' }}>
                    <img
                        style={{
                            objectFit: 'cover',
                            border: 'solid 1px white',
                        }}
                        src={project.ruta_imagen}
                        alt={project?.nombre_proyecto}
                    />
                </div>
            </Link>
            <div className="project-content">
                <span className="sub-title">{project?.tipo_obra}</span>
                <h3 className="title mb-0">
                    <Link href={linkPath}>{project?.nombre_proyecto}</Link>
                </h3>
                <span>{project?.ubicacion}</span>
            </div>
        </div>
    );
}

ProjectSlider.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSlider;
