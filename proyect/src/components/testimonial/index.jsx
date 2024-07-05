import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import classes from './testimonial.module.scss';
import { Slide } from '../swiper';

function Testimonial({ testimonialItems, testimonialSectionItems, settings }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        pagination: false,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                },
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 30,
            },
            768: {
                grid: {
                    rows: 1,
                },
                slidesPerView: 2,
                spaceBetween: 30,
            },
            576: {
                grid: {
                    rows: 1,
                },
                slidesPerView: 1,
                spaceBetween: 30,
            },
            0: {
                grid: {
                    rows: 1,
                },
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    };
    return (
        <div className={classes.area}>
            {/* <Container>
                <Row className="g-4">
                    {testimonialSectionItems?.map((item) => (
                        <Col
                            xl={{ span: 5 }}
                            lg={{ span: 6 }}
                            key={item.id}
                            className="pb-30 pb-lg-0"
                        >
                            <div className={classes.section__wrap}>
                                <span className={classes.subtitle}>
                                    {item?.subTitle}
                                </span>
                                <h2 className={classes.title}>{item?.title}</h2>
                                <p
                                    className={classes.desc}
                                    dangerouslySetInnerHTML={{
                                        __html: item.desc,
                                    }}
                                />
                                <div className="btn-wrap">
                                    <Link
                                        href="/"
                                        className={classes.section__btn}
                                    >
                                        view more
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                    <Col xl={{ span: 7 }} lg={{ span: 6 }}>
                        <SwiperComps settings={settings}>
                            {testimonialItems?.map((testimonialItem) => (
                                <Slide key={testimonialItem.id}>
                                    <div className={classes.item}>
                                        <div className={classes.content}>
                                            <p className={classes.desc}>
                                                <i
                                                    className={`${classes.quotation} ${classes.direction_left}`}
                                                >
                                                    “
                                                </i>
                                                {testimonialItem?.excerpt}
                                                <i
                                                    className={`${classes.quotation} ${classes.direction_right}`}
                                                >
                                                    ”
                                                </i>
                                            </p>
                                            <div className={classes.user_info}>
                                                <div className="user_img">
                                                    <img
                                                        src={
                                                            testimonialItem?.avatar
                                                        }
                                                        alt={
                                                            testimonialItem?.avatarAlt
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        classes.user_content
                                                    }
                                                >
                                                    <h3
                                                        className={
                                                            classes.user_name
                                                        }
                                                    >
                                                        {
                                                            testimonialItem?.userName
                                                        }
                                                    </h3>
                                                    <span
                                                        className={
                                                            classes.user_occupation
                                                        }
                                                    >
                                                        {
                                                            testimonialItem?.userOccupation
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </SwiperComps>
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
}

Testimonial.propTypes = {
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default Testimonial;
