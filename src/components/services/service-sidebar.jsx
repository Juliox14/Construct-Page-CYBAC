import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import classes from './service.module.scss';

function ServiceSidebar({ sidebarList}) {
    return (
        <Col lg={{ span: 3 }}>
            <div className="sidebar">
                <div className={`${classes.sidebar_widget} mb-30`}>
                    <ul className={classes.sidebar_list}>
                        {sidebarList?.map((singleList) => (
                            <li key={singleList.id_servicio}>
                                <Link href={`/services/${singleList?.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
                                    {singleList?.titulo}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Col>
    );
}

ServiceSidebar.propTypes = {
    sidebarList: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceSidebar;
