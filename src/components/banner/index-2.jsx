import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './banner-2.module.scss';
import bannerImage from '../../../public/images/banner/medium-size/2-1-939x666.jpeg';
import bannerStickerImage from '../../../public/images/banner/sticker/1.jpg';

function BannerTwo() {
    return (
        <div className={classes.bg}>
            <Container fluid className="px-0">
                <Row className="g-0" key="banner-02">
                    <Col lg={{ span: 6 }}>
                        <div className={classes.image}>
                            <img src={bannerImage.src} alt="Banner Image" />
                        </div>
                    </Col>
                    <Col lg={{ span: 6 }}>
                        <div className={classes.with__sticker}>
                            <div className={classes.content}>
                                <span className={classes.sub_title}>
                                    EXPLORA
                                </span>
                                <h2
                                    className={classes.title}
                                    dangerouslySetInnerHTML={{
                                        __html: '<span> Gestion completa de <br /> proyectos </span>',
                                    }}
                                />
                                <p className={classes.desc}>
                                    Obten claridad, eficiencia y resultados
                                    sobresalientes, enfócate en tu negocio
                                    mientras checamos los detalles. Transforma
                                    tus ideas en realidades con nuestra gestión
                                    de proyectos de primer nivel.
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
                                    src={bannerStickerImage.src}
                                    alt="Banner Sticker"
                                    className="img-full"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BannerTwo;
