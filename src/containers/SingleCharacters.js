import React from 'react';
import { useEffect } from "react";
import { Grid, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCharacters } from '../store/CharacterSlice';
import CharacterInfo from '../components/CharacterInfo';

const SingleCharacters = () => {
    const dispatch = useDispatch();
    const { characters: { singleCharacter } } = useSelector((state) => state);
    useEffect(() => {
        dispatch(getSingleCharacters());
    }, []);

    console.log('singleCharacter', singleCharacter?.data)
    return (
        <>
            <Grid container spacing={2}>
                {singleCharacter?.data.map(({ name, status, species }, index) => (
                    <Grid key={`${name}-${index}`} item xs={3}>
                        <CharacterInfo
                            species={species}
                            name={name}
                            status={<Chip color='success' size='small' label={status}
                            />}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default SingleCharacters;