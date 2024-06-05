import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import classes from './project.module.scss';
import ProjectTwoColumnsItem from './two-columns-item';

function ProjectTwoColumnsGrid({ projects }) {
    const [noOfElement, setNoOfElement] = useState(2);
    const slice = projects.slice(0, noOfElement);

    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };

    return (
        <div className={classes.project}>
            <Container>
                <Row className="g-4">
                    {slice.map((project) => (
                        <ProjectTwoColumnsItem
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
                            Load more
                        </button>
                    </div>
                )}
                {noOfElement > projects.length && (
                    <div className={classes.project_btn__wrap}>
                        <span className={classes.loadedText}>
                            All item has been loaded!
                        </span>
                    </div>
                )}
            </Container>
        </div>
    );
}

ProjectTwoColumnsGrid.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectTwoColumnsGrid;
