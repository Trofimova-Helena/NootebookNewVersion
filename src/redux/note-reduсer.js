import uuid from "react-uuid";

const ADD_NOTE = "ADD_NOTE";
const CHANGE_VALUE = "CHANGE_VALUE";
const DEL_NOTE = "DEL_NOTE";
const UPDATE_CHANGE_NOTE = "UPDATE_CHANGE_NOTE";
const CHANGE_TEXTARR = "CHANGE_TEXTARR";
const SAVE = "SAVE";
const SEARCH = "SEARCH"

let initialState = {
    Notes: [
        { id: uuid(), note: 'запись_1' },
        { id: uuid(), note: 'запись_2' },
    ],
    NewNotes: '',
    ChangingNote: '',
    SearchNotes: [],
}


export const AddNote = () => {
    return { type: ADD_NOTE };
}

export const ChangeValue = (text) => {
    return { type: CHANGE_VALUE, newText: text };
}

export const DelNote = (id, index) => {
    return { type: DEL_NOTE, id, index };
}

export const UpdateChangingNote = (obj) => {
    return { type: UPDATE_CHANGE_NOTE, obj };
}

export const ChangeTextArrValForEdit = (text, id) => {
    return { type: CHANGE_TEXTARR, newText: text, id };
}

export const Save = () => {
    return { type: SAVE };
}

export const Search = (arr) => {
    return { type: SEARCH, arr };
}

let noteReducer = (state = initialState, action) => {
    if (action.type === ADD_NOTE) {
        let obj = {
            id: uuid(),
            note: state.NewNotes,
        }
        return {
            ...state,
            Notes: [...state.Notes, obj],
            NewNotes: '',
        }
    } else if (action.type === CHANGE_VALUE) {
        return {
            ...state,
            NewNotes: action.newText,
        }
    } else if (action.type === DEL_NOTE) {
        return {
            ...state,
            Notes: state.Notes.filter(note => note.id !== action.id),
            SearchNotes: state.SearchNotes.splice(0, -1),
        }
    } else if (action.type === UPDATE_CHANGE_NOTE) {
        return {
            ...state,
            ChangingNote: action.obj,
        }
    } else if (action.type === CHANGE_TEXTARR) {
        return {
            ...state,
            ChangingNote: { id: action.id, note: action.newText },
        }
    } else if (action.type === SAVE) {
        state.Notes.map((el, ind) => {
            if (el.id === state.ChangingNote.id) {
                return state.Notes.splice(ind, 1, state.ChangingNote);
            }
            return {
                ...state
            }
        })
    } else if (action.type === SEARCH) {
        return {
            ...state,
            SearchNotes: action.arr
        }
    }
    return state;
}

export default noteReducer;