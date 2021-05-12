import React, { useState } from 'react';
import styles from './PrintNoteStyle.module.css';

function Search(props) {
    let [searchingIndex, setSearchingIndex] = useState([]);

    let Searching = () => {
        props.Search(searchingIndex);
    }

    let handleChange = (event) => {
        let arrOfNotesText = [];
        for (let elem of props.notes) {
            arrOfNotesText.push(elem.note.toUpperCase());
        }

        let arr = [];
		for(let i = 0; i < arrOfNotesText.length; i++){
			if(arrOfNotesText[i].indexOf(event.target.value.toUpperCase()) !== -1) {
				arr.push(i);
				setSearchingIndex(arr);
			} 
		}
	}

    return <div className={styles.search}>
        <input placeholder="поиск" onChange={handleChange} />
        <button onClick={Searching}>Найти</button>
    </div>
}

export default Search;