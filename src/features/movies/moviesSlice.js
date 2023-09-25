import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchedMovies: [],
    status: 'idle',
    error: null
}

const API_URL = 'http://www.omdbapi.com/?apikey=';
const API_KEY = 'b0a90448';
const DELAY_TIME = 2000;

export const searchMoviesByTitle = createAsyncThunk(
    'movies/searchMoviesByTitle',
    async (query, { rejectWithValue }) => {
        await new Promise((resolve) => setTimeout(resolve, `${DELAY_TIME}`));
        const response = await fetch(`${API_URL}${API_KEY}&s=${query}`);
        const data = await response.json();

        if (data.Response === "False") {
            return rejectWithValue(data.Error);
        }
        
        return data.Search || [];
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        clearSearchedMovies(state, action) {
            state.searchedMovies = []
        }
    },
    extraReducers(builder) {
        builder
            .addCase(searchMoviesByTitle.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(searchMoviesByTitle.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.searchedMovies = state.searchedMovies.concat(action.payload)
            })
            .addCase(searchMoviesByTitle.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { clearSearchedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

export const moviesFound = state => state.movies.searchedMovies;
