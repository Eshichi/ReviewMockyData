import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Table , Button} from 'antd'
import { connect } from 'react-redux'
import { fetchKanji } from '../../../../actions'
import { Link } from 'react-router-dom'
import Kanji from '../../../Kanji'
import './../../Kanji.css'

const Columns = [
    { title: 'Symbol', dataIndex: 'kanjiSymbol', key: 'kanjiSymbol' },
    { title: 'English Translation', dataIndex: 'englishMeaning', key: 'englishMeaning' },
    { title: 'On Reading', dataIndex: 'onReading', key: 'onReading' },
    { title: 'Kun Reading', dataIndex: 'kunReading', key: 'kunReading' }
    
]


class KanjiStudy extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchKanji();
    }

    render() {
        return (
            <Kanji>
                <Row>
                    <Col span={24}>
                        <Table
                            columns={Columns}
                            //expandable={{
                            //    expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                            //    rowExpandable: record => record.name !== 'Not Expandable',
                            //}}
                            dataSource={this.props.kanji} className="kanji-table"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Button><Link to="/Kanji">Kanji Home</Link></Button>
                    </Col>
                </Row>
            </Kanji>
            )
    }


}

const mapStateToProps = state => {
    console.log(state, "<<")
    return { kanji: state.kanjiReducer.data }
}

export default connect(mapStateToProps, { fetchKanji: fetchKanji })(KanjiStudy)
//export default KanjiStudy