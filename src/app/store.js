import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { initialMoviesState } from "../features/movies/moviesSlice";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['watchlist', 'watched']
}

function loadFromLocalStorage() {
    const serializedState = localStorage.getItem('persist:root');
    if (serializedState) {
        try {
            const parsedState = JSON.parse(serializedState);
            const watchlist = JSON.parse(parsedState['watchlist']);
            const watched = JSON.parse(parsedState['watched']);

            return {
                movies: {
                    ...initialMoviesState,
                    watchlist: watchlist,
                    watched: watched
                },
            }
        } catch (err) {
            console.error('Error loadin state from localStorage:', err);
        }
    }

    return {
        movies: initialMoviesState
    };
}

const persistedMoviesReducer = persistReducer(persistConfig, moviesReducer)


export const store = configureStore({
    reducer: {
        movies: persistedMoviesReducer
    },
    preloadedState: loadFromLocalStorage(),
    middleware: [thunk]
})

export const persistor = persistStore(store)