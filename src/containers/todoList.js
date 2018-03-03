import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TodoList extends React.Component{
    renderList(){
        return this.props.items.map((item) => {
            return (
                <li key={item.id}>{item.itemName}</li>
            );
        });
    }

    render(){
        return (
            <ul>{this.renderList()}</ul>
        );
    }
}

function mapStateToProps(state){
    return {
        items: state.add
    }
}

export default connect(mapStateToProps)(TodoList);