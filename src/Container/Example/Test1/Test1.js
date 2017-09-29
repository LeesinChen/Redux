import React, { Component } from 'react';
import Com1 from './Component/Component1';

export default class Test1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.pushTextToPage = this.pushTextToPage.bind(this)
    }

    pushTextToPage(text) {
        this.setState({
            text: text
        })
    }

    render() {
        require('../Test/test.scss');
        return (
            <div>
                <p>你输入的是：{this.state.text}</p>
                <br />
                <Com1 pushTextToPage={this.pushTextToPage} />
            </div>
        );
    }
}
