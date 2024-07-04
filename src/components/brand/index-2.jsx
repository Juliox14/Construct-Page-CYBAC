import PropTypes from 'prop-types';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container } from 'react-bootstrap';
import classes from './brand.module.scss';
import { Slide } from '../swiper';
import icon from '../../../public/images/brand/1.png'
import icon2 from '../../../public/images/brand/2.png'
import icon3 from '../../../public/images/brand/3.png'

function BrandTwo({settings, dataHomeClients}) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        pagination: false,
        loop:true,
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
                spaceBetween: 150,
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
    let clientes_municipio=[];
    let clientes_iniciativa_privada=[];
    let clientes_particular=[];
    const [data_desc] = dataHomeClients[1];
    for(let cliente of dataHomeClients[0]){
        if(cliente.clasificacion_cliente=='municipios'){
            clientes_municipio.push(cliente);
        }
        else if(cliente.clasificacion_cliente=='iniciativa privada'){
            clientes_iniciativa_privada.push(cliente);
        }
        else{
            clientes_particular.push(cliente);
        }
    }
    return (
        <div className={`${classes.bg} ${classes.space__yaxis}`}>
            {/* Container municipios */}
            <Container className={classes.aux}>
                <SwiperComps settings={settings} className={classes.aux3}>
                    {clientes_municipio.map((brandItem) => (
                        <Slide key={brandItem.id_cliente} className={classes.aux2}>
                            <Link href="/" className={classes.item}>
                                <img
                                    src={icon.src} 
                                    alt='logo cliente'
                                    // src={brandItem?.ruta_logo_cliente}
                                    // alt={brandItem?.alt}
                                />
                                <div>{brandItem.nombre_cliente}</div>
                            </Link>
                        </Slide>
                    ))}
                </SwiperComps>
            </Container>
            {/* Container Iniciativa privada */}
            <Container>
                <SwiperComps settings={settings}>
                    {clientes_iniciativa_privada.map((brandItem) => (
                        <Slide key={brandItem.id_cliente}>
                            <Link href="/" className={classes.item}>
                                <img
                                    src={icon2.src} 
                                    alt='logo cliente'
                                    // src={brandItem?.ruta_logo_cliente}
                                    // alt={brandItem?.alt}
                                />
                                <div>{brandItem.nombre_cliente}</div>
                            </Link>
                        </Slide>
                    ))}
                </SwiperComps>
            </Container>
            {/* Container Particulares */}
            <Container>
                <SwiperComps settings={settings}>
                    {clientes_particular.map((brandItem) => (
                        <Slide key={brandItem.id_cliente}>
                            <Link href="/" className={classes.item}>
                                <img
                                    src={icon3.src} 
                                    alt='logo cliente'
                                    // src={brandItem?.ruta_logo_cliente}
                                    // alt={brandItem?.alt}
                                />
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
    dataHomeClients: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default BrandTwo;
