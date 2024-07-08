import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './banner.module.scss';

function BannerOne({ bannerItems }) {
    return (
        <div className={classes.area}>
            <Container>
                <Row className="g-4">
                    {bannerItems?.map((bannerItem) => (
                        <Col
                            lg={{ span: 4 }}
                            md={{ span: 6 }}
                            key={bannerItem.id}
                        >
                            <div
                                className={`${bannerItem.bannerBG
                                    .split(' ')
                                    .map((item) => classes[item])
                                    .join(' ')}`}
                            >
                                <div className={classes.content}>
                                    <h2 className={classes.title}>
                                        {bannerItem?.title}
                                    </h2>
                                    <p className={classes.desc}>
                                        {bannerItem?.desc}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

BannerOne.propTypes = {
    bannerItems: PropTypes.instanceOf(Object).isRequired,
};

export default BannerOne;
