import { combineReducers, createStore } from "redux";
import noteReducer from "./note-reduсer";

let reducers = combineReducers({
    AllNotes: noteReducer,
}) 

let store = createStore(
            reducers,     
            (localStorage['someKey']) ? JSON.parse(localStorage['someKey']) : {},
);

store.subscribe( () => {
    localStorage['someKey'] = JSON.stringify(store.getState())
})

window.store = store;

export default store;