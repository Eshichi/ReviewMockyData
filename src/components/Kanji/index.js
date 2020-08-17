import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';


class Kanji extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Row className="hiragana-header">
                    <Col span={24}>
                        <h1>Kanji</h1>
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

export default Kanji;