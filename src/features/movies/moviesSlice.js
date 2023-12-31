import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialMoviesState = {
    searched: [],
    watchlist: [],
    watched: [],
    movieDetails: {},
    status: 'idle',
    error: null
}

const API_URL = 'http://www.omdbapi.com/?apikey=';
const API_KEY = 'b0a90448';
const DELAY_TIME = 1000;

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

export const fetchMovieById = createAsyncThunk(
    'movies/fetchMovieById',
    async (movieId) => {
        const response = await fetch(`${API_URL}${API_KEY}&i=${movieId}`);
        const data = await response.json();

        return data;
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialMoviesState,
    reducers: {
        clearSearchedMovies(state, action) {
            state.searched = []
        },
        addToWatched(state, action) {
            state.watched.push(action.payload);
        },
        removeFromWatched(state, action) {
            state.watched = state.watched.filter(
                movie => movie.imdbID !== action.payload.imdbID);
        },
        addToWatchlist(state, action) {
            state.watchlist.push(action.payload);
        },
        removeFromWatchlist(state, action) {
            state.watchlist = state.watchlist.filter(
                movie => movie.imdbID !== action.payload.imdbID);
        },
        clearMovieDetails(state, action) {
            state.movieDetails = {}
        }
    },
    extraReducers(builder) {
        builder
            .addCase(searchMoviesByTitle.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(searchMoviesByTitle.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.searched = state.searched.concat(action.payload)
            })
            .addCase(searchMoviesByTitle.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.movieDetails = action.payload;
            })
    }
})

export const {
    clearSearchedMovies,
    addToWatched,
    removeFromWatched,
    addToWatchlist,
    removeFromWatchlist,
    clearMovieDetails} = moviesSlice.actions;

export default moviesSlice.reducer;

export const moviesFound = state => state.movies.searched;
export const moviesWatched = state => state.movies.watched;
export const moviesWatchlist = state => state.movies.watchlist;
export const singleMovieDetails = state => state.movies.movieDetails;
