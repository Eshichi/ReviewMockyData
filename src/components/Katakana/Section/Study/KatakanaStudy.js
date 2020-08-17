import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './KatakanaStudy.css';
import { Row, Col, Button, Modal } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // check if used
import Katakana from '../../../Katakana';

import { fetchKatakana } from '../../../../actions'
import { connect } from 'react-redux';

class KatakanaStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            title: "",
            letterEng: "",
            letterJap: ""
        }
    }

    componentDidMount() {
        this.props.fetchKatakana();
    }

    showModal(english, japanese, event) {
        console.log(english, japanese, event);
        this.setState({
            visible: true,
            letterEng: english,
            letterJap: japanese,
        });
    }

    cancelModal = () => {
        this.setState({
            visible: false,
        });
    }




    renderList = () => {
        if (this.props.letters != null) {
            return this.props.letters.map((letter, index) => {
                if ((index % 5) == 0) {
                    return (
                        <Col span={4} offset={2}>
                            <Button onClick={this.showModal.bind(this, letter.letterEng, letter.letterJap)}>{letter.letterEng}</Button>
                        </Col>
                    );
                } else {
                    return (
                        <Col span={4} >
                            <Button onClick={this.showModal.bind(this, letter.letterEng, letter.letterJap)}>{letter.letterEng}</Button>
                        </Col>
                    );
                }
            });
        }
    }

    render() {
        return (
            <Katakana>
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <Row className="letter-section">
                                    {this.renderList()}
                                </Row>
                            </Col>
                        </Row>
                        <Row className="hiragana-button">
                            <Col span={8} offset={1}>
                                <Button><Link to="/Katakana">Katakana</Link></Button>
                            </Col>
                            <Col span={8} offset={5}>
                                <Button><Link to="/Katakana/Review">Review</Link></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Modal
                    visible={this.state.visible}
                    title={this.state.title}
                    onOk={this.cancelModal}
                    onCancel={this.cancelModal}
                >
                    <Row className="katakana-study-modal">
                        <Col span={24}>
                            <Row>
                                <Col span={12}>
                                    <span>English</span>
                                </Col>
                                <Col span={12}>
                                    <span>Katakana</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <span>{this.state.letterEng}</span>
                                </Col>
                                <Col span={12}>
                                    <span>{this.state.letterJap}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal>
            </Katakana>
        );


    }

}

const mapStateToProps = state => {
    return { letters: state.katakanaReducer.data }
}
export default connect(mapStateToProps, { fetchKatakana: fetchKatakana })(KatakanaStudy);