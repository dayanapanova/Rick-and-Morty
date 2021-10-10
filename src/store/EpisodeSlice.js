import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const getEpisodes = () => async (dispatch) => {
    axios.get('https://rickandmortyapi.com/api/episode').then(
        (response) => dispatch(getEpisodesSuccess(response)),
    )
}

export default episodeSlice.reducer;
