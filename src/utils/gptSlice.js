import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        loading: false
    },
    reducers: {
        toggleShowGPTSearch: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
            state.loading = false; 
        },
        removeMovieResults: (state) => {
            state.movieNames = null;
            state.movieResults = null;
            state.loading = true;
        }
    }
})

export const { toggleShowGPTSearch, addMovieResults, removeMovieResults } = gptSlice.actions;
export default gptSlice.reducer;