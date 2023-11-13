import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebse.config";
export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut usr
    const logOtuUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update profile
    const updateProfilePicture = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // manage user
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        })
        return () => {
            return unsubsCribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOtuUser,
        googleLogin,
        updateProfilePicture
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;