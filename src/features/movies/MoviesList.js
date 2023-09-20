import Spinner from "../../components/Spinner";
import MovieCard from "./MovieCard";
import { moviesFound } from "./moviesSlice";
import { useSelector } from "react-redux";
import classes from "./MoviesList.module.css";
import StartPage from "../../components/StartPage";

function MoviesList() {
    const movies = useSelector(moviesFound);
    const status = useSelector(state => state.movies.status);
    const error = useSelector(state => state.movies.error);
    
    let content;

    if (status === 'idle') {
        content = <StartPage />
    } else if (status === 'loading') {
        content = <Spinner />
    } else if (status === 'succeeded') {
        content = (
            <div className={classes.moviesList}>
                {movies.map(movie => (
                    <MovieCard key={movie.imdbID}  movie={movie} />
                    )
                )}
            </div>
            )
    } else if (status === 'failed') {
        content = <div className={classes.error}>{error}</div>
    }

    return (
        <main>
            {content}
        </main>
    )
}

export default MoviesList;