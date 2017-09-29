import React, {Component} from 'react';
import { connect } from 'react-redux';

class Async extends Component {
    render () {
        return (
            <div>
                1111111
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const AsyncCom = connect(mapStateToProps)(Async)

export default AsyncCom;
