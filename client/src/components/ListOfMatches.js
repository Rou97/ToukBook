import React, { useEffect, useState, useContext } from 'react';
import UserContext from "../context/UserContext";
import getMatches from "../services/getMatches";

export default function ListOfMatches() {
    const { userData } = useContext(UserContext);
    const [info, setInfo] = useState();

    //GetMatches buscara en la bd el libro que el usuario quiera,
    //pero en otro usuario de la misma provincia, con el mood diferente

    useEffect(() => {
        getMatches(userData.user.id, setInfo)
        console.log(info)
    }, [])

    return (
        <div>
            List of matches
        </div>
    )
}
