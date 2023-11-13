import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="text-center mt-[300px] text-[#ff3438]">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;