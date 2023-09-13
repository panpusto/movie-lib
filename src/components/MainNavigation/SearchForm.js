import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearSearchedMovies, searchMoviesByTitle }
    from "../../features/movies/moviesSlice";

function SearchForm({ searchActive, inputRef, setSearchActive }) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchActive && inputRef.current) {
            inputRef.current.style.display = 'none';
        }
    }, [searchActive, inputRef]);

    function openSearchBar() {
        setSearchActive(true);
        if (inputRef.current) {
            inputRef.current.style.display = 'inline-block';
            inputRef.current.focus();
        }
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        if (inputRef.current.value) {
            dispatch(clearSearchedMovies());
            dispatch(searchMoviesByTitle(inputRef.current.value));
        }
    }

    return (
        <form onSubmit={handleSearchSubmit}>
            <div className={`search-icon ${searchActive ? 'active' : ''}`}>
                <i className="fas fa-search" onClick={openSearchBar}/>
                <input
                    ref={inputRef}
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    style={{ display: searchActive ? 'inline-block' : 'none' }}
                />
            </div>
        </form>
    )
}

export default SearchForm;