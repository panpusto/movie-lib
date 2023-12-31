import { useRef, useState } from "react";
import SearchForm from "./SearchForm";
import NavLinks from "./NavigationLinks";
import Logo from "./Logo";
import classes from "./MainNavigation.module.css";


function MainNavigation() {
    const [searchActive, setSearchActive] = useState(false);
    const inputRef = useRef(null);
  
    function closeSearchBar() {
        if (searchActive && !inputRef.current.value) {
            setSearchActive(false)
        }
    }

    return (
        <header className={classes.mainNav}>
                <nav onClick={closeSearchBar}>
                    <Logo />
                    <NavLinks />
                    <SearchForm
                        searchActive={searchActive}
                        inputRef={inputRef}
                        setSearchActive={setSearchActive} />
                </nav>
        </header>
    )
}

export default MainNavigation;
