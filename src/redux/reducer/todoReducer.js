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
    
    case 'REMOVE_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      )
    
    case 'CHECK_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })

    case 'EDIT_TODO': 
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )
    
    case 'CLEAR_TODO':
      return [...state];

		default:
      return state;
  
  }
};

export default todoReducer;  
