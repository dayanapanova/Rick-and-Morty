import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './CharacterSlice';
import episodesReducer from './EpisodeSlice';

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        episodes: episodesReducer
    },
})
