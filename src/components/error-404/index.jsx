import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Error404() {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <div className={classes.content}>
                            <h1 className={classes.title}>404</h1>
                            <h2 className={classes.subtitle}>
                                <span>Lo sentimos,</span> pagina no encotrada!
                            </h2>
                            <p className={classes.desc}>
                                Parece que no hay nada aquí. Prueba algo más o
                                regresa a la pagina de inicio con el botón de
                                abajo!
                            </p>
                            <div className={`${classes.btn_wrap}`}>
                                <Link
                                    href="/"
                                    className={`${classes.btn} ${classes.btn_primary} ${classes.btn_hover__secondary}`}
                                >
                                    Inicio
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Error404;
