import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import classes from './project.module.scss';

function ProjectSidebar({ projectsSidebar }) {
    return (
        <Col lg={{ span: 3 }}>
            {projectsSidebar?.map((sidebarItem) => (
                <div className="sidebar pt-max-md-25" key={sidebarItem.id}>
                    <div className={`${classes.sidebar_widget} mb-30`}>
                        <h2 className={classes.sidebar_widget__title}>
                            {sidebarItem?.title}
                        </h2>
                        <ul className={classes.sidebar_list}>
                            {sidebarItem?.sidebarList?.map((singleList) => (
                                <li
                                    dangerouslySetInnerHTML={{
                                        __html: singleList.listItem,
                                    }}
                                    key={singleList.id}
                                />
                            ))}
                        </ul>
                    </div>
                    <div
                        className={`${classes.sidebar_brochure__widget}  mb-30`}
                    >
                        <ul className={`${classes.sidebar_brochure__list}`}>
                            {sidebarItem?.downloadBrochure?.map(
                                (brochureItem) => (
                                    <li key={brochureItem.id}>
                                        <Link
                                            href={brochureItem?.path}
                                            download
                                        >
                                            {brochureItem?.listItem}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className={`${classes.sidebar_widget__banner}`}>
                        <img
                            src={sidebarItem?.widgetBanner}
                            alt={sidebarItem?.widgetBannerAlt}
                        />
                    </div>
                </div>
            ))}
        </Col>
    );
}

ProjectSidebar.propTypes = {
    projectsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSidebar;
