import React, { useEffect, useState, useContext } from 'react';
import UserContext from "../context/UserContext";
import getLibrary from "../services/getLibrary";
import ListOfBooks from '../components/ListOfBooks';

export default function Library() {
    const [info, setInfo] = useState();
    const { userData } = useContext(UserContext);

    useEffect(() => {
        if (userData.user) {
            getLibrary(userData.user.id, setInfo)
        }
    }, [userData.user])

    return (
        <div>
            Library
            {info !== undefined ? (<ListOfBooks info={info}></ListOfBooks>)
                : (<p>loading</p>)}
        </div>
    )
}
