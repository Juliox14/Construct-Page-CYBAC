import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import classes from './project.module.scss';
import ProjectFullwidthItem from './fullwidth-item';
import Filter from './filter';

function ProjectFullwidthGrid({ projects }) {
    const [noOfElement, setNoOfElement] = useState(3);
    const [open, setOpen] = useState(true);
    const slice = projects.slice(0, noOfElement);

    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };
    console.log(projects);

    return (
        <div className={classes.project}>
            <Container>
                <div className={classes.filtro_boxBtnFiltro}>
                    <Stack>
                        <Button variant="contained" onClick={()=> {setOpen(prevState => !prevState)}}
                        style={{backgroundColor: "#014655"}}>Filtro</Button>
                    </Stack>
                </div>
                <Filter open={open}/>
                <Row className="g-4" style={{marginTop: "5px"}}>
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
