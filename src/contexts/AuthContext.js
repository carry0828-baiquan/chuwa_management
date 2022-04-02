import React, { useState, useEffect, useContext, createContext } from "react";

import {auth} from "../firebase";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);


  function signup(email, password) {
    console.log(email, password)
    return auth.createUserWithEmailAndPassword(email, password)
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
    // login,
    signup,
    // logout,
    // resetPassword,
    // updateEmail,
    // updatePassword
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}
