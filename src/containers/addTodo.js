import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addItem} from '../actions/addItem';

/*class Display extends React.Component{
    render(){
        return (<div>
                <h1>{this.props.first.name} {this.props.last.name}</h1>
                <button onClick={this.props.displayLast}>Get LastName</button>
                </div>);
    }
}*/

class AddTodo extends React.Component{
    render(){
        return (
            <div>
                <input type="text" placeholder="Enter item" id="item"/>
                <button onClick={() => this.props.addItem(document.getElementById("item").value)}> Add Item </button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        first: state.first,
        add: state.add
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addItem: addItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

