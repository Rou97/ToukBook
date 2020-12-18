import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import ListOfBooks from '../components/ListOfBooks';
import getBooks from "../services/getBooks";


export default function SearchResults() {
    const location = useLocation();
    const [info, setInfo] = useState();
    const keyword = location.state;

    useEffect(() => {
        getBooks(keyword, setInfo)

    }, [])

    return (
        <div>
            Search Results Page
            {info !== undefined ? (<ListOfBooks info={info}></ListOfBooks>)
                : (<p>loading</p>)}
        </div>
    )
}
