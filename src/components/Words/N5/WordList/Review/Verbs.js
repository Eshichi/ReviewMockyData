import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Button, Input, Popconfirm } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { fetchN5Verbs } from '../../../../../actions'
import { connect } from 'react-redux'
import './Verbs.css';

class Verbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translation: "",
            negative: "",
            pastNegative: "",
            pastPositive: "",
            correctAnswer: "",
            buttonText: "Start",
            wordToTranslate: "???",
            nextButton: true
        }
    }

    componentDidMount() {
        this.props.fetchN5Verbs()
    }

    renderWord = () => {
        var RNG = Math.floor(Math.random() * 59);
        if (this.props.verbs != null) {
            this.props.verbs.map((word, index) => {
                if (index == RNG) {
                    this.setState({
                        wordToTranslate: word.dictionaryForm,
                        buttonText: "Next",
                        nextButton: false,
                        translation: word.englishMeaning,
                        negative: word.presentNegative,
                        pastNegative: word.pastNegative,
                        pastPositive: word.pastPositive,
                    })
                }
            })
        }
    }

    translateButton = () => {

    }

    render() {
        return (
            <div>
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
                                        <Button onClick={this.answerChecker}><Link to="/Words/N5/Verbs">Study</Link></Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <Popconfirm placement="bottom" title={this.state.pastPositive} onVisibleChange={false} okText={false} cancelText="">
                                            <Button disabled={this.state.nextButton} >Past positive</Button>
                                        </Popconfirm>

                                    </Col>
                                    <Col span={8}>
                                        <Popconfirm placement="bottom" title={this.state.negative} onVisibleChange={false} okText={false} cancelText="">
                                            <Button disabled={this.state.nextButton} >negative</Button>
                                        </Popconfirm>

                                    </Col>
                                    <Col span={8}>
                                        <Popconfirm placement="bottom" title={this.state.pastNegative} onVisibleChange={false} okText={false} cancelText="">
                                            <Button disabled={this.state.nextButton} >Past positive</Button>
                                        </Popconfirm>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { verbs: state.N5Verbs.data }
}
export default connect(mapStateToProps, { fetchN5Verbs: fetchN5Verbs })(Verbs);