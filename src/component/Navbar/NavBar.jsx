import { Link } from 'react-router-dom';
import cartimage from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';
import userImage from '../../assets/icon/user.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const NavBar = () => {
    const { user, logOtuUser } = useContext(AuthContext);
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li className="ml-2"><Link to="/contact">Contact Us</Link></li>
        <li className="ml-2"><Link to="/dashbord">Dashboard</Link></li>
        <li className="ml-2"><Link to="/menu">Our Menu</Link></li>
        <li className="ml-2"><Link to="/shope">Our Shope</Link></li>
    </>
    const handleLogOut = () => {
        logOtuUser()
        .then()
        .catch()
    }
    return (
        <>
            <div className="navbar fixed top-0 z-10 bg-black bg-opacity-30 text-white">
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
                        <h2 className="font-bold">BISTRO BOSS</h2>
                        <h4 className="font-bold">RESTURENT</h4>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-[60px] mr-5" src={cartimage} alt="" />
                    {
                        user ? <button onClick={handleLogOut} className="bg-[#ff3438] text-white px-7 py-2 rounded-lg font-bold">LogOut</button>
                            :
                            <Link to="/login">
                                <button className="bg-[#ff3438] text-white px-7 py-2 rounded-lg font-bold">Login</button>
                            </Link>

                    }
                    <img className="w-[60px] rounded-full ml-5" src={userImage} alt="" />
                </div>
            </div>
        </>
    );
};

export default NavBar;