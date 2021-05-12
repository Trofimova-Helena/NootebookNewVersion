import React, { useState } from 'react';
import Search from './Search';
import styles from './PrintNoteStyle.module.css';
import imgUrl from './../ProjectImages/page.jpg';

function PrintNote(props) {
    let [edit, setEdit] = useState(false);
    let [changingNote, setChangingNote] = useState(
        {
            id: '',
            note: props.changingNote,
        });

    let activateEditMode = () => {
        setEdit(true);
        props.UpdateChangingNote(changingNote);
    }

    let onMouseOverAction = (event) => {
        setChangingNote({ id: event.target.id, note: event.target.innerHTML });
    }

    let SaveChanging = () => {
        props.Save();
        setEdit(false);
    }

    let list = props.notes.map((elem) => {
        return elem;
    })

    let lis = list.map((el, index) => {
        return <li key={el.id} className={styles.li}>
            <span onClick={activateEditMode} onMouseOver={onMouseOverAction} id={el.id}>
                {el.note}
            </span>
            <span><button onClick={props.DelNote} id={el.id} data-index={index} className={styles.btn}>Удалить</button></span>
        </li>
    })

    let searchLis = list.map((el, ind) => {
        for(let i=0; i<props.searchNotes.length; i++) {
            if (props.searchNotes[i] === ind) {
                return <li key={el.id} className={styles.li}>
                <span onClick={activateEditMode} onMouseOver={onMouseOverAction} id={el.id}>
                    {el.note}
                </span>
                <span><button onClick={props.DelNote} id={el.id} data-index={ind} className={styles.btn}>Удалить</button></span>
            </li> 
            }
        }
    })

    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        height:1000,
        backgroundSize: 100+ '%' + 100 + '%',
      };

    return <div style={divStyle}>
        <Search {...props}/>

        <div className={styles.container}>{props.searchNotes.length <= 0 ? 
            <div>
                {!edit ?
                    <div className={styles.titels}>
                        <div>
                            <ul>{lis}</ul>
                        </div>
                        <div className={styles.enteringText}>
                            <textarea onChange={props.ChangeValue} value={props.newNotes} />
                            <div>
                                <button onClick={props.AddNote}>Добавить</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={styles.titels}>
                        <div>
                            <ul>{lis}</ul>
                        </div>
                        <div className={styles.enteringText}>
                            <textarea value={props.changingNote.note} onChange={props.ChangeTextArrValForEdit} id={props.changingNote.id} />
                            <div>
                                <button onClick={SaveChanging}>Изменить</button>
                            </div>
                        </div>
                    </div>
                }
            </div>

            :

            <div>
                {!edit ?
                    <div className={styles.titels}>
                        <div>
                            <ul>{searchLis}</ul>
                        </div>
                        <div className={styles.enteringText}>
                            <textarea onChange={props.ChangeValue} value={props.newNotes} />
                            <div>
                                <button onClick={props.AddNote}>Добавить</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={styles.titels}>
                        <div>
                            <ul>{searchLis}</ul>
                        </div>
                        <div className={styles.enteringText}>
                            <textarea value={props.changingNote.note} onChange={props.ChangeTextArrValForEdit} id={props.changingNote.id} />
                            <div>
                                <button onClick={SaveChanging}>Изменить</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        }
        </div>
    </div>
}

export default PrintNote;