export const TodoActionType = {
  ADD_TODO:                   'ADD_TODO',
  CHECK_TODO:                 'CHECK_TODO',
  REMOVE_TODO:                'REMOVE_TODO',
  EDIT_TODO:                  'EDIT_TODO',
  SHOW_ALL:                   'SHOW_ALL',
  SHOW_COMPLETED:             'SHOW_COMPLETED',
  SHOW_UNDO:                  'SHOW_UNDO',
  SET_VISIBILITY_FILTER:      'SET_VISIBILITY_FILTER',
}


export const addTodo = value => ({
    type: ADD_TODO,
    payload: {
      id: id,
      value: value,
    }
})

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {
      id: id,
      // value: value,
    }
})

export const checkTodo = (id) => ({
    type: CHECK_TODO,
    payload: {
      id: id,
      // value: value,
    }
})

export const editTodo = (id, value) => ({
	type: EDIT_TODO,
	payload: {
    id: id,
    value: value,
  }
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})