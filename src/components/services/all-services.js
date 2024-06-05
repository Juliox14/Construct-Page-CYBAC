import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import ServiceItem from './service-item';
import classes from './service.module.scss';

SwiperCore.use([Pagination, Autoplay]);

function AllServices({ services, serviceSectionItems }) {
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
                <Row>
                    <Col lg={{ span: 12 }}>
                        <Swiper
                            pagination={false}
                            spaceBetween={30}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3,
                                    slidesPerColumn: 2,
                                    slidesPerColumnFill: 'row',
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
                            }}
                            className={classes.slider}
                        >
                            {services.map((service) => (
                                <SwiperSlide key={service.slug}>
                                    <ServiceItem service={service} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

AllServices.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
};

export default AllServices;
