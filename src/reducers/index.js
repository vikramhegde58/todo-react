import { combineReducers } from 'redux';
import { todoReducer } from './TodoReducer';
import { bucketReducer } from './BucketReducer';

export default combineReducers({
    todoReducer,
    bucketReducer
});