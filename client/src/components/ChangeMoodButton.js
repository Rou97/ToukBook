import React, { useEffect, useContext, useState } from 'react';
import UserContext from "../context/UserContext";
import moodState from "../services/moodState";
import changeMoodState from "../services/changeMoodState";

export default function ChangeMoodButton(props) {
    const { userData } = useContext(UserContext);
    const [mood, setMood] = useState(true);
    const [button, setButton] = useState(true);
    const { id } = props;

    useEffect(() => {
        console.log('a')
        moodState(id, userData.user.id, setMood)
        if (mood) {
            setButton('I have it')
        } else {
            setButton('I want it')
        }
    }, [mood])

    const onclick = () => {
        console.log('click')
        changeMoodState(id, userData.user.id, setMood, mood)
    }

    return (
        <div onClick={onclick}>
            cambiar mood
            {button}
        </div>
    )
}
