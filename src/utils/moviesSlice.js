import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingMovies: null,

        airingTodayTVShows: null,
        onTheAirTVShows: null,
        popularTVShows: null,
        topRatedTVShows: null,

        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addAiringTodayTVShows: (state, action) => {
            state.airingTodayTVShows = action.payload;
        },
        addOnTheAirTVShows: (state, action) => {
            state.onTheAirTVShows = action.payload;
        },
        addPopularTVShows: (state, action) => {
            state.popularTVShows = action.payload;
        },
        addTopRatedTVShows: (state, action) => {
            state.topRatedTVShows = action.payload;
        },
    }   
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrendingMovies, addAiringTodayTVShows, addOnTheAirTVShows, addPopularTVShows, addTopRatedTVShows } = moviesSlice.actions;
export default moviesSlice.reducer;