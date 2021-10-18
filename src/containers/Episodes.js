import { useState } from "react";
import { useEffect } from "react";
import { Grid, Chip } from '@mui/material';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes } from '../store/EpisodeSlice';
import EpisodeItem from "../components/EpisodeItem";
import AppPagination from '../components/AppPagination';

const EpisodesPage = () => {
    const dispatch = useDispatch();
    const { episodes: { episodesList } } = useSelector((state) => state);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getEpisodes(page));
    }, [page]);

    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    {episodesList?.results.map(({ name, episode }, index) => (
                        <Grid key={`${name}-${index}`} item xs={3}>
                            <EpisodeItem
                                name={name}
                                episode={<Chip size="small" color="success" label={episode} />}
                            />
                        </Grid>
                    ))}
                </Grid>
                <AppPagination
                    setPage={setPage}
                    page={page}
                    totalPages={episodesList?.info?.pages}
                />
            </Container>
        </>
    )
}

export default EpisodesPage;
