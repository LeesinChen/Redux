import React, { Component } from 'react';

export default class Test1 extends Component{
    constructor(props) {
        super(props);
        console.log('组件1的props===>>>', props)
    }
    render() {
        return (
            <div>
                component1
            </div>
        );
    }
}
