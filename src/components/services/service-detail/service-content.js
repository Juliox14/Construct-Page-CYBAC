import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import RichText from '../../rich-text';
import classes from './index.module.scss';
import OurServices from './our-services';

function ServiceContent({ service, richTexts, ourServices }) {
    // const imagePath = `/images/services/${service?.slug}/${service?.largeImage}`;
    // console.log({ data, service, item: data?.find(os => os.id == service.our_service_id) })
    // const data = ourServices[0].data;

    console.log({ ourServices });
    return (
        <Col lg={{ span: 9 }} className="pe-lg-45">
            {/* <div className="banner">
                <img
                    className="img-full"
                    src={imagePath}
                    alt={service?.title}
                />
            </div> */}
            <div className={classes.content}>
                <h2 className={classes.title}>{service?.title}</h2>
                <h3 className={classes.subtitle}>{service?.detailSubTitle}</h3>
                <p className={classes.desc}>{service?.detailDesc}</p>
            </div>
            <RichText richTexts={richTexts} />
            <OurServices
                ourServices={ourServices?.find(
                    (os) => os.id === service.our_service_id
                )}
            />

            {/* <OurServices ourServices={[...ourServicesData.filter(s => s.id == service.ourServices_id)]} /> */}
        </Col>
    );
}

ServiceContent.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    ourServices: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceContent;
