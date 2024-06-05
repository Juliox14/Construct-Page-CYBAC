import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import BlogContent from './blog-content';
import BlogSidebar from '../blog-sidebar';
import classes from './index.module.scss';

function BlogDetail({ blog, richTexts, blogsSidebar, categories, tags }) {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <BlogContent blog={blog} richTexts={richTexts} />
                    <Col lg={{ span: 4 }}>
                        <BlogSidebar
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

BlogDetail.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default BlogDetail;
