import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link';
import { Fragment } from 'react';
import classes from './footer.module.scss';

function Footer({ footerItems }) {
    return (
        <footer>
            {footerItems?.map((footerItem) => (
                <Fragment key={footerItem.id}>
                    <div className={`${classes.bg}`}>
                        <Container>
                            <Row>
                                <Col lg={{ span: 3 }}>
                                    <div className={classes.widget__item}>
                                        <Link href="/" className={classes.logo}>
                                            <img
                                                src={footerItem?.footerLogo}
                                                alt={footerItem?.footerLogoAlt}
                                            />
                                        </Link>
                                        <p
                                            className={classes.desc}
                                            dangerouslySetInnerHTML={{
                                                __html: footerItem?.excerpt,
                                            }}
                                        />
                                        <div className={classes.inquary}>
                                            <h2
                                                className={classes.inquary_info}
                                            >
                                                {footerItem?.inquary}
                                            </h2>
                                            <Link
                                                href="tel://+12345-879-854"
                                                className={
                                                    classes.inquary_number
                                                }
                                            >
                                                {footerItem?.inquaryNumber}
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
                                    <div className={classes.widget__item}>
                                        <h2 className={classes.widget__title}>
                                            {footerItem?.informationTitle}
                                        </h2>
                                        <ul className={classes.widget__list}>
                                            {footerItem?.informationList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        <Link
                                                            href={`/${item.path}`}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </Col>
                                <Col
                                    lg={{ span: 3 }}
                                    sm={{ span: 6 }}
                                    className="ps-lg-50 pt-40 pt-lg-0"
                                >
                                    <div className={classes.widget__item}>
                                        <h2 className={classes.widget__title}>
                                            {footerItem?.quickLinkTitle}
                                        </h2>
                                        <ul className={classes.widget__list}>
                                            {footerItem?.quickLinkList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        <Link
                                                            href={`/${item.path}`}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </Col>
                                <Col
                                    xl={{ span: 3 }}
                                    lg={{ span: 4 }}
                                    className="pt-40 pt-lg-0"
                                >
                                    <div className={classes.widget__item}>
                                        <h2 className={classes.widget__title}>
                                            {footerItem?.contactInfoTitle}
                                        </h2>
                                        <div
                                            className={`pb-25 ${classes.widget__info}`}
                                        >
                                            <p
                                                className={
                                                    classes.widget_address
                                                }
                                                dangerouslySetInnerHTML={{
                                                    __html: footerItem?.widgetAddress,
                                                }}
                                            />
                                            <span
                                                className={
                                                    classes.widget_number
                                                }
                                            >
                                                {footerItem?.widgetNumber}
                                            </span>
                                        </div>
                                        <div className={classes.widget__info}>
                                            <p
                                                className={
                                                    classes.widget_address
                                                }
                                                dangerouslySetInnerHTML={{
                                                    __html: footerItem?.additionWidgetAddress,
                                                }}
                                            />
                                            <span
                                                className={
                                                    classes.widget_number
                                                }
                                            >
                                                {
                                                    footerItem?.additionWidgetNumber
                                                }
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
                                        {footerItem?.socialList?.map((item) => {
                                            const Social =
                                                FaIcons[item.socialIcon];
                                            return (
                                                <li key={item.id}>
                                                    <Link href={`${item.path}`}>
                                                        <Social />
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Col>
                                <Col md={{ span: 6 }} sm={{ span: 8 }}>
                                    <div className={classes.copyright}>
                                        <span className={classes.text}>
                                            © {new Date().getFullYear()}{' '}
                                            Reichstag Todos los Derechos
                                            Reservados.
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Fragment>
            ))}
        </footer>
    );
}

Footer.propTypes = {
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Footer;
