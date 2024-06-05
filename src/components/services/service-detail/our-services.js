import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
// import * as FaIcons from 'react-icons/fa';
import classes from './our-services.module.scss';

function OurService({ ourServices }) {
    console.log({ x: ourServices });
    return (
        <div className="our-service">
            <div className="our-service-inner pt-45">
                <Row className="g-30">
                    {ourServices?.items?.map((ourService) => (
                        <Col md={{ span: 6 }} key={ourService.id}>
                            <div className="our-service-content">
                                <h2 className={classes.title}>
                                    {ourService?.title}
                                </h2>
                                <p className={classes.desc}>
                                    {ourService?.desc}
                                </p>
                                {/* <ul className={classes.list}>
                                    {ourService?.listItem?.map((singleItem) => {
                                        const CheckIcon =
                                            FaIcons[singleItem.checkIcon];
                                        return (
                                            <li key={singleItem.id}>
                                                <div
                                                    className={
                                                        classes.list_icon
                                                    }
                                                >
                                                    <CheckIcon />
                                                </div>
                                                <div
                                                    className={
                                                        classes.list_text
                                                    }
                                                >
                                                    <span>
                                                        {singleItem.text}
                                                    </span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul> */}
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

OurService.propTypes = {
    ourServices: PropTypes.instanceOf(Object).isRequired,
};

export default OurService;
