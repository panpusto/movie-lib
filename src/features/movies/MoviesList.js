import { moviesFound } from "./moviesSlice";
import { useSelector } from "react-redux";

function MoviesList() {
    const movies = useSelector(moviesFound);
    console.log(movies)
    return (
        <main>
            <ul>
                {movies && movies.map(movie => (
                    <li key={movie.imdbID}>
                        {movie.Title} - {movie.Year}
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default MoviesList;