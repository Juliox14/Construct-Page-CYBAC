import PropTypes from 'prop-types';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import classes from './counter.module.scss';

function CounterTwo({ proyectos, clientes }) {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };

    return (
        <div className={`${classes.area} ${classes.pb__140}`}>
            <Container>
                <Row
                    className={classes.max_md_g_y__80}
                    style={{ justifyContent: 'center' }}
                >
                    <Col lg={{ span: 3 }} className="mx-auto">
                        <CountUp
                            start={focus ? 0 : null}
                            end={proyectos}
                            duration={1}
                        >
                            {({ countUpRef }) => (
                                <div className={classes.item}>
                                    <h2 className={classes.count_inner__text}>
                                        {proyectos}
                                    </h2>
                                    <span
                                        className={classes.count}
                                        ref={countUpRef}
                                    />
                                    <InView
                                        as="div"
                                        onChange={(inView) =>
                                            visibleChangeHandler(inView)
                                        }
                                    >
                                        <span className={classes.count_title}>
                                            Proyectos
                                        </span>
                                    </InView>
                                </div>
                            )}
                        </CountUp>
                    </Col>
                    <Col lg={{ span: 3 }} className="mx-auto">
                        <CountUp
                            start={focus ? 0 : null}
                            end={clientes}
                            duration={1}
                        >
                            {({ countUpRef }) => (
                                <div className={classes.item}>
                                    <h2 className={classes.count_inner__text}>
                                        {clientes}
                                    </h2>
                                    <span
                                        className={classes.count}
                                        ref={countUpRef}
                                    />
                                    <InView
                                        as="div"
                                        onChange={(inView) =>
                                            visibleChangeHandler(inView)
                                        }
                                    >
                                        <span className={classes.count_title}>
                                            Clientes
                                        </span>
                                    </InView>
                                </div>
                            )}
                        </CountUp>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CounterTwo;
