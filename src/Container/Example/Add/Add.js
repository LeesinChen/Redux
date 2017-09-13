import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
// action
import actionCreator from './AddAction';

class Add extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        this.clickOne = this.clickOne.bind(this);
        this.clickTwo = this.clickTwo.bind(this);
        this.clickThree = this.clickThree.bind(this);
        this.clickReturn = this.clickReturn.bind(this);
    }

    clickReturn() {
        const action = actionCreator(0);
        this.props.addOne(action);
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

    render() {
        return(
            <div style={{minHeight: "500px"}}>
                <h2>这是一个加法的例子，我们在store中初始了一个state，它有一个key为number，对应的value为0</h2>
                <br/>
                <h2>{this.props.number}</h2>
                <br/>
                <Button type="primary" onClick={this.clickOne} style={{marginRight: "30px"}}>加一</Button>
                <Button type="primary" onClick={this.clickTwo} style={{marginRight: "30px"}}>加二</Button>
                <Button type="primary" onClick={this.clickThree} style={{marginRight: "30px"}}>加三</Button>
                <Button type="primary" onClick={this.clickReturn} style={{marginRight: "30px"}}>归零</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        number: state.add.number
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addOne: (action) => { dispatch(action) },
        addTwo: (action) => { dispatch(action) },
        addThree: (action) => { dispatch(action) },
    };
}

const AddComponent = connect(mapStateToProps, mapDispatchToProps)(Add);

export default AddComponent;
