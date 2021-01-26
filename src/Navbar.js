import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/" className="navbar-brand"><h1>The Dojo Blog</h1></Link>
            <div className="links">
                <Link className="pink-hover" to="/create">New Blog</Link>
                <Link className="pink-hover" to="/">All Blogs</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;