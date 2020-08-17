import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchN5WordsLessonFour } from '../../../../../actions'

import N5WordStudy from './Layout/N5WordStudy'

class LessonFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.fetchN5WordsLessonFour();
    }
    render() {
        return (
            <div>
                <N5WordStudy lessonNumber="4" lessonData={this.props.lessonFourN5} />
                <Row className="buttom-Four-buttons">
                    <Col span={12}>
                        <Button><Link to="/Words/N5">Lesson List</Link></Button>
                    </Col>
                    <Col span={12}>
                        <Button><Link to="/Words/N5/LessonFour/N5Review">Review</Link></Button>
                    </Col>
                </Row>
                <div className="mid" />
            </div>

        );
    }
}
const mapStateToProps = state => {
    console.log(state , "<<")
    return { lessonFourN5: state.lessonFourN5.data }
}

export default connect(mapStateToProps, { fetchN5WordsLessonFour: fetchN5WordsLessonFour })(LessonFour);