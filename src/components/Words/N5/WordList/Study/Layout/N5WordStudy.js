import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import WordList from '../../WordList'
import './N5WordStudy.css';

class N5WordStudy extends React.Component {
    constructor(props) {
        super(props);
    }


    readyList() {
        if (this.props.lessonData) {
            return this.props.lessonData.map(word => {
                return (
                    <div key={word.wordId} className="word-list">
                        <Row>
                            <Col span={12}>
                                <span>{word.wordId} : </span>
                                <span>{word.englishWord}</span>
                            </Col>

                            <Col span={12}>
                                <span>{word.wordId} : </span>
                                <span>{word.japaneseWord}</span>
                            </Col>
                        </Row>

                    </div>
                );
            });
        }

    }



    render() {
        return (
            <WordList>
                <h3>N5 Words Lesson {this.props.lessonNumber}</h3>
                <Row>
                    <Col span={24}>
                        {this.readyList()}
                    </Col>
                </Row>
            </WordList>
        );
    }
}


export default N5WordStudy;