import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './banner-2.module.scss';

function BannerTwo({ bannerTwoItems }) {
    return (
        <div className={classes.bg}>
            <Container fluid className="px-0">
                {bannerTwoItems?.map((bannerTwoItem) => (
                    <Row className="g-0" key={bannerTwoItem.id}>
                        <Col lg={{ span: 6 }}>
                            <div className={classes.image}>
                                <img
                                    src={bannerTwoItem?.image}
                                    alt={bannerTwoItem?.alt}
                                    className="img-full"
                                />
                            </div>
                        </Col>
                        <Col lg={{ span: 6 }}>
                            <div className={classes.with__sticker}>
                                <div className={classes.content}>
                                    <span className={classes.sub_title}>
                                        {bannerTwoItem?.subTitle}
                                    </span>
                                    <h2
                                        className={classes.title}
                                        dangerouslySetInnerHTML={{
                                            __html: bannerTwoItem.title,
                                        }}
                                    />
                                    <p className={classes.desc}>
                                        {bannerTwoItem?.desc}
                                    </p>
                                    <div className={classes.hero_btn__wrap}>
                                        <Link
                                            href="/projects/project-fullwidth"
                                            className={`me-20 ${classes.btn} ${classes.btn_primary} ${classes.btn_hover__white}`}
                                        >
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                                <div className={classes.sticker}>
                                    <img
                                        src={bannerTwoItem?.stickerImage}
                                        alt={bannerTwoItem?.stickerAlt}
                                        className="img-full"
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

BannerTwo.propTypes = {
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
};

export default BannerTwo;
