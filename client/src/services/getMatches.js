import axios from 'axios';

export default async function getMatches(id, setInfo) {
    //const { items } = props.info.data;
    const data = {
        id
    }
    axios.post("http://localhost:5000/match/getmatches", data)
        .then(res => {
            console.log(res)
            //setInfo(res.data)
        })
} 