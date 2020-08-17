import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './KatakanaReview.css';
import { Row, Col, Button, Input } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Katakana from '../../../Katakana';

import { fetchKatakana } from '../../../../actions'
import { connect } from 'react-redux'

class KatakanaReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letterTranslate: "???",
            userAnswer: "",
            correctAnswer: "",
            buttonLabel: "Click here to start",
            gameReady: true
        }
    }
    componentDidMount() {
        this.props.fetchKatakana();
    }
    renderList = () => {

        if (this.props.letters != null) {
            var RNG = Math.floor(Math.random() * 45);
            return this.props.letters.map((letter, index) => {
                if (index == RNG) {
                    return (
                        <div key={index} className="katakana-review-question">
                            <span >
                                {
                                    this.state.letterTranslate
                                }
                            </span>
                        </div>
                    );
                }
            })
        } else {
            return (
                <div className="katakana-review-question">
                    <span >
                        {
                            this.state.letterTranslate
                        }
                    </span>
                </div>
            );
        }

    }

    renderLetter = () => {


        if (this.state.userAnswer === this.state.correctAnswer) {
            this.setState({
                userAnswer: "",
                buttonLabel: "Submit",
                gameReady: false,
            })
            if (this.props.letters != null) {
                var RNG = Math.floor(Math.random() * 20);
                return this.props.letters.map((letter, index) => {
                    if (index == RNG) {
                        this.setState({
                            letterTranslate: letter.letterJap,
                            correctAnswer: letter.letterEng
                        });
                    }
                })
            }
        }
        else if (this.state.userAnswer == "") {
            alert("Please enter an answer");
        } else {
            alert("wrong");
        }



    }

    onInputChange = (event) => {
        this.setState({
            userAnswer: event.target.value.toUpperCase()
        });
    }


    onFormSubmit = event => {
        event.preventDefault();
        this.renderLetter();
    }

    render() {
        return (
            <Katakana>
                <Row>
                    <Col span={24}>
                        <Row className="katakana-review-form">
                            <Col span={10} offset={2}>
                                {
                                    this.renderList()
                                }
                            </Col>
                            <Col span={8}>
                                <form action="" onSubmit={this.onFormSubmit}>
                                    <Row>
                                        <Col span={24}>
                                            <h3>Please translate to english.</h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Input type="text" value={this.state.userAnswer} disabled={this.state.gameReady} onChange={this.onInputChange} placeholder="Basic usage" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <Button onClick={this.renderLetter}> {this.state.buttonLabel}</Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                        <Row className="katakana-button">
                            <Col span={8} offset={2}>
                                <Button><Link to="/Katakana/Study">Studies</Link></Button>
                            </Col>
                            <Col span={8} offset={4}>
                                <Button><Link to="/Katakana">Katakana</Link></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Katakana>
        );
    }
}

const mapStateToProps = state => {
    return { letters: state.katakanaReducer.data }
}
export default connect(mapStateToProps, { fetchKatakana: fetchKatakana })(KatakanaReview);