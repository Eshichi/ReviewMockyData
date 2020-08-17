import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col , Button} from 'antd'
import { connect } from 'react-redux'
import { fetchN5VerbsV2 } from '../../../../../actions'
import { Link } from 'react-router-dom'


class VerbListV2 extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchN5VerbsV2()
    }

    renderVerbs = () => {
        if (this.props.verbs != null) {
            return this.props.verbs.map((verb, index) => {
                
                return (
                    <Row key={index}>
                        <Col span={12}>
                            <span>{verb.wordId}: </span>
                            <span>{verb.englishMeaning}</span>
                        </Col>

                        <Col span={12}>
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
                <Row>
                    <Col span={24}>
                        {this.renderVerbs()}
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Button><Link to="/Words/N5/Verbs">First part</Link></Button>
                    </Col>
                    <Col span={12}>
                        <Button><Link to="/Words/N5/Verbs/ReviewV2">Review part 1</Link></Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return { verbs: state.N5Verbs.data }
}


export default connect(mapStateToProps, { fetchN5VerbsV2: fetchN5VerbsV2 })(VerbListV2)