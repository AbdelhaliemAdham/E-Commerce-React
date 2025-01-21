import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  } else {
    console.log("User not authenticated, redirecting to login");
    return <Navigate to={"/register"} />;
  }
}

export default ProtectedRoute;
