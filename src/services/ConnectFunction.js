import { addTodo, toggleTodo, removeTodo, removeAllCompletedTodos } from "../redux";

function mapStateToProps(state){
    return {
        todos: state
    }
}

const mapDispatchToProps = {
    addTodo,
    toggleTodo,
    removeTodo,
    removeAllCompletedTodos
    
}

export { mapStateToProps, mapDispatchToProps };