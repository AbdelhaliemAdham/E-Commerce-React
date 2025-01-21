import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import AboutComponent from "../components/AboutComponent";
import { Helmet } from "react-helmet";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

export default function About() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <NavBar />
      <AboutComponent />
    </>
  );
}
