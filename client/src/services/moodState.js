import axios from 'axios';

export default async function moodState(bookID, userID, setMood) {

    const data = {
        userID,
        bookID,
    }

    axios.post("http://localhost:5000/library/moodstate", data)
        .then(res => {
            setMood(res.data.bookMood)
        })
} 