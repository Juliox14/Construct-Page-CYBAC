'use client';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link';
import { Fragment } from 'react';
import classes from './footer.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Footer({ footerItems, services }) {
    const [showAllServices, setShowAllServices] = useState(false);

    const toggleServices = () => {
        setShowAllServices(!showAllServices);
    };

    const visibleServices = services.slice(0, 5);
    const hiddenServices = services.slice(5);
    return (
        <footer>
            <Fragment key={footerItems?.footer.id_footer}>
                <div className={`${classes.bg}`}>
                    <Container style={{ height: '380px' }}>
                        <Row>
                            <Col lg={{ span: 3 }}>
                                <div className={classes.widget__item}>
                                    <Link href="/" className={classes.logo}>
                                        <img
                                            src={footerItems?.footer.ruta_logo}
                                            alt="Logo Reichstag"
                                        />
                                    </Link>
                                    <p className={classes.desc}>
                                        {footerItems?.footer.eslogan}
                                    </p>
                                    <div className={classes.inquary}>
                                        <h2 className={classes.inquary_info}>
                                            Consultas
                                        </h2>
                                        <Link
                                            href={`tel://${footerItems?.footer.telefono}`}
                                            className={classes.inquary_number}
                                        >
                                            {footerItems?.footer.telefono}
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col
                                xl={{ span: 3 }}
                                lg={{ span: 2 }}
                                sm={{ span: 6 }}
                                className="ps-xl-80 pt-40 pt-lg-0"
                            >
                                <div className={classes.mobile}>
                                    <div className={classes.widget__item}>
                                        <h2 className={classes.widget__title}>
                                            Servicios
                                        </h2>
                                        <ul className={classes.widget__list}>
                                            {visibleServices?.map((item) => (
                                                <li key={item.id_servicio}>
                                                    <Link
                                                        href={`/services/${item.titulo
                                                            .toLowerCase()
                                                            .normalize('NFD')
                                                            .replace(
                                                                /[\u0300-\u036f]/g,
                                                                ''
                                                            )}`}
                                                    >
                                                        {item.titulo}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                        <motion.ul
                                            className={classes.widget__list}
                                            style={{
                                                marginTop: '15px',
                                                overflow: 'hidden',
                                            }}
                                            initial={{
                                                height: '0px',
                                                display: 'block',
                                            }}
                                            variants={{
                                                visible: { height: 'auto' },
                                                hidden: { height: '0px' },
                                            }}
                                            animate={
                                                showAllServices
                                                    ? 'visible'
                                                    : 'hidden'
                                            }
                                        >
                                            {hiddenServices?.map(
                                                (item, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href={`/services/${item.titulo
                                                                .toLowerCase()
                                                                .normalize(
                                                                    'NFD'
                                                                )
                                                                .replace(
                                                                    /[\u0300-\u036f]/g,
                                                                    ''
                                                                )}`}
                                                        >
                                                            {item.titulo}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </motion.ul>

                                        {services.length > 5 && (
                                            <span
                                                className={classes.viewMore}
                                                onClick={toggleServices}
                                            >
                                                {showAllServices
                                                    ? 'Ver menos'
                                                    : 'Ver más'}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Col>

                            <Col
                                lg={{ span: 3 }}
                                sm={{ span: 6 }}
                                className="ps-lg-50 pt-40 pt-lg-0"
                            >
                                <div className={classes.mobile}>
                                    <div className={classes.widget__item}>
                                        <h2 className={classes.widget__title}>
                                            Enlaces rápidos
                                        </h2>
                                        <ul className={classes.widget__list}>
                                            {footerItems?.enlaces_rapidos?.map(
                                                (item) => (
                                                    <li key={item.id_enlace}>
                                                        <Link
                                                            href={`${item.enlace}`}
                                                        >
                                                            {item.nombre_enlace}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col
                                xl={{ span: 3 }}
                                lg={{ span: 4 }}
                                className="pt-40 pt-lg-0"
                            >
                                <div className={classes.widget__item}>
                                    <h2 className={classes.widget__title}>
                                        Información de contacto
                                    </h2>
                                    <div
                                        className={`pb-25 ${classes.widget__info}`}
                                    >
                                        <p className={classes.widget_address}>
                                            {`${footerItems?.footer.direccion} | C.P ${footerItems?.footer.codigo_postal} | `}
                                            <span className="text-primary">
                                                {footerItems?.footer.ubicacion}
                                            </span>
                                        </p>
                                        <span className={classes.widget_number}>
                                            {footerItems?.footer.telefono}
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={classes.bottom}>
                    <Container>
                        <Row>
                            <Col md={{ span: 6 }} sm={{ span: 4 }}>
                                <ul className={classes.social}>
                                    {footerItems?.redes_sociales?.map(
                                        (item) => {
                                            const Social =
                                                FaIcons[item.icono_red_social];
                                            return (
                                                <li key={item.id_red_social}>
                                                    <Link
                                                        href={`${item.enlace_red_social}`}
                                                        target="_blank"
                                                    >
                                                        <Social />
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </Col>
                            <Col md={{ span: 6 }} sm={{ span: 8 }}>
                                <div className={classes.copyright}>
                                    <span className={classes.text}>
                                        © {new Date().getFullYear()} Reichstag
                                        Todos los Derechos Reservados.
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        </footer>
    );
}

Footer.propTypes = {
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Footer;
