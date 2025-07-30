import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({ 
    name: 'movie',
    initialState: { 
        nowPlayingmovies : null,
        trailerKey: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {   
            state.nowPlayingmovies = action.payload;
        },
        addTrailerKey: (state, action) => {
            state.trailerKey = action.payload; 
        }        
    }
})

export const { addNowPlayingMovies, addTrailerKey } = movieSlice.actions;
export default movieSlice.reducer;