import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import SingleCharacter from "./SingleCharacter";
const Characters = () => {
    const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character';
    const [characterData, setCharacterData] = useState([]);;

    useEffect(() => {
        axios.get(rickAndMortyUrl)
            .then(response => {
                console.log(response.data.results);
                setCharacterData(response.data.results)
            })
    }, []);

    return (
        <div>
            {characterData.map(({ image, name, status }, index) => (
                <div key={`${name}-${index}`}>
                    <SingleCharacter
                        image={image}
                        name={name}
                        status={status}
                    />
                </div>
            ))}
        </div>
    )
}


export default Characters;