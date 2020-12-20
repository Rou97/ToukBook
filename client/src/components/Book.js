import React from 'react';
import AddLibraryButton from "./AddLibraryButton";

export default function Book(props) {
    console.log(props)
    let id, title, thumbnail;
    if (props.info.volumeInfo) {
        id = props.info.id;
        title = props.info.volumeInfo.title;
        if (props.info.volumeInfo.imageLinks) {
            thumbnail = props.info.volumeInfo.imageLinks.thumbnail;
        }
    } else {
        id = props.info.bookID;
        title = props.info.title;
        thumbnail = props.info.thumbnail;
    }
    console.log(id, title, thumbnail)

    return (

        <div>
            {id ? (<div>
                {title}
                <img alt="Imagen de la portada" src={thumbnail}></img>
                <AddLibraryButton id={id} title={title} thumbnail={thumbnail}></AddLibraryButton>
            </div>) : (<h2></h2>)}

        </div>
    )
}
