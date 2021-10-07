import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    charactersList: {
        results: [],
    },
}

export const counterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        getCharactersSuccess: (state, { payload }) => {
            state.charactersList = payload?.data;
        },
    },
})

export const { getCharactersSuccess } = counterSlice.actions

export const getCharacters = () => async (dispatch) => {
    axios.get('https://rickandmortyapi.com/api/character').then(
        (response) => dispatch(getCharactersSuccess(response)),
    )
};

export default counterSlice.reducer
