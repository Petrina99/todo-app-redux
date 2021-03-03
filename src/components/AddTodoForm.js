import React from "react";
import PropTypes from "prop-types";

class AddTodoForm extends React.Component{
    state = {
        newItem: ""
    }

    handleChange = (event) => {
        this.setState({newItem: event.target.value });
    }

    handleAddTodo = (event) => {
        event.preventDefault();

        const { newItem } = this.state;
        const { addTodo } = this.props;

        if(!newItem.trim())
        {
            alert("Write something ...");
            event.target.previousSibling.focus();
            return;
        }
        
        addTodo(newItem);
        this.setState({ newItem: "" });
        event.target.previousSibling.focus();
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="Add todo" onChange={this.handleChange} value={this.state.newItem} autoFocus />
                <button type="submit" onClick={this.handleAddTodo}>Add</button>
            </form>
        )
    }
}

AddTodoForm.propTypes = {
    addTodo: PropTypes.func
}

export default AddTodoForm;