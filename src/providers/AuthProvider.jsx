import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    console.log(user)
   
    // create user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user
    const signInUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() =>{
        onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user)
            }
        });
    },[])
    const userInfo ={
        user,
        loading,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;