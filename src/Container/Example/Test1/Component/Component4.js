import React, { Component } from 'react';
import Com5 from './Component5';
import Com6 from './Component6';

export default class Component4 extends Component {
    constructor(props) {
        super(props)
        this.changeToYellow = this.changeToYellow.bind(this);
        this.changeToGray = this.changeToGray.bind(this);
        this.state = {
            style: {
                background: '#eee',
            }
        }
    }
    changeToYellow() {
        this.setState({
            style: {
                background: '#fff143',
            }
        })
    }
    changeToGray() {
        this.setState({
            style: {
                background: '#eee',
            }
        })
    }
    render() {
        return(
            <div className="pub" style={{height: '300px'}}>
                <p>这是组件4</p>
                <Com5 style={this.state.style}/>
                <Com6 pushTextToPage={this.props.pushTextToPage} changeToYellow={this.changeToYellow} changeToGray={this.changeToGray}/>
            </div>
        );
    }
}


