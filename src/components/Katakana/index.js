import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Button } from 'antd';
import './Katakana.css';

class Katakana extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                <Row className="katakana-header">
                    <Col span={24}>
                        <h1>Katakana</h1>
                        <p>something here..</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Katakana;