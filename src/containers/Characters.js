import React from "react";
import { useEffect } from "react";
import { Grid, Chip } from '@mui/material';
import Container from '@mui/material/Container';
import CharacterItem from "../components/CharacterItem";
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../store/CharacterSlice';
import AppPagination from '../components/AppPagination';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const CharactersPage = () => {
    const dispatch = useDispatch();
    const { characters: { charactersList } } = useSelector((state) => state);
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(getCharacters(page));
    }, [page]);

    console.log('charactersList', charactersList?.results);

    return (
        <>
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
            <AppPagination setPage={setPage} page={page} />
        </>
    )
}


export default CharactersPage;
