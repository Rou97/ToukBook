import React from 'react'
import { useHistory } from "react-router-dom"

export default function UserMatch(props) {
    let history = useHistory();
    let displayName
    if (props.data) {
        displayName = props.data.displayName
    }

    const onclick = () => {
        console.log('click')
        history.push({
            pathname: '/userprofile',
            state: props.data
        });

    }

    return (
        <div onClick={onclick}>
            UserMatch
            {displayName}
        </div>
    )
}
