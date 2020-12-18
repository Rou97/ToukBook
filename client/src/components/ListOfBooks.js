import React from 'react'
import Book from "./Book"

export default function ListOfBooks(props) {
    const { items } = props.info.data;
    return (
        <div>
            List results component
            {items.map((element) => {
                return <Book key={element.id} info={element}></Book>
            })}
            {/* {items.forEach(element => {
                return <Book key={element.id}></Book>
            })} */}
        </div >
    )
}
