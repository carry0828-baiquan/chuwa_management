import React, { useState, useEffect, useContext, createContext } from "react";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import firebase from "firebase";
import { auth } from "../firebase";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log(email, password);
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signin(email, password) {
    console.log("signin", email, password);

    return auth.signInWithEmailAndPassword(email, password);
  }

  function signOut() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signin,
    signup,
    signOut,

    resetPassword,
    // updateEmail,
    // updatePassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
