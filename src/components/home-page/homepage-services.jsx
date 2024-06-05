import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ServiceItem from '../services/service-item';
import classes from '../services/service.module.scss';
import SwiperComps, { Slide } from '../swiper';

function HomePageServices({ services, serviceSectionItems, settings }) {
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
                {serviceSectionItems.map((item) => (
                    <div className={classes.section} key={item.id}>
                        <div className={classes.section_title}>
                            <span>{item?.subTitle}</span>
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: item.title,
                                }}
                            />
                        </div>
                        <div className={classes.section_banner}>
                            <h3
                                className={classes.info}
                                dangerouslySetInnerHTML={{
                                    __html: item.bannerInfo,
                                }}
                            />
                        </div>
                    </div>
                ))}
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
                                    <Slide key={service.slug}>
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
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default HomePageServices;
