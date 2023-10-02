import { useState } from "react";
import Spinner from "../../components/Spinner";
import MovieCard from "./MovieCard";
import { moviesFound, moviesWatched, moviesWatchlist } from "./moviesSlice";
import { useSelector } from "react-redux";
import classes from "./MoviesList.module.css";
import StartPage from "../../components/StartPage";
import MovieDetails from "./MovieDetails";

function MoviesList({ category }) {
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const status = useSelector(state => state.movies.status);
    const error = useSelector(state => state.movies.error);
    const searched = useSelector(moviesFound);
    const watchlist = useSelector(moviesWatchlist);
    const watched = useSelector(moviesWatched);

    function openModalHandler(movie) {
        setSelectedMovieId(movie);
        setIsModalOpen(true);
    }

    function closeModalHandler() {
        setSelectedMovieId(null);
        setIsModalOpen(false);
    }

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
    } else if (status === 'failed' && category === 'searched') {
        content = <div className={classes.error}>{error}</div>
    } else if (category === 'searched' && searched.length === 0) {
        content = <StartPage />
    } else if ((status === 'succeeded') || (watched.length > 0 || watchlist.length > 0)) {
        content = (
            <div className={classes.moviesList}>
                {movies.map(movie => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        onOpenDetails={openModalHandler}
                    />
                )
                )}
            </div>
        )
    }
    return (
        <main>
            {content}
            {isModalOpen && (
                <MovieDetails
                    movieId={selectedMovieId.imdbID}
                    onClose={closeModalHandler} />
            )}
        </main>
    )
}

export default MoviesList;