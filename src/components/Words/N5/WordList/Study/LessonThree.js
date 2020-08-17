import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchN5WordsLessonThree } from '../../../../../actions'

import N5WordStudy from './Layout/N5WordStudy'

class LessonThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.fetchN5WordsLessonThree();
    }
    render() {
        return (
            <div>
                <N5WordStudy lessonNumber="3" lessonData={this.props.lessonThreeN5} />
                <Row className="buttom-Three-buttons">
                    <Col span={12}>
                        <Button><Link to="/Words/N5">Lesson List</Link></Button>
                    </Col>
                    <Col span={12}>
                        <Button><Link to="/Words/N5/LessonThree/N5Review">Review</Link></Button>
                    </Col>
                </Row>
                <div className="mid" />
            </div>

        );
    }
}
const mapStateToProps = state => {
    return { lessonThreeN5: state.lessonThreeN5.data }
}

export default connect(mapStateToProps, { fetchN5WordsLessonThree: fetchN5WordsLessonThree })(LessonThree);