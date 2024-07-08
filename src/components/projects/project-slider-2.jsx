import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectSliderItem from './slider-item';
import SwiperComps, { Slide } from '../swiper';

function ProjectSliderTwo({ projects, settings }) {
    settings = {
        pagination: false,
        spaceBetween: 30,
        navigation: {
            nextEl: '.project-button-next',
            prevEl: '.project-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <Container>
            <div className="project-slider py-140">
                <div className="project-navigation">
                    <div className="project-button-next button-next">
                        <FaChevronLeft />
                    </div>
                    <div className="project-button-prev button-prev">
                        <FaChevronRight />
                    </div>
                </div>
                <div>
                    <SwiperComps settings={settings}>
                        {projects.map((project) => (
                            <Slide key={project.slug}>
                                <ProjectSliderItem project={project} />
                            </Slide>
                        ))}
                    </SwiperComps>
                </div>
            </div>
        </Container>
    );
}

ProjectSliderTwo.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default ProjectSliderTwo;
