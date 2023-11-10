import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;