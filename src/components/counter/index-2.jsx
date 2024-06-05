import PropTypes from 'prop-types';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import classes from './counter.module.scss';

function CounterTwo() {
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
                <Row className={classes.max_md_g_y__80}>
                    <Col lg={{ span: 3 }}>
                        <CountUp
                            start={focus ? 0 : null}
                            end={985}
                            duration={3}
                        >
                            {({ countUpRef }) => (
                                <div className={classes.item}>
                                    <h2 className={classes.count_inner__text}>
                                        985
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
                    <Col lg={{ span: 3 }}>
                        <CountUp
                            start={focus ? 0 : null}
                            end={527}
                            duration={3}
                        >
                            {({ countUpRef }) => (
                                <div className={classes.item}>
                                    <h2 className={classes.count_inner__text}>
                                        527
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
                    <Col lg={{ span: 3 }}>
                        <CountUp
                            start={focus ? 0 : null}
                            end={856}
                            duration={3}
                        >
                            {({ countUpRef }) => (
                                <div className={classes.item}>
                                    <h2 className={classes.count_inner__text}>
                                        856
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
                                            Exitos
                                        </span>
                                    </InView>
                                </div>
                            )}
                        </CountUp>
                    </Col>
                    <Col lg={{ span: 3 }}>
                        <CountUp
                            start={focus ? 0 : null}
                            end={120}
                            duration={3}
                        >
                            {({ countUpRef }) => (
                                <div className={classes.item}>
                                    <h2 className={classes.count_inner__text}>
                                        120
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
                                            Premios
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
