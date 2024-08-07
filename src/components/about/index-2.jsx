import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import classes from './about-2.module.scss';

function AboutTwo({ aboutItemsTwo }) {
    return (
        <div className={classes.area}>
            <Container key={aboutItemsTwo.id_home_service}>
                <Row className="g-0">
                    <Col lg={{ span: 6 }}>
                        <div className={classes.img__wrap}>
                            <div className={classes.pattern}>
                                <img
                                    className="img-full"
                                    src="/images/about/pattern.png"
                                    alt="Pattern"
                                />
                            </div>

                            <div className={classes.group__img}>
                                <div className={classes.single_img}>
                                    <img
                                        className="img-full"
                                        src={aboutItemsTwo?.imagen_url_about}
                                        alt="Single"
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="align-self-end" lg={{ span: 6 }}>
                        <div className={classes.content}>
                            <h2 className={classes.title}>
                                {aboutItemsTwo?.titulo_about}
                            </h2>
                            <h3 className={classes.subtitle}>
                                {aboutItemsTwo?.subtitulo_about}
                            </h3>
                            <p className={classes.desc}>
                                {aboutItemsTwo?.descripcion_about}
                            </p>
                            <ul className={classes.list__item}>
                                {aboutItemsTwo?.bullets_about?.split(',').map((item, index) => {
                                    const CheckIcon = FaIcons.FaCheck;
                                    return (
                                        <li
                                            className={classes.list}
                                            key={`${item}-${index}`}
                                        >
                                            <div className={classes.icon}>
                                                <CheckIcon />
                                            </div>
                                            <div className={classes.text}>
                                                {item}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

AboutTwo.propTypes = {
    aboutItemsTwo: PropTypes.instanceOf(Object).isRequired,
};

export default AboutTwo;
