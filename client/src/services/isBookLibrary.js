import axios from 'axios';

export default async function isBookLibrary(id, user, setButton) {
    const data = {
        id,
        user
    }

    axios.post("http://localhost:5000/search/isbooklibrary", data)
        .then(res => {
            if (res.data === null) {
                setButton('Add to library')
            } else {
                setButton('Remove from library')
            }
        })
} 