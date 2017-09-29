import React, { Component } from 'react';
import Com3 from './Component3';

export default class Component2 extends Component {
    render() {
        return(
            <div className="pub" style={{height: '500px'}}>
                <p>这是组件2</p>
                <Com3 />
            </div>
        );
    }
}
