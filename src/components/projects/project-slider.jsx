import PropTypes from 'prop-types';
import Link from 'next/link';
import imageExample from '../../../public/images/projects/nadro_tuxtlagtz/nadro_tuxtlagtz.jpg'
function ProjectSlider({ project }) {
    // const imagePath = `/images/projects/${project?.id_proyecto}/${project?.image}`;
    const linkPath = `/projects/${project?.id_proyecto}`;
    return (
        <div className="project-item">
            <Link href={linkPath} className="project-img">
                <img src={imageExample.src} alt={project?.nombre_proyecto} />
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
