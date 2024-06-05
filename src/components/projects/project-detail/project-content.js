import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import ProjectOverview from '../../project-overview';
import RichText from '../../rich-text';
import classes from './index.module.scss';

function ProjectContent({ project, richTexts, projectsOverview }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

    return (
        <Col lg={{ span: 9 }} className="pe-lg-45">
            <div className={`${classes.banner} row g-0`}>
                <Col md={{ span: 5 }} className="mb-max-sm-20">
                    <div className={classes.single_img}>
                        <img src={imagePath} alt={project?.title} />
                    </div>
                </Col>
                <Col md={{ span: 7 }}>
                    <div className="group-img row g-0 mb-20">
                        <Col xs={{ span: 6 }}>
                            <div className={classes.single_img}>
                                <img
                                    src={project?.groupImageOne}
                                    alt={project?.title}
                                />
                            </div>
                        </Col>
                        <Col xs={{ span: 6 }}>
                            <div className={classes.single_img}>
                                <img
                                    src={project?.groupImageTwo}
                                    alt={project?.title}
                                />
                            </div>
                        </Col>
                    </div>
                    <div className="group-img row g-0">
                        <Col xs={{ span: 7 }}>
                            <div className={classes.single_img}>
                                <img
                                    src={project?.groupImageThree}
                                    alt={project?.title}
                                />
                            </div>
                        </Col>
                        <Col xs={{ span: 5 }}>
                            <div className={classes.single_img}>
                                <img
                                    src={project?.groupImageFour}
                                    alt={project?.title}
                                />
                            </div>
                        </Col>
                    </div>
                </Col>
            </div>
            <div className={classes.content}>
                <h2 className={classes.title}>{project?.title}</h2>
                <h3 className={`${classes.subtitle} mb-40`}>
                    {project?.detailSubTitle}
                </h3>
                <h3 className={classes.summery_title}>
                    {project?.summeryTitle}
                </h3>
                <p className={classes.summery_desc}>{project?.summeryDesc}</p>
            </div>
            <RichText richTexts={richTexts} />
            <ProjectOverview projectsOverview={projectsOverview} />
        </Col>
    );
}

ProjectContent.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    projectsOverview: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectContent;
