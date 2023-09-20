import classes from "./MovieCard.module.css";
import { Link } from "react-router-dom";

function Movie({ movie }) {
    return (
        <div className={classes.movieCard}>
            <Link to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title}/>
            </Link>
            <div className={classes.movieInfo}>
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
            </div>
        </div>
    )
}

export default Movie;