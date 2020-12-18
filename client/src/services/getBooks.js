//const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${keyword}`;
import axios from 'axios';

export default async function getBooks(keyword, setInfo) {
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=` + keyword;

    axios.get(apiURL)
        .then(data => {
            setInfo(data)
        })
    // fetch(apiURL)
    //     .then(res => res.json())
    //     .then(response => {
    //         console.log(response)
    //         if (response !== undefined) {
    //             return response
    //         }
    //     })
} 