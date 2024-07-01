import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import classes from './project.module.scss';

function ProjectSidebar( {projectsSidebar} ) {
    return (
        <Col lg={{ span: 3 }}>
            <div className="sidebar pt-max-md-25">
                <div className={`${classes.sidebar_widget} mb-30`}>
                    <h2 className={classes.sidebar_widget__title}>
                        Información del proyecto
                    </h2>
                    <ul className={classes.sidebar_list}>
                        <li>
                            {`Cliente: ${projectsSidebar.cliente || ''}`}
                        </li>
                        <li>
                            {`Ubicación: ${projectsSidebar.ubicacion || ''}, ${projectsSidebar.estado || ''}`}
                        </li>
                        <li>
                            {`Tipo de obra: ${projectsSidebar.tipo_obra || ''}`}
                        </li>
                        <li>
                            {`Coste de la obra: ${projectsSidebar.importe || ''}`}
                        </li>
                        <li>
                            {`Fecha de inicio: ${projectsSidebar.fecha_inicio || ''}`}
                        </li>
                        <li>
                            {`Fecha de finalización: ${projectsSidebar.fecha_final || ''}`}
                        </li>
                        <li>
                            {`Duración de la obra: ${projectsSidebar.duracion || ''}`}
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
    );
}

ProjectSidebar.propTypes = {
    projectsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSidebar;
