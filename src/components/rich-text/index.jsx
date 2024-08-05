import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function RichText({ richTexts }) {
    return (
        <div className={classes.item}>
            <Row className="pb-35 g-30">
                <Col lg={{ span: 4 }} className="align-self-center">
                    <div className="content">
                        <p className={`${classes.desc} min-lg-w238`}>
                            {richTexts.texto1}
                        </p>
                        <p className={`${classes.desc} min-lg-w238`}>
                            {richTexts.texto2}
                        </p>
                        <p className={`${classes.desc} mb-0`}>
                            {richTexts.texto3}
                        </p>
                    </div>
                </Col>
                <Col lg={{ span: 8 }}>
                    <div className={`${classes.group_image} pb-20`}>
                        <div className={`${classes.single_image} pe-20`}>
                            <img src={richTexts.ruta_imagen} alt="Rich Image" />
                        </div>
                    </div>
                </Col>
                <Col xs={{ span: 12 }}>
                    <p className={`${classes.desc} mb-0`}>
                        {richTexts.texto_final}
                    </p>
                </Col>
            </Row>
        </div>
    );
}

RichText.propTypes = {
    richTexts: PropTypes.instanceOf(Object),
};

export default RichText;
