import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';
import classes from './banner-3.module.scss';

function BannerThree({ bannerThreeItems }) {
    return (
        <div className="banner_area">
            <Container>
                <Row className="g-30">
                    <Col lg={{ span: 4 }} md={{ span: 6 }}>
                        <div
                            className={`${classes.item} ${classes.secondary__bg}`}
                        >
                            <div className={classes.content} data-count="01">
                                <h2 className={classes.title}>Misión</h2>
                                <p className={classes.desc}>
                                    {bannerThreeItems?.mision}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 4 }} md={{ span: 6 }}>
                        <div
                            className={`${classes.item} ${classes.primary__bg}`}
                        >
                            <div className={classes.content} data-count="02">
                                <h2 className={classes.title}>Visión</h2>
                                <p className={classes.desc}>
                                    {bannerThreeItems?.vision}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 4 }} md={{ span: 6 }}>
                        <div
                            className={`${classes.item} ${classes.secondary__bg}`}
                        >
                            <div className={classes.content} data-count="03">
                                <h2 className={classes.title}>Valores</h2>
                                <p className={classes.desc}>
                                    {bannerThreeItems?.valores}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

BannerThree.propTypes = {
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
};

export default BannerThree;
