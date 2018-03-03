import {combineReducers} from 'redux';
import FirstName from './displayReducer';
import LastName from './displayLast';

export const allReducers = combineReducers({
    first: FirstName,
    last: LastName
});
