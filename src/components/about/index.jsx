'use client'
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import classes from './about.module.scss';
import TimeLine from '../timeline/timeline';
import DOMPurify from 'dompurify';
import { useState, useEffect } from 'react';

function AboutOne({ aboutItem }) {
    const [sanitizedItem, setSanitizedItem] = useState([]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Sanitizar el HTML solo en el cliente
            const sanitized = {
                ...aboutItem,
                descripcion2San_nosotros: DOMPurify.sanitize(aboutItem.descripcion2_nosotros)
            };
            setSanitizedItem(sanitized);
        }
    }, [aboutItem]);
    return (
        <div className={classes.area}>
            {console.log(aboutItem.id_nosotros)}
            <Container key={aboutItem.id_nosotros}>
                <div className={classes.section}>
                    <div className={classes.section__wrap}>
                        <div className={classes.section__title}>
                            <span>{aboutItem?.subtitulo_nosotros}</span>
                            <h2>{aboutItem?.titulo_nosotros}</h2>
                        </div>
                        <p className={classes.section__desc}>
                            {aboutItem?.descripcion_nosotros}
                        </p>
                    </div>
                </div>
                <Row>
                    <Col lg={{ span: 6 }}>
                        <div className={classes.img__wrap}>
                            <div className={classes.pattern}>
                                <img
                                    src='/images/about/pattern.png'
                                    alt='pattern'
                                />
                            </div>
                            <div className={classes.img}>
                                <img
                                    src='/images/about/1-1.jpg'
                                    alt='about image'
                                    className="img-full"
                                />
                            </div>
                        </div>
                    </Col>

                    <Col lg={{ span: 6 }}>
                        <div className={classes.content}>
                            <div className={classes.experience}>
                                <div
                                    className={
                                        classes.experience_content
                                    }
                                >
                                    <span className={classes.year}>
                                        {aboutItem?.anios_experiencia}
                                    </span>
                                    <h2 className={classes.our_progress}>
                                        Años de <span>Experiencia</span>
                                    </h2>
                                </div>
                                <div className={classes.experience_img}>
                                    <img
                                        src='/images/about/avatar.png'
                                        alt='años de experiencia'
                                    />
                                </div>
                            </div>
                            <h3 className={classes.subtitle}>
                                {aboutItem?.titulo2_nosotros}
                            </h3>
                            <p className={classes.desc} dangerouslySetInnerHTML={{ __html:sanitizedItem.descripcion2San_nosotros}}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

AboutOne.propTypes = {
    aboutItem: PropTypes.instanceOf(Object).isRequired,
};

export default AboutOne;
