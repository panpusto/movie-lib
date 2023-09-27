import Spinner from "../../components/Spinner";
import MovieCard from "./MovieCard";
import { moviesFound, moviesWatched, moviesWatchlist } from "./moviesSlice";
import { useSelector } from "react-redux";
import classes from "./MoviesList.module.css";
import StartPage from "../../components/StartPage";

function MoviesList({ category }) {
    const status = useSelector(state => state.movies.status);
    const error = useSelector(state => state.movies.error);
    const searched = useSelector(moviesFound);
    const watchlist = useSelector(moviesWatchlist);
    const watched = useSelector(moviesWatched);

    let movies;

    if (category === 'searched') {
        movies = searched
    } else if (category === 'watchlist') {
        movies = watchlist || []
    } else if (category === 'watched') {
        movies = watched || []
    }

    let content;

    if (status === 'loading') {
        content = <Spinner />
    } else if (status === 'failed') {
        content = <div className={classes.error}>{error}</div>
    } else if (category === 'searched' && searched.length === 0) {
        content = <StartPage />
    } else if ((status === 'succeeded') || (watched.length > 0 || watchlist.length > 0)) {
        content = (
            <div className={classes.moviesList}>
                {movies.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                )
                )}
            </div>
        )
    }
    return (
        <main>
            {content}
        </main>
    )
}

export default MoviesList;