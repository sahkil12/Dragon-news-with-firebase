import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signoutUser = ()=>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log(currentUser);
      setUser(currentUser)
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
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
