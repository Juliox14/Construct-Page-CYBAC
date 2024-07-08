import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import FormContact from './form';

function Contact({ contactItems }) {
    return (
        <main>
            <Container key={contactItems?.id_contacto}>
                <div className={classes.area}>
                    <Row>
                        <Col lg={{ span: 6 }}>
                            <div className={classes.img_wrap}>
                                <div className={classes.img}>
                                    <img
                                        className="img-full"
                                        src={contactItems?.ruta_imagen}
                                        alt='Imagen contactanos Reichstag Edificaciones S.A. de C.V.'
                                    />
                                </div>
                                <div className={classes.pattern}>
                                    <img
                                        src='/images/contact/pattern.png'
                                        alt='Patrón contactanos Reichstag Edificaciones S.A. de C.V.'
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 6 }} className="ps-50">
                            <div className={classes.content}>
                                <span className={classes.subtitle}>
                                    {contactItems?.subtitulo}
                                </span>
                                <h2 className={classes.title}>
                                    {contactItems?.titulo}
                                </h2>
                                <p className={classes.desc}>
                                    {contactItems?.descripcion}
                                </p>
                                <div className={classes.info}>
                                    <h3 className={classes.info_title}>
                                        Direccion de Oficinas
                                    </h3>
                                    <p className={classes.info_desc}>
                                        {contactItems?.direccion}
                                    </p>
                                </div>
                                <div className={classes.info}>
                                    <h3 className={classes.info_title}>
                                        Información de Contacto
                                    </h3>
                                    <ul className={classes.info_list}>
                                        <li className='classes.infoContact'>
                                            Teléfono: 
                                            <Link href={`tel://${contactItems.telefono}`}>
                                                {contactItems.telefono}
                                            </Link>
                                        </li>
                                        <li>
                                            Whatsapp: 
                                            <Link href={`https://wa.me/${contactItems.whatsapp.replaceAll(' ', '')}`} target='_blank'>
                                                {contactItems.whatsapp}
                                            </Link>
                                        </li>
                                        <li>
                                            Horario de Atención: 
                                            <span style={{marginLeft: '4px'}}>
                                                {contactItems.horario}
                                            </span> 
                                        </li>
                                        <li>
                                            Email: 
                                            <Link href={`mailto:${contactItems.email}`}>
                                                {contactItems.email}
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={classes.form_area}>
                    <Row>
                        <Col lg={{ span: 6 }}>
                            <h2 className={classes.form_title}>
                                {contactItems?.titulo_formulario}
                            </h2>
                            <p className={`${classes.form_desc} mb-0`}>
                                {contactItems?.descripcion_formulario}
                            </p>
                            <FormContact/>
                        </Col>
                        <Col lg={{ span: 6 }} className="ps-lg-50">
                            <div className="map_with__pattern">
                                <iframe
                                    title="Reichstag contact title"
                                    className="map_size"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1914.3650622967023!2d-100.36355626654573!3d25.707305005563487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662966513a9244f%3A0xece353a985125e3e!2sNo.%202%202648%2C%20Adolfo%20L%C3%B3pez%20Mateos%2C%2064380%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1708674790400!5m2!1ses-419!2smx"
                                />
                                <div className="map_pattern">
                                    <img
                                        src='/images/contact/pattern.png'
                                        alt='Patrón contactanos Reichstag Edificaciones S.A. de C.V.'
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </main>
    );
}

Contact.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default Contact;
