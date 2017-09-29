import React, { Component } from 'react';
import Com2 from './Component2';

export default class Component1 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="pub" style={{height: '600px'}}>
                <p>这是组件1</p>
                <Com2 pushTextToPage={this.props.pushTextToPage} />
            </div>
        );
    }
}
