import axios from 'axios';

export default async function addBook(id, title, thumbnail, userData) {

    const data = {
        userData,
        id,
        title,
        thumbnail
    }

    axios.post("http://localhost:5000/search/addbook", data)
        .then(data => {
            //setInfo(data)
        })
} 