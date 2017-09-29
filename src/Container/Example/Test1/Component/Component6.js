import React, { Component } from 'react';
import { Button } from 'antd';

export default class Component6 extends Component {
    changeToYellow() {
        this.props.changeToYellow();
    }
    changeToGray() {
        this.props.changeToGray();
    }
    pushTextToPage() {
        const text = this.refs.inp.value;
        this.props.pushTextToPage(text)
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
