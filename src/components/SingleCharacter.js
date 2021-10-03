import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SingleCharacter = () => {
    const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character';
    const [userData, setUserData] = useState([]);;

    useEffect(() => {
        axios.get(rickAndMortyUrl)
            .then(response => {
                console.log(response.data);
                setUserData(response.data)
            })
    }, []);

    return (
        <div className="character-holder">
            <img className="character-holder-image" alt=''>
                {userData.image}
            </img>
            <div className="character-holder-info">
                <div>{userData.name}</div>
                <div>{userData.species}</div>
                <div>{userData.status}</div>
            </div>
        </div>
    )
}

export default SingleCharacter;