import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearSearchedMovies, searchMoviesByTitle }
    from "../../features/movies/moviesSlice";
import classes from "./SearchForm.module.css";
import { useNavigate } from "react-router-dom";

function SearchForm({ searchActive, inputRef, setSearchActive }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            navigate('/'); 
        }
    }

    return (
        <form onSubmit={handleSearchSubmit} className={classes.searchForm}>
            <div className={
                searchActive
                    ? classes.active
                    : classes.searchForm
            }>
                <i className="fas fa-search" onClick={openSearchBar}/>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className={
                        searchActive
                            ? classes.active
                            : classes.SearchForm
                    }
                />
            </div>
        </form>
    )
}

export default SearchForm;