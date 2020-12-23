import React from 'react'
import { useLocation, useHistory } from "react-router-dom"

export default function Profile() {
    const location = useLocation();
    let history = useHistory();
    const { _id, displayName, email } = location.state;

    const onclick = () => {
        history.push({
            pathname: '/library',
            state: _id
        });
    }

    return (
        <div>
            Profile
            {displayName}
            {email}
            <button onClick={onclick}>{displayName}'s library</button>
        </div>
    )
}
