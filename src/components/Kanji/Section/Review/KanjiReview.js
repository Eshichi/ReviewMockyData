import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button, Popconfirm } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchKanji } from '../../../../actions'
import Kanji from './../../../Kanji'


class KanjiReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translation: "",
            onReading: "",
            kunReading: "",
            correctAnswer: "",
            buttonText: "Start",
            wordToTranslate: "???",
            nextButton: true
        }

        console.log(this.props.kanji)
    }

    componentDidMount() {
        this.props.fetchKanji()
    }

    renderWord = () => {
        var RNG = Math.floor(Math.random() * 49);
        if (this.props.kanji) {
            this.props.kanji.map((word, index) => {
                if (index == RNG) {
                    this.setState({
                        wordToTranslate: word.kanjiSymbol,
                        buttonText: "Next",
                        nextButton: false,
                        translation: word.englishMeaning,
                        onReading: word.onReading,
                        kunReading: word.kunReading
                    })
                }
            })
        }
    }

    render() {
        return (
            <Kanji>
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
                                        <Button onClick={this.answerChecker}><Link to="/Kanji">Kanji Home</Link></Button>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={8}>
                                        <Popconfirm placement="bottom" title={this.state.onReading} onVisibleChange={false} okText={false} cancelText="">
                                            <Button disabled={this.state.nextButton} onClick={this.translateButton}>On Reading</Button>
                                        </Popconfirm>

                                    </Col>

                                    <Col span={8} offset={8}>
                                        <Popconfirm placement="bottom" title={this.state.kunReading} onVisibleChange={false} okText={false} cancelText="">
                                            <Button disabled={this.state.nextButton} onClick={this.translateButton}>Kun Reading</Button>
                                        </Popconfirm>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Kanji>
        );
    }


}

const mapStateToProps = state => {
    console.log(state.kanjiReducer.data)
    return { kanji: state.kanjiReducer.data }
}

export default connect(mapStateToProps, { fetchKanji: fetchKanji })(KanjiReview);