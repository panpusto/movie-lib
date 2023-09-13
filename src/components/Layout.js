import MainNavigation from "./MainNavigation/MainNavigation";

function Layout({children}) {
    return (
        <>
            <MainNavigation />
            <main>{children}</main>
        </>
    )
}

export default Layout;
