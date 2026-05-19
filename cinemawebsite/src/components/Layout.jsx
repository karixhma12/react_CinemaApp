import {Outlet, Link} from "react-router-dom"

function Layout(){
    return(
        <>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/genre/action"> Action </Link>
                <Link to="/genre/horror"> Horror </Link>
                <Link to="/genre/comedy"> Comedy </Link>
                <Link to="/genre/mystery"> Mystery </Link>
            </nav>

            <main>
                <Outlet/>
            </main>

            <footer>
                <p> CineScope 2024 </p>
            </footer>

        </>
    )
}

export default Layout;