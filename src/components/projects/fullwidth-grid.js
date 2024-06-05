import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import classes from './project.module.scss';
import ProjectFullwidthItem from './fullwidth-item';

function ProjectFullwidthGrid({ projects }) {
    const [noOfElement, setNoOfElement] = useState(3);
    const slice = projects.slice(0, noOfElement);

    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };

    return (
        <div className={classes.project}>
            <Container>
                <Row className="g-4">
                    {slice.map((project) => (
                        <ProjectFullwidthItem
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </Row>
                {noOfElement < projects.length && (
                    <div className={classes.project_btn__wrap}>
                        <button
                            type="button"
                            className={classes.loadmore_btn}
                            onClick={loadMore}
                        >
                            Cargar más
                        </button>
                    </div>
                )}
                {noOfElement > projects.length && (
                    <div className={classes.project_btn__wrap}>
                        <span className={classes.loadedText}>
                            Todos los proyectos cargados!
                        </span>
                    </div>
                )}
            </Container>
        </div>
    );
}

ProjectFullwidthGrid.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidthGrid;
