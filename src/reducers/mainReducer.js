import {combineReducers} from 'redux';
import FirstName from './displayReducer';
import addTodo from './addTodo';

export const allReducers = combineReducers({
    add: addTodo
});
