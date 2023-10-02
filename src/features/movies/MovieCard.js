import { useDispatch, useSelector } from "react-redux";
import classes from "./MovieCard.module.css";
import {
    addToWatched,
    addToWatchlist,
    removeFromWatched,
    removeFromWatchlist,
    moviesWatchlist,
    moviesWatched
} from "./moviesSlice";


function MovieCard({ movie, onOpenDetails }) {
    const dispatch = useDispatch();

    const watchlist = useSelector(moviesWatchlist);
    const watched = useSelector(moviesWatched);

    const isWatchlisted = watchlist.some(
        mov => mov.imdbID === movie.imdbID);
    const isWatched = watched.some(
        mov => mov.imdbID === movie.imdbID);
    
    function addToWatchlistHandler() {
        dispatch(addToWatchlist(movie));
    }

    function removeFromWatchlistHandler() {
        dispatch(removeFromWatchlist(movie));
    }

    function addToWatchedHandler() {
        dispatch(addToWatched(movie));
    }

    function removeFromWatchedHandler() {
        dispatch(removeFromWatched(movie));
    }


    return (
        <div className={classes.movieCard}>
            <div className={classes.posterContainer}>
                <img src={movie.Poster} alt={movie.Title} />
                <div className={classes.optionsIcons}>
                    <div className={isWatchlisted
                        ? classes.active
                        : classes.optionIcon}>
                        <img
                            src='bookmark.png'
                            alt='bookmark-icon'
                            onClick={isWatchlisted
                                ? removeFromWatchlistHandler
                                : addToWatchlistHandler}
                        />
                    </div>
                    <div className={isWatched
                        ? classes.active
                        : classes.optionIcon}>
                    <img
                        src='view.png'
                        alt='view-icon'
                        onClick={isWatched
                            ? removeFromWatchedHandler
                            : addToWatchedHandler} 
                        />
                    </div>
                </div>
            </div>
            <div className={classes.movieInfo}>
                <h2
                    className={classes.linkText}
                    onClick={() => onOpenDetails(movie)}
                >
                    {movie.Title}
                </h2>
                <p>{movie.Year}</p>
            </div>
        </div>
    )
}

export default MovieCard;
