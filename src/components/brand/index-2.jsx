import PropTypes from 'prop-types';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container } from 'react-bootstrap';
import classes from './brand.module.scss';
import { Slide } from '../swiper';

function BrandTwo({settings, clientes_municipios}) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    //Obtener de forma dinámica el nombre del Tipo de clientes
    const tipo = clientes_municipios[0].clasificacion_cliente
    return (
        <div className={`${classes.bg} ${classes.space__yaxis}`}>
            <div className={classes.title}><h1>{tipo}</h1></div>
            <Container className={classes.aux}>
                <SwiperComps settings={settings} className={classes.aux3}>
                    {clientes_municipios.map((brandItem) => (
                        <Slide key={brandItem.id_cliente} className={classes.aux2}>
                            <Link href="/" className={classes.item}>
                                <div>
                                    <img
                                        src={icon.src} 
                                        alt='logo cliente'
                                        // src={brandItem.ruta_logo_cliente}
                                        // alt={brandItem.alt}
                                    />
                                </div>
                                <div>{brandItem.nombre_cliente}</div>
                            </Link>
                        </Slide>
                    ))}
                </SwiperComps>
            </Container>
        </div>
    );
}
BrandTwo.propTypes = {
    clientes_municipios: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default BrandTwo;
