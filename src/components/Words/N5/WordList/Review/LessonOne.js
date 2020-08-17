import React from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { fetchN5WordsLessonOne } from '../../../../../actions'

import N5WordReview from './Layout/N5WordReview'

class LessonOne extends React.Component {
    componentDidMount() {
        this.props.fetchN5WordsLessonOne();
    }
    render() {
        return (
            <N5WordReview reviewData={this.props.lessonOneN5} url="/Words/N5/LessonOne/N5Study"/>
        );
    }
}

const mapStateToProps = state => {
    return { lessonOneN5: state.lessonOneN5.data }
}

export default connect(mapStateToProps, { fetchN5WordsLessonOne: fetchN5WordsLessonOne })(LessonOne);