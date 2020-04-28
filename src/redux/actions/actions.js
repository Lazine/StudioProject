import { ADD_TODO, CHECK_TODO, DELETE_TODO, EDIT_TODO, CLEAR_TODO } from './actionType';
import { SET_FILTER } from './actionType';


// succinct hack for generating passable unique ids
// const uid = () => Math.random().toString(34).slice(2);
// generate random unique integer
const uid = () => Math.floor(Math.random() * 100000000) + 1 ;

export const addTodo = value => ({
    type: ADD_TODO,
    payload: {
      value: value,
      isCheck: false,
      id: uid(),
    }
})

export const checkTodo = (id) => ({
  type: CHECK_TODO,
  payload: {
    id: id,
    isCheck: false,
    // value: value,
  }
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
      id: id,
      // value: value,
    }
})

export const editTodo = (id, value) => ({
	type: EDIT_TODO,
	payload: {
    value: value,
    id: id,
  }
})

export const clearTodo = (value) => ({
	type: CLEAR_TODO,
	payload: {
    value: value,
  }
})

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})
