import React from 'react';
import AddLibraryButton from "./AddLibraryButton";

export default function Book(props) {
    const { id } = props.info;
    const { title } = props.info.volumeInfo;
    let thumbnail;
    if (props.info.volumeInfo.imageLinks) {
        thumbnail = props.info.volumeInfo.imageLinks.thumbnail;
    }

    return (
        <div>
            {title}
            <img alt="Imagen de la portada" src={thumbnail}></img>
            <AddLibraryButton id={id} title={title} thumbnail={thumbnail}></AddLibraryButton>
        </div>
    )
}
