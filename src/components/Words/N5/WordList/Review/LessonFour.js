import React from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { fetchN5WordsLessonFour } from '../../../../../actions'

import N5WordReview from './Layout/N5WordReview'

class LessonFour extends React.Component {
    componentDidMount() {
        this.props.fetchN5WordsLessonFour();
    }
    render() {
        return (
            <N5WordReview reviewData={this.props.lessonFourN5} url="/Words/N5/LessonFour/N5Study" />
        );
    }
}

const mapStateToProps = state => {
    return { lessonFourN5: state.lessonFourN5.data }
}

export default connect(mapStateToProps, { fetchN5WordsLessonFour: fetchN5WordsLessonFour })(LessonFour);