import PropTypes from 'prop-types';
import ProjectTwoColumnsGrid from './two-columns-grid';

function ProjectTwoColumns({ projects }) {
    return <ProjectTwoColumnsGrid projects={projects} />;
}

ProjectTwoColumns.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectTwoColumns;
