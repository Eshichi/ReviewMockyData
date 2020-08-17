import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom';

class WordsLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    notReady() {
        alert("page not available yet");
    }

    render() {
        return (
            <div>
                <h3>Choose Level</h3>
                
                <Row>
                    <Col span={24}>
                        <Button><Link to="/Words/N5">N5 Words</Link></Button>
                        <Button onClick={this.notReady}>N4 Words</Button>
                        <Button onClick={this.notReady}>N3 Words</Button>
                        <Button onClick={this.notReady}>N2 Words</Button>
                    </Col>
                </Row>
            </div>
            );
    }
}

export default WordsLanding;