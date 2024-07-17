import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectSlider from '../projects/project-slider';
import classes from './latest-project.module.scss';
import SwiperComps, { Slide } from '../swiper';

function LatestProject({ projects, settings }) {
    settings = {
        spaceBetween: 0,
        pagination: false,
        navigation: {
            nextEl: '.project-button-next',
            prevEl: '.project-button-prev',
        },
        loop: false,
        breakpoints: {
            1200: {
                slidesPerView: 4,
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
    //Relleno de arreglo con los proyectos destacados basado en su propiedad isDestacado
    const proyectos_destacados_array = [];
    for(let proyectos_destacados of projects){
        proyectos_destacados.isDestacado && proyectos_destacados_array.push(proyectos_destacados);
    }
    return (
        <div>
            <div className={classes.bg}>
                <div className={classes.btn__wrap}>
                    <Link
                        href="/projects/project-fullwidth"
                        className={classes.btn}
                    >
                        <span>Ver más</span>
                    </Link>
                </div>
                <Container fluid className="px-0">
                    <div className={classes.slider_with__section}>
                        <div className={classes.section_area}>
                            <div className={classes.section_with__navigation}>
                                <div className={classes.section_title__wrap}>
                                        <div className={classes.section_title}>
                                            <span>Proyectos</span>
                                            <h2
                                                dangerouslySetInnerHTML={{
                                                    __html: 'Nuestros proyectos destacados',
                                                }}
                                            />
                                        </div>
                                </div>
                                <div className={classes.section_navigation}>
                                    <div className={`${classes.button_next} project-button-next`}>
                                        <FaChevronLeft />
                                    </div>
                                    <div
                                        className={`${classes.button_prev} project-button-prev`}
                                    >
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.slider}>
                            <SwiperComps settings={settings}>
                                {proyectos_destacados_array.map((project) => (
                                    <Slide className={classes.item} key={project.id_proyecto}>
                                        <ProjectSlider project={project} />
                                    </Slide>
                                ))}
                            </SwiperComps>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

LatestProject.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default LatestProject;
