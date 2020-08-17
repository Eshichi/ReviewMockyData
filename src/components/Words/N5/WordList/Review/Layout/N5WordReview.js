import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button, Popconfirm} from 'antd'
import WordList from '../../WordList'
import { Link } from 'react-router-dom';
import './N5WordReview.css'


class N5WordReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translation: "", 
            correctAnswer: "",
            buttonText: "Start",
            wordToTranslate: "???",
            nextButton: true
        }

        console.log(this.props.reviewData)
    }



    renderWord = () => {
        var RNG = Math.floor(Math.random() * 42);
        if (this.props.reviewData) {
            this.props.reviewData.map((word, index) => {
                if (index == RNG) {
                    this.setState({
                        wordToTranslate: word.japaneseWord,
                        buttonText: "Next",
                        nextButton: false,
                        translation: word.englishWord
                    })
                }
            })
        }
    }

    translateButton = () => {
        
    }

    render() {
        return (
            <WordList>
                <Row className="five-lesson-one">
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <Row>
                                    <Col span={24}>
                                        
                                        {
                                            this.state.wordToTranslate
                                        }
                                            
                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <Popconfirm placement="bottom" title={this.state.translation} onVisibleChange={false} okText={false} cancelText="">
                                            <Button disabled={this.state.nextButton} onClick={this.translateButton}>Translate</Button>
                                        </Popconfirm>
                                        
                                    </Col>
                                    <Col span={8}>
                                        <Button onClick={this.renderWord}>{this.state.buttonText}</Button>
                                    </Col>
                                    <Col span={8}>
                                        <Button onClick={this.answerChecker}><Link to={this.props.url}>Study</Link></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </WordList>
        );
    }
}



export default N5WordReview;