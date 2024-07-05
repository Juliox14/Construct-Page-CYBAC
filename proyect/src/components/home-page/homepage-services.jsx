import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ServiceItem from '../services/service-item';
import classes from '../services/service.module.scss';
import SwiperComps, { Slide } from '../swiper';

function HomePageServices({ services, settings }) {
    settings = {
        spaceBetween: 30,
        pagination: false,
        navigation: {
            nextEl: '.service-button-next',
            prevEl: '.service-button-prev',
        },
        loop: false,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <div className={classes.area}>
            <Container>
                <div className={classes.section}>
                    <div className={classes.section_title}>
                        <span>SERVICIOS</span>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: 'Calidad<br/> en cada uno<br/> de nuestros servicios'
                            }}
                        />
                    </div>
                    <div className={classes.section_banner}>
                        <h3
                            className={classes.info}
                            dangerouslySetInnerHTML={{
                                __html: '¿Tienes proyectos? <span>+52 81 2340 4908</span>',
                            }}
                        />
                    </div>
                </div>
                <div className={classes.navigation__holder}>
                    <div className="service-navigation">
                        <div className="service-button-next button-next">
                            <FaChevronLeft />
                        </div>
                        <div className="service-button-prev button-prev">
                            <FaChevronRight />
                        </div>
                    </div>
                    <Row>
                        <Col lg={{ span: 12 }}>
                            <SwiperComps
                                settings={settings}
                                className={classes.slider}
                            >
                                {services.map((service) => (
                                    <Slide key={service.id_servicio}>
                                        <ServiceItem service={service} />
                                    </Slide>
                                ))}
                            </SwiperComps>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

HomePageServices.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default HomePageServices;
