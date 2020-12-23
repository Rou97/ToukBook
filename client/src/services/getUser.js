import axios from 'axios';

export default async function getUser(id, setInfo) {
    //const { items } = props.info.data;
    const data = {
        id
    }
    axios.post("http://localhost:5000/match/getuser", data)
        .then(res => {
            setInfo(res.data)
        })
} 