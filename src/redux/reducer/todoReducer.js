import { TodoActionType } from '../actions/actions';

const initialState = {
  todoList: [
    {value: 'hello~', isCheck: false, id: 0},
    {value: 'cat🐱', isCheck: true, id: 1},
  ],

  // QQ: '123',
}

const todoReducer = (state = initialState, action) => {

  switch(action.type){
		
		case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload
        // {
        //   id: action.payload.id,
        //   isCheck: action.payload.isCheck,
        //   value: action.payload.value
        // }
        ]
      }
    
    case 'DELETE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter(todo =>
          todo.id !== action.payload.id,
        )
      }
      
    case 'CHECK_TODO':
      return {
        ...state,
        todoList: state.todoList.map(todo =>
        todo.id === action.payload.id ? { ...todo, isCheck: !todo.isCheck } : todo,
        )
      }

    case 'EDIT_TODO': 
      return {
        ...state,
        todoList: state.todoList.map(todo =>
        todo.id === action.payload.id ? { ...todo, value: action.payload.value } : todo,
        )
      }
      
    case 'CLEAR_TODO':
      return {
        ...state,
        todoList: []
      }

		default:
      return state;
  
  }
};

export default todoReducer;  
