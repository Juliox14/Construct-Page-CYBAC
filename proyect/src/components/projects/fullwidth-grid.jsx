import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import classes from './project.module.scss';
import ProjectFullwidthItem from './fullwidth-item';
import Filter from './filter';

function  ProjectFullwidthGrid({ projects }) {
    const [noOfElement, setNoOfElement] = useState(3);
    const [open, setOpen] = useState(true);
    const [filterProyects, setFilterProyects] = useState([]);
    let slice = projects.slice(0, noOfElement);

    if(filterProyects.length > 0){
        slice = filterProyects.slice(0, noOfElement);
    }

    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };

    // Función para actualizar los datos filtrados
    const handleFilterUpdate = (data) => {
        setFilterProyects(data);
    };

    useEffect(() => {
        setNoOfElement(3);
    }, [filterProyects]);

    return (
        <div className={classes.project}>
            <Container>
                <div className={classes.filtro_boxBtnFiltro}>
                    <Stack>
                        <Button variant="contained" onClick={()=> {setOpen(prevState => !prevState)}}
                        style={{backgroundColor: "#014655"}}>Filtro</Button>
                    </Stack>
                </div>
                <Filter open={open} handleFilterUpdate={handleFilterUpdate}/>
                <Row className="g-4" style={{marginTop: "5px"}}>
                    {slice.map((project, index) => (
                        <ProjectFullwidthItem
                            key={index}
                            project={project}
                        />
                    ))}
                </Row>
                {noOfElement < projects.length && (filterProyects.length > 0 ? (noOfElement < filterProyects.length) : true) && (
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
                {noOfElement > projects.length && (filterProyects.length > 0 ? (noOfElement > filterProyects.length) : true) && (
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
