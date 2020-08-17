import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Kanji from '../../../Kanji'

class KanjiLanding extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Kanji>
                <Row>
                    <Col span={24}>
                        <Row className="hiragana-button">
                            <Col span={8} offset={2}>
                                <Button><Link to="/Kanji/Study">Study</Link></Button>
                            </Col>
                            <Col span={8} offset={4}>
                                <Button><Link to="/Kanji/Review">Review</Link></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Kanji>
            )
    }

}

export default KanjiLanding