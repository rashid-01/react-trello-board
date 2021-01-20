import { ADD_LIST, DELETE_LIST, MOVE_LIST } from "../Types";

const boardReducer = (state = {list:[]}, action) => {
   switch(action.type){
       case ADD_LIST: {
           const{listId} = action.payload;
           return {list : [...state.lists, listId]}
       }
       case MOVE_LIST: {
           const{oldListIndex, newListIndex} = action.payload;
           const newLists = Array.from(state.lists);
           const [removedList] = newLists.splice(oldListIndex,1);
           newLists.splice(newListIndex, 0 , removedList);
           return{lists:newLists};
       }
       case DELETE_LIST: {
           const {listId} = action.payload;
           const filterDeleted = tmpListId => tmpListId !== listId;
           const newLists = state.lists.filter(filterDeleted);
           return {lists: newLists};
       }
       default:
           return state;
   }
}

export default boardReducer;