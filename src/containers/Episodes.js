import React from "react";
import { useEffect } from "react";
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes } from '../store/EpisodeSlice';
import EpisodeItem from "../components/EpisodeItem";

const EpisodesPage = () => {
    const dispatch = useDispatch();
    const { episodes: { episodesList } } = useSelector((state) => state);
    useEffect(() => {
        dispatch(getEpisodes());
    }, []);

    console.log('episodesList', episodesList?.results);
    return (
        <Container>
            <Grid container spacing={2}>
                {episodesList?.results.map(({ name, air_date, episode }, index) => (
                    <Grid key={`${name}-${index}`} item xs={3}>
                        <EpisodeItem
                            name={name}
                            air_date={air_date}
                            episode={episode}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default EpisodesPage;
