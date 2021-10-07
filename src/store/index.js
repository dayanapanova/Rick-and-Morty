import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './CharactersSlice'

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
    },
})
