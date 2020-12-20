import axios from 'axios';

export default async function getLibrary(id, setInfo) {
    //const { items } = props.info.data;
    const data = {
        id
    }
    axios.post("http://localhost:5000/library/getlibrary", data)
        .then(res => {
            setInfo(res.data)
        })
} 