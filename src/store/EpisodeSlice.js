import { createSlice } from "@reduxjs/toolkit";
import httpClient from '../api/httpClient';

const initialState = {
    episodesList: {
        results: [],
    },
}

export const episodeSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {
        getEpisodesSuccess: (state, { payload }) => {
            state.episodesList = payload?.data;
        }
    },
})

export const { getEpisodesSuccess } = episodeSlice.actions;

export const getEpisodes = (page) => async (dispatch) => {
    httpClient.get(`/episode/?page=${page}`).then(
        (response) => dispatch(getEpisodesSuccess(response)),
    )
}

export default episodeSlice.reducer;
