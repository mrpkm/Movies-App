/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        genres: {}
    },
    reducers: {
        getApiConfiguraton: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;

        },
    },
})

export const {getApiConfiguraton, getGenres  } = homeSlice.actions

export default homeSlice.reducer