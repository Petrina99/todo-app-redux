import uniqueString from "unique-string";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const REMOVE_ALL_COMPLETED = "REMOVE_ALL_COMPLETED";

export function addTodo(text){
    return { type: ADD_TODO, id: uniqueString(), text };
}

export function toggleTodo(id){
    return{ type: TOGGLE_TODO, id }
}

export function removeTodo(id){
    return{ type: REMOVE_TODO, id }
}

export function removeAllCompletedTodos(){
    return { type: REMOVE_ALL_COMPLETED }
}

export function reducer(state = [], action){
    switch(action.type){
        case ADD_TODO:
            return [...state, { id: action.id, text: action.text, completed: false }];
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case REMOVE_ALL_COMPLETED:
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}