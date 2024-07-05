import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import classes from './service.module.scss';

function ServiceItem({ service }) {
    const imagePath = `/images/services/${service?.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/${service?.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")} med.jpg`;
    const linkPath = `/services/${service?.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;

    return (
        <div className="service-item">
            <Link href={linkPath} className={classes.img}>
                
                <img
                    className="img-full"
                    src={imagePath}
                    alt={service?.titulo}
                />
            </Link>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <Link href={linkPath}>{service?.titulo}</Link>
                    
                </h2>
                <div className={classes.icon}>
                    <Link href={linkPath}>
                        <IoAddSharp />
                    </Link>
                </div>
            </div>
        </div>
    );
}

ServiceItem.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceItem;
