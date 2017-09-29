import React, { Component } from 'react';
import { connect } from 'react-redux';

class Component5 extends Component {
    render() {
        require('../test.scss');
        return(
            <div className="com5" style={this.props.style}>
                <p>这是组件5</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        style: state.styleReducer
    }
}

let Com5 = connect(mapStateToProps)(Component5);

export default Com5;
