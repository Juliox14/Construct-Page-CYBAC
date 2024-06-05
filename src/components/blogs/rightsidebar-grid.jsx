import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import PageNavigation from '../page-navigation';
import BlogSidebar from './blog-sidebar';
import classes from './blog.module.scss';
import BlogRightSidebarItem from './rightsidebar-item';

function BlogRightSidebarGrid({ blogs, blogsSidebar, categories, tags }) {
    return (
        <div className={classes.blog}>
            <Container>
                <Row className="g-4">
                    <Col lg={{ span: 4 }} xs={{ order: 2 }}>
                        <BlogSidebar
                            blogsSidebar={blogsSidebar}
                            categories={categories}
                            tags={tags}
                        />
                    </Col>
                    <Col lg={{ span: 8 }} xs={{ order: 1 }}>
                        <Row className="g-4">
                            {blogs.map((blog) => (
                                <BlogRightSidebarItem
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

BlogRightSidebarGrid.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default BlogRightSidebarGrid;
