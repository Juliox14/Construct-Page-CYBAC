import PropTypes from 'prop-types';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container } from 'react-bootstrap';
import classes from './brand.module.scss';
import { Slide } from '../swiper';

function BrandTwo({ brandItems, settings }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        pagination: false,
        loop: true,
        navigation: {
            nextEl: '.brand-button-next',
            prevEl: '.brand-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 100,
            },
            768: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 100,
            },
            576: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
                spaceBetween: 30,
            },
        },
    };
    return (
        <div className={`${classes.bg} ${classes.space__yaxis}`}>
            <Container>
                <SwiperComps settings={settings}>
                    {brandItems?.map((brandItem) => (
                        <Slide key={brandItem.id}>
                            <Link href="/" className={classes.item}>
                                <img
                                    src={brandItem?.image}
                                    alt={brandItem?.imageAlt}
                                />
                            </Link>
                        </Slide>
                    ))}
                </SwiperComps>
            </Container>
        </div>
    );
}

BrandTwo.propTypes = {
    brandItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default BrandTwo;
