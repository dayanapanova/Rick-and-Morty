import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    value: [],
}

export const counterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        getAllCharacters: (state) => {
            state.value += 1
        },
    },
})

const getData = () => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            console.log(response.data.results)
        });
}

export const { getAllCharacters } = counterSlice.actions

export default counterSlice.reducer