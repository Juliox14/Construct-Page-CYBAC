import PropTypes from 'prop-types';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container } from 'react-bootstrap';
import classes from './brand.module.scss';
import { Slide } from '../swiper';
import icon from '../../../public/images/brand/5.png';

function BrandTwo({ settings, clientes }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        pagination: false,
        navigation: {
            nextEl: '.brand-button-next',
            prevEl: '.brand-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                spaceBetween: 50,
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
    //Obtener de forma dinámica el nombre del Tipo de clientes
    const tipo = clientes[0].clasificacion;
    return (
        <div className={`${classes.bg} ${classes.space__yaxis}`}>
            <div className={classes.title}>
                <h1>{tipo}</h1>
            </div>
            <Container className={classes.aux}>
                <SwiperComps settings={settings} className={classes.aux3}>
                    {clientes.map((brandItem) => (
                        <Slide
                            key={brandItem.id_cliente}
                            className={classes.aux2}
                        >
                            <Link href="/" className={classes.item}>
                                <div>
                                    <img
                                        src={brandItem.ruta_logo}
                                        alt={brandItem.alt}
                                        width={100}
                                    />
                                </div>
                                <div>{brandItem.nombre}</div>
                            </Link>
                        </Slide>
                    ))}
                </SwiperComps>
            </Container>
        </div>
    );
}
BrandTwo.propTypes = {
    clientes: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default BrandTwo;
