import React from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { fetchN5WordsLessonTwo } from '../../../../../actions'

import N5WordReview from './Layout/N5WordReview'

class LessonTwo extends React.Component {
    componentDidMount() {
        this.props.fetchN5WordsLessonTwo();
    }
    render() {
        return (
            <N5WordReview reviewData={this.props.lessonTwoN5} url="/Words/N5/LessonTwo/N5Study"/>
        );
    }
}

const mapStateToProps = state => {
    return { lessonTwoN5: state.lessonTwoN5.data }
}
export default connect(mapStateToProps, { fetchN5WordsLessonTwo: fetchN5WordsLessonTwo })(LessonTwo);