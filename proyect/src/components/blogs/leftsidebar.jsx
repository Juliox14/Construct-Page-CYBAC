import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import BlogLeftSidebarGrid from './leftsidebar-grid';

function BlogLeftSidebar({ blogs, blogsSidebar, categories, tags }) {
    return (
        <div>
            <Container>
                <Row className="g-0">
                    <Col lg={{ span: 12 }}>
                        <BlogLeftSidebarGrid
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

BlogLeftSidebar.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default BlogLeftSidebar;
