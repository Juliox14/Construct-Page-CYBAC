import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function TwoColumnsBreadcrumb({ projectsBreadcrumb }) {
    return (
        <div className="page_banner__bg">
            <Container>
                {projectsBreadcrumb?.map((item) => (
                    <div className="page_content" key={item.id}>
                        <span className="page_subtitle">
                            {item?.twoColumnsSubtitle}
                        </span>
                        <h1 className="page_title">{item?.twoColumnsTitle}</h1>
                        <p className="page_desc">{item?.twoColumnsDesc}</p>
                    </div>
                ))}
            </Container>
        </div>
    );
}

TwoColumnsBreadcrumb.propTypes = {
    projectsBreadcrumb: PropTypes.instanceOf(Object).isRequired,
};

export default TwoColumnsBreadcrumb;
