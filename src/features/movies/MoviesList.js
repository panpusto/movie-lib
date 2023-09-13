import Spinner from "../../components/Spinner";
import MovieCard from "./MovieCard";
import { moviesFound } from "./moviesSlice";
import { useSelector } from "react-redux";

function MoviesList() {
    const movies = useSelector(moviesFound);
    const status = useSelector(state => state.movies.status)
    const error = useSelector(state => state.movies.error);
    console.log(status);
    console.log(movies);
    let content;

    if (status === 'loading') {
        content = <Spinner />
    } else if (status === 'succeeded') {
        content = (
            <div className="movie-list">
                {movies.map(movie => (
                    <MovieCard key={movie.imdbID}  movie={movie} />
                    )
                )}
            </div>
            )
    } else if (status === 'failed') {
        content = <div className="error">{error}</div>
    }

    return (
        <main>
            {content}
        </main>
    )
}

export default MoviesList;