import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoListReducer from './features/todo-list/redux';

const store = createStore(combineReducers({
    todoListReducer
}), composeWithDevTools());

export default store;

