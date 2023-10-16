// Define the action type
export const ADD_TODO = 'ADD_TODO';

// Action creator for adding a todo
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
};
