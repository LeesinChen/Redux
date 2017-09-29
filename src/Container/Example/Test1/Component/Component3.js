import React, { Component } from 'react';
import Com4 from './Component4';

export default class Component3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="pub" style={{height: '400px'}}>
                <p>这是组件3</p>
                <Com4 pushTextToPage={this.props.pushTextToPage} />
            </div>
        );
    }
}
