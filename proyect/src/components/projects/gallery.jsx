import PropTypes from 'prop-types';
import ProjectGalleryGrid from './gallery-grid';

function ProjectGallery({ projects }) {
    return <ProjectGalleryGrid projects={projects} />;
}

ProjectGallery.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectGallery;
