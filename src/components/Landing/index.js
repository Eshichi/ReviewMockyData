import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Button } from 'antd';
import './Landing.css'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="intro-section">
                <Row >
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <h3>Welcome to JLPT Review</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={4} offset={2}>
                                <Button>Contact us</Button>
                            </Col>
                            <Col span={4}>
                                <Button>About us</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <h3>Our Services</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={4} offset={4}>
                                <Button>Study</Button>
                            </Col>
                            <Col span={4} offset={2}>
                                <Button>Review</Button>
                            </Col>
                            <Col span={4}>
                                <Button>Tutorial</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            );
    }
}

export default Home;