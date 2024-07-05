import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import {
    FaShareAlt,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa';
import { IoAddOutline } from 'react-icons/io5';
import classes from './team.module.scss';
import SwiperComps, { Slide } from '../swiper';

function TeamTwo({ teamItemsTwo, settings }) {
    settings = {
        pagination: false,
        spaceBetween: 30,
        slidesPerView: 4,
        loop: false,
        breakpoints: {
            1200: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
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
        <div className={classes.area_02}>
            <Container>
                <Row>
                    <Col lg={{ span: 12 }}>
                        <SwiperComps settings={settings}>
                            {teamItemsTwo?.map((teamItemTwo) => (
                                <Slide key={teamItemTwo.id}>
                                    <div className={classes.item}>
                                        <div className={classes.img}>
                                            <img
                                                src={teamItemTwo?.image}
                                                alt={teamItemTwo?.alt}
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
                                                    __html: teamItemTwo?.teamTitle,
                                                }}
                                            />
                                            <span
                                                className={classes.occupation}
                                            >
                                                {teamItemTwo?.teamOccupation}
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

TeamTwo.propTypes = {
    teamItemsTwo: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default TeamTwo;
