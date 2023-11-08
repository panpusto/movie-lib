import { useEffect } from "react";
import classes from "./MovieDetails.module.css";
import {
    clearMovieDetails,
    fetchMovieById,
    singleMovieDetails
} from "./moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";

function MovieDetails({ movieId, onClose }) {
    const dispatch = useDispatch();
    const movie = useSelector(singleMovieDetails);

    useEffect(() => {
        dispatch(clearMovieDetails());
        dispatch(fetchMovieById(movieId));
    }, [dispatch, movieId])

    return (
        createPortal(
            <div className={classes.background} onClick={onClose}>
                <aside className={classes.movieDetailsWindow}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <p>{movie.Genre}</p>
                    <p>{movie.Plot}</p>
                </aside>
            </div>,
            document.getElementById('modal')
        )
    )
}

export default MovieDetails;
