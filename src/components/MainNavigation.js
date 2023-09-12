import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchMovieByTitle }
    from "../features/movies/moviesSlice";
const { NavLink } = require("react-router-dom");


function MainNavigation() {
    const [searchActive, setSearchActive] = useState(false);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchActive && inputRef.current) {
            inputRef.current.style.display = 'none';
        }
    }, [searchActive]);

    function openSearchBar() {
        setSearchActive(true);
        if (inputRef.current) {
            inputRef.current.style.display = 'inline-block';
            inputRef.current.focus();
        }
    }

    function closeSearchBar() {
        if (searchActive && !inputRef.current.value) {
            setSearchActive(false)
        }
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        if (inputRef.current.value) {
          dispatch(searchMovieByTitle(inputRef.current.value));
        }
    }

    return (
        <header className="navbar">
                <nav className="container" onClick={closeSearchBar}>
                    <div className="logo">
                        <img src="logo.png" alt="Movie Library" />
                    </div>
                    <div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/">
                                    Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/watchlist">
                                    Watchlist
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/watched">
                                    Watched
                                </NavLink>
                            </li>
                        </ul>
                    </div>
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
                </nav>
        </header>
    )
}

export default MainNavigation;
