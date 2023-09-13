import NavigationLink from "./NavigationLink";

function NavigationLinks() {
    return (
        <>
            <ul className="nav-links">
                <NavigationLink link='/' linkName='Movies' />
                <NavigationLink link='/watchlist' linkName='Watchlist' />
                <NavigationLink link='/watched' linkName='Watched' />
            </ul>
        </>
    )
}

export default NavigationLinks;