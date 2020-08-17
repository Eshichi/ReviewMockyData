import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchN5WordsLessonTwo } from '../../../../../actions'

import N5WordStudy from './Layout/N5WordStudy'

class LessonTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.fetchN5WordsLessonTwo();
    }
    render() {
        return (
            <div>
                <N5WordStudy lessonNumber="2" lessonData={this.props.lessonTwoN5} />
                <Row className="buttom-two-buttons">
                    <Col span={12}>
                        <Button><Link to="/Words/N5">Lesson List</Link></Button>
                    </Col>
                    <Col span={12}>
                        <Button><Link to="/Words/N5/LessonTwo/N5Review">Review</Link></Button>
                    </Col>
                </Row>
                <div className="mid" />
            </div>

        );
    }
}
const mapStateToProps = state => {
    return { lessonTwoN5: state.lessonTwoN5.data }
}

export default connect(mapStateToProps, { fetchN5WordsLessonTwo: fetchN5WordsLessonTwo })(LessonTwo);