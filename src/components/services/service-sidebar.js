import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import classes from './service.module.scss';

function ServiceSidebar({ sidebarList, servicesSidebar }) {
    return (
        <Col lg={{ span: 3 }}>
            {servicesSidebar?.map((serviceSidebar) => (
                <div className="sidebar" key={serviceSidebar.id}>
                    <div className={`${classes.sidebar_widget} mb-30`}>
                        <ul className={classes.sidebar_list}>
                            {sidebarList?.map((singleList) => (
                                <li key={singleList.id}>
                                    <Link
                                        // href="/services/arquitectura"
                                        href={`/services/${singleList?.slug}`}
                                    >
                                        {singleList?.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className={`${classes.sidebar_brochure__widget} mb-30`}
                    >
                        <ul className={`${classes.sidebar_brochure__list}`}>
                            {serviceSidebar?.downloadBrochure?.map(
                                (brochureList) => (
                                    <li key={brochureList.id}>
                                        <Link
                                            href={brochureList?.path}
                                            download
                                        >
                                            {brochureList?.listItem}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className={`${classes.sidebar_widget__banner}`}>
                        <img
                            src={serviceSidebar?.widgetBanner}
                            alt={serviceSidebar?.widgetBannerAlt}
                        />
                    </div>
                </div>
            ))}
        </Col>
    );
}

ServiceSidebar.propTypes = {
    sidebarList: PropTypes.instanceOf(Object).isRequired,
    servicesSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceSidebar;
