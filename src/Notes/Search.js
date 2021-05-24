import React, { useState } from 'react';
import SearchPic from './../ProjectImages/search.jpg';
import styles from './PrintNoteStyle.module.css';

function Search(props) {
    let [searchingIndex, setSearchingIndex] = useState([]);
    let [searchValue, setSearchValue] = useState('');

    let Searching = () => {
        props.Search(searchingIndex);
    }

    let handleChange = (event) => {
        let arrOfNotesText = [];
        for (let elem of props.notes) {
            arrOfNotesText.push(elem.note.toUpperCase());
        }

        let arr = [];
        setSearchValue(event.target.value);
        for(let i = 0; i < arrOfNotesText.length; i++){
			if(arrOfNotesText[i].indexOf(event.target.value.toUpperCase()) !== -1) {
				arr.push(i);
				setSearchingIndex(arr);
			} 
		}

        if (event.target.value === '') {
            arr.splice(0, arr.length);
        }
	}

    return (
        <div className={styles.search}>
                <input placeholder="поиск" onChange={handleChange} value={searchValue}/>
                <button onClick={Searching}>
                    <img src={SearchPic} className={styles.SearchPic}/>
                </button>
        </div>
    )

}

export default Search;