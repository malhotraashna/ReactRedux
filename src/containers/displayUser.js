import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {displayLastName} from '../actions/getLastName';

class Display extends React.Component{
    render(){
        return (<div>
                <h1>{this.props.first.name} {this.props.last.name}</h1>
                <button onClick={this.props.displayLast}>Get LastName</button>
                </div>);
    }
}

function mapStateToProps(state){
    return {
        first: state.first,
        last: state.last
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({displayLast: displayLastName}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);

