import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';
import OurServices from './our-services';

function ServiceContent({ service, ourServices }) {
    return (
        <Col lg={{ span: 9 }} className="pe-lg-45">
            <div className="banner">
                <img
                    className="img-full"
                    src={service?.imagen_url}
                    alt={service?.titulo}
                />
            </div>
            <div className={classes.content}>
                <h2 className={classes.title}>{service?.titulo}</h2>
                <h3 className={classes.subtitle}>
                    {service?.descripcion_breve}
                </h3>
                <p className={classes.desc}>{service?.descripcion}</p>
            </div>
            <OurServices ourServices={ourServices} />
        </Col>
    );
}

ServiceContent.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    ourServices: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceContent;
