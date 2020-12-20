import React from 'react';
import AddLibraryButton from "./AddLibraryButton";
import ChangeMoodButton from "./ChangeMoodButton";


export default function Book(props) {
    let id, title, thumbnail, bookMood, a;
    if (props.info.volumeInfo) {
        a = false
        bookMood = props.info.bookMood;
        id = props.info.id;
        title = props.info.volumeInfo.title;
        if (props.info.volumeInfo.imageLinks) {
            thumbnail = props.info.volumeInfo.imageLinks.thumbnail;
        }
    } else {
        a = true
        bookMood = props.info.bookMood;
        id = props.info.bookID;
        title = props.info.title;
        thumbnail = props.info.thumbnail;
    }

    return (

        <div>
            {id ? (<div>
                {title}
                {a ? (<ChangeMoodButton id={id}></ChangeMoodButton>) : (<></>)}


                <AddLibraryButton id={id} title={title} thumbnail={thumbnail}></AddLibraryButton>
                <img alt="Imagen de la portada" src={thumbnail}></img>
            </div>) : (<h2></h2>)}

        </div>
    )
}
