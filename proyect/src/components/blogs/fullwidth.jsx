import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import BlogFullwidthGrid from './fullwidth-grid';

function BlogFullwidth(props) {
    const { blogs } = props;
    return (
        <div>
            <Container>
                <Row className="g-0">
                    <Col lg={{ span: 12 }}>
                        <BlogFullwidthGrid blogs={blogs} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

BlogFullwidth.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
};

export default BlogFullwidth;
