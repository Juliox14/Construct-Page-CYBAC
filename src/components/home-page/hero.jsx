import PropTypes from 'prop-types';
import Link from 'next/link';
import SwiperComps, { Slide } from '../swiper';
import classes from './hero.module.scss';

function Hero({ heroItems, settings }) {
    settings = {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: { clickable: true, type: 'bullets' },
        navigation: true,
        slidesPerView: 1,
    };
    return (
        <SwiperComps settings={settings} sliderCName="hero-slider">
            {heroItems?.map((heroItem, index) => (
                <Slide
                    className={`animation-style-01 ${classes["slide-bg"]}`}
                        style={{backgroundImage: `url('${heroItem.bg}')`}}
                    key={heroItem.id}
                >
                    <div className="container">
                        <div className="content">
                            <span
                                className={`subtitle-animation ${classes.subtitle}`}
                                dangerouslySetInnerHTML={{
                                    __html: heroItem.subtitle,
                                }}
                            >
                            </span>
                            <div
                                className={`title-animation ${classes.title}`}
                                dangerouslySetInnerHTML={{
                                    __html: heroItem.title,
                                }}
                            />
                            <div
                                className={`desc-animation ${classes.desc}`}
                                dangerouslySetInnerHTML={{
                                    __html: heroItem.descripcion,
                                }}
                            />
                            <div
                                className={`btn-animation ${classes.btn_wrap}`}
                            >
                                <Link
                                    href="/projects/project-fullwidth"
                                    className={`me-20 ${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
                                >
                                    Saber más
                                </Link>
                                <Link
                                    href="/contact"
                                    className={`${classes.btn} ${classes.btn_primary} ${classes.btn_hover__white}`}
                                >
                                    Contáctanos
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slide>
            ))}
        </SwiperComps>
    );
}

Hero.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default Hero;
