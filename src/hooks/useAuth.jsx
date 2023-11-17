import { useContext } from "react";
import { AuthContext } from "../component/providers/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;