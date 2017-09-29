import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
// actionCreator
import actionCreator from './action/actionCreator';

class Add extends Component {
    constructor(props) {
        super(props);
        console.log('add组件内的props===>>>', props);
        this.clickOne = this.clickOne.bind(this);
        this.clickTwo = this.clickTwo.bind(this);
        this.clickThree = this.clickThree.bind(this);
        this.clickReturn = this.clickReturn.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    clickReturn() {
        const action = actionCreator(0);
        this.props.addOne(action);
        // 因为此action比较简单，所以此处完全可以直接写，并不用调用创建action函数
        // 此处可以直接写 this.props.addOne({type: 'ADD_ONE'})
    }

    clickOne() {
        const action = actionCreator(1);
        this.props.addOne(action);
    }

    clickTwo() {
        const action = actionCreator(2);
        this.props.addOne(action);
    }

    clickThree() {
        const action = actionCreator(3);
        this.props.addOne(action);
    }

    show() {
        this.props.show({type: 'SHOW'});
    }

    hide() {
        this.props.hide({type: 'HIDE'})
    }

    render() {
        return(
            <div style={{minHeight: "500px"}}>
                <h2>这是一个加法的例子，我们在store中初始了一个state，它有一个key为number，对应的value为0</h2>
                <br/>
                <h2>
                    <span>点击下面的按钮，看看我会变成什么：</span>
                    <span style={{color: "red"}}>{this.props.number}</span>
                </h2>
                <br/>
                <Button type="primary" onClick={this.clickOne} style={{marginRight: "30px"}}>加一</Button>
                <Button type="primary" onClick={this.clickTwo} style={{marginRight: "30px"}}>加二</Button>
                <Button type="primary" onClick={this.clickThree} style={{marginRight: "30px"}}>加三</Button>
                <Button type="primary" onClick={this.clickReturn} style={{marginRight: "30px"}}>归零</Button>
                <Button type="primary" onClick={this.show} style={{marginRight: "30px"}}>显示</Button>
                <Button type="primary" onClick={this.hide} style={{marginRight: "30px"}}>隐藏</Button>
                <br/><br/>
                {this.props.addModelShow &&
                <div>
                    <h2>工作流程：</h2>
                    <h2>我们已经在顶层组件，使用react-redux的Provider组件包装store，页面初始化，首先用react-redux的</h2>
                    <h2>我们在connect()中传入了两个参数，mapStateToProps 和 mapDispatchToProps</h2>
                    <h2>第一个参数 mapStateToProps(state)，此state则是store中的state树，它返回一个对象，这个对象作为props传递到此组件中，你可以设置对象的key和value，即为映射到props的属性</h2>
                    <h2></h2>
                    <h2>当我点击加一按钮，会执行actionCreator函数（这个函数是我自己定义的，用来创建action），得到一个action</h2>
                    <h2>然后，会通过dispatch发送action到reducer，我们的reducer会根据action的type进行匹配，执行相应的操作来更新state，之后返回新的state，store监听了每个reducer返回的state，
                    当state发生改变，store就会重绘state树（改变的部分），那么，state树发生改变，页面重绘...</h2>
                    <h2></h2>
                    <h2></h2>
                    <h2></h2>
                </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    // 这里的state参数  即是 store.getState() 拿到的state，也就是store内所有的state，我们可以在这里根据当前组件所需，取出自己所需要的state
    console.log('add组件内的state====>>>>', state);
    return {
        number: state.addNumber.number,
        addModelShow: state.addNumber.addModelShow,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addOne: (action) => { dispatch(action) },
        addTwo: (action) => { dispatch(action) },
        addThree: (action) => { dispatch(action) },
        show: (action) => { dispatch(action) },
        hide: (action) => { dispatch(action) },
    };
}

const AddComponent = connect(mapStateToProps, mapDispatchToProps)(Add);

export default AddComponent;
