import React from "react";
import { useEffect } from "react";
import { Grid, Chip } from '@mui/material';
import Container from '@mui/material/Container';
import CharacterItem from "../components/CharacterItem";
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../store/CharacterSlice';

const CharactersPage = () => {
    const dispatch = useDispatch();
    const { characters: { charactersList } } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getCharacters());
    }, []);

    console.log('charactersList', charactersList?.results);

    return (
        <Container>
            <Grid container spacing={2}>
                {charactersList?.results.map(({ image, name, status }, index) => (
                    <Grid key={`${name}-${index}`} item xs={3}>
                        <CharacterItem
                            image={image}
                            name={name}
                            status={<Chip color='success' size='small' label={status} />}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}


export default CharactersPage;
