import { TodoActionType } from '../actions/actions';

const initialState = {
  todoList: [
    {value: 'hello~', isCheck: false, id: 1},
    {value: 'cat🐱', isCheck: true, id: 2},
  ],
}

const reducer = (state = initialState, action) => {
  switch(action.type){
		
		case TodoActionType.ADD_TODO:
      return{

			};
    
    case TodoActionType.REMOVE_TODO:
      return{

      };
    
    case TodoActionType.CHECK_TODO:
      return{

      };
    
		default:
      return state;
  }
}

export default reducer;

// const reducer = combineReducers({
//   todoAction: todoReducer,
//   prizeList: prizeListReducer,
// });