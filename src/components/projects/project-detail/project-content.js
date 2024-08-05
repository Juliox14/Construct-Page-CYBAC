import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import RichText from '../../rich-text';
import ProjectOverview from '../../project-overview';
import classes from './index.module.scss';

function ProjectContent({ project }) {
    return (
        <Col lg={{ span: 9 }} className={`${classes.titulo_imagen} pe-lg-45`}>
            <div className={classes.banner}>
                <div className={classes.flex_imagen}>
                    <img
                        src={project.ruta_imagen}
                        alt={project?.nombre_proyecto}
                    />
                </div>
            </div>
            <div className={classes.content}>
                <h2 className={classes.title}>{project?.nombre_proyecto}</h2>
                <h3 className={`${classes.subtitle} mb-40`}>
                    {project?.tipo_obra}
                </h3>
                <h3 className={classes.summery_title}>Resumen del Proyecto</h3>
                <p
                    className={classes.summery_desc}
                    dangerouslySetInnerHTML={{
                        __html: project?.descripcion_proyecto,
                    }}
                ></p>
            </div>
            {project.use_richtexts === 1 && (
                <RichText
                    richTexts={{
                        texto1: project?.texto1_richtext,
                        texto2: project?.texto2_richtext,
                        texto3: project?.texto3_richtext,
                        ruta_imagen: project?.ruta_imagen_richtext,
                        texto_final: project?.texto_final_richtext,
                    }}
                />
            )}
            {project.use_overview === 1 && (
                <ProjectOverview
                    projectsOverview={{
                        title: project?.titulo_overview,
                        desc: project?.descripcion_overview,
                        listItem: project?.lista_overview,
                        image: project?.imagen_overview,
                    }}
                />
            )}
        </Col>
    );
}

ProjectContent.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectContent;
