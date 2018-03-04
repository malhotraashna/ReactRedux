import React, { Component } from 'react';
import AddTodo from './containers/addTodo';
import TodoList from './containers/todoList';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
