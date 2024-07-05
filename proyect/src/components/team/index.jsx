import PropTypes from 'prop-types';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Col, Container, Row } from 'react-bootstrap';
import {
    FaShareAlt,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa';
import { IoAddOutline } from 'react-icons/io5';
import classes from './team.module.scss';
import { Slide } from '../swiper';

function Team({ teamItems, teamSectionItems, settings }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        spaceBetween: 30,
        pagination: false,
        slidesPerView: 4,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <div className={classes.area}>
            <Container>
                {teamSectionItems?.map((item) => (
                    <div className={classes.section} key={item.id}>
                        <div className={classes.section__wrap}>
                            <div className={classes.section_title}>
                                <span>{item?.subTitle}</span>
                                <h2>{item?.title}</h2>
                            </div>
                            <div className={classes.section_desc}>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item.desc,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <Row>
                    <Col lg={{ span: 12 }}>
                        <SwiperComps settings={settings}>
                            {teamItems?.map((teamItem) => (
                                <Slide key={teamItem.id}>
                                    <div className={classes.item}>
                                        <div className={classes.img}>
                                            <img
                                                src={teamItem?.image}
                                                alt={teamItem?.alt}
                                                className="img-full"
                                            />
                                            <ul className={classes.add__action}>
                                                {/* <li
                                                    className={
                                                        classes.social_link__wrap
                                                    }
                                                >
                                                    <Link href="https://www.example.com">
                                                        <FaShareAlt />
                                                    </Link>
                                                    <ul
                                                        className={
                                                            classes.social_link
                                                        }
                                                    >
                                                        <li>
                                                            <Link href="https://www.example.com">
                                                                <FaFacebookF />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.example.com">
                                                                <FaTwitter />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.example.com">
                                                                <FaInstagram />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li> */}
                                                <li
                                                    className={
                                                        classes.mail_link__wrap
                                                    }
                                                >
                                                    <Link
                                                        href="mailto://info@example.com"
                                                        className={
                                                            classes.mail_link
                                                        }
                                                    >
                                                        <IoAddOutline />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={classes.content}>
                                            <h3
                                                className={classes.title}
                                                dangerouslySetInnerHTML={{
                                                    __html: teamItem?.teamTitle,
                                                }}
                                            />
                                            <span
                                                className={classes.occupation}
                                            >
                                                {teamItem?.teamOccupation}
                                            </span>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </SwiperComps>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

Team.propTypes = {
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default Team;
