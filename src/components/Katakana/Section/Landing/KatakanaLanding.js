import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Button } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Katakana from '../../../Katakana';

class KatakanaLanding extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Katakana>
                <Row>
                    <Col span={24}>
                        <Row className="katakana-button">
                            <Col span={8} offset={2}>
                                <Button><Link to="/Katakana/Study">Study</Link></Button>
                            </Col>
                            <Col span={8} offset={4}>
                                <Button><Link to="/Katakana/Review">Review</Link></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Katakana>
        );
    }
}

export default KatakanaLanding;