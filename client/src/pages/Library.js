import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from "react-router-dom"
import UserContext from "../context/UserContext";
import getLibrary from "../services/getLibrary";
import ListOfBooks from '../components/ListOfBooks';

export default function Library() {
    const [info, setInfo] = useState();
    const { userData } = useContext(UserContext);
    const location = useLocation();
    let id;
    if (location.state) {
        id = location.state
    }

    useEffect(() => {
        if (userData.user) {
            if (id !== undefined) {
                getLibrary(id, setInfo)
            } else {
                getLibrary(userData.user.id, setInfo)
            }
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
