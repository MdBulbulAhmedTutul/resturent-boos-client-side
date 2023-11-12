import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

const Root = () => {
    const location = useLocation();
    const noHeaferFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaferFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaferFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;