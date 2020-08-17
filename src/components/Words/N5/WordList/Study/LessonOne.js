import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchN5WordsLessonOne } from '../../../../../actions'

import N5WordStudy from './Layout/N5WordStudy'

class LessonOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.fetchN5WordsLessonOne();
    }
    render() {
        return (
            <div>
                <N5WordStudy lessonNumber="1" lessonData={this.props.lessonOneN5} url="lessonOne" />
                <Row className="buttom-two-buttons">
                    <Col span={12}>
                        <Button><Link to="/Words/N5">Lesson List</Link></Button>
                    </Col>
                    <Col span={12}>
                        <Button><Link to="/Words/N5/LessonOne/N5Review">Review</Link></Button>
                    </Col>
                </Row>
                <div className="mid" />
            </div>
            
        );
    }
}
const mapStateToProps = state => {
    return { lessonOneN5: state.lessonOneN5.data }
}

export default connect(mapStateToProps, { fetchN5WordsLessonOne: fetchN5WordsLessonOne })(LessonOne);