import { FETCH_TODOS, DELETE_TODO, UPDATE_TODO, CREATE_TODO } from "./Types";

export const fetchTodos = () => dispatch => {

    fetch("../data/todos.json", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: FETCH_TODOS,
                payload: json
            });
        });


    // axios
    //     .get(Apis.fetchProductDetailsURL(productId), {
    //         headers: { Authorization: Apis.getBasicHeader() }
    //     })
    //     .then(response => {
    //         dispatch({
    //             type: productConstants.FETCH_PRODUCT_DETAILS,
    //             payload: response.data
    //         });
    //         let rules = {};
    //         if (response.data.rules.json) {
    //             rules = JSON.parse(response.data.rules.json).rules;
    //         }
    //         dispatch({
    //             type: SAVE_RULES,
    //             payload: rules
    //         });
    //         callback(response.data)
    //     }).catch((error) => {
    //         callback(false)
    //     })
};

export const updateTodo = (todo) => dispatch => {
    dispatch({
        type: UPDATE_TODO,
        payload: todo
    });
}

export const deleteTodo = (id) => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: id
    });
}

export const createTodo = (todo) => dispatch => {
    dispatch({
        type: CREATE_TODO,
        payload: todo
    });
}