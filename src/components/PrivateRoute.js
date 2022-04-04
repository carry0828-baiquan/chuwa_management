import React from "react";
import { Link } from "react-router-dom";
import { auth } from "firebase";
function RequireAuth({ children }) {
  if (!auth().currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Link to={"/login"} />;
  }
  return children;
}

export default RequireAuth;
