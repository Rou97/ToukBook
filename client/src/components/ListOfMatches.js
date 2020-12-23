import React, { useEffect, useState, useContext } from 'react';
import UserContext from "../context/UserContext";
import getMatches from "../services/getMatches";
import MatchComponent from "../components/MatchComponent";

export default function ListOfMatches() {
    const { userData } = useContext(UserContext);
    const [info, setInfo] = useState();

    useEffect(() => {
        if (userData.user) {
            getMatches(userData.user.id, setInfo)
        }
    }, [userData.user])

    return (
        <div>s
        List of matches

            {info ?
                (
                    info.map((element) => {
                        return <MatchComponent key={element._id} data={element}></MatchComponent>
                    })
                ) :
                (<p>Loading...</p>)
            }
        </div >
    )
}
