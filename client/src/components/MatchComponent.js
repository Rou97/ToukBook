import React, { useEffect, useState } from 'react';
import getUser from "../services/getUser";
import UserMatch from "./UserMatch"

export default function MatchComponent(props) {
    const [info, setInfo] = useState();
    //con el userid pedir informacion del usuario y hacer un linl hacia su pagina

    useEffect(() => {
        getUser(props.data.userID, setInfo)
    }, [])

    return (
        <div>
            Match Component
            {props.data.title}
            <img alt="Portada del libro" src={props.data.thumbnail}></img>
            User
            <UserMatch data={info}></UserMatch>
        </div >
    )
}
