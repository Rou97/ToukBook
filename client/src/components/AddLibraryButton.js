import React, { useEffect, useContext, useState } from 'react';
import UserContext from "../context/UserContext";
import addBook from "../services/addBook";
import removeBook from "../services/removeBook";
import isBookLibrary from "../services/isBookLibrary";

export default function AddLibraryButton(props) {
    const { userData } = useContext(UserContext);
    const [button, setButton] = useState()
    const { id, title, thumbnail } = props;
    //Tiene que pedir la informacion a tu biblioteca pra saber si lo tienes o no, segun el resultado
    //el boton renderiza agregarlo o eliminarlo

    useEffect(() => {
        if (button === undefined) {
            isBookLibrary(id, userData.user.id, setButton)
        }

        //lamar al service
        //renderiza correctamente
    }, [button])

    const onclick = () => {


        if (button === 'Add to library') {
            addBook(id, title, thumbnail, userData)
            setButton('Remove from library');
        } else {
            removeBook(id, title, thumbnail, userData)
            setButton('Add to library');
        }
    }

    return (
        <div onClick={onclick}>
            {button}
        </div>
    )
}
