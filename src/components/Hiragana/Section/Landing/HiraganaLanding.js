import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Button } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Hiragana from '../../../Hiragana';

class HiraganaLanding extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Hiragana>
                <Row>
                    <Col span={24}>
                        <Row className="hiragana-button">
                            <Col span={8} offset={2}>
                                <Button><Link to="/Hiragana/Study">Study</Link></Button>
                            </Col>
                            <Col span={8} offset={4}>
                                <Button><Link to="/Hiragana/Review">Review</Link></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Hiragana>
        );
    }
}

export default HiraganaLanding;