import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

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
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log(currentUser);
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
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
