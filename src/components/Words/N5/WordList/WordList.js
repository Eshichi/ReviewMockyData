import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom';

class WordList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "was"
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
            );
    }
}

export default WordList;