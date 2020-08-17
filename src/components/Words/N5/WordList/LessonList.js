import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom';
class LessonList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Choose Lesson number</h3>
                
                <Row>
                    <Col span={24}>
                        <Button><Link to="/Words/N5/Verbs">Verbs</Link></Button>
                        <Button><Link to="/Words/N5/LessonOne/N5Study">Lesson 1</Link></Button>
                        <Button><Link to="/Words/N5/LessonTwo/N5Study">Lesson 2</Link></Button>
                        <Button><Link to="/Words/N5/LessonThree/N5Study">Lesson 3</Link></Button>
                        <Button><Link to="/Words/N5/LessonFour/N5Study">Lesson 4</Link></Button>
                    </Col>
                </Row>
            </div>
            );
    }
}

export default LessonList;