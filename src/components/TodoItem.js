import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component{

    handleRemoveTodoClick = () => {
        const { todo, removeTodo } = this.props;
        removeTodo(todo.id);
    }

    handleToggleTodoClick = () => {
        const { todo, toggleTodo } = this.props;
        toggleTodo(todo.id);
    }

    render(){
        const { todo } = this.props;
        const textClass = todo.completed ? "todo-item-completed" : null;
        
        return(
            <li className="todo-item">
                <span className="todo-item-item" onClick={this.handleToggleTodoClick}>
                    <input type="checkbox" checked={todo.completed} onClick={this.handleToggleTodoClick} />
                    <span className={textClass}>{todo.text}</span>
                </span>
                <span className="todo-item-delete-button" onClick={this.handleRemoveTodoClick}>x</span>
            </li>
        );
    }
}

TodoItem.propTypes = {
    removeTodo: PropTypes.func,
    toggleTodo: PropTypes.func,
    todo: PropTypes.object
}

export default TodoItem;