import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
console.log(user);
  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signoutUser = ()=>{
    return signOut(auth)
  }
  const updateUser = (updateData)=>{
    return updateProfile(auth.currentUser, updateData)
  }
  const googleLogin =()=>{
   return signInWithPopup(auth, googleProvider)
  }
  const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider)
  }
  const forgetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unSubscribe()
      setUser(null)
    }
  },[])

  const userInfo = {
    registerUser,
    loginUser,
    user,
    signoutUser,
    loading,
   updateUser,
   setUser,
   googleLogin,
   githubLogin,
   forgetPassword,
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
