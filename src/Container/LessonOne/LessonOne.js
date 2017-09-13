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
                    <p>虽然说Redux除了React还支持其它页面库，但是我们一般都是结合React使用</p>
                    <p>在React中使用Redux，首先需要明白几个概念：单向数据流（React则是单向数据流）；Redux设计思想（Flux概念）；</p>
                    <p>我们都知道，在react中，state发生改变，对应使用此state的组件进行重新渲染。在没有使用redux的时候，我们可以直接通过setState()方法，来更新组件的state</p>
                    <p>项目比较小，组件层级嵌套不复杂的时候，这样做确实没有什么弊端；但是当项目庞大无比，组件嵌套复杂而繁琐，这个时候，通过单纯的setState()来管理项目，显然是不明智的</p>
                    <p>最简单的一个例子，我的组件嵌套了十层，我需要在第十层组件来操作顶层组件的状态，怎么去实现？一层层的回调传下去？哇！你赢了~</p>
                    <br/>
                    <h3><a href="http://www.redux.org.cn/index.html" target="blank">Redux中文文档</a></h3>
                </div>
            </div>
        );
    }
}

