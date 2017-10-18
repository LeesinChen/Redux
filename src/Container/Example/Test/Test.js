import React, { Component } from 'react';
import { connect } from 'react-redux';

import Com1 from './Component/Component1';

class Test extends Component {
    constructor(props) {
        super(props)
        console.log('props====>>>>', props)
    }
    render() {
        return (
            <div>
                <p>你输入的是：{this.props.text}</p>
                <br />
                <Com1 />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state====>>>>', state)
    return {
        text: state.pushText.value
    }
}

let TestComponent = connect(mapStateToProps)(Test);

export default TestComponent;
