import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function TeamBreadcrumb({ teamsBreadcrumb }) {
    return (
        <div className="page_banner__bg">
            <Container>
                {teamsBreadcrumb?.map((item) => (
                    <div className="page_content" key={item.id}>
                        <span className="page_subtitle">
                            {item?.breadcrumbSubtitle}
                        </span>
                        <h1 className="page_title">{item?.breadcrumbTitle}</h1>
                        <p className="page_desc">{item?.breadcrumbDesc}</p>
                    </div>
                ))}
            </Container>
        </div>
    );
}

TeamBreadcrumb.propTypes = {
    teamsBreadcrumb: PropTypes.instanceOf(Object).isRequired,
};

export default TeamBreadcrumb;
