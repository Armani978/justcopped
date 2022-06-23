 import {
     createContext , useState, useContext, useEffect } from 'react';
import {} from "firebase/auth"
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    
    
} from "firebase/auth"
import { auth } from "../firebase"

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState('');
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
             unsubscribe();
        }
        
        
    }, [])
    
    return <AuthContext.Provider value={{user, signUp, login, logout}}>{children}</AuthContext.Provider>;
}
export function useAuthContext() {
    return useContext(AuthContext);
}

