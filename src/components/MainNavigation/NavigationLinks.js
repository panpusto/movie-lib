import NavigationLink from "./NavigationLink";
import classes from "./NavigationLinks.module.css";

function NavigationLinks() {
    return (
        <>
            <ul className={classes.navLinks}>
                <NavigationLink link='/' linkName='Movies' />
                <NavigationLink link='/watchlist' linkName='Watchlist' />
                <NavigationLink link='/watched' linkName='Watched' />
            </ul>
        </>
    )
}

export default NavigationLinks;