import React from "react";
import VISIBILITY_TYPE from "./const";

import { AddTodoForm, VisibilityToolbar, TodoList } from "./components";

import './App.css';

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./services/ConnectFunction";

class App extends React.Component {

  state = { 
    visibility: VISIBILITY_TYPE.ALL
  }

  getVisibleTodos = () => {
    const { visibility } = this.state;
    const { todos } = this.props;

    if(visibility === VISIBILITY_TYPE.ALL)
    {
      return todos;
    }

    /* dohvacamo sve zadatke kojima je completed === true */
    if(visibility === VISIBILITY_TYPE.COMPLETED)
    {
      return todos.filter(todo => todo.completed);
    }

    /* { id, text, completed } completed ce biti ili true ili false*/

    return todos.filter(todo => !todo.completed);
  }

  handleVisibilityChange = visibility => {
    this.setState({visibility: visibility});
  }

  render(){
    const { todos, addTodo, toggleTodo, removeTodo, removeAllCompletedTodos } = this.props;


    const visibleTodos = this.getVisibleTodos();
    const hasCompletedTodos = todos.filter(todo => todo.completed).length > 0;

    return (
    <div className="App">
      <h1 className="header">My tasks</h1>
      <VisibilityToolbar visibilityType={this.state.visibility} onVisibilityChange={this.handleVisibilityChange} />
      <div className="todo-container">
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={visibleTodos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      </div>
      {hasCompletedTodos && (
        <span className="btn-clear-all" onClick={removeAllCompletedTodos}>Clear completed</span>
      )}
    </div>
  );}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
