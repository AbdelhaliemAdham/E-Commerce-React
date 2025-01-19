import React from "react";
import NavBar from "../components/NavBar";
import AboutComponent from "../components/AboutComponent";
import { Helmet } from "react-helmet";

export default function About() {
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
