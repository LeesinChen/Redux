import React, { Component } from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux';

class Component6 extends Component {
    constructor(props) {
        super(props);
        console.log('组件6内的props===>>>', props)
    }

    changeToYellow() {
        this.props.dispatch({type: 'CHANGE_TO_YELLOW'})
    }

    changeToGray() {
        this.props.dispatch({type: 'CHANGE_TO_GRAY'});
    }

    pushTextToPage() {
        this.props.dispatch({
            type: 'PUSH_TO_PAGE',
            text: this.refs.inp.value
        })
    }

    render() {
        return (
            <div className="com6">
                <p>我是组件6</p>
                <div className="com6-margin">
                    <Button type="primary" onClick={this.changeToYellow.bind(this)}>给我变成黄色</Button>
                </div>
                <div className="com6-margin">
                    <Button type="primary" onClick={this.changeToGray.bind(this)}>给我变成灰色</Button>
                </div>
                <div className="com6-margin">
                    <input type="text" ref="inp" />
                </div>
                <div className="com6-margin">
                    <Button type="primary" onClick={this.pushTextToPage.bind(this)}>传值</Button>
                </div>
            </div>
        )
    }
}

let Com6 = connect()(Component6);

export default Com6;
