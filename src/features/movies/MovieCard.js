import classes from "./MovieCard.module.css";

function Movie({ movie }) {
    return (
        <div className={classes.movieCard}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
        </div>
    )
}

export default Movie;