import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchN5Verbs } from '../../../../../actions'
import './Verbs.css'


class VerbList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchN5Verbs()
    }

    renderVerbs = () => {
        if (this.props.verbs != null) {
            return this.props.verbs.map((verb, index) => {
                
                return (
                    <Row key={index}>
                        <Col span={5}>
                            <span>{verb.wordId}: </span>
                            <span>{verb.englishMeaning}</span>
                        </Col>

                        <Col span={5}>
                            <span>{verb.wordId}: </span>
                            <span>{verb.dictionaryForm}</span>
                        </Col>
                    </Row>
                )
                
            });
        }
    }

    render() {
        return (
            <div>
                <Row className="verb-list">
                    <Col span={24}>
                        {this.renderVerbs()}
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Button><Link to="/Words/N5/VerbsV2">Second part</Link></Button>
                    </Col>

                    <Col span={12}>
                        <Button><Link to="/Words/N5/Verbs/Review">Review part 1</Link></Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return { verbs: state.N5Verbs.data }
}


export default connect(mapStateToProps, { fetchN5Verbs: fetchN5Verbs })(VerbList)