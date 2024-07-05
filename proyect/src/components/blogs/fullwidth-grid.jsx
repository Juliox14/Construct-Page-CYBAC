import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import BlogFullwidthItem from './fullwidth-item';
import classes from './blog.module.scss';
import PageNavigation from '../page-navigation';

function BlogFullwidthGrid({ blogs }) {
    return (
        <div className={classes.blog}>
            <Container>
                <Row className="g-min-lg-30 g-y-max-md-25">
                    {blogs.map((blog) => (
                        <BlogFullwidthItem key={blog.slug} blog={blog} />
                    ))}
                </Row>
                <PageNavigation />
            </Container>
        </div>
    );
}

BlogFullwidthGrid.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
};

export default BlogFullwidthGrid;
