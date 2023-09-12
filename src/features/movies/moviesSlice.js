import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchMovie: '',
    searchedMovies: [],
    status: 'idle',
    error: null
}

const API_URL = 'http://www.omdbapi.com/?apikey=';
const API_KEY = 'b0a90448';

export const searchMovieByTitle = createAsyncThunk(
    'movies/searchMovieByTitle',
    async (query) => {
        const response = await fetch(`${API_URL}${API_KEY}&s=${query}`);
        const data = await response.json();
        return data.Search;
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        movieSearched(state, action) {
            state.searchMovie = action.payload
        } 
    },
    extraReducers(builder) {
        builder
            .addCase(searchMovieByTitle.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(searchMovieByTitle.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.searchedMovies = state.searchedMovies.concat(action.payload)
            })
            .addCase(searchMovieByTitle.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { movieSearched } = moviesSlice.actions;
export default moviesSlice.reducer;

export const moviesFound = state => state.movies.searchedMovies;
