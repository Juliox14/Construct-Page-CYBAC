import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import classes from './blog.module.scss';
import SwiperComps, { Slide } from '../swiper';

function BlogSidebar({ blogsSidebar, categories, tags, settings }) {
    settings = {
        autoplay: false,
        speed: 1000,
        spaceBetween: 0,
        loop: false,
        breakpoints: {
            1200: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                },
            },
            992: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                },
            },
            576: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                },
            },
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                },
            },
        },
    };
    return (
        <div className={classes.sidebar}>
            {blogsSidebar?.map((blogSidebar) => (
                <div className="sidebar-inner" key={blogSidebar.id}>
                    <div className={`${classes.sidebar_widget} mb-40`}>
                        <h2 className={classes.sidebar_title}>
                            {blogSidebar?.searchTitle}
                        </h2>
                        <form className={classes.sidebar_form}>
                            <input
                                className={classes.searchbox_input}
                                type="search"
                                name="search"
                                placeholder="Type your keyword..."
                            />
                            <button
                                type="button"
                                className={classes.searchbox_btn}
                            >
                                <IoSearchOutline />
                            </button>
                        </form>
                    </div>
                    <div className={`${classes.sidebar_widget} mb-40`}>
                        <h2 className={classes.sidebar_title}>
                            {blogSidebar?.categoryTitle}
                        </h2>
                        <ul className={`${classes.sidebar_widget__list}`}>
                            {categories?.map((category) => (
                                <li key={category}>
                                    <Link
                                        href={`/blogs/category/${category
                                            .split('|')[0]
                                            .trim()}`}
                                        dangerouslySetInnerHTML={{
                                            __html: category.replace('|', ''),
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${classes.sidebar_widget} mb-40`}>
                        <h2 className={`${classes.sidebar_title} mb-25`}>
                            {blogSidebar?.popularPostTitle}
                        </h2>
                        <div className={classes.sidebar_list__slider}>
                            <SwiperComps settings={settings} sliderCName="">
                                {blogSidebar?.listSlider?.map((item) => (
                                    <Slide
                                        className={classes.sidebar_list__item}
                                        key={item.id}
                                    >
                                        <Link
                                            href={`/${item.path}`}
                                            className={
                                                classes.sidebar_list__img
                                            }
                                        >
                                            <img
                                                src={item.slideImage}
                                                alt={item.slideImageAlt}
                                            />
                                        </Link>
                                        <div
                                            className={
                                                classes.sidebar_list__content
                                            }
                                        >
                                            <h3
                                                className={
                                                    classes.sidebar_list__title
                                                }
                                            >
                                                <Link href={`/${item.path}`}>
                                                    {item.title}
                                                </Link>
                                            </h3>
                                            <span
                                                className={
                                                    classes.sidebar_list__meta
                                                }
                                            >
                                                {item.meta}
                                            </span>
                                        </div>
                                    </Slide>
                                ))}
                            </SwiperComps>
                        </div>
                    </div>
                    <div className={`${classes.sidebar_widget}`}>
                        <h2 className={classes.sidebar_title}>
                            {blogSidebar?.tagTitle}
                        </h2>
                        <ul className={`${classes.sidebar_widget__tags}`}>
                            {tags?.map((tag) => (
                                <li key={tag}>
                                    <Link href={`/blogs/tag/${tag}`}>
                                        {tag}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

BlogSidebar.propTypes = {
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default BlogSidebar;
