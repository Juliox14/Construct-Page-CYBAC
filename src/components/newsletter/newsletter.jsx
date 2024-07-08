import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './newsletter.module.scss';

function Newsletter({ newsletterItems }) {
    return (
        <div className={`${classes.bg}`}>
            <Container>
                <Row>
                    {newsletterItems?.map((newsletterItem) => (
                        <Col lg={{ span: 12 }} key={newsletterItem.id}>
                            <div className={classes.item}>
                                <h2 className={classes.title}>
                                    {newsletterItem?.title}
                                </h2>
                                <form className={classes.form}>
                                    <input
                                        className={classes.input_field}
                                        type="email"
                                        placeholder="Ingresa tu correo electrónico"
                                    />
                                    <div className={classes.btn__wrap}>
                                        <button
                                            type="submit"
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
                                        >
                                            Subscribete ahora
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

Newsletter.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
};

export default Newsletter;
