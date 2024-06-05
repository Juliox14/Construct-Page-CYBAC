import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function RichText({ richTexts }) {
    return (
        <div className={classes.item}>
            {richTexts?.map((richText) => (
                <Row className="pb-35 g-30" key={richText.id}>
                    <Col lg={{ span: 4 }} className="align-self-center">
                        <div className="content">
                            <p className={`${classes.desc} min-lg-w238`}>
                                {richText?.textOne}
                            </p>
                            <p className={`${classes.desc} min-lg-w238`}>
                                {richText?.textTwo}
                            </p>
                            <p className={`${classes.desc} mb-0`}>
                                {richText?.textThree}
                            </p>
                        </div>
                    </Col>
                    <Col lg={{ span: 8 }}>
                        <div className={`${classes.group_image} pb-20`}>
                            <div className={`${classes.single_image} pe-20`}>
                                <img
                                    src={richText?.groupImageOne}
                                    alt={richText?.groupImageAlt}
                                />
                            </div>
                            <div className={classes.single_image}>
                                <img
                                    src={richText?.groupImageTwo}
                                    alt={richText?.groupImageAlt}
                                />
                            </div>
                        </div>
                        <div className={`${classes.group_image}`}>
                            <div className={`${classes.single_image} pe-20`}>
                                <img
                                    src={richText?.groupImageThree}
                                    alt={richText?.groupImageAlt}
                                />
                            </div>
                            <div className={classes.single_image}>
                                <img
                                    src={richText?.groupImageFour}
                                    alt={richText?.groupImageAlt}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={{ span: 12 }}>
                        <p className={`${classes.desc} mb-0`}>
                            {richText?.additionText}
                        </p>
                    </Col>
                </Row>
            ))}
        </div>
    );
}

RichText.propTypes = {
    richTexts: PropTypes.instanceOf(Object).isRequired,
};

export default RichText;
