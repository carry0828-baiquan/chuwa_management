// import React, { useContext, useEffect } from "react";
// import { auth } from "../firebase";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }
// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();
//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password)
//   }
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//         setCurrentUser(user)
//     })

//     return () => {
//       second
//     }
//   }, [third])

//   const value = {
//     currentUser,
//   };

//   return <AuthContext.Provider>{children}</AuthContext.Provider>;
// }
