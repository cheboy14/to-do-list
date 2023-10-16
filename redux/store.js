import { createStore } from 'redux';

const initialState = {
    todos: [], // Initialize with an empty array
};

function rootReducer(state = initialState, action) {
    // You can add reducers here to manage the 'todos' state
    return state;
}

const store = createStore(rootReducer);

export default store;
