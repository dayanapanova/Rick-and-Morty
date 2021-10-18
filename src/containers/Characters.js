import { useEffect } from "react";
import { Grid, Chip } from '@mui/material';
import Container from '@mui/material/Container';
import CharacterItem from "../components/CharacterItem";
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../store/CharacterSlice';
import AppPagination from '../components/AppPagination';
import { useState, } from 'react';
import { useHistory } from 'react-router-dom';

const CharactersPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { characters: { charactersList } } = useSelector((state) => state);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getCharacters(page));
    }, [page]);

    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    {charactersList?.results.map(({ id, image, name, status }, index) => (
                        <Grid key={`${name}-${index}`} item xs={3}>
                            <CharacterItem
                                onClick={() => history.push(`/characters/${id}`)}
                                image={image}
                                name={name}
                                status={<Chip color='success' size='small' label={status}
                                />}
                            />
                        </Grid>
                    ))}
                </Grid>
                <AppPagination
                    setPage={setPage}
                    page={page}
                    totalPages={charactersList?.info?.pages}
                />
            </Container>
        </>
    )
}


export default CharactersPage;
