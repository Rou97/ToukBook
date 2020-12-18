import React from 'react'

export default function Book(props) {

    console.log(props.info.volumeInfo)
    const { title } = props.info.volumeInfo;

    return (
        <div>
            {title}
        </div>
    )
}
