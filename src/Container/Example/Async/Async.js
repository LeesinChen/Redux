import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'antd';
import actionCreator from './action/actionCreator';

class Async extends Component {
    constructor(props) {
        super(props)
    }
    clickMe() {
        this.props.dispatch(actionCreator('mockData/test.json'))
    }
    render () {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
            }
        ]
        return (
            <div>
                <Button type="primary" loading={this.props.loading} onClick={this.clickMe.bind(this)}>点我发请求</Button>
                <br/>
                <Table columns={columns} dataSource={this.props.items} size="middle" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.async.status,
        items: state.async.items
    };
}

const AsyncCom = connect(mapStateToProps)(Async)

export default AsyncCom;
