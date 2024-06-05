import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function SliderBreadcrumb({ projectsBreadcrumb }) {
    return (
        <div className="page_banner__bg">
            <Container>
                {projectsBreadcrumb?.map((item) => (
                    <div className="page_content" key={item.id}>
                        <span className="page_subtitle">
                            {item?.sliderSubtitle}
                        </span>
                        <h1 className="page_title">{item?.sliderTitle}</h1>
                        <p className="page_desc">{item?.sliderDesc}</p>
                    </div>
                ))}
            </Container>
        </div>
    );
}

SliderBreadcrumb.propTypes = {
    projectsBreadcrumb: PropTypes.instanceOf(Object).isRequired,
};

export default SliderBreadcrumb;
