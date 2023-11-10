import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    const navItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li className="ml-2"><NavLink to="/contact">Contact Us</NavLink></li>
        <li className="ml-2"><NavLink to="/dashbord">Dashboard</NavLink></li>
        <li className="ml-2"><NavLink to="/menu">Our Menu</NavLink></li>
        <li className="ml-2"><NavLink to="/shope">Our Shope</NavLink></li>
    </>
    return (
        <>
            <div className="navbar fixed top-0 z-10 bg-base-200 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to="/">
                        <h2>BISTRO BOSS</h2>
                        <h4>RESTURENT</h4>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost">Login</button>
                </div>
            </div>
        </>
    );
};

export default NavBar;