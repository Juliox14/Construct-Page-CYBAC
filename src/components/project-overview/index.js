import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import classes from './index.module.scss';

function ProjectOverview({ projectsOverview }) {
    return (
        <div className={classes.item}>
            {projectsOverview?.map((item) => (
                <Row key={item.id}>
                    <Col lg={{ span: 12 }}>
                        <h2 className={classes.title}>{item?.title}</h2>
                        <p className={classes.desc}>{item?.desc}</p>
                        <ul className={classes.list}>
                            {item?.listItem?.map((item) => {
                                const Social = FaIcons[item.checkIcon];
                                return (
                                    <li key={item.id}>
                                        <div className={classes.list_icon}>
                                            <Social />
                                        </div>
                                        <div className={classes.list_text}>
                                            <span>{item.text}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className={classes.image}>
                            <img src={item?.image} alt={item?.imageAlt} />
                        </div>
                        <h2 className={classes.handover_title}>
                            {item?.handoverTitle}
                        </h2>
                        <p className={classes.handover_desc}>
                            {item?.handoverDesc}
                        </p>
                        <p className={classes.handover_desc}>
                            {item?.additionDesc}
                        </p>
                        <ul className={classes.list}>
                            {item?.handoverListItem?.map((item) => {
                                const Social = FaIcons[item.checkIcon];
                                return (
                                    <li key={item.id}>
                                        <div className={classes.list_icon}>
                                            <Social />
                                        </div>
                                        <div className={classes.list_text}>
                                            <span>{item.text}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            ))}
        </div>
    );
}

ProjectOverview.propTypes = {
    projectsOverview: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectOverview;
