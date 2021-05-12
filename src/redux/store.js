import { combineReducers, createStore } from "redux";
import noteReducer from "./note-reduсer";

let reducers = combineReducers({
    AllNotes: noteReducer,
}) 

let store = createStore(reducers);

window.store = store;

export default store;