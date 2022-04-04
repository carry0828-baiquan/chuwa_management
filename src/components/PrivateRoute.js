import React from "react";
import { Link } from "react-router-dom";
import { auth } from "firebase";
function RequireAuth({ children }) {
  if (!auth().currentUser) {
    return <Link to={"/login"} />;
  }
  return children;
}

export default RequireAuth;
