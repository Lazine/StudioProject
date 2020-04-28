import { combineReducers } from 'redux';
import TodoReducer from './reducer/todoReducer';  
import FilterReducer from './reducer/filterReducer';

export default combineReducers({
  TodoReducer,
  FilterReducer,
});
