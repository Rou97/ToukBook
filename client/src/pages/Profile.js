import React from 'react'
import { useLocation } from "react-router-dom"

export default function Profile() {
    const location = useLocation();
    const { displayName, email } = location.state;

    return (
        <div>
            Profile
            {displayName}
            {email}
        </div>
    )
}
