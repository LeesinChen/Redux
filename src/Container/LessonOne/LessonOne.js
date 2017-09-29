import React, { Component } from 'react';
import { Button } from 'antd';

export default class LessonOne extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{minHeight: "500px"}}>
                <h1>第一章&nbsp;&nbsp;Redux是什么？</h1>
                <div style={{paddingTop: "30px"}}>
                    <h3>个人理解它就是一个<strong>状态管理</strong>工具</h3>
                    <h3><a href="http://www.redux.org.cn/index.html" target="blank">Redux中文文档</a></h3>
                </div>
            </div>
        );
    }
}

