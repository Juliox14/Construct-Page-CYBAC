import PropTypes from 'prop-types';
import ServiceItem from './service-item';

function ServiceGrid({ services }) {
    return (
        <>
            {services.map((service) => (
                <ServiceItem key={service.slug} service={service} />
            ))}
        </>
    );
}

ServiceGrid.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceGrid;
