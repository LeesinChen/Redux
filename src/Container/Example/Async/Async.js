import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import actionCreator from './action/actionCreator';

class Async extends Component {
    constructor(props) {
        super(props)
    }
    clickMe() {
        this.props.dispatch(actionCreator('mockData/test.json'))
    }
    render () {
        return (
            <div>
                1111111
                <Button type="primary" loading={this.props.loading} onClick={this.clickMe.bind(this)}>点我发请求</Button>
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
