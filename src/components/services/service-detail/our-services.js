'use client';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import classes from './our-services.module.scss';

function OurService({ ourServices }) {
    const [sanitizedServices, setSanitizedServices] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Sanitizar el HTML solo en el cliente
            const sanitized = ourServices.map((service) => ({
                ...service,
                descripcion_subservicio: DOMPurify.sanitize(
                    service.descripcion_subservicio
                ),
            }));
            setSanitizedServices(sanitized);
        }
    }, [ourServices]);

    return (
        <div className="our-service">
            <div className="our-service-inner pt-45">
                <Row className="g-30">
                    {sanitizedServices?.map((ourService) => (
                        <Col md={{ span: 6 }} key={ourService.id_subservicio}>
                            <div className="our-service-content">
                                <h2 className={classes.title}>
                                    {ourService?.titulo_subservicio}
                                </h2>
                                <p
                                    className={classes.desc}
                                    dangerouslySetInnerHTML={{
                                        __html: ourService.descripcion_subservicio,
                                    }}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

OurService.propTypes = {
    ourServices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OurService;
