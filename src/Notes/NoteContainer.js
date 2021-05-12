import { connect } from "react-redux";
import { AddNote, ChangeValue, DelNote, UpdateChangingNote, 
         ChangeTextArrValForEdit, Save, Search } from "../redux/note-reduсer";
import PrintNote from "./PrintNote";

let containerForPrintNote = (props) => {
    return <PrintNote {...props}/>
}

let mapStateToProps = (state) => {
    return {
       notes: state.AllNotes.Notes,
       newNotes: state.AllNotes.NewNotes, 
       changingNote: state.AllNotes.ChangingNote,  
       changingNoteObj: state.AllNotes.ChangingNoteObj,
       searchNotes: state.AllNotes.SearchNotes,
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddNote: () => {
            dispatch(AddNote());
        },
        ChangeValue: (event) => {
            let text = event.target.value;
            dispatch(ChangeValue(text));
            text='';
        },
        DelNote: (event) => {
            let id = event.target.id;
            let index = event.target.getAttribute('data-index');
            dispatch(DelNote(id, index));
        }, 
        UpdateChangingNote: (obj) => {
            dispatch(UpdateChangingNote(obj));
        },
        ChangeTextArrValForEdit: (event) => {
            let text = event.target.value;
            let id = event.target.id;
            dispatch(ChangeTextArrValForEdit(text, id));
        },
        Save: () => {
            dispatch(Save());
        },
        Search: (arr) => {
            dispatch(Search(arr));
        } 
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (containerForPrintNote)