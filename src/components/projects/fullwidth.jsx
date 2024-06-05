import PropTypes from 'prop-types';
import ProjectFullwidthGrid from './fullwidth-grid';

function ProjectFullwidth({ projects }) {
    return <ProjectFullwidthGrid projects={projects} />;
}

ProjectFullwidth.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidth;
