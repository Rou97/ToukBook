import axios from 'axios';

export default async function changeMoodState(bookID, userID, setMood, mood) {

    const data = {
        userID,
        bookID,
        mood
    }


    axios.post("http://localhost:5000/library/changemoodstate", data)
        .then(res => {
            console.log(res.data)
            setMood(res.data)
        })
} 