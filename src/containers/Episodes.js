import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes } from '../store/EpisodeSlice';
import { Pagination, EpisodeItem } from '../components';

const EpisodesPage = () => {
    const dispatch = useDispatch();
    const { episodes: { episodesList } } = useSelector((state) => state);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getEpisodes(page));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <Container>
            <Grid container spacing={2}>
                {episodesList?.results.map(({ name, episode, air_date }, index) => (
                    <Grid key={`${name}-${index}`} item xs={12} sm={6} md={3}>
                        <EpisodeItem
                            name={name}
                            episode={episode}
                            air_date={air_date}
                        />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                setPage={setPage}
                page={page}
                totalPages={episodesList?.info?.pages}
            />
        </Container>
    )
}

export default EpisodesPage;
