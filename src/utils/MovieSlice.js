import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingmovies: [],
    topRatedMovies: [],
    popularMovies: [],
    upcomingMovies: [],
    trailerKey: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = [
        ...state.nowPlayingmovies,
        ...action.payload.filter(
          (newMovie) =>
            !state.nowPlayingmovies.some(
              (existing) => existing.id === newMovie.id
            )
        ),
      ];
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = [
        ...state.topRatedMovies,
        ...action.payload.filter(
          (newMovie) =>
            !state.topRatedMovies.some((existing) => existing.id === newMovie.id)
        ),
      ];
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = [
        ...state.popularMovies,
        ...action.payload.filter(
          (newMovie) =>
            !state.popularMovies.some((existing) => existing.id === newMovie.id)
        ),
      ];
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = [
        ...state.upcomingMovies,
        ...action.payload.filter(
          (newMovie) =>
            !state.upcomingMovies.some(
              (existing) => existing.id === newMovie.id
            )
        ),
      ];
    },
    addTrailerKey: (state, action) => {
      state.trailerKey = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTrailerKey,
} = movieSlice.actions;
export default movieSlice.reducer;
