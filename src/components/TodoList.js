import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({todos, removeTodo, toggleTodo}){
    return(
        <ul>
            {todos.map(todo => {
                return (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                );
            })}
        </ul>
    );
}

TodoList.propTypes = {
    todo: PropTypes.array,
    removeTodo: PropTypes.func,
    toggleTodo: PropTypes.func
};
export default TodoList;