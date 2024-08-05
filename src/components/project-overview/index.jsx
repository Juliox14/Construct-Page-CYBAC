import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import classes from './index.module.scss';

function ProjectOverview({ projectsOverview }) {
    return (
        <div className={classes.item}>
            <Row>
                <Col lg={{ span: 12 }}>
                    <h2 className={classes.title}>{projectsOverview.title}</h2>
                    <p className={classes.desc}>{projectsOverview.desc}</p>
                    <div className={classes.image}>
                        <img
                            src={projectsOverview.image}
                            alt="Imagen proyecto overview"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

ProjectOverview.propTypes = {
    projectsOverview: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectOverview;
