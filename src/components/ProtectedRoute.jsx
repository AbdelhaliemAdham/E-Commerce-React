import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    console.log("User not authenticated, redirecting to login");
    return <Navigate to={"/register"} />;
  }
  return children;
}

export default ProtectedRoute;
