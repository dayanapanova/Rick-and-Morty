import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    charactersList: {
        results: [],
    },
    singleCharacter: {}
}

export const counterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        getCharactersSuccess: (state, { payload }) => {
            state.charactersList = payload?.data;
        },
        getSingleCharactersSuccess: (state, { payload }) => {
            state.singleCharacter = payload?.data;
        }
    },
})

export const { getCharactersSuccess } = counterSlice.actions

export const getCharacters = (page) => async (dispatch) => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
        (response) => dispatch(getCharactersSuccess(response)),
    )
};



export default counterSlice.reducer
