import { combineReducers } from "redux";
import boardReducer from './boardReducer';
import cardsById from './cardsReducer';
import listById from './listReducer';

const rootReducer = combineReducers({
    boardReducer,
    cardsById,
    listById
})

export default rootReducer;