import React from 'react'
import Book from "./Book"

export default function ListOfBooks(props) {
    let items;
    if (props.info.data) {
        items = props.info.data.items;
    } else {
        items = props.info
    }

    return (
        <div>
            List results component
            {items.map((element, index) => {
                return <Book key={index} info={element}></Book>
            })}
        </div >
    )
}
