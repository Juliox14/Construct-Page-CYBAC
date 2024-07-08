import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import PageNavigation from '../page-navigation';
import BlogSidebar from './blog-sidebar';
import classes from './blog.module.scss';
import BlogLeftSidebarItem from './leftsidebar-item';

function BlogLeftSidebarGrid({ blogs, blogsSidebar, categories, tags }) {
    return (
        <div className={classes.blog}>
            <Container>
                <Row className="g-4">
                    <Col lg={{ span: 4, order: 1 }} xs={{ order: 2 }}>
                        <BlogSidebar
                            blogsSidebar={blogsSidebar}
                            categories={categories}
                            tags={tags}
                        />
                    </Col>
                    <Col lg={{ span: 8, order: 2 }} xs={{ order: 1 }}>
                        <Row className="g-4">
                            {blogs.map((blog) => (
                                <BlogLeftSidebarItem
                                    key={blog.slug}
                                    blog={blog}
                                />
                            ))}
                        </Row>
                        <PageNavigation />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

BlogLeftSidebarGrid.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default BlogLeftSidebarGrid;
