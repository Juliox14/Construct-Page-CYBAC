import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import ProjectSidebar from '../project-sidebar';
import ProjectContent from './project-content';
import RichText from '../../rich-text';

function ProjectDetail({
    project,
    projectsSidebar,
}) {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <ProjectContent
                        project={project}
                    />
                    <ProjectSidebar projectsSidebar={projectsSidebar} />
                </Row>
            </Container>
        </div>
    );
}

ProjectDetail.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    projectsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectDetail;
