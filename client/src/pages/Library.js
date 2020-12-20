import React, { useEffect, useState, useContext } from 'react';
import UserContext from "../context/UserContext";
import getLibrary from "../services/getLibrary";
import ListOfBooks from '../components/ListOfBooks';

export default function Library() {
    const [info, setInfo] = useState();
    //const { items } = props.info.data;
    const { userData } = useContext(UserContext);
    const { id } = userData.user;

    useEffect(() => {
        getLibrary(id, setInfo)
    }, [])

    return (
        <div>
            Library
            {info !== undefined ? (<ListOfBooks info={info}></ListOfBooks>)
                : (<p>loading</p>)}
        </div>
    )
}
