import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import BlogRightSidebarGrid from './rightsidebar-grid';

function BlogRightSidebar({ blogs, blogsSidebar, categories, tags }) {
    return (
        <div>
            <Container>
                <Row className="g-0">
                    <Col lg={{ span: 12 }}>
                        <BlogRightSidebarGrid
                            blogs={blogs}
                            blogsSidebar={blogsSidebar}
                            categories={categories}
                            tags={tags}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

BlogRightSidebar.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default BlogRightSidebar;
