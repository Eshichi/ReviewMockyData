import React from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { fetchN5WordsLessonThree } from '../../../../../actions'

import N5WordReview from './Layout/N5WordReview'

class LessonThree extends React.Component {
    componentDidMount() {
        this.props.fetchN5WordsLessonThree();
    }
    render() {
        return (
            <N5WordReview reviewData={this.props.lessonThreeN5} url="/Words/N5/LessonThree/N5Study" />
        );
    }
}

const mapStateToProps = state => {
    return { lessonThreeN5: state.lessonThreeN5.data }
}

export default connect(mapStateToProps, { fetchN5WordsLessonThree: fetchN5WordsLessonThree })(LessonThree);