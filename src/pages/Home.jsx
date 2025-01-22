import React, { useContext } from "react";
import HomeView from "../components/HomeView";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { AuthContext } from "../store/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <NavBar />
      <Banner />
    </>
  );
}
