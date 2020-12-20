import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


export default function FormSearch() {
    const [keyword, setKeyword] = useState('');
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push({
            pathname: '/searchresults',
            state: keyword
        });

    }

    const handleChange = e => {
        setKeyword(e.target.value);
    }

    return (
        <div>
            Form Search
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword}></input>
            </form>
        </div>
    )
}
