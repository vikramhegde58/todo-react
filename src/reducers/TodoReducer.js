import { FETCH_TODOS, DELETE_TODO, UPDATE_TODO, CREATE_TODO } from "../actions/Types";

const initialState = {
    todos: []
};

export function todoReducer(state = initialState, action) {
    let todos = [...state.todos]
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case DELETE_TODO:
            todos = todos.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todos: todos,
            };
        case UPDATE_TODO:
            let index = todos.findIndex(todo => todo.id === action.payload.id);
            todos.splice(index, 1, action.payload);
            return {
                ...state,
                todos: todos
            };
        case CREATE_TODO:
            todos.push(action.payload);
            return {
                ...state,
                todos: todos
            };
        default:
            return state;
    }
}
