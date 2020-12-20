import React from 'react'
import Book from "./Book"

export default function ListOfBooks(props) {
    let items;
    if (props.info.data) {
        items = props.info.data.items;
    } else {
        items = props.info
    }

    console.log(items)

    return (
        <div>
            List results component
            {items.map((element) => {
                console.log(element)
                return <Book key={element.id} info={element}></Book>
            })}
        </div >
    )
}
