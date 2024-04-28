import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut,  updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const FBProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
   
   
    // create user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user
    const signInUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // FBsignIn 
    const FBSignIn = (email, password) =>{
        setLoading(true);
        return signInWithPopup(auth, FBProvider)
    }

    // signOut
    const logOut = () =>{
        // setLoading(true);
        setUser(null)
        return signOut(auth);
    }

    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    };
    

      // update profile 
      const updateUserProfile = (obj) => {
        setLoading(true)
        return updateProfile(auth.currentUser, obj)

    };
     console.log(updateProfile)

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
        signInUser,
        googleLogin,
        updateUserProfile,
        logOut,
        FBSignIn
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;