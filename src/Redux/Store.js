import throttle from "lodash.throttle"
import { createStore } from "redux"
import appAction from "./Actioncreator/appAction"
import rootReducer from "./Reducers"

const setState = state => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("state", serializedState)
    } catch (error) {
        console.log('Err', error)
    }
}

const getState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined;
    }
}

const persistedState = getState();
const store = createStore(rootReducer, persistedState);

store.subscribe(
    throttle(() => {
        setState(store.getState())
    }, 1000)
)
console.log(store.getState());
if(!store.getState().board.lists.length){
    appAction(store);
}

export default store;