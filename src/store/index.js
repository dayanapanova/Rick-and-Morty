import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './CharacterSlice';

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
    },
})
