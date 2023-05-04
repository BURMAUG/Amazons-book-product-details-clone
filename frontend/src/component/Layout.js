import {Link, Outlet} from "react-router-dom";

const Layout = () =>{
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/add">Add new Book</Link>
            </nav>
            <Outlet/>
        </>
    );
}
export default Layout;