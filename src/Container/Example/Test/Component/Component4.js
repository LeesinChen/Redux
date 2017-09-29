import React, { Component } from 'react';
import Com5 from './Component5';
import Com6 from './Component6';

import { connect } from 'react-redux';

class Component4 extends Component {
    constructor(props) {
        super(props)
        console.log('组件4内的props====>>>>', props)
    }
    render() {
        return(
            <div className="pub" style={{height: '300px'}}>
                <p>这是组件4</p>
                <Com5 />
                <Com6 />
            </div>
        );
    }
}

let Com4 = connect()(Component4);

export default Com4;
