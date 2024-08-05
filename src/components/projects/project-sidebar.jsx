import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import classes from './project.module.scss';

function ProjectSidebar({ projectsSidebar }) {
    return (
        <Col lg={{ span: 3 }}>
            <div className="sidebar pt-max-md-25">
                <div className={`${classes.sidebar_widget} mb-30`}>
                    <h2 className={classes.sidebar_widget__title}>
                        Información del proyecto
                    </h2>
                    <ul className={classes.sidebar_list}>
                        <li>
                            <strong>Cliente: </strong>
                            {`${projectsSidebar.cliente || ''}`}
                        </li>
                        <li>
                            <strong>Ubicación: </strong>
                            {`${projectsSidebar.ubicacion || ''}, ${
                                projectsSidebar.estado || ''
                            }`}
                        </li>
                        <li>
                            <strong>Tipo de obra: </strong>
                            {`${projectsSidebar.tipo_obra || ''}`}
                        </li>
                        <li>
                            <strong>Coste de la obra: </strong>
                            {`$${projectsSidebar.importe || ''}`}
                        </li>
                        <li>
                            <strong>Fecha de inicio: </strong>
                            {`${projectsSidebar.fecha_inicio || ''}`}
                        </li>
                        <li>
                            <strong>Fecha de finalización: </strong>{' '}
                            {`${projectsSidebar.fecha_final || ''}`}
                        </li>
                        <li>
                            <strong>Duración de la obra: </strong>
                            {`${projectsSidebar.duracion || ''} ${
                                projectsSidebar.duracion > 1 ? 'meses' : 'mes'
                            }`}
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
